<script setup>
import { useAuth } from './../useAuth';
import { useRouter } from 'vue-router';

const router = useRouter();
const { isUserAuthenticated, logout } = useAuth();

const logoutUser = () => {
   logout();
   router.push("/login");
};

</script>

<template>
    <nav class="navbar">
        <div class="nav-container">
            <a href="#" class="logo">Test App</a>
            <ul class="nav-links">
                <li v-if="isUserAuthenticated">
                    <button @click="logoutUser" class="nav-link">Logout</button>
                </li>
                <li v-if="!isUserAuthenticated">
                    <router-link to="/login" class="nav-link">Login</router-link>
                </li>
                <li v-if="!isUserAuthenticated">
                    <router-link to="/register" class="nav-link">Register</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>



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
