<script setup>
//ss
import { useTeamStore } from '~/stores/team';
import { ref } from 'vue';

const teamStore = useTeamStore();

// Управляет отображением дополнительной информации при клике на "About Team"
const showAboutTeam = ref(false);
const toggleAboutTeam = () => {
    showAboutTeam.value = !showAboutTeam.value;
};

const showMoreInformation = ref(false);
const toggleMoreInformation = () => {
    showMoreInformation.value = !showMoreInformation.value;
};

const showPlayers = ref(false);
const togglePlayers = () => {
  showPlayers.value = !showPlayers.value;
};
</script>

<template>
  <div class="page-wrapper">
    <!-- Верхняя часть: загрузка и основная информация -->
    <div class="header-container">
      <label for="file-input" class="upload-icon">
        <!-- Логотип команды -->
        <img v-if="teamStore.TeamLogo" :src="teamStore.TeamLogo" alt="Team Logo" class="team-logo" />
      </label>
      <div class="center-block">
        <h1 class="team-name">{{ teamStore.TeamName }}</h1>
        <p class="team-rating">{{ teamStore.Ratings }}</p>
      </div>
    </div>

    <!-- Блок с описанием -->
    <div class="bio-area">
      <p>{{ teamStore.bio }}</p>
    </div>

    <!-- Группа кнопок под описанием команды -->
    <div class="info-buttons">
      <button class="info-button" @click="toggleAboutTeam">About Team</button>
      <button class="info-button" @click="togglePlayers">Players</button>
      <button class="info-button" @click="toggleMoreInformation">More Information</button>
    </div>

    <!-- Слайдер для дополнительной информации (отображается при клике на About Team) -->
    <transition name="slide">
      <div v-if="showAboutTeam" class="about-team-content">
        <p><strong>Date of Creation:</strong> {{ teamStore.date_of_create }}</p>
        <p><strong>Base Street:</strong> {{ teamStore.street_team }}</p>
      </div>
    </transition>
      <!-- PLayers show -->
      <transition name="slide">
        <div v-if="showPlayers" class="about-team-content">
          <p><strong>Accept new players:</strong> {{ teamStore.do_you_accept }} </p>
        </div>
      </transition>
    <!-- Соц. сети (с циклом) -->
    <transition name="slide">
      <div v-if="showMoreInformation" class="about-team-content">
        <p v-for="(social, index) in [teamStore.SocialMedia1, teamStore.SocialMedia2, teamStore.SocialMedia3]" :key="index">
          <strong>Social:</strong> {{ social }}
        </p>
      </div>
    </transition>

    <div class="versus-container">
      <div class="team-block">
        <img class="team-logo" src="~/assets/images/AmStar-Logos2.svg" alt="First Team Logo" />
        <h2 class="team-caption">Team 1</h2>
      </div>
      <h1 class="score">0 : 0</h1>
      <div class="team-block">
        <img class="team-logo" src="~/assets/images/AmStar-Logos2.svg" alt="Second Team Logo" />
        <h2 class="team-caption">Team 2</h2>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* Общий контейнер страницы */
.page-wrapper {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Верхняя часть: загрузка и основная информация */
/* Для десктопа: горизонтальное расположение — логотип рядом с текстом */
.header-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px; /* расстояние между логотипом и текстом */
  margin-bottom: 2rem;
}

/* Стили для иконки загрузки (логотипа) */
.upload-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  background: linear-gradient(145deg, #f0f0f0, #ffffff);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: floating 3s ease-in-out infinite;
  position: relative;
}

/* Скрываем стандартное поле выбора файла */
#file-input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.upload-icon:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* Центрирование текста (для блока с названием команды и рейтингом) */
.center-block {
  text-align: left;
}

/* Стили для названия команды */
.team-name {
  font-weight: 600;
  font-size: 2.2rem;
  color: #2c3e50;
  margin: 0;
}

/* Стили для рейтинга */
.team-rating {
  font-weight: 500;
  font-size: 1.1rem;
  color: #7f8c8d;
  margin-top: 5px;
}

/* Описание команды */
.bio-area {
  max-width: 800px;
  margin: 0 auto 2rem;
  padding: 0 20px;
  text-align: center;
  font-size: 1rem;
  color: #2c3e50;
}

/* Группа кнопок под описанием команды */
.info-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto 1rem;
}

.info-button {
  flex: 1;
  padding: 10px 20px;
  background-color: #2c3e50;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 5px;
}

.info-button:hover {
  background-color: #34495e;
}

/* Слайдер для информации о команде */
.about-team-content {
  background-color: #f9f9f9;
  padding: 15px;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Плавная анимация слайдера */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Социальные сети и дополнительная информация */
.social-media {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-bottom: 2rem;
}

.social-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}

.social-item:hover {
  background-color: #eaeaea;
  transform: translateY(-2px);
}

.social-item i {
  margin-right: 8px;
  font-size: 1.5rem;
  color: #3b5998;
}

.social-item span {
  font-size: 1rem;
  color: #2c3e50;
}

/* Блок "Versus" */
.versus-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 2rem;
}

/* Контейнер для каждой команды внутри блока Versus */
.team-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Стили для логотипа команды */
.team-logo {
  width: 160px;
  height: auto;
}

/* Стили для подписи под логотипом */
.team-caption {
  margin-top: 8px;
  font-size: 1.2rem;
  color: #2c3e50;
}

/* Стили для счёта */
.score {
  font-size: 24px;
  font-weight: bold;
  margin: 0 20px;
}

/* Анимация для загрузочной иконки */
@keyframes floating {
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
}

/* Адаптивные стили для мобильных устройств */
@media (max-width: 768px) {
  .header-container {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  
  .upload-icon {
    width: 120px;
    height: 120px;
    margin: 0;
  }
  
  .team-name {
    font-size: 1.8rem;
  }
  
  .team-rating {
    font-size: 1rem;
  }
  
  .bio-area {
    padding: 0 15px;
  }
  
  .info-buttons {
    flex-direction: row;
    justify-content: space-between;
  }
  
  .info-button {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
  
  .social-item {
    padding: 8px 12px;
    font-size: 0.9rem;
  }
  
  .social-item i {
    font-size: 1.2rem;
    margin-right: 6px;
  }
  
  .versus-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 10px;
  }
  
  .team-logo {
    width: 80px;
  }
  
  .score {
    flex: 1;
    text-align: center;
    font-size: 20px;
    margin: 0 10px;
  }
  
  .team-caption {
    font-size: 1rem;
    margin-top: 4px;
  }
}
</style>
