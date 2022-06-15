<template>
 <v-layout align-center justify-center row fill-height>
        <v-col :cols="10"  md="6" offset="1" offset-md="0">
            <v-card shaped elevation="20" class="px-16 pt-8 pb-16">
            <v-card-title class="pl-0
              text-h6       
              text-md-h3         
              text-lg-h2         
              text-xl-h2
            ">Пользователь</v-card-title>
            <v-card-text class="pl-0
              text-h6            
              text-md-h5         
              text-lg-h4         
              text-xl-h4
            ">
            <v-img
                max-height="10em"
                max-width="10em" 
                src="@/assets/user2.png"
                style="float:right"
            ></v-img>    
                <p class="pt-7">Фамилия: {{profile.surName}}</p>
                <p class="pt-3">Имя: {{profile.firstName}}</p>
                <p class="pt-3">Имя пользователя: {{profile.userName}}</p>
                <p class="pt-3">Email: {{profile.email}}</p>
                <p class="pt-3">Дата регистрации: {{profile.createdDate}}</p>
            </v-card-text>
                <v-form>    
                    <v-btn
                        color="green"
                        style="color:white"
                        @click="changeUser"
                    >
                        Изменить
                    </v-btn>
                    <v-btn
                        color="orange"
                        style="color:white;margin-left: 5px;"
                        @click="register"
                    >
                        Список заявок
                    </v-btn>
                    <v-btn
                        color="red"
                        style="color:white;margin-left: 5px;"
                        @click="deleteUser"
                    >
                        Удалить пользователя
                    </v-btn>
                </v-form>
            </v-card>
        </v-col>
    </v-layout>    
</template>
<script>
import usersApi from '@/api/usersApi';
export default{
  data:function (){

  },
  mounted(){
    this.getUser();
  },
  data(){
    return{
    profile: Array,
    }
  },
  methods:{
    async getUser(){
        this.username = this.$route.params.username
        const userData = await usersApi.getUser(this.username);
        this.profile = userData.data
    },
    async deleteUser(){
        let isDelete = confirm("Вы действительно хотите удалить этого пользователя? Вместе с пользователем будут удалены все заявки, составленные данным пользователем.");
        if(isDelete){
            this.username = this.$route.params.username
            const userData = await usersApi.deleteUser(this.username);
            this.profile = userData.data
            this.$router.push('/users')
        }
    },
    changeUser(){
        this.username = this.$route.params.username
        this.$router.push(`/users/change/${this.username}`)
    },
  }
}
</script>