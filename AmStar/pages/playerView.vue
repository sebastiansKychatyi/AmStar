<script setup>
import { useUsersStore } from '~/stores/users';
import { useTeamStore } from '~/stores/team'; 
import { ref } from 'vue';

const usersStore = useUsersStore();
const teamStore = useTeamStore();

const showAboutTeam = ref(false);
const showPlayers = ref(false);
const showMoreInformation = ref(false);
</script>

<template>
<div class="profile-container">
    <!-- Верхний блок с фото и основной информацией -->
    <div class="header-container">
        <div class="player-info">
            <img v-if="usersStore.player_logo" :src="usersStore.player_logo" alt="Player Logo" class="player-logo" />
            <div class="player-text">
                <h1 class="player-name">{{ usersStore.first_name }} {{ usersStore.second_name }}</h1>
                <p class="player-rating">Rating: {{ usersStore.player_ratings }}</p>
            </div>
        </div>
    </div>

    <!-- Описание игрока -->
    <div class="bio-area">
        <p>{{ usersStore.bio_player }}</p>
    </div>

    <!-- Информация о команде -->
    <div class="team-container">
        <img v-if="teamStore.TeamLogo" :src="teamStore.TeamLogo" alt="Team Logo" class="team-logo" />
        <div class="team-info">
            <h2 class="team-name">{{ teamStore.TeamName }}</h2>
            <p class="player-position">Position: {{ usersStore.player_position }}</p>
        </div>
    </div>

    <!-- Последний матч -->
    <div class="match-container">
        <h3>Last Match</h3>
        <div class="match-block">
            <div class="team-block team-left">
            <img class="team-logo" src="~/assets/images/AmStar-Logos2.svg" alt="First Team Logo" />
            <p class="team-caption">Team 1</p>
            </div>
                <h1 class="score">0 : 0</h1>
        <div class="team-block team-right">
            <img class="team-logo" src="~/assets/images/AmStar-Logos2.svg" alt="Second Team Logo" />
            <p class="team-caption">Team 2</p>
        </div>
        </div>
    </div>
</div>
</template>

<style scoped>
/* Общий контейнер */
.profile-container {
    max-width: 850px;
    margin: 40px auto;
    padding: 30px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
}

/* Верхний блок */
.header-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

/* Игрок */
.player-info {
    display: flex;
    align-items: center;
    gap: 20px;
}

.player-logo {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.player-text {
    text-align: left;
}

.player-name {
    font-size: 2rem;
    font-weight: bold;
    color: #2c3e50;
}

.player-rating {
    font-size: 1.3rem;
    color: #7f8c8d;
}

/* Био */
.bio-area {
    padding: 20px;
    font-size: 1rem;
    color: #444;
    background: #f8f9fa;
    border-radius: 10px;
    margin-bottom: 20px;
}

/* Команда */
.team-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px 0;
}

.team-logo {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.team-info {
    text-align: left;
}

.team-name {
    font-size: 1.7rem;
    font-weight: bold;
    color: #2c3e50;
}

.player-position {
    font-size: 1.2rem;
    color: #555;
}

/* Матч */
.match-container {
    text-align: center;
    padding-top: 20px;
}

.match-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 10px;
    max-width: 600px;
    margin: 0 auto;
}

.score {
    font-size: 2.2rem;
    font-weight: bold;
    color: #e74c3c;
    min-width: 80px;
    text-align: center;
}

.team-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
}

.team-caption {
    margin-top: 8px;
    font-size: 1rem;
    color: #333;
}

/* Адаптация */
@media (max-width: 768px) {
.profile-container {
    padding: 20px;
}

.player-info, .team-container {
    flex-direction: column;
    text-align: center;
}

.player-text, .team-info {
    text-align: center;
}

.match-block {
    flex-direction: row;
    gap: 10px;
}

.team-logo {
    width: 90px;
    height: 90px;
}

.score {
    font-size: 1.8rem;
}
}
</style>
