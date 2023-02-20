import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: "default" },
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      meta: { layout: "default" },
      component: () => import('../views/AboutView.vue')
    },
    // {
    //   path: '/elements/:slug',
    //   name: 'elements',
    //   meta: { layout: "aside" },
    //   component: () => import('@/views/ElementsLayout.vue')
    // },
    {
      path: '/elements/',
      redirect: () => {
        return { path: '/' }
      },
    },
    {
      path: '/elements/input',
      name: 'input',
      meta: { layout: "aside" },
      component: () => import('@/views/InputView.vue')
    },
    {
      path: '/elements/button',
      name: 'button',
      meta: { layout: "aside" },
      component: () => import('@/views/ButtonView.vue')
    },
  ]
})

export default router
