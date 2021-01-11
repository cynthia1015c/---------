import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'homework1',
    component: () => import('../views/homework1.vue')
  },
  // {
  //   path: '/example2',
  //   name: 'example2',
  //   component: () => import('../views/example2.vue')
  // },
  // {
  //   path: '/example3',
  //   name: 'example3',
  //   component: () => import('../views/example3.vue')
  // },
  {
    path: '/homework2',
    name: 'homework2',
    component: () => import('../views/homework2.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
