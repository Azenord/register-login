import Vue from 'vue'

import { serverUrl } from "./resource"

const authLogin = Vue.resource(serverUrl + '/login')
const authRegister = Vue.resource(serverUrl + '/registration')
const authLogout = Vue.resource(serverUrl + '/logout')

export default {
    async register(user){
        return await authRegister.save(user)
    },
}