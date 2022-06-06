import axios from 'axios'

import { serverUrl } from "./resource"

export default {
    async getEquipment(){
        return await axios
        .get(serverUrl + '/equipments', { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
          .catch(error => console.log(error))
    },
    async getEquipmentSort(equip){
        return await axios
        .get(serverUrl + '/equipments?type='+equip.type, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
          .catch(error => console.log(error))
    }
}

