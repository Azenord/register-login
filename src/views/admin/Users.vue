<template>
<v-container grid-list-md>
<v-layout row wrap>
  <v-flex  v-for="user in profile" :key="user.userName" xs12 sm4 class="pl-12">
    <v-card class="mt-5">
      <v-card-title class="justify-center">
        <h1>{{user.userName}}</h1>
      </v-card-title>
      <v-card-text>
        <p>
          Фамилия: {{user.surName}}
        </p>
        <p>
          Имя: {{user.firstName}}
        </p>
        <p>
          Дата создания: {{user.createdDate}}
        </p>
        <p>
          email: {{user.email}}
        </p>
      </v-card-text>
    </v-card>
  </v-flex>
</v-layout>
</v-container>
</template>
<script>
import usersApi from '@/api/usersApi';
export default{
  mounted(){
    this.getUsers();
  },
  data(){
    return{
    profile: Array,
    }
  },
  methods:{
    async getUsers(){
      const usersData = await usersApi.getUsers();
      this.profile = usersData.data
    }
  }
}
</script>
<style scoped>
p{
  text-align: center;
  font-size: 1.5em;
}
</style>