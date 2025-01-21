<template>
    <div class="sign-up-area">
      <div class="trezo-form ml-auto mr-auto">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12 order-2 order-lg-1">
            <div class="form-image">
              <v-img src="/assets/images/sign-up.jpg" alt="sign-up-image" />
            </div>
          </div>
          <div class="col-lg-6 col-md-12 order-1 order-lg-2">
            <div class="form-content">
              <div class="logo">
                <v-img src="/assets/images/AmStar-Logos2.svg" alt="logo" />
              </div>
              <div class="title">
                <h1 class="fw-semibold">Sign up to AmStar</h1>
              </div>
              <form @submit.prevent="submitForm">
                <div class="trezo-form-group">
                  <v-label class="d-block fw-medium text-black">Email Address</v-label>
                  <v-text-field v-model="email" label="example@AmStar.com" :error="emailError"></v-text-field>
                </div>
                <div class="trezo-form-group">
                  <v-label class="d-block fw-medium text-black">Password</v-label>
                  <v-text-field v-model="password" label="Type password" type="password" :error="passwordError"></v-text-field>
                </div>
                <div class="trezo-form-group">
                  <v-label class="d-block fw-medium text-black">Confirm password</v-label>
                  <v-text-field v-model="confirmPassword" label="Type password" type="password" :error="confirmPasswordError"></v-text-field>
                </div>
                <button type="submit" class="btn btn-primary">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useUserStore } from '~/stores/user';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        emailError: '',
        passwordError: '',
        confirmPasswordError: '',
      };
    },
    methods: {
      validateEmail() {
        if (!this.email) return 'Email is required.';
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(this.email)) return 'Invalid email format.';
        return '';
      },
      validatePas
  

  

<style scoped>
.register-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
}
label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}
input {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 3px;
}
button {
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}
button:hover {
    background-color: #45a049;
}
</style>
