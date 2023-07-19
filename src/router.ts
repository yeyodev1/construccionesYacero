import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import TheHome from './pages/Home/TheHome.vue';
import TheForm from './pages/Contact/TheForm.vue';
import TheAbout from './pages/About/TheAbout.vue';
import TheProjects from './pages/Projects/index.vue';

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
    path: '/projects/:projectId',
    name: 'ProjectsPage',
    component: () => import('@/pages/Projects/TheProject.vue')
  },
];

const router = createRouter({
  history: createWebHistory(), 
  routes
});


export default router;
