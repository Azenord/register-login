<template>
 <v-layout align-center justify-center row fill-height>
        <v-col :cols="10"  md="6" offset="1" offset-md="0">
            <v-card shaped elevation="20" class="px-16 pt-8 pb-16">
            <v-card-title class="pl-0
              text-h6       
              text-md-h3         
              text-lg-h2         
              text-xl-h2
            ">Изменение заявки</v-card-title>
            <v-card-text class="pl-0
              text-h6            
              text-md-h5         
              text-lg-h4         
              text-xl-h4
            ">
            <v-text-field
            class="pt-5"
                v-model="audience"
                label="Аудитория"
                outlined
            ></v-text-field>
            <v-text-field
                v-model="status"
                label="Статус"
                outlined
            ></v-text-field>
           <v-text-field
                v-model="responsible"
                label="Ответственный"
                outlined
            ></v-text-field>
            <v-text-field
                v-model="description"
                label="Описание"
                outlined
            ></v-text-field>
            </v-card-text>
                <v-form>    
                    <v-btn
                        color="green"
                        style="color:white"
                        @click="changeEquip"
                    >
                        Изменить
                    </v-btn>
                </v-form>
            </v-card>
        </v-col>
    </v-layout>    
</template>
<script>
import equipmentApi from '@/api/equipmentApi';
import usersApi from '@/api/usersApi';
export default{
    async mounted(){
        getTech();
    },
    data(){
        return{
            data:Array,
            audience:localStorage.getItem('requestAudience'),
            status:localStorage.getItem('requestStatus'),
            description:localStorage.getItem('requestDesc')
        }
    },
    methods:{
        async getTech(){

        }
    }
}
</script>