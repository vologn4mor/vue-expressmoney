<template>
    <div class="template">
        <div class="content">
            <div class="second-block">
                <div class="welcome">
                    <h2 class="block-main-text">Приветствуем на сайте обменного пункта!</h2>
                    <p>Наш On-line сервис предназначен для тех, кто хочет быстро, безопасно и по выгодному курсу
                        обменять такие виды
                        электронных валют: Webmoney, Perfect Money, Qiwi, PayPal, Яндекс. Деньги, Альфа-Банк, ВТБ 24,
                        Приват24, Visa/Master
                        Card, Western uniоn, MoneyGram.</p>

                    <p>Этим возможности нашего сервиса не ограничиваются. В рамках проекта действуют программа
                        лояльности, накопительная скидка
                        и партнерская программа, воспользовавшись преимуществами которых, вы сможете совершать обмен
                        электронных валют на более
                        выгодных условиях. Для этого нужно просто зарегистрироваться на сайте.</p>

                    <p>Наш пункт обмена электронных валют – система, созданная на базе современного программного
                        обеспечения и содержащая весь
                        набор необходимых функций для удобной и безопасной конвертации наиболее распространенных видов
                        электронных денег. За
                        время работы мы приобрели репутацию проверенного партнера и делаем все возможное, чтобы ваши
                        впечатления от нашего
                        сервиса были только благоприятными</p>
                </div>
                <div class="reviews-block">
                    <h2 class="block-main-text">Отзывы</h2>
                    <div class="reviews-container">
                        <div v-for="review in lastReviews" :key="review.id" class="review-container">
                            <div class="review-item__triangle"></div>
                            <div class="review-item">
                                <div class="review-item__name-and-date">
                                    <p class="review-name">{{ review.name }}</p>
                                    <p class="review-date">{{ review.date }}</p>
                                </div>
                                <span class="review-text">{{ review.text }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="container-all-reviews">
                        <router-link to="/reviews" class="third-block-btn">Все отзывы</router-link>
                    </div>
                </div>
                <div class="reserve-block">
                    <h2 class="block-main-text">Резерв валюты</h2>
                    <div class="reserve-container" :style="{ maxHeight: hideReserve ? '' : 'max-content' }">
                        <div class="reserve-coin-card" v-for="coin in fakeCoins" :key="Math.random()">
                            <div class="reserve-coin-image">
                                <img :src="coin.imageUrl" alt="">
                            </div>
                            <div class="reserve-coin-data">
                                <p>{{ coin.name }}</p>
                                <p>{{ coin.available }}</p>
                            </div>
                        </div>
                        <div class="reserve-coin-card" v-for="coin in fakeCoins" :key="Math.random()">
                            <div class="reserve-coin-image">
                                <img :src="coin.imageUrl" alt="">
                            </div>
                            <div class="reserve-coin-data">
                                <p>{{ coin.name }}</p>
                                <p>{{ coin.available }}</p>
                            </div>
                        </div>
                        <div class="reserve-coin-card" v-for="coin in fakeCoins" :key="Math.random()">
                            <div class="reserve-coin-image">
                                <img :src="coin.imageUrl" alt="">
                            </div>
                            <div class="reserve-coin-data">
                                <p>{{ coin.name }}</p>
                                <p>{{ coin.available }}</p>
                            </div>
                        </div>
                        <div class="reserve-coin-card" v-for="coin in fakeCoins" :key="Math.random()">
                            <div class="reserve-coin-image">
                                <img :src="coin.imageUrl" alt="">
                            </div>
                            <div class="reserve-coin-data">
                                <p>{{ coin.name }}</p>
                                <p>{{ coin.available }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="reserve-btn-container">
                        <div class="third-block-btn" @click="hideReserve = !hideReserve">{{ hideReserve ? "Показать все"
                                :
                                "Скрыть"
                        }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import IReview from '@/interfaces/IReview'
import ICoin from '@/interfaces/ICoin'
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      hideReserve: true
    }
  },
  props: {
    lastReviews: {
      type: Array as () => Array<IReview>,
      required: true
    },
    fakeCoins: {
      type: Array as () => Array<ICoin>,
      required: true
    }
  }
})
</script>

<style scoped lang="scss">
.reviews-container {
    display: flex;
    justify-content: space-between;
}

.review-container {
    margin: 0 20px;
    max-width: 328px;
    width: 100%;
}

.review-item {
    // width: 368px;
    padding: 20px;
    background-color: #fff;
    border-radius: 4px;
}

.review-item__name-and-date {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2px;
}

.review-item__triangle {
    border: 20px solid transparent;
    border-bottom: 0px solid #fff;
    border-left: 40px solid #fff;
    width: 0;
    position: relative;
    margin-left: 20px;
    top: 8px;
}

.block-main-text {
    font-size: 30px;
    margin-bottom: 10px;
}

.review-date {
    font-size: 12px;
    color: lightgray;
}

.review-name,
.review-text {
    font-size: 14px;
}

.third-block-btn {
    border: 1px solid #6377f7;
    border-radius: 5px;
    padding: 10px;
    color: #000;
    text-decoration: none;
}

.container-all-reviews {
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

.third-block-btn:hover {
    background-color: #6377f7;
    color: #fff;
    cursor: pointer;
}

.reserve-coin-image img {
    width: 50px;
}

.reserve-coin-card {
    display: flex;
    width: 23%;
    background-color: white;
    padding: 15px;
    margin: 10px;
    border-radius: 5px;
}

.reserve-coin-card p {
    margin: 0;
}

.reserve-coin-data {
    margin-left: 10px;
}

.reserve-container {
    display: flex;
    flex-wrap: wrap;
}

.reserve-container {
    max-height: 220px;
    overflow: hidden;
}

.reserve-btn-container {
    display: flex;
    justify-content: center;
}

@media(max-width: 1020px) {
    .reserve-coin-card {
        width: 45%;
    }

    .reserve-container {
        max-height: 430px;
        display: flex;
        justify-content: center;
    }
}

@media(max-width: 910px) {
    .review-item__name-and-date {
        flex-direction: column;
    }

    .review-name,
    .review-text {
        margin: 0;
    }
}

@media(max-width: 600px) {
    .reviews-container {
        flex-direction: column;
    }

    .review-container {
        max-width: none;
        width: auto;
    }
}

@media(max-width: 500px) {
    .reserve-coin-card {
        width: 90%;
    }

    .reserve-container[data-v-691025db] {
        max-height: 855px;
    }
}
</style>
