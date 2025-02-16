<script>
import TextArea from "~/components/TextArea.vue"; 

export default {
  components: {
    TextArea, 
  },
  data() {
    return {
      currentTabIndex: 0,
      bio: "",
      bioError: "", 
    };
  },
}
</script>

<template>
  <div class="page-wrapper">
    <div class="container">
      <label for="file-input" class="upload-icon">
        <i class="image-upload">file_upload</i>
      </label>

      <div class="center-block">
        <h1 class="texts">Team name</h1>
        <p class="rate">Ratings: 2500</p>
      </div>
    </div>

    <div class="bio-area">
      <TextArea
        id="bio"
        label=""
        v-model="bio"
        placeholder="Share something about yourself..."
        :rows="5"
        maxlength="500"
        :errorMessage="bioError"
      />
    </div>
    <div class="versus">
      <div class="versus">
        <v-img class="first_team"src="~/assets/images/AmStar-Logos2.svg" alt="logo" />
      </div>
      <div>
          <h1> 0 : 0 </h1>
      </div>
      <div class="versus">
        <v-img class="second_team" src="~/assets/images/AmStar-Logos2.svg" alt="logo" />
      </div>
    </div>
  </div>

</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
}

.upload-icon {
  margin-right: auto;
}

.image-upload {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  background: linear-gradient(145deg, #f0f0f0, #ffffff);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.image-upload:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.center-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

.texts {
  font-weight: 600;
  font-size: 2.2rem;
  color: #2c3e50;
  margin: 0;
  letter-spacing: -0.5px;
}

.rate {
  font-weight: 500;
  font-size: 1.1rem;
  color: #7f8c8d;
  margin: 5px 0 0;
}

.bio-area {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.bio-label {
  display: block;
  font-weight: 500;
  font-size: 1.1rem;
  color: #34495e;
  margin-bottom: 1rem;
  padding-left: 8px;
}

.textarea-field {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #2c3e50;
  background: #ffffff;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  resize: vertical;
}

.textarea-field:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 4px rgba(74, 144, 226, 0.15);
}

.textarea-field::placeholder {
  color: #95a5a6;
  opacity: 0.8;
}

.counter {
  text-align: right;
  font-size: 0.875rem;
  color: #7f8c8d;
  margin-top: 0.5rem;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .upload-icon {
    margin: 0 0 1.5rem 0;
  }
  
  .texts {
    font-size: 1.8rem;
  }
  
  .rate {
    font-size: 1rem;
  }
  
  .bio-area {
    padding: 0 15px;
  }
  
  .textarea-field {
    padding: 0.8rem;
    font-size: 0.95rem;
  }
}

@keyframes floating {
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
}

.image-upload {
  animation: floating 3s ease-in-out infinite;
}
</style> <!-- Закрывающий тег был пропущен -->