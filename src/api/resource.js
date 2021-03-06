import Vue from 'vue'
import VueResource from 'vue-resource'

export let serverUrl = 'http://195.122.251.100:8080'

Vue.use(VueResource)
Vue.http.interceptors.push((request, next) => {
    request.credentials = true;
    next();
});