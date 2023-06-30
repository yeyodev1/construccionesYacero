import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import ('./pages/Home/TheHome.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import ('./pages/About/TheAbout.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import ('./pages/Contact/TheForm.vue')
  }
]

const router = createRouter({
  history: createWebHistory(), 
  routes
})

export default router