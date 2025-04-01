<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "form-wizard-vue3/dist/form-wizard-vue3.css";
import Wizard from "form-wizard-vue3";
import TextArea from "~/components/TextArea.vue";
import * as prism from "./formwizard.js";
import { useUsersStore } from '~/stores/users';

export default {
  components: {
    Wizard,
    TextArea,
  },
  data() {
    return {
      prism,
      currentTabIndex: 0,
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
      player_ratings: 2500, // number
    };
  },
  methods: {
    onTabBeforeChange(currentTabIndex, newTabIndex) {
      console.log(`Переход с вкладки ${currentTabIndex} на вкладку ${newTabIndex}`);
      return true; // Разрешить переход между вкладками
    },
    wizardCompleted() {
      const usersData = {
        first_name: this.first_name,
        second_name: this.second_name,
        bio_player: this.bio_player,
        birth_date: this.birth_date,
        social_media_player1: this.social_media_player1,
        social_media_player2: this.social_media_player2,
        social_media_player3: this.social_media_player3,
        phone_number: this.phone_number,
        player_position: this.player_position,
        player_logo: this.player_logo,
        player_ratings: this.player_ratings
      };

      const usersStore = useUsersStore();
      usersStore.setUsersData(usersData);
      console.log("Данные игрока сохранены в Pinia");
      this.$router.push('/playerView');
    },
    onSubmit() {
      console.log("Форма отправлена");
      this.wizardCompleted();
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.player_logo = e.target.result; // Base64 строка
          localStorage.setItem("player_logo", e.target.result);
          console.log("Логотип игрока загружен и сохранен в localStorage");
        };
        reader.readAsDataURL(file);
      }
    },
    onChangeCurrentTab(newTabIndex) {
      console.log(`Текущая вкладка изменена на ${newTabIndex}`);
      this.currentTabIndex = newTabIndex;
    }
  }
};
</script>


<template>
  <div class="wizard-container">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <Wizard
          :custom-tabs="[
            { title: 'Registration' },
            { title: 'Details' },
            { title: 'Confirmation' }
          ]"
          :beforeChange="onTabBeforeChange"
          @change="onChangeCurrentTab"
          @complete:wizard="wizardCompleted"
          @submit.prevent="onSubmit"
        >
          <div class="step-content" v-if="currentTabIndex === 0">
            <div class="form-group">
              <p class="up-space">Create Player</p>
              <label>First Name</label>
              <input class="form-control" type="text" placeholder="Taras" v-model="first_name"required />
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <input class="form-control" type="text" placeholder="Shevchenko" v-model="second_name" required />
            </div>
            <div class="form-group">
              <label>Birth Date</label>
              <input class="form-control" type="date" v-model="birth_date" required />
            </div>
            <div class="form-group">
              <label>Phone Number</label>
              <input class="form-control" type="tel" placeholder="+380444618061" v-model="phone_number" required />
            </div>

            <div class="image-upload">
              <input id="file-input" type="file" @change="onFileChange" accept="image/*" />
              <img v-if="player_logo" :src="player_logo" alt="team logo" class="img-preview"
            </div>
        </div>

          <div class="step-content" v-if="currentTabIndex === 1">
            <div class="form-group">
              <label>Enter Your Position</label>
              <input class="form-control" type="text" placeholder="Right Wing" v-model="player_position" required />
            </div>
            <div class="bio-area">
              <label for="bio">Tell us about your team</label>
              <textarea id="bio" class="form-control" placeholder="Share something about your team..."
                v-model="bio_player" rows="5" maxlength="500"></textarea>
              <p class="bio-hint">Maximum 500 characters.</p>
            </div>
            <div class="form-group">
              <label>Social media</label>
              <input class="form-control" type="url"
                placeholder="https://www.instagram.com/cristiano/" v-model="social_media_player1" required />
            </div>
            <div class="form-group">
              <label>Social media</label>
              <input class="form-control" type="url" placeholder="https://x.com/Cristiano/" v-model="social_media_player2" required />
            </div>
            <div class="form-group">
              <label>Social media</label>
              <input class="form-control" type="url"
                placeholder="https://www.facebook.com/Cristiano/" v-model="social_media_player3" required />
            </div>
          </div>
          
          <div class="step-content" v-if="currentTabIndex === 2">
            <div class="form-group">
              <label for="Privacy Policy" class="fw-medium">By proceeding, I confirm that I have read and agree to the Terms of Service and Privacy Policy.</label>
              <input type="checkbox" id="Privacy Policy" name="Privacy Policy" />
              <NuxtLink
              to="/player-rating"
              class="fw-semibold text-primary"
            >
              Sign In
            </NuxtLink>
            </div>
          </div>
        </Wizard>
      </div>
    </div>
  </div>
</template>
<style>
body .form-wizard-vue .fw-step-active {
  background: linear-gradient(90deg, #000000 0%, #3c3c3c 100%) !important;
  color: #fff !important; /* fix */
}
.form-wizard-vue .fw-body-list .fw-list-progress {
  position: absolute;
  width: 100%;
  height: 8.47px;
  background: #eff0f7;
  top: 40%;
  left: 50%;
}
.fw-btn {
  display: flex;
  align-items: center;
  background: linear-gradient(109deg, #000000 0%, #0a0e19 100%);
  cursor: pointer;
  padding: .7rem 1.5rem;
  min-width: unset;
  border-radius: .4rem;
  border: none;
  font-family: DM Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
  color: #fff;
}
.form-wizard-vue .fw-step-checked {
  border: 3px solid rgb(0 0 0 / 62%);
}
</style>

<style scoped>
.wizard-container {
    padding: 20px;
}

.image-upload {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    background-color: #f0f0f0;
    border-radius: 50%;
    position: relative;
    overflow: visible;
    margin: 20px auto;
    cursor: pointer;
}

.image-preview {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
}

.upload-icon {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 5px;
    border-radius: 50%;
}

.img-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;  /* Изображение заполняет контейнер с обрезкой лишнего */
  border-radius: 50%;
}

.upload-icon i {
    font-size: 24px;
}

input[type="checkbox"] {
    width: 20px;
    height: 20px;
    accent-color: var(--primaryColor);
}

.wizard-navigation {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

@media (max-width: 767px) {
.wizard-container {
    padding: 10px;
}
.image-upload {
    width: 100px;
    height: 100px;
    overflow: visible;
}
.upload-icon i {
    font-size: 20px;
    }
}

.wizard-container .wizard-tabs {
    display: flex;
    justify-content: center; 
    align-items: center; 
    margin-bottom: 20px; 
}

.wizard-container .wizard-tabs li {
    margin: 0 10px; 
}

.up-space {
    margin-top: 5px; 
}

</style>
