import ICoin from '@/interfaces/ICoin'
import IGetItem from '@/interfaces/IGetItem'
import IGiveItem from '@/interfaces/IGiveItem'

const coins: ICoin[] = [
  {
    id: 1,
    give: 'Bitcoin',
    isFiat: false,
    get: [
      {
        name: 'Monobank',
        course: 820959.1751,
        rezerv: 30000,
        min: 2500,
        max: 29000
      },
      {
        name: 'Oschadbank',
        course: 821000.1751,
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
    get: [
      {
        name: 'Bitcoin',
        course: 820959.1751,
        rezerv: 2.5,
        min: 2500,
        max: 29000
      },
      {
        name: 'Etherium',
        course: 12345.1751,
        rezerv: 50000,
        min: 2500,
        max: 29000
      },
      {
        name: 'Tron',
        course: 250.1751,
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
    get: [
      {
        name: 'Bitcoin',
        course: 820959.1751,
        rezerv: 2.5,
        min: 2500,
        max: 29000
      },
      {
        name: 'Etherium',
        course: 12345.1751,
        rezerv: 50000,
        min: 2500,
        max: 29000
      },
      {
        name: 'Tron',
        course: 250.1751,
        rezerv: 1000,
        min: 2500,
        max: 29000
      }
    ]
  },
  {
    id: 4,
    give: 'Tron',
    isFiat: false,
    get: [
      {
        name: 'Monobank',
        course: 250.1751,
        rezerv: 30000,
        min: 2500,
        max: 29000
      },
      {
        name: 'Oschadbank',
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
    isFiat: false,
    get: [
      {
        name: 'Monobank',
        course: 12345.1751,
        rezerv: 30000,
        min: 2500,
        max: 29000
      },
      {
        name: 'Oschadbank',
        course: 12345.1751,
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
  pair: {
    give: coins[0].give,
    isFiat: coins[0].isFiat,
    get: coins[0].get[0].name,
    course: coins[0].get[0].course,
    rezerv: coins[0].get[0].rezerv,
    min: coins[0].get[0].min,
    max: coins[0].get[0].max
  }
}

type State = typeof state
export default {
  namespaced: true,
  state,
  getters: {
    listGiveCoins (state: State) {
      const list: IGiveItem[] = []
      state.coins.forEach((coin: ICoin) => {
        // выбираем из стора только айди и имя монеты
        let url = ''
        imagesLinks.find((e) => {
          // ищем изображание
          if (e.name === coin.give) {
            url = e.link
          }
        })
        list.push({
          id: coin.id,
          name: coin.give,
          imgUrl: url
        })
      })
      return list
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
    listGetCoins (state: State) {
      let result: IGetItem[] = []
      state.coins.forEach((coin) => {
        if (coin.give == state.pair.give) {
          result = coin.get.map((data) => {
            let imgUrl = ''
            imagesLinks.find((e) => {
              // ищем изображание
              if (e.name === data.name) {
                imgUrl = e.link
              }
            })
            return {
              ...data,
              imgUrl
            }
          })
        }
      })
      return result
    }
  },
  mutations: {
    changeGiveCoin (state: State, id: number) {
      state.coins.filter((coin, idx) => {
        if (coin.id === id) {
          // поиск монеты в стейте и изменения выбранной монеты в паре
          state.pair.give = coin.give
          const getCoinsNames: string[] = []
          coin.get.filter((getCoin) => {
            getCoinsNames.push(getCoin.name) // получение имен монет и проверка существуют ли они в паре,
          })
          if (getCoinsNames.includes(state.pair.get)) {
            coin.get.filter((getCoin) => {
              // если существует, проходимся по массиву и обновляем данные, т.к они могут отличаться
              if (getCoin.name === state.pair.get) {
                state.pair.course = getCoin.course
                state.pair.isFiat = coin.isFiat
                state.pair.max = getCoin.max
                state.pair.min = getCoin.min
                state.pair.rezerv = getCoin.rezerv
              }
            })
          } else {
            // если не существует, выбираем первую монету из доступных для обмена
            state.pair.get = coin.get[0].name
            state.pair.course = coin.get[0].course
            state.pair.isFiat = coin.isFiat
            state.pair.max = coin.get[0].max
            state.pair.min = coin.get[0].min
            state.pair.rezerv = coin.get[0].rezerv
          }
        }
      })
    },
    changeGetCoin (state: State, name: string) {
      state.pair.get = name
      state.coins.forEach((giveCoin) => {
        // поиск в стейте монеты give
        if (giveCoin.give === state.pair.give) {
          // если находим, то ищем монету на которую меняем
          giveCoin.get.forEach((getCoin) => {
            if (getCoin.name === name) {
              // если находим, то меняем данные в pairCoins
              state.pair.get = getCoin.name
              state.pair.course = getCoin.course
              state.pair.max = getCoin.max
              state.pair.min = getCoin.min
              state.pair.rezerv = getCoin.rezerv
            }
          })
        }
      })
    }
  }
}
