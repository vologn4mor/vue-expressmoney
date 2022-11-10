<template>
  <div class="template">
    <div class="content">
      <div class="second-block">
        <div class="card" v-for="card in cards" :key="card.text">
          <div class="image-div">
            <img :src="card.imageUrl" :alt="card.bold" />
          </div>
          <p v-if="card.bold?.length" class="bold">{{ card.bold }}</p>
          <small class="text">{{ card.text }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import block1 from '@/assets/images/homeSecondBlock/block1.png'
import block2 from '@/assets/images/homeSecondBlock/block2.png'
import block3 from '@/assets/images/homeSecondBlock/block3.png'
import block4 from '@/assets/images/homeSecondBlock/block4.png'
import block5 from '@/assets/images/homeSecondBlock/block5.png'
import block6 from '@/assets/images/homeSecondBlock/block6.png'

interface IElement {
  imageUrl: string
  bold?: string
  text: string
}

const cards: IElement[] = [
  {
    imageUrl: block1,
    bold: '12 мин',
    text: 'Время обработки последней заявки'
  },
  {
    imageUrl: block2,
    bold: '30 мин',
    text: 'Среднее время обработки заявки'
  },
  {
    imageUrl: block3,
    bold: '1 мин',
    text: 'Среднее время ответа оператора'
  },
  {
    imageUrl: block4,
    bold: '1 год',
    text: 'Как давно работаем'
  },
  {
    imageUrl: block5,
    bold: '239',
    text: 'Пользователей зарегистрировано'
  },
  {
    imageUrl: block6,
    text: 'Отзывов о нас на Bestchange.ru'
  }
]

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
  background-color: #fff;
}

.second-block {
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
  background-color: #fff;
  padding: 40px 0;
}

.bold {
  font-size: 30px;
  font-weight: bold;
  margin: 0;
}

.text {
  color: gray;
  font-size: 14px;
  line-height: 3px;
}

.card {
  max-width: 180px;
  width: 100%;
}

@media (max-width: 960px) {
  small {
    line-height: 14px;
  }

  .second-block {
    flex-direction: column;
    align-items: center;
  }

  .card {
    margin-bottom: 20px;
    text-align: center;
  }
}
</style>
