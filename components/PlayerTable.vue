<template>
    <div class="player-table">
        <h2>Player Rankings</h2>
        <table class="table table-striped">
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
    </div>
</template>

<script lang="ts">
import { useUserStore } from "~/stores/user";

export default {
    name: "PlayerTable",
    computed: {
        players() {
            const userStore = useUserStore();
            return userStore.players;
        },
    },
};
</script>

<style scoped>
.table {
    margin-top: 20px;
}
</style>