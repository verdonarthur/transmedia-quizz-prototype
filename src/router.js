import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/results',
      name: 'results',
      component: () => import('./views/Results.vue')
    },
    {
      path: '/questions/1',
      component: () => import('./views/Question-1.vue')
    },
    {
      path: '/questions/2',
      component: () => import('./views/Question-2.vue')
    },
    {
      path: '*',
      component: Home
    }

  ]
})
