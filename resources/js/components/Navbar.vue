<template>
  <nav class="navbar">
    <div class="nav-container">
      <a href="#" class="logo">Test App</a>

    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';
import { useToast } from 'vue-toastification';

export default {
    computed: {
        isUserAuthenticated() {
            return localStorage.getItem('token') !== null;
        }
    },
  methods: {
    logout() {
      const toast = useToast();
      localStorage.removeItem('token');
      this.$router.push('/login');
      toast.success('You have been logged out successfully.');
      location.reload()
    }
  }
};
</script>


<style scoped>
/* Navbar styling */
.navbar {
  background-color: #333;
  padding: 1rem;
}

.nav-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
}

.nav-links {
  list-style: none;
  display: flex;
}

.nav-links li {
  margin-left: 1rem;
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.nav-links a:hover {
  text-decoration: underline;
}
</style>
