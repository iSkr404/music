import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './plugins/element.js'
import '@/network/axios'
import './common/css/base.css'
import './common/css/global.css'
Vue.config.productionTip = true
// Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
