<template>
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
export default Vue.extend({
    data() {
        return {
            liarr
        }
    },
    props: {
        Bitcoin: {
            type: String,
            required: true,
        },
        Monobank: {
            type: String,
            required: true,
        }
    }
})
</script>

<style lang="scss">
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