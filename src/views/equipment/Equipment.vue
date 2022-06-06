<template>

<v-container grid-list-md>
<v-col
          cols="12"
          sm="6"
          md="3"
        >     
            <v-text-field
            label="type"
            solo
            outlined
          ></v-text-field>
          <v-btn
                        color="warning"
                        @click="getEquipSort"
                        large
                    >
                        Фильтровать
                    </v-btn>
                    </v-col>   
<v-layout row wrap>

  <v-flex  v-for="equip in equipData" :key="equip.name" xs12 sm4>
    <v-card class="mt-5">
      <v-card-title class="justify-center">
        <h1>{{equip.name}}</h1>
      </v-card-title>
      <v-card-text>
        <p>
          Тип: {{equip.type}}
        </p>
        <p>
          Количество: {{equip.count}}
        </p>
        <p>
          Описание: {{equip.description}}
        </p>
      </v-card-text>
    </v-card>
  </v-flex>
</v-layout>
</v-container>
</template>
<script>
import equipmentApi from '@/api/equipmentApi';
export default{
  mounted(){
    this.getEquip();
  },
  data(){
    return{
    type: '',
    equipData: Array,
    }
  },
  methods:{
    async getEquip(){
      const equip = await equipmentApi.getEquipment();
      this.equipData = equip.data
    },
    async getEquipSort(){
      const equip = await equipmentApi.getEquipmentSort({type:this.type});
      this.equipData = equip.data
    }
  }
}
</script>
<style scoped>
p{
  text-align: center;
  font-size: 2em;
}
</style>