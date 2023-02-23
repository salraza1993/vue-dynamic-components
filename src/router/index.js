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
    {
      path: '/elements/select',
      name: 'select',
      meta: { layout: "aside" },
      component: () => import('@/views/SelectView.vue')
    },
    {
      path: '/elements/textarea',
      name: 'textarea',
      meta: { layout: "aside" },
      component: () => import('@/views/TextareaView.vue')
    },
    {
      path: '/elements/switcher',
      name: 'switcher',
      meta: { layout: "aside" },
      component: () => import('@/views/SwitcherView.vue')
    },
    {
      path: '/elements/checkbox',
      name: 'checkbox',
      meta: { layout: "aside" },
      component: () => import('@/views/CheckboxView.vue')
    },
    {
      path: '/elements/radio',
      name: 'radio',
      meta: { layout: "aside" },
      component: () => import('@/views/RadioView.vue')
    },
    {
      path: '/elements/alert',
      name: 'alert',
      meta: { layout: "aside" },
      component: () => import('@/views/AlertView.vue')
    },
    {
      path: '/elements/table',
      name: 'table',
      meta: { layout: "aside" },
      component: () => import('@/views/TableView.vue')
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
