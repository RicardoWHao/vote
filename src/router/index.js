import Vue from 'vue'
import Router from 'vue-router'
import login from '@/vote/login'
import pageTitle from '@/vote/title'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
     {
      path: '/title',
      name: 'page-title',
      component: pageTitle
    }
  ]
})
