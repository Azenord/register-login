import Vue from 'vue'
import VueResource from 'vue-resource'

export let serverUrl = '*'

Vue.use(VueResource)
Vue.http.interceptors.push((request, next) => {
    request.credentials = true;
    next();
});