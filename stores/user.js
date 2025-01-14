import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
state: () => ({
    players: [], // Список игроков
    isAuthenticated: false,
    user: null, // Добавим поле для хранения данных пользователя
}),
actions: {
    addPlayer(player) {
        this.players.push(player);
        this.isAuthenticated = true;
    },
    logout() {
        this.players = [];
        this.isAuthenticated = false;
        this.user = null; // Очистим данные пользователя при выходе
    },
    setUser(userData) {
        this.user = userData; // Установим данные пользователя
        this.isAuthenticated = true; // Пометим, что пользователь авторизован
    },
},
});
