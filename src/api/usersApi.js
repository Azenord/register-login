import axios from 'axios'

import { serverUrl } from "@/api/resource"


export default {
    async getUsers(){
        return await axios
        .get(serverUrl + '/users?size='+1000, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
          .catch(error => console.log(error))
    },
    async getUser(username){
        return await axios
        .get(serverUrl + '/users/' + username, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
          .catch(error => console.log(error))
    },
}