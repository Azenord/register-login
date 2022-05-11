const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  /*devServer:{
    "host": 'localhost',
    "port": 3000,
    allowedHosts:[
      '195.122.251.100:8080'
    ]
  },*/
  transpileDependencies: [
    'vuetify'
  ]
})
