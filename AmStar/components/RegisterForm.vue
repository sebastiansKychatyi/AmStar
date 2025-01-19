<template>
    <div class="register-form">
        <h2>Register</h2>
        <form @submit.prevent="submitForm">
        <div>
            <label for="firstName">First Name:</label>
            <input type="text" v-model="firstName" required />
        </div>
        <div>
            <label for="lastName">Last Name:</label>
            <input type="text" v-model="lastName" required />
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" v-model="email" required />
        </div>
        <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
import { useUserStore } from '~/stores/user.js';

export default {
    name: 'RegisterForm',
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
        };
    },
    methods: {
        validateForm() {
        return this.firstName && this.lastName && this.email; 
    },
    submitForm() {
        if (this.validateForm()) {
            const userStore = useUserStore();
            userStore.setUser({
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
            });

        this.$router.push('/player-rating'); 
        } else {
            alert('Please fill the form correctly.');
        }
        },
    },
};
</script>

<style scoped>
.register-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
}
label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}
input {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 3px;
}
button {
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}
button:hover {
    background-color: #45a049;
}
</style>
