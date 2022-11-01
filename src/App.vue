<template>
  <v-app>
    <AppHeader/>
    <div class="app">
      <div class="content">
        <router-view />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from "./components/AppHeader.vue"

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),

  components: {
    AppHeader
  }
})
</script>

<style lang="scss">
$bgColor: #f6f7fc;

  *{
    font-family: "IBM Plex Sans", sans-serif;
  }
  .app {
    background: $bgColor;
  }
  .content {
    max-width: 1150px;
    width: 100%;
    margin: 0 auto;
  }
</style>
