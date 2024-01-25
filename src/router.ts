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
    path: '/projects',
    name: 'Projects',
    component: TheProjects
  },
  {
    path: '/projects/:projectId',
    name: 'Projects Detail',
    component: () => import('@/pages/Projects/TheProject.vue')
  },
];

const router = createRouter({
  history: createWebHistory(), 
  routes,
  scrollBehavior(_to, _from, _savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({top: 0})
      }, 0)
    })
  }
});


export default router;
