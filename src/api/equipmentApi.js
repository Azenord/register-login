import axios from 'axios'

import { serverUrl } from "./resource"

export default {
    async getEquipment(page){
        return await axios
        .get(serverUrl + '/equipments?page='+page, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
          .catch(error => console.log(error))
    },
    async getEquipmentSort(equip){
        return await axios
        .get(serverUrl + '/equipments?type='+equip, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
          .catch(error => console.log(error))
    },
    async getEquipmentByName(equip){
      return await axios
      .get(serverUrl + '/equipments/'+equip, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
        .catch(error => console.log(error))
  },
  async deleteEquip(name){
    return await axios
    .delete(serverUrl + '/equipments/' + name, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
      .catch(error => console.log(error))
  },
  async changeEquip(name,equip){
    return await axios
    .put(serverUrl + '/equipments/' + name,equip,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
      .catch(error => console.log(error))
  },
  async changeEquip(equip){
    return await axios
    .post(serverUrl + '/equipments/',equip,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
      .catch(error => console.log(error))
  }
}

