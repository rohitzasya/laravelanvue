<template>
  <div class="login-container">
    <h2 class="text-center">Login</h2>
    <form @submit.prevent="loginUser">
        <!-- Email input -->
        <div data-mdb-input-init class="form-outline mb-4">
            <label class="form-label" for="form2Example1">Email address</label>
            <input type="email" v-model="email" id="email" class="form-control" />
            <div v-if="errors.email" class="error">{{ errors.email }}</div>
        </div>

        <!-- Password input -->
        <div data-mdb-input-init class="form-outline mb-4">
            <label class="form-label" for="form2Example2">Password</label>
            <input type="password" v-model="password" id="password" class="form-control" />
            <div v-if="errors.password" class="error">{{ errors.password }}</div>
        </div>

        <!-- Submit button -->
        <button  type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">Sign in</button>

        <!-- Register buttons -->
        <div class="text-center">
             <p>Not a member? <a href="/register">Register</a></p>
        </div>
    </form>
  </div>
</template>


<script>

import { useToast } from 'vue-toastification';
import axios from "axios";
import { useAuth } from './../useAuth';


export default {
  data() {
    return {
      email: "",
      password: "",
      errors: {},
    };
  },
  computed: {
    isUserAuthenticated() {
      const { isUserAuthenticated } = useAuth();
      return isUserAuthenticated.value;
    },
  },
  methods: {
    validateInput() {
      this.errors = {}; // Reset errors
      let valid = true;

      // Validate email
      if (!this.email) {
        this.errors.email = "Email is required.";
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(this.email)) {
        this.errors.email = "Email is invalid.";
        valid = false;
      }

      // Validate password
      if (!this.password) {
        this.errors.password = "Password is required.";
        valid = false;
      } else if (this.password.length < 6) {
        this.errors.password = "Password must be at least 6 characters long.";
        valid = false;
      }

      return valid;
    },



    async loginUser() {
        const toast = useToast();
        const { login } = useAuth();

        if (!this.validateInput()) {
            return; // Stop if validation fails
        }

        try {
            const response = await axios.post("/api/login", {
            email: this.email,
            password: this.password,
            });
            // Store the token in local storage
            login(response.data.token);
            localStorage.setItem("token", response.data.token);
            // Redirect to home component
            toast.success('Login successful!');
            this.$router.push("/dashboard");
        } catch (error) {
            if (error.response) {
            this.errors = error.response.data;
            toast.error(this.errors.error);// Handle validation errors
            } else {
            console.error("An error occurred:", error);
            }
        }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

.error {
  color: red;
  font-size: 0.9em;
}
</style>
