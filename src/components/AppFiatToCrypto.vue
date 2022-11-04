<template>
    <div>
        <div class="alert-with-convert">
            <div class="alert">
                <strong class="alert-strong">Внимание!</strong>
                <ul class="alert-ul" v-if="pairCoins[0].isFiat">
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
                <ul class="alert-ul" v-else>
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
                </ul>
            </div>
        </div>
        <div>
            <div class="exchange-card">
                <strong>Ввод данных</strong>
                <p><span class="bold">Курс обмена:</span> {{ formatCourse }}<br>
                    <span class="bold">Резерв:</span> {{ pairCoins[0].available }} {{ pairCoins[0].code }} <a href="">Не
                        хватает?</a>
                </p>
                <form>
                    <div>
                        <div class="your-coin">
                            <img :src="pairCoins[0].imageUrl" alt="your-coin" />
                            <span class="bold">{{ pairCoins[0].name }}</span>
                        </div>
                        <p>min.: {{ pairCoins[0].min }} {{ pairCoins[0].code }} max.: {{ pairCoins[0].max }}
                            {{ pairCoins[0].code }}</p>
                    </div>
                    <div class="input-container">
                        <label>
                            <small class="light-gray">Сумма<span class="danger">*</span>:</small><br>
                            <input class="input-text" type="text" v-model.number="mySum" @input="mySumChange()" />
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
                            <img :src="pairCoins[1].imageUrl" alt="your-coin" />
                            <span class="bold">{{ pairCoins[1].name }}</span>
                        </div>
                        <p>min.: {{ pairCoins[1].min }} {{ pairCoins[1].code }} max.: {{ pairCoins[1].max }}
                            {{ pairCoins[1].code }}</p>
                    </div>
                    <div class="input-container">
                        <label>
                            <small class="light-gray">Сумма<span class="danger">*</span>:</small><br>
                            <input class="input-text" type="text" v-model.number="convertSum"
                                @input="convertSumChange()" />
                        </label>
                    </div>
                    <div class="input-container">
                        <label>
                            <small class="light-gray">Комиссия<span class="danger">*</span>:</small><br>
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
</template>

<script lang="ts">
import Vue from "vue";
import liarr from "@/assets/images/liarr.png"
import ICoin from "@/interfaces/ICoin";

export default Vue.extend({
    props: {
        pairCoins: {
            type: Array as () => Array<ICoin>,
            required: true
        }
    },
    data() {
        return {
            liarr,
            mySum: 0,
            convertSum: 0,
            // blockedWatchMySum: true,
            // blockedWatchConvertSum: true,
            blockedWatch: false,
        }
    },
    methods: {
        getBeautifulNumber(n: number): number {
            let counter = 0;
            let result: Number = n;
            if (n > 1) { // убираем числа после запятой 
                counter++
            }
            while (n < 1) {
                n *= 10
                counter++;
            }
            counter += 3
            return parseFloat(result.toFixed(counter))
        },
        convertSumChange() {
            if (this.convertSum > 0) {
                if (this.pairCoins[0].isFiat) {
                    this.mySum = this.getBeautifulNumber(this.convertSum * this.pairCoins[1].course);
                } else {
                    this.mySum = this.getBeautifulNumber(this.convertSum * this.pairCoins[0].course);
                }
            }
        },
        mySumChange() {
            if (this.mySum > 0) {
                this.convertSum = this.mySum / this.pairCoins[1].course;
                if (this.pairCoins[0].isFiat) {
                    this.convertSum = this.getBeautifulNumber(this.mySum / this.pairCoins[1].course);
                } else {
                    this.convertSum = this.getBeautifulNumber(this.mySum / this.pairCoins[0].course);
                }
            }
        }
    },
    computed: {
        formatCourse(): String {
            if (this.pairCoins[0].isFiat) {
                return `${this.pairCoins[1].course} ${this.pairCoins[0].code} = 1 ${this.pairCoins[1].code}`
            } else {
                return `1 ${this.pairCoins[0].code} = ${this.pairCoins[0].course} ${this.pairCoins[1].code}`
            }
        },

    },
    updated() {
        // if (this.mySum > 0 && this.convertSum > 0) {
        //     this.convertSum = this.getBeautifulNumber(this.mySum);
        //     this.mySum = this.getBeautifulNumber(this.convertSum);
        // }
    },
    watch: {
        pairCoins: function (newVal: Array<ICoin>, oldVal: Array<ICoin>) {
            if (oldVal[0].id != newVal[0].id) {
                this.mySum = 0;
                this.convertSum = 0;
                return;
            }
            if (oldVal[1].id != newVal[1].id) {
                this.mySumChange();
            }
        }
        // mySum: function () {
        //     // this.blockedWatchConvertSum = true;
        //     if (this.blockedWatch) {
        //         return;
        //     }
        //     this.blockedWatch = true;
        //     if (this.mySum > 0) {
        //         this.convertSum = this.getBeautifulNumber(this.mySum);
        //     }
        //     // this.blockedWatchConvertSum = false;
        //     this.blockedWatch = false;
        // },
        // convertSum: function () {
        //     // this.blockedWatchMySum = true;

        //     if (this.blockedWatch) {
        //         return;
        //     }
        //     this.blockedWatch = true;
        //     if (this.convertSum > 0) {
        //         this.mySum = this.getBeautifulNumber(this.convertSum);
        //     }
        //     this.blockedWatch = false;
        //     // this.blockedWatchMySum = false;
        // }
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
</style>