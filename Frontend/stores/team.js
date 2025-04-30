// stores/team.js
import { defineStore } from 'pinia';

export const useTeamStore = defineStore('team', {
  state: () => ({
    // Загружаем начальные данные из localStorage (если есть)
    TeamName: localStorage.getItem('TeamName') || '',
    bio: localStorage.getItem('bio') || '',
    SocialMedia1: localStorage.getItem('SocialMedia1') || '',
    SocialMedia2: localStorage.getItem('SocialMedia2') || '',
    SocialMedia3: localStorage.getItem('SocialMedia3') || '',
    Ratings: localStorage.getItem('Ratings') ? Number(localStorage.getItem('Ratings')) : 2500,
    date_of_create: localStorage.getItem('date_of_create') || '',
    street_team: localStorage.getItem('street_team') || '',
    do_you_accept: localStorage.getItem('do_you_accept') || '',
    TeamLogo: localStorage.getItem('TeamLogo') || '',
  }),

  actions: {
    // Метод для обновления данных команды и их сохранения в localStorage
    setTeamData(data) {
      Object.keys(data).forEach((key) => {
        this[key] = data[key]; // Обновляем состояние Pinia
        localStorage.setItem(key, data[key]); // Сохраняем в localStorage
      });
    },

    // Метод для очистки данных команды
    clearTeamData() {
      this.TeamName = '';
      this.bio = '';
      this.SocialMedia1 = '';
      this.SocialMedia2 = '';
      this.SocialMedia3 = '';
      this.Ratings = 2500;
      this.date_of_create = '';
      this.street_team = '';
      this.do_you_accept = '';
      this.TeamLogo = '';

      // Удаляем все данные из localStorage
      localStorage.removeItem('TeamName');
      localStorage.removeItem('bio');
      localStorage.removeItem('SocialMedia1');
      localStorage.removeItem('SocialMedia2');
      localStorage.removeItem('SocialMedia3');
      localStorage.removeItem('Ratings');
      localStorage.removeItem('date_of_create');
      localStorage.removeItem('street_team');
      localStorage.removeItem('do_you_accept');
      localStorage.removeItem('TeamLogo');
    }
  }
});
