import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './plugins/element.js'
import '@/network/axios'
import './common/css/base.css'
import './common/css/global.css'
import 'default-passive-events'
import './common/font_h9qrbrrobad/iconfont.css'
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
