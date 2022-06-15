import axios from 'axios'

import { serverUrl } from "@/api/resource"


export default {
    async getRequests(page){
        return await axios
        .get(serverUrl + '/requests?page='+page, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
          .catch(error => console.log(error))
    },
    async getRequest(id){
        return await axios
        .get(serverUrl + '/requests/' + id, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
          .catch(error => console.log(error))
    },
    async deleteRequest(id){
        return await axios
        .delete(serverUrl + '/requests/' + id, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
          .catch(error => console.log(error))
    }
}