import { createRouter, createWebHistory } from 'vue-router';
import Login from './../components/Login.vue';
import Register from './../components/Register.vue';
import Dashboard from './../components/Dashboard.vue';

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Dashboard,
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
      meta: { requiresAuth: true }
    }
  ];


const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('token');
    if ((to.name === 'Login' || to.name === 'Register') && isAuthenticated) {
      next({ name: 'Dashboard' });
    }
    else if (to.meta.requiresAuth && !isAuthenticated) {
      next({ name: 'Login' });
    } else {
      next();
    }
});

export default router;
