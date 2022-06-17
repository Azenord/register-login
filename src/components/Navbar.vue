<template>
<v-container>
<v-app-bar
      color="#004588"
      dark
      app
  >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <router-link to="/" style="text-decoration: none; color: inherit;">
      <v-img
          max-height="4em"
          max-width="4em" 
          src="@/assets/logoNNGASU.png"
      ></v-img>
      </router-link>
      <router-link to="/" style="text-decoration: none; color: inherit; padding-left: 0.5%;">
          <v-toolbar-title>ННГАСУ | ТРО</v-toolbar-title>
      </router-link>
      <v-spacer/>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
          
          <template v-if="!isLoggedIn">
          <v-list-item-group v-model="group" active-class="orange--text text--accent-4">
            <v-list-item to="/">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Главная</v-list-item-title>
            </v-list-item>

            <v-list-item to="/login">
              <v-list-item-icon>
                <v-icon>mdi-login</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Войти</v-list-item-title>
            </v-list-item>
            
            <v-list-item to="/register">
              <v-list-item-icon>
                <v-icon>mdi-account-plus-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Зарегистрироваться</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
          </template>
          <template v-else>
            <template v-if="this.isAdmin">
            <v-list-item-group v-model="group" active-class="orange--text text--accent-4">
            <v-list-item to="/requests">
              <v-list-item-icon>
                <v-icon>mdi-calendar-account-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Список заявок</v-list-item-title>
            </v-list-item>

            <v-list-item to="/users">
              <v-list-item-icon>
                <v-icon>mdi-account-supervisor</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Список пользователей</v-list-item-title>
            </v-list-item>

            <v-list-item to="/equipment">
              <v-list-item-icon>
                <v-icon>mdi-projector-screen</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Оборудование</v-list-item-title>
            </v-list-item>
            <v-list-item to="/createEquip">
              <v-list-item-icon>
                <v-icon>mdi-monitor</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Добавление оборудования</v-list-item-title>
            </v-list-item>

            </v-list-item-group>
            </template>
          <v-list-item-group v-model="group" active-class="orange--text text--accent-4">

            <v-list-item to="/createRequest">
              <v-list-item-icon>
                <v-icon>mdi-newspaper-plus</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Создание заявки</v-list-item-title>
            </v-list-item>

            <v-list-item to="/profile">
              <v-list-item-icon>
                <v-icon>mdi-account-settings</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Личный кабинет</v-list-item-title>
            </v-list-item>

            <v-list-item @click="logout">
              <v-list-item-icon>
                <v-icon>mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Выйти</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
          </template>
          
      </v-list>
  </v-navigation-drawer>
</v-container>
</template>
<script>
  export default {
    data: () => ({
    drawer: false,
    profile: Array,
    isAdmin:localStorage.getItem("isAdmin"),
    }),
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          localStorage.removeItem("isAdmin")
          this.$router.push('/login')
        })
      },
      
    },
  }
</script>