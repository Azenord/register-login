<template>
  <v-app>
    <Navbar/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>
<script>
import Navbar from "./components/Navbar.vue";

  export default {
    name: "App",
    data: () => ({}),
    components: { Navbar},
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn},
    },
    methods: {
      created: function () {
        this.$http.interceptors.response.use(undefined, function (err) {
          return new Promise(function (resolve, reject) {
          if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            this.$store.dispatch("logout")
          }
          throw err;
          });
        });
      }
    },
  }
</script>
<style>
#app{
  background-image: url(@/assets/bg5.jpg);
  background-size:cover;
}
</style>