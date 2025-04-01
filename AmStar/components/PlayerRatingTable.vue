<template>
    <div class="player-rating-table">
        <h1 v-if="currentUser">Welcome, {{ currentUser.firstName }} {{ currentUser.lastName }}!</h1>
        <h2>Player Ratings</h2>
        <table class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Team</th>
                <th>Rating</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(player, index) in players" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ player.firstName }}</td>
                <td>{{ player.lastName }}</td>
                <td>{{ player.team }}</td>
                <td>{{ player.rating }}</td>
            </tr>
        </tbody>
        </table>
        <button @click="logout" class="logout-btn">Logout</button>
    </div>
</template>

<script>
import { useUserStore } from '~/stores/user.js';

export default {
    name: 'PlayerRatingTable',
    data() {
        return {
            players: [
                { firstName: 'Ivan', lastName: 'Ivanov', team: 'Lunaisk', rating: 2575 },
                { firstName: 'Alex', lastName: 'Kychatyi', team: 'Dymonar', rating: 2425 },
                { firstName: 'Maria', lastName: 'Kuhutka', team: 'Yeskobs', rating: 2350 },
                { firstName: 'Dmitro', lastName: 'Kuznechov', team: 'Lokomotev', rating: 2750 },
                { firstName: 'Anya', lastName: 'Romanchenko', team: 'Krasnodar', rating: 2800 },
        ],
        };
    },
    computed: {
        currentUser() {
            const userStore = useUserStore();
            return userStore.user;
        },
    },
    methods: {
        logout() {
            const userStore = useUserStore();
            userStore.logout();
            this.$router.push('/'); // Возвращаемся на главную
        },
    },
};
</script>

<style scoped>
.player-rating-table {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
}
.table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
}
th, td {
    border: 1px solid #ddd;
    padding: 8px;
}
.logout-btn {
    margin-top: 20px;
    background-color: red;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
}
</style>
