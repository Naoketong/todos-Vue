import Vue from 'vue'
import VueRouter from 'vue-router'
import Todos from '@/views/Todos'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Root',
    component: Todos,
  },{
    path: '/:id',
    name: 'Filter',
    component: Todos
  }]
})

export default router