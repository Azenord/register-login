<template>
  <v-container fl>
    <v-row justify="center">
      <v-col cols="6">
        <v-card elevation="0" outlined class="mb-6">
          <v-card-title class="text-h4">
            <b>Список оборудования</b>
            <v-spacer></v-spacer>
            <v-card elevation="0" outlined class="px-3 py-3">
              
              <v-text-field
                  outlined
                  append-icon="mdi-magnify"
                  v-model="searchArg"
                  label="Укажите тип"
                  single-line
                  hide-details
                  @click:append="search"
              ></v-text-field>
            </v-card>
          </v-card-title>
        </v-card>
        
        <equip-list :equipment="equipment"/>
      <v-btn v-if="showBtnPagination" class="more" @click="loadMore()">
      Ещё
      </v-btn>
      </v-col>
      
    </v-row>
    
  </v-container>
  
</template>
<script>
import EquipList from "@/components/EquipList";
import equipmentApi from '@/api/equipmentApi';
export default{
  name: "Equipment",
  components: {
    EquipList
  },
  async created() {
    try{
      const response = await equipmentApi.getEquipment()
      this.equipment = response.data
      console.log(this.equipment)
      this.showBtnPagination = this.equpment.length === 10 ? true : false
    }catch (e) {
      console.log(e)
    }
  },
  data(){
    return{
      equipment: Array,
      searchArg: '',
      showBtnPagination: false,
      page: 0
    }
  },
  methods:{
    async search() {
      const response = await equipmentApi.getEquipmentSort(this.searchArg)
      this.equipment = response.data
      console.log(this.equpment);
    },
    async loadEquip(){
      try{
        const response = await equipmentApi.getEquipment(this.page)
        return response.data
      }catch (e) {
        console.log(e)
        await this.$router.push('/')
      }
    },
    async loadMore(){
      try{
        this.page++
        const addEquipment = await this.loadEquip()
        this.equipment = this.equipment.concat(addEquipment)
        
        if(addEqupment.length === 10)
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