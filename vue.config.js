const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  /*devServer:{
    "host": 'localhost',
    "port": 3000,
    allowedHosts:[
      '*'
    ]
  },*/
  transpileDependencies: [
    'vuetify'
  ]
})
