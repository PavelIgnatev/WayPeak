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
    path: '/app',
    redirect: 'app/all',
    meta: {
      layout: 'appMain',
      auth: true
    },
    component: () => import('../layouts/appMain.vue'),
    children: [{
        path: '/app/all',
        components: {
          a: () => import('../components/app/All.vue'),
          b: () => import('../components/appRight/blockRight.vue')
        },
        children: [{
          path: '/app/all/:id'
        }, ]
      },
      {
        path: '/app/completed',
        components: {
          a: () => import('../components/app/Comlit.vue'),
          b: () => import('../components/appRight/blockRight.vue')
        },
        children: [{
          path: '/app/completed/:id'
        }]
      },
      {
        path: '/app/inbox',
        components: {
          a: () => import('../components/app/Inbox.vue'),
          b: () => import('../components/appRight/blockRight.vue')
        },
        children: [{
          path: '/app/inbox/:id'
        }]
      },
      {
        path: '/app/trash',
        components: {
          a: () => import('../components/app/Trash.vue'),
          b: () => import('../components/appRight/blockRight.vue')
        },
        children: [{
          path: '/app/trash/:id'
        }]
      },
      {
        path: '/app/search',
        components: {
          a: () => import('../components/app/Search.vue'),
          b: () => import('../components/appRight/blockRight.vue')
        },
        children: [{
          path: '/app/search/:id'
        }]
      },
      {
        path: '/app/*',
        redirect: '/app/all'
      }
    ]
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../layouts/home.vue'),
    redirect: '/main',
    children: [
      {
        path: '/about',
        component: () => import('../components/home/about.vue')
      },
      {
        path: '/support',
        component: () => import('../components/home/support.vue')
      },
      {
        path: '/',
        component: () => import('../components/home/MainHome.vue')
      },
      {
        path: '/*',
        redirect: '/'
      }
    ],
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)

  if (requireAuth && !currentUser) {
    next('/auth')
  } else {
    next()
  }
})

export default router