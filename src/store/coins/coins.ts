import ICoin from '@/interfaces/ICoin'
import IGetItem from '@/interfaces/IGetItem'
import IGiveItem from '@/interfaces/IGiveItem'
import { ActionContext } from 'vuex'
import { rootState } from '../index'
const coins: ICoin[] = [
  {
    id: 1,
    give: 'Bitcoin',
    isFiat: false,
    code: 'BTC',
    get: [
      {
        name: 'Monobank',
        course: 820959.1751,
        code: 'UAH',
        rezerv: 30000,
        min: 2500,
        max: 29000
      },
      {
        name: 'Oschadbank',
        course: 821000.1751,
        code: 'UAH',
        rezerv: 50000,
        min: 2500,
        max: 29000
      }
    ]
  },
  {
    id: 2,
    give: 'Monobank',
    isFiat: true,
    code: 'UAH',
    get: [
      {
        name: 'Bitcoin',
        course: 820959.1751,
        code: 'BTC',
        rezerv: 2.5,
        min: 2500,
        max: 29000
      },
      {
        name: 'Etherium',
        course: 12345.1751,
        code: 'ETH',
        rezerv: 50000,
        min: 2500,
        max: 29000
      },
      {
        name: 'Tron',
        course: 250.1751,
        code: 'TRON',
        rezerv: 1000,
        min: 2500,
        max: 29000
      }
    ]
  },
  {
    id: 3,
    give: 'Oschadbank',
    isFiat: true,
    code: 'UAH',
    get: [
      {
        name: 'Bitcoin',
        course: 820959.1751,
        code: 'BTC',
        rezerv: 2.5,
        min: 2500,
        max: 29000
      },
      {
        name: 'Etherium',
        course: 12345.1751,
        code: 'ETH',
        rezerv: 50000,
        min: 2500,
        max: 29000
      },
      {
        name: 'Tron',
        course: 250.1751,
        code: 'TRON',
        rezerv: 1000,
        min: 2500,
        max: 29000
      }
    ]
  },
  {
    id: 4,
    give: 'Tron',
    code: 'TRON',
    isFiat: false,
    get: [
      {
        name: 'Monobank',
        course: 250.1751,
        code: 'UAH',
        rezerv: 30000,
        min: 2500,
        max: 29000
      },
      {
        name: 'Oschadbank',
        code: 'UAH',
        course: 250.1751,
        rezerv: 50000,
        min: 2500,
        max: 29000
      }
    ]
  },
  {
    id: 5,
    give: 'Etherium',
    code: 'ETH',
    isFiat: false,
    get: [
      {
        name: 'Monobank',
        course: 12345.1751,
        code: 'UAH',
        rezerv: 30000,
        min: 2500,
        max: 29000
      },
      {
        name: 'Oschadbank',
        course: 12345.1751,
        code: 'UAH',
        rezerv: 50000,
        min: 2500,
        max: 29000
      }
    ]
  }
]

const imagesLinks = [
  {
    name: 'Bitcoin',
    link: 'https://express.money/wp-content/uploads/Bitcoin.png'
  },
  {
    name: 'Monobank',
    link: 'https://express.money/wp-content/uploads/Monobank.png'
  },
  { name: 'Tron', link: 'https://express.money/wp-content/uploads/tron.png' },
  {
    name: 'Etherium',
    link: 'https://express.money/wp-content/uploads/Ether.png'
  },
  {
    name: 'Oschadbank',
    link: 'https://express.money/wp-content/uploads/Oschadbank.png'
  }
]

const state = {
  coins,
  // ToDo: когда массив уже есть на момент инициализации стора - это сработает,
  //  если будешь получать его асинхронным запросом уже после инициализации будет ошибка
  pair: {
    give: coins[0].give,
    codeGive: coins[0].code,
    isFiat: coins[0].isFiat,
    get: coins[0].get[0].name,
    codeGet: coins[0].get[0].code,
    course: coins[0].get[0].course,
    rezerv: coins[0].get[0].rezerv,
    min: coins[0].get[0].min,
    max: coins[0].get[0].max
  },
  sellCoinValue: 0,
  buyCoinValue: 0
}

type State = typeof state
type RootState = typeof rootState

export default {
  namespaced: true,
  state,
  getters: {
    // ToDo: по названиям старайся придерживаться одного стиля, а то в одном месте есть префикс гет, в другом нет и т.д.
    //  Называть можно по разному, но чтобы названия были логичными и отражали суть
    listSellCoins (state: State) {
      return state.coins.map((coin: ICoin) => {
        const image = imagesLinks.find((e) => e.name === coin.give)
        return {
          id: coin.id,
          name: coin.give,
          imgUrl: image?.link ? image.link : ''
        }
      })
    },
    activeGiveCoin (state: State): string {
      return state.pair.give
    },
    activeGetCoin (state: State): string {
      return state.pair.get
    },
    getPair (state: State) {
      return state.pair
    },
    getIsFiat (state: State) {
      return state.pair.isFiat
    },
    getSellCoinValue (state: State) {
      return state.sellCoinValue
    },
    getBuyCoinValue (state: State) {
      return state.buyCoinValue
    },
    getSellImage (state: State) {
      const image = imagesLinks.find((e) => e.name === state.pair.give)
      return image?.link
    },
    getBuyImage (state: State) {
      const image = imagesLinks.find((e) => e.name === state.pair.get)
      return image?.link
    },
    listBuyCoins (state: State) {
      const giveCoin = state.coins.find((coin) => coin.give === state.pair.give)
      return giveCoin?.get.map((data) => {
        const image = imagesLinks.find((e) => e.name === data.name)
        return {
          ...data,
          imgUrl: image?.link ? image.link : ''
        }
      })
    },
  },
  mutations: {
    changeGiveCoin (state: State, id: number) {
      // ToDo: тут идеологически не правильно. Фильтр возвращает часть массива, как новый массив,
      //  а ты в обработчике соответствия результату поиска меняешь данные.
      //  Оно будет работать, но это плохой подход, код получается запутанным,
      //  потом тяжело будет модифицировать или искать ошибки

      const giveCoin = state.coins.find((item) => item.id === id) // поиск монеты и ее получение
      state.pair.give = giveCoin?.give || '' // Присвоение имени в паре
      const nameCoinsToConvert = giveCoin?.get.map((item) => item.name) // достаем все имена монет, на которые можем поменять
      const indexGetCoin = nameCoinsToConvert?.findIndex(
        (item) => item === state.pair.get
      )
      if (
        indexGetCoin !== -1 &&
        typeof indexGetCoin !== 'undefined' &&
        typeof giveCoin !== 'undefined'
      ) {
        // Ищем монету, если она уже была выбрана, то меняем только ее значения
        state.pair.course = giveCoin.get[indexGetCoin].course
        state.pair.isFiat = giveCoin.isFiat
        state.pair.codeGive = giveCoin.code
        state.pair.max = giveCoin.get[indexGetCoin].max
        state.pair.min = giveCoin.get[indexGetCoin].min
        state.pair.rezerv = giveCoin.get[indexGetCoin].rezerv
      } else if (typeof giveCoin !== 'undefined') {
        // если нет, то меняем и значения и имя монеты
        state.pair.get = giveCoin.get[0].name
        state.pair.codeGet = giveCoin.get[0].code
        state.pair.course = giveCoin.get[0].course
        state.pair.isFiat = giveCoin.isFiat
        state.pair.codeGive = giveCoin.code
        state.pair.max = giveCoin.get[0].max
        state.pair.min = giveCoin.get[0].min
        state.pair.rezerv = giveCoin.get[0].rezerv
      }
    },
    changeGetCoin (state: State, name: string) {
      state.pair.get = name
      const giveCoin = state.coins.find(
        (giveCoin) => giveCoin.give === state.pair.give
      )
      const getCoin = giveCoin?.get.find(
        (getCoin) => getCoin.name === state.pair.get
      )
      if (getCoin) {
        state.pair.get = getCoin.name
        state.pair.codeGet = getCoin.code
        state.pair.course = getCoin.course
        state.pair.max = getCoin.max
        state.pair.min = getCoin.min
        state.pair.rezerv = getCoin.rezerv
        // this.changeBuyCoinValue(state, state.sellCoinValue)
      }
    },
    changeSellCoinValue (state: State, value: number) {
      state.sellCoinValue = value
      state.buyCoinValue = state.pair.isFiat
        ? parseFloat((value / state.pair.course).toFixed(6))
        : parseFloat((value * state.pair.course).toFixed(2))
    },
    changeBuyCoinValue (state: State, value: number) {
      state.buyCoinValue = value
      state.sellCoinValue = state.pair.isFiat
        ? parseFloat((value * state.pair.course).toFixed(2))
        : parseFloat((value / state.pair.course).toFixed(6))
    }
  },
  actions: {
    changeBuyCoin (context: ActionContext<State, RootState>, name: string) {
      context.commit('changeGetCoin', name)
      context.commit('changeSellCoinValue', context.state.sellCoinValue)
    },
    changeSellCoin (context: ActionContext<State, RootState>, id: number) {
      context.commit('changeGiveCoin', id)
      context.commit('changeSellCoinValue', context.state.sellCoinValue)
    },
    invertPairCoins (context: ActionContext<State, RootState>) {
      const getCoin = context.state.pair.get
      const giveCoin = context.state.pair.give
      const give = context.state.coins.find(item => item.give === getCoin)
      context.commit('changeGiveCoin', give?.id)
      const get = give?.get.find(item => item.name === giveCoin)
      context.commit('changeGetCoin', get?.name)
      context.commit('changeBuyCoinValue', context.state.sellCoinValue)
    }
  }
}
// monobank - btc
// btc - monobank
// find btc - changeGivecoin(btc.id) - find monobank - changeGetcoin(monobank)
