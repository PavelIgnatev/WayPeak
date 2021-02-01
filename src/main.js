import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/sass/style.sass'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueMeta)

firebase.initializeApp({
  apiKey: "AIzaSyCHGLOjLui4ziKJYlUax-LVnVBHXPBmAvU",
  authDomain: "peakwaypeak.firebaseapp.com",
  projectId: "peakwaypeak",
  storageBucket: "peakwaypeak.appspot.com",
  messagingSenderId: "66684400983",
  appId: "1:66684400983:web:9f1f56d7ee2fee1819ba12",
  measurementId: "G-LVJSEBD3MZ"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app){
    app = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')}

})

