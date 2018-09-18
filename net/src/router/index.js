import Vue from 'vue'
import Router from 'vue-router'
import firstChild from '@/components/firstChild'
import secondChild from '@/components/secondChild'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/firstChild',
      name: 'firstChild',
      component: firstChild
    },
    {
      path: '/secondChild',
      name: 'secondChild',
      component: secondChild
    }
  ]
})
