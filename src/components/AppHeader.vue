<template>
  <div class="header">
    <div class="content flex">
      <div class="content__left flex">
        <div class="logo">
          <router-link to="/">
            <img :src="logo" alt="logo" />
          </router-link>
        </div>
        <div class="links">
          <ul class="flex links__ul">
            <li v-for="route in routes" :key="route.link">
              <router-link :to="route.link" class="router">
                <span>{{ route.title }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="menu">
        <v-col class="d-flex droplist" cols="12" sm="6">
          <v-select :items="languages" :value="languages[0]" color="#6377f7" dense :single-line="true" outlined>
          </v-select>
          <router-link to="/login" class="btn">
            <span class="btn login">Войти</span>
          </router-link>
          <router-link to="/registration" class="btn">
            <span class="btn reg">Регистрация</span>
          </router-link>
          <v-list>

            <v-menu transition="slide-y-transition" bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-app-bar-nav-icon color="primary" dark v-bind="attrs" v-on="on" class="menu__small" width="30"
                  height="0">

                </v-app-bar-nav-icon>
              </template>
              <v-list>
                <v-list-item v-for="(route, i) in routes" :key="i">
                  <v-list-item-title>
                    <router-link :to="route.link" class="router">
                      {{ route.title }}
                    </router-link>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list>
        </v-col>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import logo from '../assets/images/logo.png'

export default Vue.extend({
  name: 'AppHeader',

  data() {
    return {
      logo: logo,
      languages: [
        {
          text: "RU",
          value: "RU",
        },
        {
          text: "EN",
          value: "EN",
        }
      ],
      routes: [
        {
          title: "Главная",
          link: "/"
        },
        {
          title: "Правила",
          link: "/rules"
        },
        {
          title: "FAQ",
          link: "/faq"
        },
        {
          title: "Отзывы",
          link: "/reviews"
        },
        {
          title: "Контакты",
          link: "/feedback"
        },
      ]
    }
  },

  components: {

  }
})

</script>

<style scoped lang="scss">
$btn-icon-font-size: 44;
$primaryColor: #6377f7;

li {
  list-style-type: none;
  margin: 0 15px;
  font-size: 16px;
}

.links__ul {
  padding: 0;
  padding-bottom: 7px;
}

.router:hover {
  color: $primaryColor;
}

.router.router-link-active {
  color: black;
}

.router.router-link-exact-active {

  color: $primaryColor;
}



.header {
  box-shadow: 0 0 5px #e1e9f2;
  height: 90px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: white;
}

.content {
  max-width: 1150px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}

.content__left {
  align-items: center;
}

.logo {
  width: 300px;
}

.flex {
  display: flex;
}

.router {
  color: black;
  text-decoration: none;
}

.menu {
  text-align: center;
  max-width: 290px;
  width: 100%;
}

.droplist {
  width: 202px;
  height: 70px;
}

.btn {
  text-decoration: none;
  padding: 0 10px;
  border-radius: 4px;
  padding: 8px 0px 0px 10px;

  .reg {
    background-color: #f1c613;
    color: #000;
    padding: 10px;
  }

  .btn.login {
    background-color: $primaryColor;
    color: #fff;
    padding: 10px;
  }
}

.menu__small {
  display: none;
}

@media (max-width: 1040px) {
  .btn {
    display: none;
  }

  .droplist {
    float: right;
  }

  .menu {
    max-width: 200px;
    display: flex;
    justify-content: center;
  }
}

@media(max-width: 960px) {
  .header {
    height: 60px;
  }

  .logo img,
  .logo {
    max-width: 158px;
  }

  .menu__small {
    display: block;
    margin: 0px 0px 20px 20px;
  }

  .v-btn--icon.v-size--default .v-icon,
  .v-btn--fab.v-size--default .v-icon {
    font-size: 44px;
  }

  .menu {
    width: 250px;
  }

  .droplist {
    float: none;
  }

  .links {
    display: none;
  }

  .v-input {
    max-width: 77px;
  }
}
</style>
