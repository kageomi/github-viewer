import Vue from 'vue'
import './style.css'
import App from './App.vue'
import router from './plugins/vue-router'
import vuetify from './plugins/vuetify'

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
