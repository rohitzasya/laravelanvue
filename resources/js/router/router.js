import { createRouter, createWebHistory } from 'vue-router';
import Login from './../components/Login.vue';
import Register from './../components/Register.vue';
import Dashboard from './../components/Dashboard.vue';

const routes = [
    {
      path: '/',
      name: 'Home', // Give it a name
      component: Dashboard, // Use any component, here we're using the Dashboard component
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    }
  ];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
