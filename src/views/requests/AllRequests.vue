<template>
<v-container grid-list-md>
<v-layout row wrap>
  <v-flex  v-for="request in requests" :key="request.id" xs12 sm4 class="pl-12">
    <v-card class="mt-5">
      <v-card-title class="justify-center">
        <h2>{{request.author.firstName}} {{request.author.surName}}</h2>
      </v-card-title>
      <v-card-text>
        <p>
          Аудитория: {{request.audience}}
        </p>
        <p>
          Ответственный: {{request.responcible}}
        </p>
        <p v-if="request.status != true" style="color:red">
          Не выполнено
        </p>
        <p v-else style="color:green">
          Выполнено
        </p>
      </v-card-text>
      
    </v-card>
  </v-flex>
</v-layout>
</v-container>
</template>
<script>
import requestsApi from '@/api/requestsApi';
export default{
  mounted(){
    this.getRequests();
  },
  data(){
    return{
    requests: Array,
    }
  },
  methods:{
    async getRequests(){
      const requestsData = await requestsApi.getRequests();
      this.requests = requestsData.data
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