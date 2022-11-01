<template>
  <v-app>
    <AppHeader />
    <div class="app">
      <div class="content">
        <router-view />
      </div>
    </div>
    <AppFooter />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from "./components/AppHeader.vue"
import AppFooter from './components/AppFooter.vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),

  components: {
    AppHeader,
    AppFooter
  }
})
</script>

<style lang="scss">
$bgColor: #f6f7fc;

* {
  font-family: "IBM Plex Sans", sans-serif;
}

.v-application--wrap {
  background: $bgColor;
}

.app {
  padding-top: 90px;
}

.content {
  max-width: 1150px;
  width: 100%;
  margin: 0 auto;
}
</style>
