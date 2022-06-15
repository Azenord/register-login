<template>
  <v-container fl>
    <v-row justify="center">
      <v-col cols="6">
        <v-card elevation="0" outlined class="mb-6">
          <v-card-title class="text-h4">
            <b>Список заявок</b>
            <v-spacer></v-spacer>
            <v-card elevation="0" outlined class="px-3 py-3">
              
              <v-text-field
                  outlined
                  append-icon="mdi-magnify"
                  v-model="searchArg"
                  label="Найти заявку"
                  single-line
                  hide-details
                  @click:append="search"
              ></v-text-field>
            </v-card>
          </v-card-title>
        </v-card>
        
        <requests-list :requests="requests"/>
      <v-btn v-if="showBtnPagination" class="more" @click="loadMore()">
      Ещё
      </v-btn>
      </v-col>
      
    </v-row>
    
  </v-container>
  
</template>
<script>
import RequestsList from "@/components/RequestsList";
import requestsApi from "@/api/requestsApi";
export default{
  name: "Requests",
  components: {
    RequestsList
  },
  async created() {
    try{
      const response = await requestsApi.getRequests()
      this.requests = response.data
      this.showBtnPagination = this.requests.length === 10 ? true : false
    }catch (e) {
      console.log(e)
    }
  },
  data(){
    return{
      requests: Array,
      searchArg: '',
      showBtnPagination: true,
      page: 0
    }
  },
  methods:{
    async search() {
      const response = await requestsApi.searchUser(this.searchArg)
      this.users = response.data
    },
    async loadRequests(){
      try{
        const response = await requestsApi.getRequests(this.page)
        return response.data
      }catch (e) {
        console.log(e)
        await this.$router.push('/')
      }
    },
    async loadMore(){
      try{
        this.page++
        const addRequests = await this.loadRequests()
        this.requests = this.requests.concat(addRequests)
        
        if(addRequests.length === 10)
          this.showBtnPagination = true
        else
          this.showBtnPagination = false
      }catch (e) {
        console.log(e)
        await this.$router.push('/')
      }
    }
  }
}
</script>
<style scoped>
.more{
  width:100%;
  margin-top:5px;
}
</style>