import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [{
    path: '/auth',
    name: 'auth',
    redirect: '/auth/sign-in',
    component: () => import('../views/auth.vue'),
    children: [{
        path: '/auth/sign-in',
        component: () => import('../components/Login.vue')
      },
      {
        path: '/auth/registration',
        component: () => import('../components/Registration.vue')
      },
      {
        path: '/auth/reset',
        component: () => import('../components/ResetLogin.vue')
      },
      {
        path: '/auth/reset-success/*',
        component: () => import('../components/ResetSend.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/wayPeak',
    component: () => import('../views/wayPeak.vue')
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

export default router