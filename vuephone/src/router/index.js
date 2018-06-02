import Vue from 'vue'
import Router from 'vue-router'
import Initial from '@/components/Initial'
import kind from '@/components/kind'
import find from '@/components/find'
import me from '@/components/me'

import kind1 from '@/components/kind/kind1'
import kind2 from '@/components/kind/kind2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Initial',
      name: 'Initial',
      component: Initial
    },{
      path: '/kind',
      name: 'kind',
      component: kind,
      children:[{
      	path: '/kind1',
      	name: 'kind1',
      	component: kind1
      }]
    },{
      path: '/kind2',
      name: 'kind2',
      component: kind2
    },{
      path: '/me',
      name: 'me',
      component: me
    },{
      path: '/find',
      name: 'find',
      component: find
    }
  ]
})
