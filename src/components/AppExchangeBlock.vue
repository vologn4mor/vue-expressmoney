<template>
  <div>
    <div class="alert-with-convert">
      <div class="alert">
        <strong class="alert-strong">Внимание!</strong>
        <!-- <ul class="alert-ul" v-if="pairCoins[0].isFiat">
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
                </ul> -->
        <!-- <ul class="alert-ul" v-else>
                    <li class="alert-li" :style="{ listStyleImage: 'url(' + liarr + ')' }">
                        Данная операция производится круглосуточно в автоматическом режиме и занимает от 5 до 60 минут
                    </li>
                    <li class="alert-li" :style="{ listStyleImage: 'url(' + liarr + ')' }">
                        Оплата заявки происходит после зачисления средств на наш счет биржи Binance. Зачисление
                        происходит при достижении
                        транзакцией необходимого количества подтверждений сети. Количество подтверждений варьируется в
                        зависимости от
                        используемой валюты.
                    </li>
                    <li class="alert-li" :style="{ listStyleImage: 'url(' + liarr + ')' }">
                        Как правило, средства поступают в течение 2-15 минут после оплаты.
                    </li>
                    <li class="alert-li" :style="{ listStyleImage: 'url(' + liarr + ')' }">
                        В редких случаях зачисление банковского перевода может проходить до 24 часов с момента
                        произведения оплаты.
                    </li>
                    <li class="alert-li" :style="{ listStyleImage: 'url(' + liarr + ')' }">
                        Курс фиксируется по бирже <span class="bold">Binance</span>.
                    </li>
                </ul> -->
      </div>
    </div>
    <div>
      <div class="exchange-card">
        <strong>Ввод данных</strong>
        <p>
          <span class="bold">Курс обмена:</span> {{ formatCourse }}<br />
          <span class="bold">Резерв:</span> {{ getPair.rezerv }}
          {{ getPair.codeGet }}
          <a href="">Не хватает?</a>
        </p>
        <form @submit.prevent>
          <div>
            <div class="your-coin">
              <img :src="getSellImage" alt="your-coin" />
              <span class="bold">{{ getPair.give }}</span>
            </div>
            <!-- <p>
              min.: {{ getPair.min }} {{ getPair.codeGive }} max.:
              {{ getPair.max }} {{ getPair.codeGive }}
            </p> -->
          </div>
          <div class="input-container">
            <label>
              <small class="light-gray"
                >Сумма<span class="danger">*</span>:</small
              ><br />
              <input class="input-text" type="text" v-model="buyCoin" />
            </label>
          </div>
          <div class="input-container">
            <label>
              <small class="light-gray"
                >Номер вашей карты<span class="danger">*</span>:</small
              ><br />
              <input class="input-text" type="text" />
            </label>
          </div>
          <div class="input-container">
            <label>
              <small class="light-gray"
                >ФИО получателя<span class="danger">*</span>:</small
              ><br />
              <input class="input-text" type="text" />
            </label>
          </div>
          <div class="arrow-to-convert"><span>></span></div>
          <div>
            <div class="your-coin">
              <img :src="getBuyImage" alt="your-coin" />
              <span class="bold">{{ getPair.get }}</span>
            </div>
            <!-- <p>min.: {{ pairCoins[1].min }} {{ pairCoins[1].code }} max.: {{ pairCoins[1].max }}
                            {{ pairCoins[1].code }}</p> -->
          </div>
          <div class="input-container">
            <label>
              <small class="light-gray"
                >Сумма<span class="danger">*</span>:</small
              ><br />
              <input class="input-text" type="text" v-model="sellCoin" />
            </label>
          </div>
          <div class="input-container">
            <label>
              <small class="light-gray"
                >Комиссия<span class="danger">*</span>:</small
              ><br />
              <input class="input-text" type="text" />
            </label>
          </div>
          <strong>Личные данные</strong>
          <div class="input-container">
            <label>
              <small class="light-gray"
                >E-mail<span class="danger">*</span>:</small
              ><br />
              <input class="input-text" type="text" />
            </label>
          </div>
          <div class="input-container">
            <label>
              <small class="light-gray"
                >Телефон<span class="danger">*</span>:</small
              ><br />
              <input class="input-text" type="text" />
            </label>
          </div>
          <div class="submit-container">
            <input type="submit" />
            <div class="flex checkbox-container">
              <input type="checkbox" id="input-checkbox" />
              <label for="">Не запоминать введенные данные</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import liarr from '@/assets/images/liarr.png'
import ICoin from '@/interfaces/ICoin'
import { mapGetters, mapMutations } from 'vuex'

export default Vue.extend({
  props: {
    pairCoins: {
      type: Array as () => Array<ICoin>,
      required: true
    }
  },
  data () {
    return {
      liarr,
      mySum: 0,
      convertSum: 0,
      blockedWatch: false
    }
  },
  methods: {
    ...mapMutations('coins', {
      changeSellCoinValue: 'changeSellCoinValue',
      changeBuyCoinValue: 'changeBuyCoinValue'
    })
    // sellCoinInputHandler (event: Event) {
    //     this.changeBuyCoinValue();
    //   const { target } = event
    //   if (target){
    //     this.changeBuyCoinValue('s')
    //     //  console.log((target as HTMLButtonElement).value)
    //     }
    // //   changeSellCoinValue(target.value)
    // }
  },
  computed: {
    ...mapGetters('coins', {
      getPair: 'getPair',
      getSellCoinValue: 'getSellCoinValue',
      getBuyCoinValue: 'getBuyCoinValue',
      getSellImage: 'getSellImage',
      getBuyImage: 'getBuyImage'
    }),
    formatCourse () {
      if (this.getPair.isFiat) {
        return `${this.getPair.course} ${this.getPair.codeGive} = 1 ${this.getPair.codeGet}`
      } else {
        return `1 ${this.getPair.codeGive} = ${this.getPair.course} ${this.getPair.codeGet}`
      }
    },
    buyCoin: {
      get () {
        return this.getSellCoinValue
        // const number = Number(this.getSellCoinValue)
        // if (!Number.isInteger(number)) {
        //   return number.toFixed(this.getPair.isFiat ? 2 : 6)
        // } else {
        //   return number
        // }
        // return Intl.NumberFormat().format(this.getSellCoinValue)
      },
      set (value: string) {
        const result = value
          .replace(/^[\.,]+/g, '')
          .replace(/[^0-9,.]/g, ' ')
          .replace(',', '.')
          .replace(/\.{2}/g, '.')
          .replace(/\.\d+\.$/g, '')
          .replace(/\s/g, '')
          .trim()
        if (result.length !== value.length) {
          this.changeBuyCoinValue(0)
        }
        this.changeSellCoinValue(result)
        console.log(parseFloat(result))
      }
    },
    sellCoin: {
      get () {
        return this.getBuyCoinValue
        // const number = Number(this.getBuyCoinValue)
        // if(!Number.isInteger(number)) {
        //   return number.toFixed(this.getPair.isFiat ? 6 : 2)
        // } else {
        //   return number
        // }
      },
      set (value: string) {
        const result = value
          .replace(/^[\.,]+/g, '')
          .replace(/[^0-9,.]/g, ' ')
          .replace(',', '.')
          .replace(/\.{2}/g, '.')
          .replace(/\.\d+\.$/g, '')
          .replace(/\s/g, '')
          .trim()
        if (result.length !== value.length) {
          this.changeSellCoinValue(0)
        }
        this.changeBuyCoinValue(result)
        console.log(parseFloat(result))
      }
    }
  }
})
</script>

<style lang="scss">
.bold {
  font-weight: bold;
}

.flex {
  display: flex;
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

@media (max-width: 960px) {
  .exchange-card,
  .alert-with-convert {
    margin-left: 0px;
    margin-top: 20px;
  }

  .alert-with-convert {
    max-width: none;
  }

  .exchange-card {
    max-width: none;
  }

  .input-text {
    max-width: none;
  }
}
</style>
