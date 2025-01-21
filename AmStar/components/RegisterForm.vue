
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
                <v-img src="~/assets/images/AmStar-Logos2.svg" alt="logo" />
                <v-img src="/assets/images/AmStar-Logos2.svg" class="d-none" alt="logo" />
              </div>
              <div class="title">
                <h1 class="fw-semibold">Sign up to AmStar</h1>
              </div>
              <form @submit.prevent="submitForm">
                <div class="trezo-form-group">
                  <v-label class="d-block fw-medium text-black">Email Address</v-label>
                  <v-text-field
                    v-model="email"
                    label="example@AmStar.com"
                    :error="emailError"
                    @blur="validateEmailInput"
                  ></v-text-field>
                  <span v-if="emailError" class="text-danger">{{ emailError }}</span>
                </div>
                <div class="trezo-form-group">
                  <v-label class="d-block fw-medium text-black">Password</v-label>
                  <v-text-field
                    v-model="password"
                    label="Type password"
                    type="password"
                    :error="passwordError"
                    @blur="validatePassword"
                  ></v-text-field>
                  <span v-if="passwordError" class="text-danger">{{ passwordError }}</span>
                </div>
                <div class="trezo-form-group">
                  <v-label class="d-block fw-medium text-black">Confirm password</v-label>
                  <v-text-field
                    v-model="confirmPassword"
                    label="Type password"
                    type="password"
                    :error="confirmPasswordError"
                    @blur="validateConfirmPassword"
                  ></v-text-field>
                  <span v-if="confirmPasswordError" class="text-danger">{{ confirmPasswordError }}</span>
                </div>
                <button type="submit" class="btn btn-primary">
                  Sign Up
                </button>
                <p class="info">
                  By confirming your email, you agree to our
                  <a class="fw-medium" href="#">Terms of Service</a> and that you have read and understood our
                  <a class="fw-medium" href="#">Privacy Policy</a>.
                </p>
                <p class="info">
                  Already have an account?
                  <NuxtLink to="/Authentication/SignIn" class="fw-semibold text-primary">Sign In</NuxtLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
export default {
  name: 'RegisterForm',
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
    validateEmailInput() {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!this.email) {
        this.emailError = 'Email is required.';
      } else if (!emailRegex.test(this.email)) {
        this.emailError = 'Invalid email format.';
      } else {
        this.emailError = '';
      }
    },
    validatePassword() {
      if (!this.password) {
        this.passwordError = 'Password is required.';
      } else if (this.password.length < 8) {
        this.passwordError = 'Password must be at least 8 characters long.';
      } else {
        this.passwordError = '';
      }
    },
    validateConfirmPassword() {
      if (!this.confirmPassword) {
        this.confirmPasswordError = 'Please confirm your password.';
      } else if (this.confirmPassword !== this.password) {
        this.confirmPasswordError = 'Passwords do not match.';
      } else {
        this.confirmPasswordError = '';
      }
    },
    submitForm() {
      this.validateEmailInput();
      this.validatePassword();
      this.validateConfirmPassword();

      if (!this.emailError && !this.passwordError && !this.confirmPasswordError) {
        alert('Form submitted successfully!');
        this.$router.push('/Authentication/form_wizard');
      } else {
        alert('Please fix the errors before submitting the form.');
      }
    },
  },
};
</script>

  

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
