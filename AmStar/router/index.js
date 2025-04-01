// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import RegisterForm from '@/components/RegisterForm.vue'; // Ваш компонент регистрации
import PlayerRatingTable from '@/components/PlayerRatingTable.vue'; // Ваш компонент таблицы игроков

const routes = [
  {
    path: '/',
    name: 'Register',
    component: RegisterForm, // Страница регистрации
  },
  {
    path: '/player-rating',
    name: 'PlayerRating',
    component: PlayerRatingTable, // Страница с таблицей игроков
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
