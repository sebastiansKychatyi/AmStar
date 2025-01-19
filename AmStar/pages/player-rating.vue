<template>
    <div>
      <h1 v-if="user">Welcome, {{ user.email }}</h1>
      <p v-else>No user is logged in.</p>
    </div>
  </template>
  
  <script>
  import { useUserStore } from '~/stores/user';
  
  export default {
    setup() {
      const userStore = useUserStore();
      const user = userStore.user; // Получаем данные пользователя
  
      return {
        user,
      };
    },
  };
  </script>
  