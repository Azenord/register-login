<template>
 <v-layout align-center justify-center row fill-height>
        <v-col :cols="10"  md="6" offset="1" offset-md="0">
            <v-card shaped elevation="20" class="px-16 pt-8 pb-16">
            <v-card-title class="pl-0
              text-h6       
              text-md-h3         
              text-lg-h2         
              text-xl-h2
            ">Добавление оборудования</v-card-title>
            <v-card-text class="pl-0
              text-h6            
              text-md-h5         
              text-lg-h4         
              text-xl-h4
            ">
            <v-text-field
            class="pt-5"
                v-model="name"
                label="Наименование"
                outlined
            ></v-text-field>
            <v-text-field
                v-model="count"
                label="Количество"
                outlined
            ></v-text-field>
            <v-text-field
                v-model="type"
                label="Тип"
                outlined
                required
            ></v-text-field>
            <v-text-field
                v-model="description"
                label="Описание"
                outlined
                required
            ></v-text-field>
            </v-card-text>
                <v-form>    
                    <v-btn
                        color="green"
                        style="color:white"
                        @click="createEquip"
                        large
                    >
                        Добавить
                    </v-btn>
                </v-form>
            </v-card>
        </v-col>
    </v-layout>    
</template>
<script>
import equipmentApi from '@/api/equipmentApi';
export default{
    async mounted(){
    },
    data(){
        return{
            name:"",
            count:"",
            type:"",
            description:"",
        }
    },
    methods:{
        async createEquip(){
            const equipData = {name:this.name,count:this.count,type:this.type,description:this.description};
            await equipmentApi.createEquip(equipData);
            this.$router.push('/equipment')
        }
    }
}
</script>