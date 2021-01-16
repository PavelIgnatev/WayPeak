import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../layouts/auth.vue'),
    redirect: '/auth/sign-in',
    children: [{
        path: '/auth/sign-in',
        component: () => import('../components/login/Login.vue')
      },
      {
        path: '/auth/registration',
        component: () => import('../components/login/Registration.vue')
      },
      {
        path: '/auth/reset',
        component: () => import('../components/login/ResetLogin.vue')
      },
      {
        path: '/auth/reset-success',
        component: () => import('../components/login/ResetSend.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../layouts/home.vue'),
    children: [
    {
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
      path:'/media',
      component: () => import('../components/home/media.vue')
    }
    
  ]
  },
  {
    path: '/app',
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

export default router