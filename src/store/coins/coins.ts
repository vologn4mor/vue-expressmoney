import ICoin from '@/interfaces/ICoin'
import IGetItem from '@/interfaces/IGetItem'
import IGiveItem from '@/interfaces/IGiveItem'

const coins: ICoin[] = [
  {
    id: 1,
    give: 'Bitcoin',
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
        course: 820959.1751,
        rezerv: 50000,
        min: 2500,
        max: 29000
      }
    ]
  },
  {
    id: 2,
    give: 'Monobank',
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
      let selectedCoin = ''
      state.coins.filter((coin) => {
        if (coin.id === id) {
          selectedCoin = coin.give
        }
      })
      state.pair.give = selectedCoin
    },
    changeGetCoin (state: State, idx: number) {}
  }
}
