<template>
  <div
    class="coin"
    @click="changeGiveCoin(id)"
    :class="selectedCoin ? 'selected' : null"
  >
    <div class="coin__block">
      <img :src="imgUrl" :alt="name" class="coin__img" />
      <p>{{ name }}</p>
    </div>
    <div class="coin__arrow">
      <img :src="Arrow" alt="arrow" class="arrow" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Arrow from '@/assets/images/h_arr.png'
import { mapMutations } from 'vuex'

export default Vue.extend({
  data () {
    return {
      Arrow
    }
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    },
    // ToDo: всякие булевы свойства (признаки), логичнее называть соответственно, например, isSelectedCoin
    selectedCoin: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    ...mapMutations('coins', ['changeGiveCoin']),
    clickHandler () {
      console.log(this.id)
    }
  }
})
</script>

<style scoped lang="scss">
p {
  margin: 0;
  padding-left: 10px;
}

.coin__img {
  width: 40px;
  height: 40px;
  margin: 10px;
}

.coin {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  margin-bottom: 2px;
}

.selected {
  background-color: #e7ebfd;
}

.coin:hover {
  cursor: pointer;
  background-color: #e7ebfd;

  .coin__arrow {
    display: block;
  }
}

.coin__block {
  display: flex;
  align-items: center;
}

.coin__arrow {
  margin-right: 5px;
  display: none;
}

.arrow,
.coin__arrow {
  width: 20px;
  height: 20px;
}

@media (max-width: 560px) {
  .coin__block {
    flex-direction: column;
    margin: 0 auto;
  }

  .coin__block p {
    padding-left: 0;
  }
}

@media (max-width: 450px) {
  .coin:hover {
    .coin__arrow {
      display: none;
    }
  }
}
</style>
