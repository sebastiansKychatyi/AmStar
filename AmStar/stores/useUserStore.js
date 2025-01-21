// stores/useUserStore.js
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
      localStorage.setItem('user', JSON.stringify(userData));
      console.log('User stored:', this.email, this.password);
    },
    loadUser() {
      const savedUser = JSON.parse(localStorage.getItem('user'));
      if (savedUser) {
        this.email = savedUser.email;
        this.password = savedUser.password;
        console.log('Loaded user from localStorage:', savedUser);
      } else {
        console.log('No user found in localStorage');
      }
    },
    clearUser() {
      this.email = '';
      this.password = '';
      localStorage.removeItem('user');
      console.log('User cleared');
    },
  },
});
