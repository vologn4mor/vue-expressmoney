<template>
  <div class="home-block">
    <div class="exchange-block">
      <div class="exchange-block__your-coins">
        <strong class="yours-coins__strong">Вы отдаете</strong>
        <ul>
          <li v-for="item in testYour" :key="item.id">
            <AppCoinYourItem :id="item.id" :name="item.name" :imageUrl="item.imageUrl"
              @action="yourCoinsClickHandler" />
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
          <li v-for="item in testAvailable" :key="item.id">
            <AppCoinAvailableItem :id="item.id" :name="item.name" :imageUrl="item.imageUrl" :course="item.course"
              :reserve="item.reserve" :isSelectedCourse="isSelectedCourse" />
          </li>
        </ul>
      </div>
      <div class="alert-with-convert">
        <div class="alert">
          <strong class="alert-strong">Внимание!</strong>
          <ul class="alert-ul">
            <li class="alert-li alert-li-danger" :style="{ listStyleImage: 'url(' + liarr + ')' }">Требуется
              обязательная верификация
              счета, для осуществления данной операции.</li>
            <li class="alert-li" :style="{ listStyleImage: 'url(' + liarr + ')' }">Данная операция производится
              оператором
              в ручном режиме и занимает от 5 до 60 минут в рабочее время.
            </li>
            <li class="alert-li" :style="{ listStyleImage: 'url(' + liarr + ')' }">Как только Ваша оплата будет получена
              мы произведем перевод средств на указанные в заявке реквизиты.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import AppCoinYourItem from "@/components/ui/AppCoinYourItem.vue"
import AppCoinAvailableItem from "@/components/ui/AppCoinAvailableItem.vue"
import liarr from "@/assets/images/liarr.png"
import Bitcoin from "@/assets/images/coins/Bitcoin.png"
import Monobank from "@/assets/images/coins/Monobank.png"

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      isSelectedCourse: true,
      testYour: [{
        id: 1,
        name: "BTC",
        imageUrl: Bitcoin
      }],
      testAvailable: [{
        id: 1,
        name: "Monobank",
        imageUrl: Monobank,
        course: 898989,
        reserve: 75.3,
      }],
      liarr,
    }
  },
  methods: {
    yourCoinsClickHandler(id: Number): void {
      console.log(id);
    }
  },
  components: {
    AppCoinYourItem,
    AppCoinAvailableItem
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

.available-coins__active {
  background-color: #fff;
  border-radius: 4px;
  padding: 4px;
  border: 1px solid lightgray;
}

.alert-with-convert {
  max-width: 391px;
  width: 100%;
  margin-left: 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 0px 1px lightgray;
}

.alert-strong {
  font-size: 20px;
  padding-left: 10px;
  border-left: 3px solid #f1c613;
}

.alert-ul {
  margin: 10px 0 20px 30px;
}

.alert-li {
  font-size: 14px;
  max-width: 319px;
  width: 100%;
  line-height: 1.3;
}

.alert-li-danger {
  color: #e46066;
}
</style>
