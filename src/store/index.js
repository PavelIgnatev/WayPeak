import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
import header from './header'
import inbox from './inbox'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  modules: {
    auth, info, header, inbox
  }
})
