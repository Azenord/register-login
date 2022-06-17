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
            <v-combobox
                :items="this.values"
                outlined
                :value="value"
                label="Статус"
                @change="onChangeStatus"
            >
            </v-combobox>
            <v-combobox
                :items="this.items"
                outlined
                :value="this.techValue"
                label="Ответственный"
                @change="onChangeResp"
            >
            </v-combobox>
            <v-combobox
                :items="this.equipment"
                outlined
                multiple
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
                        Изменить
                    </v-btn>
                </v-form>
            </v-card>
        </v-col>
    </v-layout>    
</template>
<script>
import requestsApi from '@/api/requestsApi'
import equipmentApi from '@/api/equipmentApi'
import usersApi from '@/api/usersApi'
export default{
    async beforeCreate(){
        const response = await requestsApi.getTechUser()
            this.data = response.data
            this.data.forEach(element => {
                this.items.push(element.userName)
        });
        const response2 = await equipmentApi.getEquipment(0)
            this.data2 = response2.data
            this.data2.forEach(element => {
                this.equipment.push(element.name)
        });
        if(this.status === "true"){
            this.value = "Выполена"
        }else{
            this.value = "Не выполнена"
        }
        
        this.id = this.id = this.$route.params.id
        const requestData = await requestsApi.getRequest(this.id);
        this.request = requestData.data
    },
    data(){
        return{
            data:Array,
            data2:Array,
            data3:Array,
            request:Array,
            items: [],
            values: [
                "Выполнена",
                "Не выполнена"
            ],
            selEquip:Array,
            value:"",
            techValue:localStorage.getItem('requestResp'),
            equipment: [],
            audience:localStorage.getItem('requestAudience'),
            status:localStorage.getItem('requestStatus'),
            description:localStorage.getItem('requestDesc'),
            profile:Array,
            techProfile:Array,
            id:"",
            create: Array,
        }
    },
    methods:{
        onChangeStatus(changeValue){
            if(changeValue==="Выполнена"){
                this.status = true
            }else{
                this.status = false
            }
        },
        onChangeResp(changeValue1){
            this.techValue = changeValue1
            console.log(this.techValue)
        },
        async change(){
            this.selEquip.forEach(async element => {
                const response = await equipmentApi.getEquipmentByName(element)
                this.data3.push(response.data)
            });
                console.log(this.data3)
            this.profile = this.request.author
            if(this.techValue != null){
            const techData = await usersApi.getUser(this.techValue);
            this.techProfile = techData.data
            }
            const response = await requestsApi.changeRequest(this.id,{"author":this.profile,"audience":this.audience,"equipment":this.data3,"responsible":this.techProfile,"description":this.description,"status":this.status,"id":this.id})
            this.create = response.data
            this.$router.push(`/requests`)
        },
        onChangeEquip(changeValue){
            this.selEquip = ""
            this.selEquip = changeValue
            console.log(this.selEquip)
        }
    },
}
</script>