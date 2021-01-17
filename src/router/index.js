import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import firebase from 'firebase/app'
const routes = [{
    path: '/auth',
    name: 'auth',
    component: () => import('../layouts/auth.vue'),
    meta: {
      layout: 'auth'
    },
    redirect: '/auth/sign-in',
    children: [{
        path: '/auth/sign-in',
        component: () => import('../components/auth/Login.vue')
      },
      {
        path: '/auth/registration',
        component: () => import('../components/auth/Registration.vue')
      },
      {
        path: '/auth/reset',
        component: () => import('../components/auth/ResetLogin.vue')
      },
      {
        path: '/auth/reset-success',
        component: () => import('../components/auth/ResetSend.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../layouts/home.vue'),
    children: [{
        path: '/company',
        component: () => import('../views/PageNotFound.vue')
      },
      {
        path: '/about',
        component: () => import('../components/home/about.vue')
      },
      {
        path: '/support',
        component: () => import('../components/home/support.vue')
      },
      {
        path: '/media',
        component: () => import('../components/home/media.vue')
      }

    ]
  },
  {
    path: '/app',
    meta: {
      layout: 'appMain',
      auth: true
    },
    component: () => import('../layouts/appMain.vue')
  },
  {
    path: '/:randomSearchName(.*)',
    component: () => import('../views/PageNotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)

  if(requireAuth && !currentUser){
    next('/auth')
  }else{
    next()
  }
})

export default router