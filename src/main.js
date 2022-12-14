import Vue from 'vue'
import App from './App.vue'
import router from './config/router'
import store from './config/store'
import "./registerServiceWorker"

import './config/bootstrap'
import './config/msgs'
import './config/axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
