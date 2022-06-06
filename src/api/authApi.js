import Vue from 'vue'

import { serverUrl } from "./resource"

const authLogin = Vue.resource(serverUrl + '/login')
const authRegister = Vue.resource(serverUrl + '/registration')

export default {
    async register(user){
        return await authRegister.save(user)
    },
    async login(user){
        return await authLogin.save(user)
    },
}