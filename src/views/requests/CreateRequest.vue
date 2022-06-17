<template>
 <v-layout align-center justify-center row fill-height>
        <v-col :cols="10"  md="6" offset="1" offset-md="0">
            <v-card shaped elevation="20" class="px-16 pt-8 pb-16">
            <v-card-title class="pl-0
              text-h6       
              text-md-h3         
              text-lg-h2         
              text-xl-h2
            ">Создание заявки</v-card-title>
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
            <v-combobox
                :items="this.equipment"
                outlined
                multiple
                v-model="select"
                label="Оборудование"
                @change="onChangeEquip"
            >
            </v-combobox>
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
                        @click="change"
                    >
                        Создать
                    </v-btn>
                </v-form>
            </v-card>
        </v-col>
    </v-layout>    
</template>
<script>
import equipmentApi from '@/api/equipmentApi';
import requestsApi from '@/api/requestsApi';
import usersApi from '@/api/usersApi';
export default{
    async beforeCreate(){
        const response = await equipmentApi.getEquipment(0)
            this.data = response.data
            this.data.forEach(element => {
                this.equipment.push(element.name)
        });
    },
    data(){
        return{
            equipment:[],
            selEquip:Array,
            data:[],
            profile:Array,
            create:Array,
        }
    },
    methods:{
        async change(){
            this.data = []
            if(this.selEquip != null){
            this.selEquip.forEach(async element => {
                const response = await equipmentApi.getEquipmentByName(element)
                this.data.push(response.data)
            });
            }
            const userData = await usersApi.getUser(localStorage.getItem('user'));
            this.profile = userData.data
            const response = await requestsApi.createRequest({"author":this.profile,"audience":this.audience,"equipment":this.data,"resposible":null,"description":this.description,"status":false})
            this.create = response.data
            await this.$router.push('/requests')
        },
        onChangeEquip(value){
            this.selEquip = ""
            this.selEquip = value
        }
    },
}
</script>