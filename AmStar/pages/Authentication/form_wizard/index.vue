<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap"; 
import "form-wizard-vue3/dist/form-wizard-vue3.css";
import Wizard from "form-wizard-vue3";
import * as prism from "./formwizard.js";

export default {
components: {
    Wizard,
},
data() {
    return {
        prism,
        currentTabIndex: 0,
        bio: "",
    };
},
methods: {
    onChangeCurrentTab(index: number, oldIndex: number) {
        this.currentTabIndex = index;
    },
    onTabBeforeChange() {
        if (this.currentTabIndex === 0) {
        }
    },
    wizardCompleted() {},
    onSubmit() {},
    onFileChange(event: any) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
            this.imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
            }
        },
    },
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
            { title: 'Confirmation' },
            ]"
            :beforeChange="onTabBeforeChange"
            @change="onChangeCurrentTab"
            @complete:wizard="wizardCompleted"
            @submit.prevent="onSubmit"
        >
        <!-- Step 1 -->
        <div class="step-content" v-if="currentTabIndex === 0">
            <div class="form-group">
                <p class='up-space'>Create Player</p>
                <label>First Name</label>
                <input class="form-control" type="text" placeholder="Taras" required />
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input class="form-control" type="text" placeholder="Shevchenko" required />
            </div>
            <div class="form-group">
                <label>Birth Date</label>
                <input class="form-control" type="date" required />
            </div>
            <div class="form-group">
                <label>Phone Number</label>
                <input class="form-control" type="number" placeholder="+380444618061" required />
            </div>
            <div class="image-upload">
                <label for="file-input" class="upload-icon">
                    <i class="material-icons">file_upload</i>
                </label>
            </div>
                <input id="file-input" type="file" @change="onFileChange" accept="image/*" />
        </div>

            <!-- Step 2 -->
        <div class="step-content" v-if="currentTabIndex === 1">
            <div class="form-group">
                <label>Enter Your Position</label>
                <input class="form-control" type="text" placeholder="Right Wing" required />
            </div>
            <div class="bio-area">
                <label for="bio" class="bio-label">Tell us about yourself</label>
            <textarea
                id="bio"
                class="bio-textarea form-control"
                placeholder="Share something about yourself..."
                v-model="bio"
                rows="5"
                maxlength="500"
            ></textarea>
                <p class="bio-hint">Maximum 500 characters.</p>
            </div>
            <div class="form-group">
                <label>Social media</label>
                <input class="form-control" type="link" placeholder="https://www.instagram.com/cristiano/" required />
            </div>
            <div class="form-group">
                <label>Social media</label>
                <input class="form-control" type="link" placeholder="https://www.facebook.com/Cristiano/" required />
            </div>
            <div class="form-group">
                <label>Social media</label>
                <input class="form-control" type="link" placeholder="https://x.com/Cristiano/" required />
            </div>
            </div>

        <!-- Step 3 -->
        <div class="step-content" v-if="currentTabIndex === 2">
            <div class="form-group">
                <label>Have Passport</label>
                <input class="form-control" type="text" placeholder="Yes/No" required />
            </div>
            <div class="form-group">
                <label for="Privacy Policy" class="fw-medium">By proceeding, I confirm that I have read and agree to the Terms of Service and Privacy Policy.</label>
                <input type="checkbox" id="Privacy Policy" name="Privacy Policy">
            </div>
            </div>
            </Wizard>
        </div>
    </div>
</div>
</template>

<style scoped>
/* Container adjustments */
.wizard-container {
    padding: 20px;
}

/* Image Upload Styles */
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
    overflow: hidden;
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

.upload-icon i {
    font-size: 24px;
}

input[type="checkbox"] {
    width: 20px;
    height: 20px;
    accent-color: var(--primaryColor);
}


@media (max-width: 767px) {
.wizard-container {
    padding: 10px;
}
.image-upload {
    width: 100px;
    height: 100px;
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
