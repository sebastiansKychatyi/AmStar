import { createRouter, createWebHistory } from 'vue-router';
import RegisterForm from '@/components/RegisterForm.vue';
import PlayerRatingTable from '@/components/PlayerRatingTable.vue';

const routes = [
{
    path: '/',
    name: 'Register',
    component: RegisterForm, // Форма регистрации
},
{
    path: '/player-rating',
    name: 'PlayerRating',
    component: PlayerRatingTable, // Таблица игроков
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
