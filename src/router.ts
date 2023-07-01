import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import TheHome from './pages/Home/TheHome.vue';
import TheForm from './pages/Contact/TheForm.vue';
import TheAbout from './pages/About/TheAbout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: TheHome,
  },
  {
    path: '/about',
    name: 'About',
    component: TheAbout
  },
  {
    path: '/contact',
    name: 'Contact',
    component: TheForm
  },
];

const router = createRouter({
  history: createWebHistory(), 
  routes
});


export default router;
