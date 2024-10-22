<template>
  <div>
    <h1>Welcome to Dashboard!</h1>
    <p v-if="isUserAuthenticated">You are logged in!</p>
    <p v-else>You are not logged in. Please log in to access more features.</p>
  </div>
</template>

<script setup>
import { useAuth } from './../useAuth';
const { isUserAuthenticated } = useAuth();
</script>
