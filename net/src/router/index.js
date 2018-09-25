import Vue from 'vue'
import Router from 'vue-router'
import Mock from  '@/components/mockTest.vue'
import mock_CRUD from  '@/components/mock_CRUD/mock_CRUD.vue'
import firstChild from '@/components/firstChild'
import secondChild from '@/components/secondChild'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Mock',
      name: 'Mock',
      component: Mock
    },
    {
      path: '/mock_CRUD',
      name: 'mock_CRUD',
      component: mock_CRUD
    },
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
