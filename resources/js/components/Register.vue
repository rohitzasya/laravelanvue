<template>
  <div class="register-container">
    <h2 class="text-center">Register</h2>
    <form @submit.prevent="registerUser">
        <!-- Full Name input -->
        <div data-mdb-input-init class="form-outline mb-4">
            <label class="form-label" for="form2Example1">Full Name</label>
            <input type="text" v-model="fullname" id="fullname" class="form-control" />
            <div v-if="errors.fullname" class="error">{{ Array.isArray(errors.fullname) ? errors.fullname[0] : errors.fullname }}</div>
        </div>

        <!-- Email input -->
        <div data-mdb-input-init class="form-outline mb-4">
            <label class="form-label" for="form2Example1">Email address</label>
            <input type="email" v-model="email" id="email" class="form-control" />
            <div v-if="errors.email" class="error">{{ Array.isArray(errors.email) ? errors.email[0] : errors.email }}</div>
        </div>

        <!-- Password input -->
        <div data-mdb-input-init class="form-outline mb-4">
            <label class="form-label" for="form2Example2">Password</label>
            <input type="password" v-model="password" id="password" class="form-control" />
            <div v-if="errors.password" class="error">{{ Array.isArray(errors.password) ? errors.password[0] : errors.password }}</div>
        </div>

        <!-- Confirm Password input -->
        <div data-mdb-input-init class="form-outline mb-4">
            <label class="form-label" for="form2Example2">Confirm Password</label>
            <input type="password" v-model="password_confirmation" id="password_confirmation" class="form-control" />
            <div v-if="errors.password_confirmation" class="error">{{Array.isArray(errors.password_confirmation) ? errors.password_confirmation[0] : errors.password_confirmation }}</div>
        </div>
        <!-- Submit button -->
        <button  type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">Sign up</button>

        <!-- Register buttons -->
        <div class="text-center">
            <p>Already member? <a href="/login">Login</a></p>
        </div>
    </form>
  </div>
</template>


<script>

import { useToast } from 'vue-toastification';
import axios from "axios";

export default {
  data() {
    return {
      fullname: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: {}
    };
  },
  methods: {

    validateInput() {
      this.errors = {}; // Reset errors
      let valid = true;

      // Validate full name
      if (!this.fullname) {
        this.errors.fullname = "Full name is required.";
        valid = false;
      }

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


      if (!this.password_confirmation) {
        this.errors.password_confirmation = "Please confirm your password.";
        valid = false;
      } else if (this.password_confirmation !== this.password) {
        this.errors.password_confirmation = "Passwords do not match.";
        valid = false;
      }

      return valid;
    },

    async registerUser() {
        const toast = useToast();
        if (!this.validateInput()) {
            return;
        }
        try {
            const response = await axios.post('/api/register', {
            name: this.fullname,
            email: this.email,
            password: this.password,
            password_confirmation: this.password_confirmation
            });

            toast.success(response.data.message);
            this.clearForm();

        } catch (error) {
            if (error.response) {
            this.errors = error.response.data.errors;
            console.log(this.errors, 'here is errors');
            const errorMessages = Object.values(this.errors)
                .flat()
                .join(', ');
            console.log(errorMessages, 'here is errorMesa=sages');
            } else {
                console.error('An error occurred:', error);
            }
        }
    },
    clearForm() {
      this.fullname = "";
      this.email = "";
      this.password = "";
      this.password_confirmation = "";
      this.errors = {};
    }
  }
};
</script>

<style scoped>
.register-container {
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
