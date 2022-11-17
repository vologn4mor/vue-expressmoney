<template >
  <div class="convert-container">
    <AppCard>
      <h2 class="main-text">Моментальный обмен криптовалют</h2>
      <div class="main-block flex">
        <div class="sell-block">
          <p class="text">ОТПРАВЛЯЕТЕ</p>
          <div class="coin-block flex" v-if="!isSelectSellCoin">
            <input type="text" class="coin-input" v-model="buyCoin">
            <div class="coin-select flex" @click="isSelectSellCoin = !isSelectSellCoin" >
              <div class="arrow"></div>
              <p class="code-text">{{getPair.codeGive}}</p>
              <img :src="getSellImage" alt="" class="coin-icon">
            </div>
          </div>
          <div class="select-coin" v-else>
            <div class="coin-block flex">
              <input
                type="text"
                class="coin-input right"
                placeholder="type a currency"
              >
              <div class="coin-select flex" @click="isSelectSellCoin = !isSelectSellCoin">
                <img :src="SearchIcon" alt="" class="coin-icon">
                <div class="arrow"></div>
              </div>
            </div>
            <div class="select-coin-list">
              <ul class="ul-list">
                <li v-for="item in listSellCoins" class="li-list" :key="item.id" @click="changeSellCoin(item.id)">
                  <img :src="item.imgUrl" class="img-list"/>
                  {{item.name}}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="sum-block">
          <img :src="DoubleArrows" alt="" class="double-arrows" @click="invertPairCoins">
        </div>
        <div class="buy-block">
          <p class="text">ПОЛУЧАЕТЕ</p>
          <div class="coin-select">
            <div class="coin-block flex reverse" v-if="!isSelectBuyCoin">
              <input
                type="text"
                class="coin-input"
                v-model="sellCoin"
              >
              <div class="coin-select flex reverse" @click="isSelectBuyCoin = !isSelectBuyCoin" >
                <div class="arrow"></div>
                <p class="code-text">{{getPair.codeGet}}</p>
                <img :src="getBuyImage" alt="" class="coin-icon">
              </div>
            </div>
            <div class="select-coin" v-else>
              <div class="coin-block flex reverse">
                <input type="text" class="coin-input" placeholder="type a currency">
                <div class="coin-select flex" @click="isSelectBuyCoin = !isSelectBuyCoin">
                  <img :src="SearchIcon" alt="" class="coin-icon">
                  <div class="arrow"></div>
                </div>
              </div>
              <div class="select-coin-list">
                <ul class="ul-list">
                  <li v-for="item in listBuyCoins" class="li-list" :key="item.name" @click="changeBuyCoin(item.name)">
                    <img :src="item.imgUrl" class="img-list"/>
                    {{item.name}}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import AppCard from '@/components/ui/AppCard.vue'

import SearchIcon from '@/assets/images/search.svg'
import DoubleArrows from '@/assets/images/doubleArrows.svg'

import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from "vuex";

export default Vue.extend({
  name: 'AppConvert',
  data () {
    return {
      SearchIcon,
      DoubleArrows,
      isSelectSellCoin: false,
      isSelectBuyCoin: false
    }
  },
  methods: {
    ...mapMutations('coins', {
      changeGiveCoin: 'changeGiveCoin',
      changeGetCoin: 'changeGetCoin',
      changeBuyCoinValue: 'changeBuyCoinValue',
      changeSellCoinValue: 'changeSellCoinValue'
    }),
    ...mapActions('coins', {
      invertPairCoins: 'invertPairCoins',
      changeSellCoin: 'changeSellCoin',
      changeBuyCoin: 'changeBuyCoin'
    }),
    changeSellCoin (id : number) {
      // this.changeGiveCoin(id)
      // this.isSelectSellCoin = false
      this.$store.dispatch('coins/changeSellCoin', id)
      // this.changeSellCoin()
      this.$data.isSelectSellCoin = false
    },
    changeBuyCoin (name: string) {
      // this.changeGetCoin(name)
      // this.isSelectBuyCoin = false
      this.$store.dispatch('coins/changeBuyCoin', name)
      this.$data.isSelectBuyCoin = false
    }
  },
  computed: {
    ...mapGetters('coins', {
      getPair: 'getPair',
      getSellImage: 'getSellImage',
      getBuyImage: 'getBuyImage',
      listSellCoins: 'listSellCoins',
      listBuyCoins: 'listBuyCoins',
      getSellCoinValue: 'getSellCoinValue',
      getBuyCoinValue: 'getBuyCoinValue'
    }),
    buyCoin: {
      get () {
        return this.getSellCoinValue
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
          // this.$store.changeBuyCoinValue(0)
          this.$store.commit('coins/changeBuyCoinValue', 0)
        }
        // this.changeSellCoinValue(result)
        this.$store.commit('coins/changeSellCoinValue', result)
      }
    },
    sellCoin: {
      get () {
        return this.getBuyCoinValue
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
          // this.changeSellCoinValue(0)
          this.$store.commit('coins/changeSellCoinValue', 0)
        }
        // this.changeBuyCoinValue(result)
        this.$store.commit('coins/changeBuyCoinValue', result)
      }
    }
  },
  components: {
    AppCard
  }
})
</script>

<style scoped lang="scss">
  input {
    outline:none;
    width: 100%;
        //border-bottom-width: 2px;
        //border-bottom-style: solid;
        //border-bottom-color: lightgray;
  }
  .flex {
    display: flex;
  }
  .convert-container {
    width: 100%;
  }
  .main-text {
    text-align: center;
    font-size: 2.2em;
    font-weight: 400;
  }
  .main-block {
    justify-content: center;
    width: 100%;
  }
  .coin-icon {
    width: 30px;
  }
  .arrow {
    border: 5px solid transparent; border-top: 5px solid lightgray;
    margin-top: 5px;
  }
  .coin-select {
    align-items: center;
  }
  .coin-select:hover {
    cursor: pointer;
  }
  .coin-block {
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: lightgray;
    padding: 5px;
  }
  .sell-block, .buy-block {
    max-width: 300px;
    width: 100%;
    justify-content: space-between;
  }
  .right {
    text-align: right;
  }
  .img-list {
    width: 30px;
    padding-right: 5px;
  }
  .li-list {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #6377f7;
  }
  .li-list:hover {
    cursor: pointer;
    color: #1976d2;
  }
  .ul-list {
    background-color: white;
    position: absolute;
    overflow: hidden;
    max-height: 200px;
    height: fit-content;
    overflow-y: scroll;
    width: 310px;
    padding: 10px;
  }
  .text {
    text-align: center;
  }
  //.ul-list::-webkit-scrollbar {
  //  width: 10px;
  //  background-color: #f9f9fd;
  //}
  .double-arrows {
    width: 39px;
    height: 39px;
    margin-top: 40px;
  }
  .code-text {
    margin: 0 5px;
  }
  .reverse {
    flex-direction: row-reverse;
  }
</style>
