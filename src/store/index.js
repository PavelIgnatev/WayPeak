import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  modules: {
    auth, info
  }
})
