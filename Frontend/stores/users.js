import { defineStore } from 'pinia';

export const useUsersStore = defineStore('users', {
    state: () => ({
        first_name: localStorage.getItem('first_name') || '',
        second_name: localStorage.getItem('second_name') || '',
        bio_player: localStorage.getItem('bio_player') || '',
        social_media_player1: localStorage.getItem('social_media_player1') || '',
        social_media_player2: localStorage.getItem('social_media_player2') || '',
        social_media_player3: localStorage.getItem('social_media_player3') || '',
        birth_date: localStorage.getItem('birth_date') || '',
        phone_number: localStorage.getItem('phone_number') || '',
        player_position: localStorage.getItem('player_position') || '',
        player_logo: localStorage.getItem('player_logo') || '',
        player_ratings: localStorage.getItem('player_ratings') ? Number(localStorage.getItem('player_ratings')) : 2500,
    }),

    actions: {
        setUsersData(data) {
            Object.keys(data).forEach((key) => {
                if (Object.prototype.hasOwnProperty.call(this, key)) {
                    this[key] = data[key];
                    localStorage.setItem(key, data[key]);
                }
            });
        },
        clearUsersData() {
            Object.assign(this, {
                first_name: '',
                second_name: '',
                bio_player: '',
                birth_date: '',
                social_media_player1: '',
                social_media_player2: '',
                social_media_player3: '',
                phone_number: '',
                player_position: '',
                player_logo: '',
                player_ratings: 2500,
            });

            [
                'first_name', 'second_name', 'bio_player', 'birth_date',
                'social_media_player1', 'social_media_player2', 'social_media_player3',
                'phone_number', 'player_position', 'player_logo', 'player_ratings',
            ].forEach(key => localStorage.removeItem(key));
        }
    }
});
