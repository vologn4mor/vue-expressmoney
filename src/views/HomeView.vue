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
      <div>
        <div class="alert-with-convert">
          <div class="alert">
            <strong class="alert-strong">Внимание!</strong>
            <ul class="alert-ul">
              <li class="alert-li danger" :style="{ listStyleImage: 'url(' + liarr + ')' }">Требуется
                обязательная верификация
                счета, для осуществления данной операции.</li>
              <li class="alert-li" :style="{ listStyleImage: 'url(' + liarr + ')' }">Данная операция производится
                оператором
                в ручном режиме и занимает от 5 до 60 минут в рабочее время.
              </li>
              <li class="alert-li" :style="{ listStyleImage: 'url(' + liarr + ')' }">Как только Ваша оплата будет
                получена
                мы произведем перевод средств на указанные в заявке реквизиты.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div class="exchange-card">
            <strong>Ввод данных</strong>
            <p><span class="bold">Курс обмена:</span> 63939.2917 UAH = 1 ETH <br>
              <span class="bold">Резерв:</span> 19.6103 ETH <a href="">Не хватает?</a>
            </p>
            <form>
              <div>
                <div class="your-coin">
                  <img :src="Monobank" alt="your-coin" />
                  <span class="bold">Монобанк</span>
                </div>
                <p>min.: 2500 UAH max.: 29999 UAH</p>
              </div>
              <div class="input-container">
                <label>
                  <small class="light-gray">Сумма<span class="danger">*</span>:</small><br>
                  <input class="input-text" type="text" />
                </label>
              </div>
              <div class="input-container">
                <label>
                  <small class="light-gray">Номер вашей карты<span class="danger">*</span>:</small><br>
                  <input class="input-text" type="text" />
                </label>
              </div>
              <div class="input-container">
                <label>
                  <small class="light-gray">ФИО получателя<span class="danger">*</span>:</small><br>
                  <input class="input-text" type="text" />
                </label>
              </div>
              <div class="arrow-to-convert"><span>></span></div>
              <div>
                <div class="your-coin">
                  <img :src="Bitcoin" alt="your-coin" />
                  <span class="bold">BTC</span>
                </div>
                <p>min.: 2500 UAH max.: 29999 UAH</p>
              </div>
              <div class="input-container">
                <label>
                  <small class="light-gray">Сумма<span class="danger">*</span>:</small><br>
                  <input class="input-text" type="text" />
                </label>
              </div>
              <div class="input-container">
                <label>
                  <small class="light-gray">Комиссия<span class="danger">*</span>:</small><br>
                  <input class="input-text" type="text" />
                </label>
              </div>
              <div class="input-container">
                <label>
                  <small>С учетом комиссии платежной системы ETH (0.0012 ETH)</small><br />
                  <small class="light-gray">Ваш кошелек Ethereum<span class="danger">*</span>:</small><br>
                  <input class="input-text" type="text" />
                </label>
              </div>
              <strong>Личные данные</strong>
              <div class="input-container">
                <label>
                  <small class="light-gray">E-mail<span class="danger">*</span>:</small><br>
                  <input class="input-text" type="text" />
                </label>
              </div>
              <div class="input-container">
                <label>
                  <small class="light-gray">Телефон<span class="danger">*</span>:</small><br>
                  <input class="input-text" type="text" />
                </label>
              </div>
              <div class="submit-container">
                <input type="submit">
                <div class="flex checkbox-container">
                  <input type="checkbox" id="input-checkbox" />
                  <label for="">Не запоминать введенные данные</label>
                </div>
              </div>
            </form>
          </div>
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
      sum: 0,
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
      Monobank,
      Bitcoin
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

.bold {
  font-weight: bold;
}

.input-text {
  background-color: #f6f7fc;
  border: 1px solid lightgray;
  border-radius: 4px;
  max-width: 351px;
  width: 100%;
  height: 50px;
  outline: none;
  padding: 0 15px;
}

.input-container {
  margin-top: 10px;
}

.arrow-to-convert {
  display: flex;
  justify-content: center;
}

.arrow-to-convert span {
  font-size: 40px;
  transform: rotate(90deg);
  color: #6377f7;
}

.danger {
  color: #e46066;
}

.light-gray {
  color: lightgray;
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

.exchange-card {

  margin: 20px;
  max-width: 391px;
  width: 100%;
  margin-left: 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 0px 1px lightgray;
}

.your-coin {
  display: flex;
  align-items: center;
}

.your-coin img {
  width: 30px;
  margin-right: 5px;
}

.exchange-card strong {
  font-size: 24px;
}

.exchange-card p {
  margin-top: 10px;
  line-height: 1.5;
  font-size: 14px;
}

.submit-container {
  margin-top: 10px;
}

.submit-container input {
  background-color: #fcb900;
  display: block;
  height: 50px;
  width: 220px;
  margin: 0;
  font-size: 16px;
  text-align: center;
  border-radius: 4px;
}

.submit-container input:hover {
  background: #f4d142;
  border: 1px solid #f4d142;
  color: #000000;
  text-decoration: none;
}

#input-checkbox {
  accent-color: #fcb900;
  width: 20px;
  margin-right: 5px;
}

.checkbox-container {
  align-items: center;
}
</style>
