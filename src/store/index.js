import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  // 在里面存放的就是全局共享的数据
  state: {
    user: {},
    cookie: '',
    uId: ''
  },
  mutations: {
    addUser (store, obj) {
      store.user = obj
      store.cookie = store.user.cookie
      store.uId = store.user.account.id
    }
  }
})
