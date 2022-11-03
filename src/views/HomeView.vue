<template>
  <div class="home-block">
    <div class="exchange-block">
      <div class="exchange-block__your-coins">
        <strong class="yours-coins__strong">Вы отдаете</strong>
        <ul>
          <li v-for="item in fakeCoins" :key="item.id">
            <AppCoinYourItem :id="item.id" :name="item.name" :imageUrl="item.imageUrl"
              :selectedCoin="myCoin.id == item.id ? true : false" @action="selectYourCoin" />
          </li>
        </ul>
      </div>
      <div class="exchange-block__available-coins">
        <div class="flex available-coins__container">
          <strong class="available-coins__strong">Вы получаете</strong>
          <div class="flex available-coins__buttons">
            <div class="available-coins__button" :class="isSelectedCourse ? 'available-coins__active' : ''"
              @click="isSelectedCourse = true">курс</div>
            &nbsp;
            <div class="available-coins__button" :class="!isSelectedCourse ? 'available-coins__active' : ''"
              @click="isSelectedCourse = false">резерв</div>
          </div>
        </div>
        <ul>
          <li v-for="item in fakeConvertCoins" :key="item.id">
            <AppCoinAvailableItem :id="item.id" :name="item.name" :imageUrl="item.imageUrl"
              :course="myCoin.isFiat ? item.course : myCoin.course" :reserve="item.available"
              :isSelectedCourse="isSelectedCourse" :isFiat="item.isFiat"
              :selectedCoin="convertCoin.id == item.id ? true : false" @action="selectAvailableCoin" />
          </li>
        </ul>
      </div>
      <AppFiatToCrypto :Bitcoin="Bitcoin" :Monobank="Monobank" />
    </div>
    <div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import AppCoinYourItem from "@/components/ui/AppCoinYourItem.vue"
import AppCoinAvailableItem from "@/components/ui/AppCoinAvailableItem.vue"
import AppFiatToCrypto from "@/components/AppFiatToCrypto.vue"
import liarr from "@/assets/images/liarr.png"
import Bitcoin from "@/assets/images/coins/Bitcoin.png"
import Monobank from "@/assets/images/coins/Monobank.png"
import Ether from "@/assets/images/coins/Ether.png"
import Oschadbank from "@/assets/images/coins/Oschadbank.png"
import ICoin from "@/interfaces/ICoin"

var fakeCoins: ICoin[] = [{
  id: 1,
  name: "Monobank",
  imageUrl: Monobank,
  min: 2500,
  max: 29000,
  isFiat: true,
  course: 1,
  available: 300123
}, {
  id: 2,
  name: 'BTC',
  imageUrl: Bitcoin,
  min: 5000,
  max: 29999,
  isFiat: false,
  course: 5234523.4231,
  available: 5.12343
}, {
  id: 3,
  name: "Ether",
  imageUrl: Ether,
  min: 1200,
  max: 25000,
  isFiat: false,
  course: 12352,
  available: 78.123
}, {
  id: 4,
  name: "Oschadbank",
  imageUrl: Oschadbank,
  min: 2500,
  max: 30000,
  isFiat: true,
  course: 1,
  available: 145000
}]

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      myCoin: {} as ICoin,
      convertCoin: {} as ICoin,
      pairCoins: [] as ICoin[],
      isSelectedCourse: true,
      fakeCoins,
      fakeConvertCoins: [] as ICoin[],
      liarr,
      Monobank,
      Bitcoin
    }
  },
  methods: {
    selectYourCoin(id: Number): void {
      this.fakeCoins.map(coin => {
        if (coin.id == id) {
          if (this.myCoin.isFiat != coin.isFiat) {  // обнуление списка доступных монет при выборе своих монет
            this.fakeConvertCoins = [];
            this.refreshConvertList();
          }
          this.convertCoin = {} as ICoin;
          this.myCoin = coin;
        }
      })
    },
    selectAvailableCoin(id: Number) {
      this.fakeConvertCoins.map((coin) => {
        if (coin.id == id) {
          this.convertCoin = coin;
        }
      })
    },
    refreshConvertList(): void {
      this.fakeCoins.map(coin => {
        if (coin.isFiat == this.myCoin.isFiat) {
          this.fakeConvertCoins.push(coin);
        }
      });
    }
  },
  mounted() {  // установка при открытии сайта значений по дефолту
    this.fakeCoins.map(coin => {
      if (coin.name == "Monobank") {
        this.myCoin = coin;
      }
    });
    this.fakeCoins.map(coin => {
      if (coin.isFiat != this.myCoin.isFiat) {
        this.fakeConvertCoins.push(coin);
      }
    });
    this.fakeConvertCoins.map(coin => {
      if (coin.name == "BTC") {
        this.convertCoin = coin;
      }
    });
  },
  components: {
    AppCoinYourItem,
    AppCoinAvailableItem,
    AppFiatToCrypto
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

.exchange-block__your-coins,
.exchange-block__available-coins {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 0px 1px lightgray;
  padding: 20px 10px;
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
  cursor: pointer
}

.available-coins__container {
  justify-content: space-between;
  align-items: center;
}
</style>
