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
              <button type="submit">
                <i class="material-symbols-outlined"> person_4 </i>
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
import { ref } from 'vue';
import { useUserStore } from '~/stores/user';
import { useRouter } from 'vue-router';

export default {
  name: 'RegisterForm',
  setup() {
    const router = useRouter();
    
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const emailError = ref('');
    const passwordError = ref('');
    const confirmPasswordError = ref('');

    const validateEmailInput = () => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!email.value) {
        emailError.value = 'Email is required.';
      } else if (!emailRegex.test(email.value)) {
        emailError.value = 'Invalid email format.';
      } else {
        emailError.value = '';
      }
    };

    const validatePassword = () => {
      if (!password.value) {
        passwordError.value = 'Password is required.';
      } else if (password.value.length < 8) {
        passwordError.value = 'Password must be at least 8 characters long.';
      } else {
        passwordError.value = '';
      }
    };

    const validateConfirmPassword = () => {
      if (!confirmPassword.value) {
        confirmPasswordError.value = 'Please confirm your password.';
      } else if (confirmPassword.value !== password.value) {
        confirmPasswordError.value = 'Passwords do not match.';
      } else {
        confirmPasswordError.value = '';
      }
    };

    const submitForm = () => {
      validateEmailInput();
      validatePassword();
      validateConfirmPassword();

      if (!emailError.value && !passwordError.value && !confirmPasswordError.value) {
        console.log('Form Submitted');

        const userStore = useUserStore();
        userStore.setUser({
          email: email.value,
          password: password.value,
        });

        router.push("/Authentication/form_wizard");
      } else {
        console.log('Form Validation Failed');
      }
    };

    // Возвращаем все переменные и методы из setup()
    return {
      email,
      password,
      confirmPassword,
      emailError,
      passwordError,
      confirmPasswordError,
      validateEmailInput,
      validatePassword,
      validateConfirmPassword,
      submitForm
    };
  }
};
</script>


<style lang="scss" scoped>
.sign-up-area {
  background-color: var(--whiteColor);
  padding: {
    top: 135px;
    bottom: 135px;
  }
  &.dark-theme {
    background-color: #0a0e19;
  }
  .trezo-form {
    max-width: 1255px;
    padding: {
      left: 12.5px;
      right: 12.5px;
    }
    .form-image {
      border-radius: 24px;
      margin-right: -25px;

      .v-img {
        border-radius: 24px;
        margin-bottom: -3px;
      }
    }
    .form-content {
      padding-left: 90px;

      .title {
        margin: {
          top: 23px;
          bottom: 23px;
        }
        h1 {
          font-size: 28px;
          margin-bottom: 7px;
        }
        p {
          font-size: 16px;
          color: #445164;
        }
      }
      .with-socials {
        margin-bottom: 23px;

        div {
          flex-grow: 1;
          margin: {
            left: 6px;
            right: 6px;
          }
          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            margin-right: 0;
          }
        }
        button {
          width: 100%;
          height: auto;
          display: block;
          min-width: auto;
          padding: 9px 25px;
          border-radius: 8px;
          color: var(--blackColor);
          border: 1px solid #d6dae1;
          background: var(--whiteColor);
          box-shadow: 0px 4px 16px -2px rgba(27, 37, 51, 0.06);
          .v-responsive {
            justify-content: center !important;
          }
        }
      }
      form {
        .trezo-form-group {
          margin-bottom: 15px;

          .v-label {
            margin-bottom: 12px;
          }
        }
        button {
          width: 100%;
          height: auto;
          min-width: auto;
          padding: 12px 25px;
          border-radius: 7px;
          color: var(--whiteColor);
          background-color: #333;
          align-items: center;
          justify-content: center;

          & {
            font: {
              size: 16px;
              weight: 500;
            }
          }

          i {
            margin-right: 5px;
          }
          & {
            margin: {
              top: 24px;
              bottom: 24px;
            }
          }
        }
        .info {
          line-height: 1.6;

          a {
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
.fw-medium{
  color: #333;
  text-decoration: none;
}
.fw-semibold{
  color: #333 !important;
  text-decoration: none;
}
/* Max width 767px */
@media only screen and (max-width: 767px) {
  .sign-up-area {
    padding: {
      top: 60px;
      bottom: 60px;
    }
    .trezo-form {
      max-width: 100%;

      .form-image {
        border-radius: 15px;
        margin: {
          right: 0;
          top: 25px;
        }
        .v-img {
          border-radius: 15px;
        }
      }
      .form-content {
        padding-left: 0;

        .title {
          margin: {
            top: 17px;
            bottom: 15px;
          }
          h1 {
            font-size: 22px;
          }
          p {
            font-size: 13px;
          }
        }
        .with-socials {
          margin-bottom: 20px;

          div {
            margin: {
              left: 5px;
              right: 5px;
            }
          }
          button {
            padding: 8px 15px;
          }
        }
        form {
          .trezo-form-group {
            .v-label {
              margin-bottom: 10px;
            }
          }
          button {
            padding: 12px 25px;
            font-size: 13px;
            margin: {
              top: 17px;
              bottom: 17px;
            }
            i {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .sign-up-area {
    .trezo-form {
      max-width: 540px;

      .form-content {
        .title {
          margin: {
            top: 20px;
            bottom: 17px;
          }
        }
        form {
          button {
            margin: {
              top: 20px;
              bottom: 20px;
            }
          }
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .sign-up-area {
    padding: {
      top: 80px;
      bottom: 80px;
    }
    .trezo-form {
      max-width: 720px;

      .form-image {
        margin: {
          right: 0;
          top: 25px;
        }
      }
      .form-content {
        padding-left: 0;

        .title {
          margin: {
            top: 20px;
            bottom: 20px;
          }
          h1 {
            font-size: 24px;
          }
          p {
            font-size: 14px;
          }
        }
        .with-socials {
          margin-bottom: 20px;

          div {
            margin: {
              left: 5px;
              right: 5px;
            }
          }
        }
        form {
          button {
            font-size: 14px;
            padding: 12px 25px;
            margin: {
              top: 20px;
              bottom: 20px;
            }
            i {
              font-size: 22px;
            }
          }
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .sign-up-area {
    padding: {
      top: 100px;
      bottom: 100px;
    }
    .trezo-form {
      max-width: 960px;

      .form-image {
        margin-right: 0;
      }
      .form-content {
        padding-left: 15px;

        .title {
          h1 {
            font-size: 26px;
          }
          p {
            font-size: 15px;
          }
        }
        form {
          button {
            font-size: 15px;
            margin: {
              top: 20px;
              bottom: 20px;
            }
          }
        }
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .sign-up-area {
    padding: {
      top: 120px;
      bottom: 120px;
    }
    .trezo-form {
      max-width: 1140px;

      .form-image {
        margin-right: 0;
      }
      .form-content {
        padding-left: 25px;
      }
    }
  }
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
  .sign-up-area {
    .trezo-form {
      .form-image {
        margin-right: -45px;
      }
      .form-content {
        padding-left: 120px;
      }
    }
  }
}
/* Max width 767px (мобильные устройства) */
@media only screen and (max-width: 767px) {
  .sign-up-area {
    padding: {
      top: 60px;
      bottom: 60px;
    }
    .trezo-form {
      max-width: 100%;

      .form-image {
        display: none; /* Скрыть изображение на мобильных устройствах */
      }

      .form-content {
        padding-left: 0;

        .title {
          margin: {
            top: 17px;
            bottom: 15px;
          }
          h1 {
            font-size: 22px;
          }
          p {
            font-size: 13px;
          }
        }

        .with-socials {
          margin-bottom: 20px;

          div {
            margin: {
              left: 5px;
              right: 5px;
            }
          }

          button {
            padding: 8px 15px;
          }
        }

        form {
          .trezo-form-group {
            .v-label {
              margin-bottom: 10px;
            }
          }

          button {
            padding: 12px 25px;
            font-size: 13px;
            margin: {
              top: 17px;
              bottom: 17px;
            }
            i {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .sign-up-area {
    .trezo-form {
      max-width: 540px;

      .form-content {
        .title {
          margin: {
            top: 20px;
            bottom: 17px;
          }
        }

        form {
          button {
            margin: {
              top: 20px;
              bottom: 20px;
            }
          }
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .sign-up-area {
    padding: {
      top: 80px;
      bottom: 80px;
    }
    .trezo-form {
      max-width: 720px;

      .form-image {
        margin: {
          right: 0;
          top: 25px;
        }
      }

      .form-content {
        padding-left: 0;

        .title {
          margin: {
            top: 20px;
            bottom: 20px;
          }
          h1 {
            font-size: 24px;
          }
          p {
            font-size: 14px;
          }
        }

        .with-socials {
          margin-bottom: 20px;

          div {
            margin: {
              left: 5px;
              right: 5px;
            }
          }
        }

        form {
          button {
            font-size: 14px;
            padding: 12px 25px;
            margin: {
              top: 20px;
              bottom: 20px;
            }
            i {
              font-size: 22px;
            }
          }
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .sign-up-area {
    padding: {
      top: 100px;
      bottom: 100px;
    }
    .trezo-form {
      max-width: 960px;

      .form-image {
        margin-right: 0;
      }

      .form-content {
        padding-left: 15px;

        .title {
          h1 {
            font-size: 26px;
          }
          p {
            font-size: 15px;
          }
        }

        form {
          button {
            font-size: 15px;
            margin: {
              top: 20px;
              bottom: 20px;
            }
          }
        }
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .sign-up-area {
    padding: {
      top: 120px;
      bottom: 120px;
    }
    .trezo-form {
      max-width: 1140px;

      .form-image {
        margin-right: 0;
      }
      .form-content {
        padding-left: 25px;
      }
    }
  }
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
  .sign-up-area {
    .trezo-form {
      .form-image {
        margin-right: -45px;
      }

      .form-content {
        padding-left: 120px;
      }
    }
  }
}

</style>
