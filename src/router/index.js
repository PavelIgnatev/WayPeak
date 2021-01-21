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
        component: () => import('../components/app/All.vue'),
        children: [{path:'/app/all/:id'}]
      },
      {
        path: '/app/completed',
        component: () => import('../components/app/Comlit.vue')
      },
      {
        path: '/app/inbox',
        component: () => import('../components/app/Inbox.vue')
      },
      {
        path: '/app/today',
        component: () => import('../components/app/Today.vue')
      },
      {
        path: '/app/tomorrow',
        component: () => import('../components/app/Tommorow.vue')
      },
      {
        path: '/app/trash',
        component: () => import('../components/app/Trash.vue')
      },
      {
        path: '/app/week',
        component: () => import('../components/app/Week.vue')
      },
      {
        path: '/app/*',
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
      },
      {
        path: '/*',
        component: () => import('../views/PageNotFound.vue')
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