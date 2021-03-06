import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    },
  },
  actions: {
    
    login({commit}, user){
      const TOKEN = 'Token';
      return new Promise((resolve, reject) => {
        commit('auth_request')
        
        axios({url: 'http://195.122.251.100:8080/login',data:{
          username: user.username,
          password: user.password
        },header:{
          'Authorization': 'Bearer '+ TOKEN
        }, method: 'POST' })
        .then(resp => {
          const token = resp.data.token
          localStorage.setItem('token', token)
          localStorage.setItem('user', user.username)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token, user)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    logout({commit}){
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
     }
  },
  modules: {
  }
})
