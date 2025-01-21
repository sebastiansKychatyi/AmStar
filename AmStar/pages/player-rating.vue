<template>
  <div class="player-rating">
    <div v-if="user" class="welcome-message">
      <h1>Welcome, {{ user.email }}!</h1>
      <p>We’re glad to see you here.</p>
    </div>
    <div v-else class="no-user">
      <h1>No user is logged in.</h1>
      <p>Please log in to view your player rating.</p>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '~/stores/user';

export default {
  setup() {
    const userStore = useUserStore();
    const user = userStore.user; // Получаем данные пользователя из Pinia

    return {
      user,
    };
  },
};
</script>
pages -> player-rating.vue
<style scoped>
.player-rating {
  text-align: center;
  margin-top: 50px;
}

.welcome-message h1 {
  color: #4CAF50;
}

.no-user h1 {
  color: #FF5722;
}

p {
  font-size: 1.2em;
  color: #555;
}
</style>
