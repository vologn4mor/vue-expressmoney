<template>
  <div>
    <div class="template">
      <div class="home-block content">
<!--        <div class="exchange-block">-->
<!--          <div class="exchange-block__all-coins">-->
            <AppConvertBlock/>
<!--            <div class="exchange-block__your-coins">-->
<!--              <strong class="yours-coins__strong">Вы отдаете</strong>-->
<!--              <ul>-->
<!--                <li v-for="item in listSellCoins" :key="item.id">-->
<!--                  <AppCoinYourItem-->
<!--                    :id="item.id"-->
<!--                    :name="item.name"-->
<!--                    :imgUrl="item.imgUrl"-->
<!--                    :selectedCoin="item.name === activeGiveCoin"-->
<!--                  />-->
<!--                </li>-->
<!--              </ul>-->
<!--            </div>-->
<!--            <div class="exchange-block__available-coins">-->
<!--              <div class="flex available-coins__container">-->
<!--                <strong class="available-coins__strong">Вы получаете</strong>-->
<!--                <div class="flex available-coins__buttons">-->
<!--                  <div-->
<!--                    class="available-coins__button"-->
<!--                    :class="{ 'available-coins__active': isSelectedCourse }"-->
<!--                    @click="isSelectedCourse = true"-->
<!--                  >-->
<!--                    курс-->
<!--                  </div>-->
<!--                  &nbsp;-->
<!--                  <div-->
<!--                    class="available-coins__button"-->
<!--                    :class="!isSelectedCourse ? 'available-coins__active' : ''"-->
<!--                    @click="isSelectedCourse = false"-->
<!--                  >-->
<!--                    резерв-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <ul>-->
<!--                <li v-for="item in listBuyCoins" :key="item.name">-->
<!--                  <AppCoinAvailableItem-->
<!--                    :name="item.name"-->
<!--                    :imageUrl="item.imgUrl"-->
<!--                    :rezerv="item.rezerv"-->
<!--                    :isSelectedCourse="isSelectedCourse"-->
<!--                    :selectedCoin="item.name === activeGetCoin"-->
<!--                    :course="item.course"-->
<!--                    :isFiat="getIsFiat"-->
<!--                  />-->
<!--                </li>-->
<!--              </ul>-->
<!--            </div>-->
          </div>
<!--          <AppExchangeBlock :pairCoins="pairCoins" />-->
        </div>
<!--      </div>-->
<!--    </div>-->
    <AppHomeSecondBlock />
    <!-- <AppHomeThirdBlock
      :lastReviews="threeLastFakeReviews"
      :fakeCoins="fakeCoins"
    /> -->
    <AppHomeFourthBlock />
    <AppHomeFivethBlock />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

import AppCoinYourItem from '@/components/ui/AppCoinYourItem.vue'
import AppCoinAvailableItem from '@/components/ui/AppCoinAvailableItem.vue'
import AppExchangeBlock from '@/components/AppExchangeBlock.vue'
import AppHomeSecondBlock from '@/components/ui/AppHomeSecondBlock.vue'
import AppHomeThirdBlock from '@/components/ui/AppHomeThirdBlock.vue'
import AppHomeFourthBlock from '@/components/ui/AppHomeFourthBlock.vue'
import AppHomeFivethBlock from '@/components/ui/AppHomeFivethBlock.vue'
import AppConvertBlock from "@/components/AppConvertBlock.vue";

import liarr from '@/assets/images/liarr.png'
import Bitcoin from '@/assets/images/coins/Bitcoin.png'
import Monobank from '@/assets/images/coins/Monobank.png'
import Ether from '@/assets/images/coins/Ether.png'
import Oschadbank from '@/assets/images/coins/Oschadbank.png'
import Tron from '@/assets/images/coins/tron.png'

import ICoin from '@/interfaces/ICoin'
import IReview from '@/interfaces/IReview'

// const fakeCoins: ICoin[] = [
//   {
//     id: 1,
//     name: 'Monobank',
//     imageUrl: Monobank,
//     min: 2500,
//     max: 29000,
//     isFiat: true,
//     course: 1,
//     available: 300123,
//     code: 'UAH'
//   },
//   {
//     id: 2,
//     name: 'BTC',
//     imageUrl: Bitcoin,
//     min: 0.003,
//     max: 0.024,
//     isFiat: false,
//     course: 820959.1751,
//     available: 5.12343,
//     code: 'BTC',
//     commission: 0.0001
//   },
//   {
//     id: 3,
//     name: 'Ether',
//     imageUrl: Ether,
//     min: 1200,
//     max: 25000,
//     isFiat: false,
//     course: 12352,
//     available: 78.123,
//     code: 'ETH'
//   },
//   {
//     id: 4,
//     name: 'Oschadbank',
//     imageUrl: Oschadbank,
//     min: 2500,
//     max: 30000,
//     isFiat: true,
//     course: 1,
//     available: 145000,
//     code: 'UAH'
//   },
//   {
//     id: 5,
//     name: 'Tron',
//     imageUrl: Tron,
//     min: 0.6,
//     max: 5.6,
//     isFiat: false,
//     course: 190.901,
//     available: 800,
//     code: 'TRON'
//   }
// ]

const threeLastFakeReviews: IReview[] = [
  {
    id: 1,
    name: 'Владимир',
    date: '27.08.2022, 19:46',
    text: 'Все супер - рекомендую'
  },
  {
    id: 2,
    name: 'Николай',
    date: '27.09.2020, 18:46',
    text: 'Поменял все без проблем'
  },
  {
    id: 3,
    name: 'Александр',
    date: '27.10.2020, 19:48',
    text: 'Все сделали достаточно быстро'
  }
]

// ToDo
const ASSETS = [
  { id: 'BTC', name: 'BTC', img: '', currency: 'BTC', round: 6 },
  { id: 'Oschadbank', name: 'Oschadbank', img: '', currency: 'UAH', round: 2 }
]

// ToDo
const getDirections = [
  {
    give: 'BTC',
    get: 'Oschadbank',
    course: 12500,
    rezerv: 25000,
    min: 2500,
    max: 29000
  },
  {
    give: 'BTC',
    get: 'Monobank',
    course: 12600,
    rezerv: 30000,
    min: 2500,
    max: 29000
  },
  {
    give: 'ETH',
    get: 'Oschadbank',
    course: 1250,
    rezerv: 25000,
    min: 2500,
    max: 29000
  },
  {
    give: 'LTC',
    get: 'Oschadbank',
    course: 125,
    rezerv: 25000,
    min: 2500,
    max: 29000
  }
]

export default Vue.extend({
  name: 'AppHome',
  data () {
    return {
      myCoin: {} as ICoin,
      convertCoin: {} as ICoin,
      pairCoins: [] as ICoin[],
      isSelectedCourse: true,
      // fakeCoins,
      fakeConvertCoins: [] as ICoin[],
      liarr,
      Monobank,
      Bitcoin,
      threeLastFakeReviews
    }
  },
  components: {
    AppCoinYourItem,
    AppCoinAvailableItem,
    AppExchangeBlock,
    AppHomeSecondBlock,
    AppHomeThirdBlock,
    AppHomeFourthBlock,
    AppHomeFivethBlock,
    AppConvertBlock
  },
  computed: {
    ...mapGetters('coins', [
      'listSellCoins',
      'activeGiveCoin',
      'listBuyCoins',
      'activeGetCoin',
      'getIsFiat'
    ])
  }
})
</script>

<style scoped lang="scss">
li {
  list-style-type: none;
}

.flex {
  display: flex;
}

.v-application ul,
.v-application ol {
  padding: 0 !important;
}

.exchange-block {
  display: flex;
}

.exchange-block__all-coins {
  display: flex;
  max-width: 740px;
  width: 100%;
}

.exchange-block__your-coins,
.exchange-block__available-coins {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 0px 1px lightgray;
  padding: 20px 10px;
  height: fit-content;
}

.yours-coins__strong {
  font-size: 22px;
  padding: 20px;
}

.available-coins__strong {
  font-size: 22px;
  padding: 0 0px 0 20px;
}

.exchange-block__your-coins {
  max-width: 300px;
  width: 100%;
}

.exchange-block__available-coins {
  margin-left: 23px;
  max-width: 413px;
  width: 100%;
}

.available-coins__buttons {
  font-size: 13px;
  background-color: #f6f7fc;
  border-radius: 4px;
}

.available-coins__button {
  padding: 5px;
  border-radius: 4px;
}

.available-coins__buttons:hover {
  cursor: pointer;
}

.available-coins__container {
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 1190px) {
  .exchange-block {
    margin: 0 20px;
  }
}

@media (max-width: 960px) {
  .exchange-block {
    flex-direction: column;
  }

  .exchange-block__all-coins {
    max-width: none;
  }

  .exchange-block__available-coins {
    max-width: none;
  }
}

@media (max-width: 700px) {
  .available-coins__buttons {
    display: none;
  }

  .coin__info {
    display: none;
  }
}

@media (max-width: 560px) {
  .yours-coins__strong {
    white-space: nowrap;
  }

  .available-coins__strong {
    white-space: nowrap;
  }

  .content {
    padding: 0 10px 0 10px;
  }
}

@media (max-width: 450px) {
  .exchange-block__all-coins {
    flex-direction: column;
  }

  .exchange-block__your-coins {
    max-width: none;
  }

  .exchange-block__available-coins {
    margin-left: 0px;
    margin-top: 20px;
  }
}
</style>
