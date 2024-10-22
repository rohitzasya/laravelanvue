<template>
  <div id="app">
    <!-- Include the Navbar component here -->
    <Navbar />
    <div class="content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
// Import the Navbar component
import Navbar from './components/Navbar.vue';

export default {
    name: "App",
    components: {
        Navbar
    },
};
</script>

<style>
/* Global styling */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

.content {
  padding: 2rem;
}
</style>
