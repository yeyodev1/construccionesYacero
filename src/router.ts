import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import TheHome from './pages/Home/TheHome.vue';
import TheForm from './pages/Contact/TheForm.vue';
import TheAbout from './pages/About/TheAbout.vue';
import TheProject from './pages/Project/TheProject.vue';

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
  {
    path: '/project/:project',
    name: 'Project',
    component: TheProject
  },
];

const router = createRouter({
  history: createWebHistory(), 
  routes
});


export default router;
