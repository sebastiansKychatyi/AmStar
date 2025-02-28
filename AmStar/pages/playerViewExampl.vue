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
          <div class="team-block">
            <img class="team-logo" src="~/assets/images/AmStar-Logos2.svg" alt="First Team Logo" />
            <p class="team-caption">Team 1</p>
          </div>
          <h1 class="score">0 : 0</h1>
          <div class="team-block">
            <img class="team-logo" src="~/assets/images/AmStar-Logos2.svg" alt="Second Team Logo" />
            <p class="team-caption">Team 2</p>
          </div>
        </div>
      </div>
    </div>
</template>
  
<style scoped>
  .profile-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .header-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  
  .player-info {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  .player-logo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .player-text {
    text-align: left;
  }
  
  .player-name {
    font-size: 1.8rem;
    font-weight: 600;
    color: #333;
  }
  
  .player-rating {
    font-size: 1.2rem;
    color: #555;
  }
  
  .bio-area {
    padding: 15px;
    font-size: 1rem;
    color: #444;
    border-top: 1px solid #ddd;
  }
  
  .team-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    border-top: 1px solid #ddd;
  }
  
  .team-logo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .team-info {
    text-align: left;
  }
  
  .team-name {
    font-size: 1.5rem;
    font-weight: 600;
    color: #222;
  }
  
  .player-position {
    font-size: 1.2rem;
    color: #666;
  }
  
  .match-container {
    text-align: center;
    padding: 20px;
    border-top: 1px solid #ddd;
  }
  
  .match-block {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  
  .score {
    font-size: 2rem;
    font-weight: bold;
  }
  
  .team-block {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .team-caption {
    margin-top: 8px;
    font-size: 1rem;
    color: #333;
  }
  
  @media (max-width: 768px) {
    .player-info, .team-container {
      flex-direction: column;
      text-align: center;
    }
  
    .player-text, .team-info {
      text-align: center;
    }
  }
</style>