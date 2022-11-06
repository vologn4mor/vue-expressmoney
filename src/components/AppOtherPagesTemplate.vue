<template>
    <div class="content">
        <div class="main-content">
            <p>Обмен валют</p>
            <slot></slot>
        </div>
        <div class="auth-and-reviews">
            <div class="card">
                <h2>Авторизация</h2>
                <form action="">
                    <div class="input-container">
                        <label>
                            <small class="light-gray">Логин или e-mail<span class="danger"> *</span>:</small><br>
                            <input class="input-text" type="text" />
                        </label>
                    </div>
                    <div class="input-container">
                        <label>
                            <small class="light-gray">Пароль<span class="danger"> *</span>:</small><br>
                            <input class="input-text" type="text" />
                        </label>
                    </div>
                    <div class="register-and-lostpass">
                        <router-link to="/register">Регистрация</router-link>
                        <router-link to="/lostpass">Забыли пароль?</router-link>
                    </div>
                    <div class="btn-login-container btn">
                        <span class="btn login">Войти</span>
                    </div>
                </form>
            </div>
            <h2>Отзывы</h2>
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
                <div class="container-all-reviews">
                    <router-link to="/reviews" class="third-block-btn">Все отзывы</router-link>
                </div>
            </div>
            <div class="card">
                <div class="img-container">
                    <router-link to="/">
                        <img :src="exchangeSumo" alt="" />
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

import IReview from "@/interfaces/IReview";

import exchangeSumo from "@/assets/images/exchangeSumo.svg";

var threeLastFakeReviews: IReview[] = [{
    id: 1,
    name: "Владимир",
    date: "27.08.2022, 19:46",
    text: "Все супер - рекомендую"
}, {
    id: 2,
    name: "Николай",
    date: "27.09.2020, 18:46",
    text: "Поменял все без проблем"
}, {
    id: 3,
    name: "Александр",
    date: "27.10.2020, 19:48",
    text: "Все сделали достаточно быстро"
}]

export default Vue.extend({
    data() {
        return {
            lastReviews: threeLastFakeReviews,
            exchangeSumo
        }
    }
});
</script>

<style scoped lang="scss">
.content {
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
    padding: 0 10px;
}

.input-container {
    margin-top: 10px;
}

.danger {
    color: red;
}

.light-gray {
    color: lightgray;
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

.content {
    display: flex;
    justify-content: space-between;
}

.main-content {
    max-width: 851px;
    width: 100%;
}

.card {
    width: 276px;
    padding: 0 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px lightgray;
    margin-bottom: 20px;
}

.card h2 {
    padding-top: 15px;
}

.btn {
    text-decoration: none;
    border-radius: 4px;
    padding-top: 10px;

    .btn.login {
        background-color: #fcb900;
        color: #000;
        padding: 10px 25px;
    }
}

.btn.login:hover {
    cursor: pointer;
}

.register-and-lostpass {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

.register-and-lostpass a {
    font-size: 12px;
}

.btn-login-container {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
}

.reviews-container {
    display: flex;
    flex-direction: column;
}

.review-container {
    max-width: 328px;
    width: 100%;
}

.review-item {
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

.third-block-btn {
    border: 1px solid #6377f7;
    border-radius: 5px;
    padding: 10px 20px;
    color: #000;
    text-decoration: none;
}

.container-all-reviews {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
}

.third-block-btn:hover {
    background-color: #6377f7;
    color: #fff;
    cursor: pointer;
}

img {
    width: 236px;
    height: 100px;
}

.img-container {
    padding: 20px 0;
}

@media (max-width: 960px) {
    .content {
        flex-direction: column;
    }

    .card {
        width: auto;
    }

    .input-text {
        max-width: none;
    }

    .review-container {
        max-width: none;
    }

    img {
        width: 236px;
        width: 300px;
    }

    .auth-and-reviews {
        margin-top: 20px;
    }
}
</style>