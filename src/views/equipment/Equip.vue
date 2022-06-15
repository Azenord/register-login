<template>
 <v-layout align-center justify-center row fill-height>
        <v-col :cols="10"  md="6" offset="1" offset-md="0" >
            <v-card shaped elevation="20" class="px-16 pt-8 pb-16">
            <v-card-title class="pl-0
              text-h6       
              text-md-h3         
              text-lg-h2         
              text-xl-h2
            ">{{name}}</v-card-title>
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
                <p class="pt-7">Количество: {{equip.count}}</p>
                <p class="pt-3">Тип: {{equip.type}}</p>
                <p class="pt-3">Описание: {{equip.description}}</p>
            </v-card-text>
                <v-form>    
                    <v-btn
                        color="green"
                        style="color:white"
                        @click="changeEquip"
                    >
                        Изменить
                    </v-btn>
                    <v-btn
                        color="red"
                        style="color:white;margin-left: 5px;"
                        @click="deleteEquip"
                    >
                        Удалить
                    </v-btn>
                </v-form>
            </v-card>
        </v-col>
    </v-layout>    
</template>
<script>
import equipmentApi from '@/api/equipmentApi';
export default{
  data:function (){

  },
  mounted(){
    this.getEquip();
  },
  data(){
    return{
    equip: Array,
    name:""
    }
  },
  methods:{
    async getEquip(){
        this.name = this.$route.params.equipment
        const equipData = await equipmentApi.getEquipmentByName(this.name);
        this.equip = equipData.data
    },
    async deleteEquip(){
        /*let isDelete = confirm("Вы действительно хотите удалить это оборудование?");
        if(isDelete){
            this.name = this.$route.params.equipment
            const equipData = await equipmentApi.deleteEquip(this.username);
            this.profile = equipData.data
            this.$router.push('/equip')
        }*/
        alert("В разработке");
    },
    changeEquip(){
        this.name = this.$route.params.equipment
        localStorage.setItem('equipName', this.name)
        localStorage.setItem('equipCount', this.equip.count)
        localStorage.setItem('equipType', this.equip.type)
        localStorage.setItem('equipDesc', this.equip.description)
        this.$router.push(`/equip/change/${this.name}`)
    },
  }
}
</script>