<template>
    <div class="template">
        <div class="content">
            <div class="fiveth-block">
                <h2>Партнеры</h2>
                <div class="partners-block">
                    <a href="/"><img :src="bestchange" alt=""></a>
                    <a href="/"><img :src="exchangesumo" alt=""></a>
                    <a href="/"><img :src="rateex" alt=""></a>
                    <a href="/"><img :src="glazok" alt=""></a>
                    <a href="/"><img :src="okchanger" alt=""></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

// ToDo: орфографическая ошибка Fiveth -> Fifth (в нескольких местах)

import Vue from 'vue'
import bestchange from '@/assets/images/homeFivethBlock/bestchange.gif'
import exchangesumo from '@/assets/images/homeFivethBlock/exchangesumo.png'
import rateex from '@/assets/images/homeFivethBlock/rateex.gif'
import glazok from '@/assets/images/homeFivethBlock/glazok.gif'
import okchanger from '@/assets/images/homeFivethBlock/okchanger.png'

export default Vue.extend({
  data () {
    return {
      bestchange,
      exchangesumo,
      rateex,
      glazok,
      okchanger
    }
  }
})
</script>

<style scoped lang="scss">
.fiveth-block h2 {
    margin-bottom: 20px;
}

.partners-block img {
    margin-right: 20px;
}

.partners-block {
    margin-bottom: 40px;
}
</style>
