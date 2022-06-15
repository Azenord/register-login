<template>
  <v-container fl>
    <v-row justify="center">
      <v-col cols="6">
        <v-card elevation="0" outlined class="mb-6">
          <v-card-title class="text-h4">
            <b>Список пользователей</b>
            <v-spacer></v-spacer>
            <v-card elevation="0" outlined class="px-3 py-3">
              
              <v-text-field
                  outlined
                  append-icon="mdi-magnify"
                  v-model="searchArg"
                  label="Найти пользователя"
                  single-line
                  hide-details
                  @click:append="search"
              ></v-text-field>
            </v-card>
          </v-card-title>
        </v-card>
        
        <users-list :users="users"/>
      <v-btn v-if="showBtnPagination" class="more" @click="loadMore()">
      Ещё
      </v-btn>
      </v-col>
      
    </v-row>
    
  </v-container>
  
</template>
<script>
import UsersList from "@/components/UsersList";
import usersApi from '@/api/usersApi';
export default{
  name: "Users",
  components: {
    UsersList
  },
  async created() {
    try{
      const response = await usersApi.getUsers()
      this.users = response.data
      this.showBtnPagination = this.users.length === 10 ? true : false
    }catch (e) {
      console.log(e)
    }
  },
  data(){
    return{
      users: Array,
      searchArg: '',
      showBtnPagination: true,
      page: 0
    }
  },
  methods:{
    async search() {
      const response = await usersApi.searchUser(this.searchArg)
      this.users = response.data
      console.log(this.users);
    },
    async loadUsers(){
      try{
        const response = await usersApi.getUsers(this.page)
        return response.data
      }catch (e) {
        console.log(e)
        await this.$router.push('/')
      }
    },
    async loadMore(){
      try{
        this.page++
        const addUsers = await this.loadUsers()
        this.users = this.users.concat(addUsers)
        
        if(addUsers.length === 10)
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