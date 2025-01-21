import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    email: '',
    password: '',
  }),
  actions: {
    setUser(userData) {
      this.email = userData.email;
      this.password = userData.password;
      // Сохраняем данные в localStorage
      localStorage.setItem('user', JSON.stringify(userData));
      console.log('user store installed', this.email, this.password);
    },
    loadUser() {
      const savedUser = JSON.parse(localStorage.getItem('user'));
      if (savedUser) {
        this.email = savedUser.email;
        this.password = savedUser.password;
      }
    },
  },
});
