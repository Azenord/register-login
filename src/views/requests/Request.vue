<template>
 <v-layout align-center justify-center row fill-height>
        <v-col :cols="10"  md="6" offset="1" offset-md="0" >
            <v-card shaped elevation="20" class="px-16 pt-8 pb-16">
            <v-card-title class="pl-0
              text-h6       
              text-md-h3         
              text-lg-h2         
              text-xl-h2
            ">Информация о заявке</v-card-title>
            <v-card-text class="pl-0
              text-h6            
              text-md-h5         
              text-lg-h4         
              text-xl-h4
            ">   
            <v-img
                max-height="7em"
                max-width="7em" 
                src="@/assets/equip.png"
                style="float:right"
            ></v-img> 
                <p class="pt-7">Создатель: {{request.author.surName}} {{request.author.firstName}}</p>
                <p class="pt-3">Аудитория: {{request.audience}}</p>
                <p class="pt-3">Описание: {{request.description}}</p>
                <p v-if="request.responsible === null" class="pt-3">Ответственный: Не назначен</p>
                <p v-else class="pt-3">Ответственный: {{request.responsible}}</p>
                <template>
                    <p v-for="equip in request.equipment" :key="equip.id" class="pt-3">Оборудование: {{equip.name}}</p>
                </template>
                <p v-if="request.status == false" class="pt-3" style="color:red">Статус: Не выполнена</p>
                <p v-else class="pt-3" style="color:green">Статус: Выполнена</p>
            </v-card-text>
                <v-form>    
                    <v-btn
                        color="green"
                        style="color:white"
                        @click="changeRequest"
                    >
                        Изменить
                    </v-btn>
                    <v-btn
                        color="red"
                        style="color:white;margin-left: 5px;"
                        @click="deleteRequest"
                    >
                        Удалить
                    </v-btn>
                </v-form>
            </v-card>
        </v-col>
    </v-layout>    
</template>
<script>
import requestsApi from '@/api/requestsApi';
export default{
  data:function (){

  },
  mounted(){
    this.getRequest();
  },
  data(){
    return{
    request: Array,
    id:""
    }
  },
  methods:{
    async getRequest(){
        this.id = this.$route.params.id
        const requestData = await requestsApi.getRequest(this.id);
        this.request = requestData.data
    },
    async deleteRequest(){
        let isDelete = confirm("Вы действительно хотите удалить эту заявку?");
        if(isDelete){
            this.id = this.$route.params.id
            const requestData = await requestsApi.deleteRequest(this.id);
            this.profile = requestData.data
            this.$router.push('/requests')
        }
    },
    changeRequest(){
        this.id = this.$route.params.id
        localStorage.setItem('requestAudience', this.request.audience)
        localStorage.setItem('requestStatus', this.request.status)
        localStorage.setItem('requestDesc', this.request.description)
        this.$router.push(`/request/change/${this.id}`)
    },
  }
}
</script>