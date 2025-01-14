<template>
    <div class="player-rating-table">
    <h2>Player Ranking Table</h2>
        <table>
        <thead>
            <tr>
                <th>First name</th>
                <th>Secondary name</th>
                <th>Team</th>
                <th>rating</th>
            </tr>
        </thead>
            <tbody>
                <tr v-for="(player, index) in players" :key="index">
                    <td>{{ player.firstName }}</td>
                    <td>{{ player.lastName }}</td>
                    <td>{{ player.team }}</td>
                    <td>{{ player.rating }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "PlayerRatingTable",
    data() {
        return {
        players: [
            { firstName: "Ivan", lastName: "Ivanov", team: "Lunaisk", rating: 2575 },
            { firstName: "Alex", lastName: "Kychatyi", team: "Dymonar", rating: 2425 },
            { firstName: "Maria", lastName: "Kuhutka", team: "Yeskobs", rating: 2350 },
            { firstName: "Dmitro", lastName: "Kuznechov", team: "Lokomotev", rating: 2750 },
            { firstName: "Anya", lastName: "Romanchenko", team: "Krasnodar", rating: 2800 },
        ],
        };
    },
};
</script>

<style scoped>
.player-rating-table {
    margin: 2rem 0;
}

h2 {
    text-align: center;
    margin-bottom: 1rem;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
    font-size: 1rem;
}

table th,
table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

table th {
    background-color: #f4f4f4;
    font-weight: bold;
}

table tr:nth-child(even) {
    background-color: #f9f9f9;
}

table tr:hover {
    background-color: #f1f1f1;
}

table td {
    font-weight: normal;
}
</style>
