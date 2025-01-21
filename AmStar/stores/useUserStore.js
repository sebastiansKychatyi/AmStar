
import { useUserStore } from '~/stores/user';

export default {
  methods: {
    submitForm() {
      this.isSubmitted = true;
      if (
        this.validateEmail(this.email) &&
        this.validatePassword(this.password) &&
        this.password === this.confirmPassword
      ) {
        console.log("Form Submitted");

        const userStore = useUserStore();
        userStore.setUser({
          email: this.email,
          password: this.password,
        });

        const router = useRouter();
        router.push("/Authentication/form_wizard");
      } else {
        console.log("Form Validation Failed");
      }
    },
  },
};
