<template>
    <div class="template">
        <div class="content">
            <div class="fourth-block">
                <div class="cards-container">
                    <div class="card" v-for="card in cards" :key="card.bold">
                        <img :src="card.imageUrl" alt="">
                        <strong>{{ card.bold }}</strong>
                        <p>{{ card.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import block1 from '@/assets/images/homeFourthBlock/block1.png'
import block2 from '@/assets/images/homeFourthBlock/block2.png'
import block3 from '@/assets/images/homeFourthBlock/block3.png'
import block4 from '@/assets/images/homeFourthBlock/block4.png'
import block5 from '@/assets/images/homeFourthBlock/block5.png'
import block6 from '@/assets/images/homeFourthBlock/block6.png'

interface ICard {
    imageUrl: string,
    bold: string,
    text: string
}

const cards: ICard[] = [{
  imageUrl: block1,
  bold: 'Выгодный обмен',
  text: 'Качественно меняем валюту онлайн.'
}, {
  imageUrl: block2,
  bold: 'Надежность на высоком уровне',
  text: 'Если что-то пошло не так, мы всегда вернем вам деньги.'
}, {
  imageUrl: block3,
  bold: 'Быстрый обмен',
  text: 'Мы обеспечим не только надежность и лучший курс, но и за быстрый обмен.'
}, {
  imageUrl: block4,
  bold: 'Много направлений обмена',
  text: 'Совершаем обмены в самых популярных направлениях. Вы всегда сможете обменять свои средства.'
}, {
  imageUrl: block5,
  bold: '100% гарантия обмена',
  text: 'Многочисленные положительные отзывы подтверждают высокое качество нашей работы.'
}, {
  imageUrl: block6,
  bold: 'Экономичный обмен',
  text: 'У нас всегда лояльные курсы. Мы всегда открыты к сотрудничеству, обращайтесь.'
}]

export default Vue.extend({
  data () {
    return {
      cards
    }
  }
})
</script>

<style scoped lang="scss">
.template {
    background-color: white;
    margin: 40px 0;
    padding: 40px 0;
}

.cards-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.card {
    display: flex;
    flex-direction: column;
    max-width: 368px;
    width: 100%;
    align-items: center;
    text-align: center;
}

.card img {
    width: 70px;
    height: 70px;
}

.card strong {
    margin: 15px 0;
    font-size: 18px;
}

.card p {
    font-size: 14px;
}

@media(max-width: 755px) {
    .cards-container {
        justify-content: center;
    }
}
</style>
