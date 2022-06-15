import axios from 'axios'

import { serverUrl } from "@/api/resource"


export default {
    async getUsers(page){
        return await axios
        .get(serverUrl + '/users?page='+page, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
          .catch(error => console.log(error))
    },
    async getUser(username){
        return await axios
        .get(serverUrl + '/users/' + username, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
          .catch(error => console.log(error))
    },
    async searchUser(username){
      return await axios
      .get(serverUrl + '/users?userName=' + username, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
        .catch(error => console.log(error))
  },
  async deleteUser(username){
    return await axios
    .delete(serverUrl + '/admin/users/' + username, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
      .catch(error => console.log(error))
  },
  async changeUser(user){
    return await axios
    .put(serverUrl + '/admin/users/' + user.userName,user,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
      .catch(error => console.log(error))
  },
}