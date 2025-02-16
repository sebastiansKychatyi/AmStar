<script>
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap"; 
import "form-wizard-vue3/dist/form-wizard-vue3.css";
import Wizard from "form-wizard-vue3";
import { useTeamStore } from '~/stores/team';

export default {
  components: {
    Wizard,
  },
  data() {
    return {
      currentTabIndex: 0,
      TeamName: "", // text
      bio: "", // text
      SocialMedia1: "", // link
      SocialMedia2: "",
      SocialMedia3: "",
      Ratings: 2500, // number
      date_of_create: "", // text
      street_team: "", // text
      do_you_accept: "", // select
      TeamLogo: localStorage.getItem("teamLogo") || "", // Загружаем логотип
    };
  },
  methods: {
    onChangeCurrentTab(index) {
      this.currentTabIndex = index;
    },
    onTabBeforeChange() {
      if (this.currentTabIndex === 0) {
        const teamNameLength = this.TeamName.length;
        if (teamNameLength < 5 || teamNameLength > 15) {
          alert("Название команды должно содержать от 5 до 15 символов.");
          return false; // Блокируем переход к следующему шагу
        }
      }
      return true; // Разрешаем переход
    },
    wizardCompleted() {
      const teamData = {
        TeamName: this.TeamName,
        bio: this.bio,
        SocialMedia1: this.SocialMedia1,
        SocialMedia2: this.SocialMedia2,
        SocialMedia3: this.SocialMedia3,
        Ratings: this.Ratings,
        date_of_create: this.date_of_create,
        street_team: this.street_team,
        do_you_accept: this.do_you_accept,
        TeamLogo: this.TeamLogo // Теперь логотип сохраняется
      };

      const teamStore = useTeamStore();
      teamStore.setTeamData(teamData);
      console.log("Данные команды сохранены в Pinia");
      this.$router.push('/TeamView');
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.TeamLogo = e.target.result; // Base64 строка
          localStorage.setItem("teamLogo", e.target.result);
          console.log("Логотип команды загружен и сохранен в localStorage");
        };
        reader.readAsDataURL(file); // Читаем как Data URL
      }
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
            { title: 'Registration Team' },
            { title: 'Details' },
            { title: 'Confirmation' }
          ]"
          :beforeChange="onTabBeforeChange"
          @change="onChangeCurrentTab"
          @complete:wizard="wizardCompleted"
        >
          <!-- Step 1 -->
          <div class="step-content" v-if="currentTabIndex === 0">
            <div class="form-group">
              <p class="up-space">Create Team</p>
              <label>Team name</label>
              <input class="form-control" type="text" placeholder="FK Barcelona" v-model="TeamName" required />
            </div>
            <div class="bio-area">
              <label for="bio">Tell us about your team</label>
              <textarea id="bio" class="form-control" placeholder="Share something about your team..."
                v-model="bio" rows="5" maxlength="500"></textarea>
              <p class="bio-hint">Maximum 500 characters.</p>
            </div>
            <div class="form-group">
              <label>Date of team creation</label>
              <input class="form-control" type="date" v-model="date_of_create" required />
            </div>
            <div class="form-group">
              <label>Street?</label>
              <input class="form-control" type="text" placeholder="Village Kamyanitsa, Uzanska 107"
                v-model="street_team" required />
            </div>
            <p>Team Logo</p>
            <div class="image-upload">
              <input id="file-input" type="file" @change="onFileChange" accept="image/*" />
              <!-- Текстовая инструкция для загрузки файла -->
              <img v-if="TeamLogo" :src="TeamLogo" alt="Team Logo" class="img-preview" />
            </div>
          </div>

          <!-- Step 2 -->
          <div class="step-content" v-if="currentTabIndex === 1">
            <div class="form-group">
              <label>Do you accept new members?</label>
              <select class="form-control" v-model="do_you_accept" required>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="step-content" v-if="currentTabIndex === 2">
            <div class="form-group">
              <label>Social media</label>
              <input class="form-control" type="url"
                placeholder="https://www.instagram.com/cristiano/" v-model="SocialMedia2" required />
            </div>
            <div class="form-group">
                <label>Social media</label>
                <input class="form-control" type="url" placeholder="https://x.com/Cristiano/" v-model="SocialMedia1" required />
              </div>
            <div class="form-group">
              <label>Social media</label>
              <input class="form-control" type="url"
                placeholder="https://www.facebook.com/Cristiano/" v-model="SocialMedia3" required />
            </div>
            <div class="form-group">
              <label for="PrivacyPolicy">
                By proceeding, I confirm that I have read and agree to the Terms of Service and Privacy Policy.
              </label>
              <input type="checkbox" id="PrivacyPolicy" name="PrivacyPolicy">
            </div>
          </div>
        </Wizard>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Основные отступы для контейнера */
.wizard-container {
  padding: 20px;
}

/* Стили для блока загрузки изображения */
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
  overflow: hidden;  /* Ограничиваем содержимое внутри круга */
  margin: 20px auto;
  cursor: pointer;
  border: 2px solid #ccc;
}

/* Скрываем стандартное поле выбора файла */
#file-input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

/* Стили для превью загруженного изображения */
.img-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;  /* Изображение заполняет контейнер с обрезкой лишнего */
  border-radius: 50%;
}

/* Стили для иконки загрузки */
.upload-icon {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 5px;
  border-radius: 50%;
  z-index: 1;
}

.upload-icon i {
  font-size: 24px;
}

/* Стили для текста инструкции по загрузке файла */
.upload-text {
  margin-top: 5px;
  font-size: 14px;
  color: #666;
}

/* Прочие стили */
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  accent-color: #333;
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

/* Адаптивные стили для мобильных устройств */
@media (max-width: 767px) {
  .wizard-container {
    padding: 10px;
  }
  .image-upload {
    width: 100px;
    height: 100px;
    border: 2px solid #ccc;
  }
  .upload-icon i {
    font-size: 20px;
  }
  .upload-text {
    font-size: 12px;
  }
}
</style>
