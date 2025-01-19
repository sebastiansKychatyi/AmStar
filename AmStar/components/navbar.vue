<template>
    <nav class="navbar">
      <!-- Кнопка для открытия меню -->
      <button class="menu-toggle" @click="toggleMenu">
        ☰
      </button>
  
      <!-- Навигационное меню -->
      <ul class="navbar-menu" :class="{ 'navbar-menu--open': isMenuOpen }">
        <li class="navbar-item">
          <NuxtLink to="/" class="link" exact-active-class="active">Home</NuxtLink>
        </li>
        <li class="navbar-item">
          <NuxtLink to="/Authentication/SignUp" class="link" exact-active-class="active">SignUp</NuxtLink>
        </li>
        <li class="navbar-item">
          <NuxtLink to="/Authentication/SignIn" class="link" exact-active-class="active">SignIn</NuxtLink>
        </li>
        <li class="navbar-item">
          <NuxtLink to="/Authentication/form_wizard" class="link" exact-active-class="active">Register Information</NuxtLink>
        </li>
        <li class="navbar-item">
          <NuxtLink to="/Authentication/form_wizard/RegisterTeam" class="link" exact-active-class="active">Create Team</NuxtLink>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    name: "Navbar",
    setup() {
      const isMenuOpen = ref(false);
  
      const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
  
        // Управляем отступом контента
        if (isMenuOpen.value) {
          document.body.style.marginTop = "200px"; // Высота меню
        } else {
          document.body.style.marginTop = "0"; // Убираем отступ
        }
      };
  
      return {
        isMenuOpen,
        toggleMenu,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Основной стиль навбара */
  .navbar {
    background-color: #333;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 10;
  }
  
  /* Кнопка для мобильного меню */
  .menu-toggle {
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    display: none; /* Скрываем кнопку на десктопе */
  }
  
  /* Стили навигационного меню */
  .navbar-menu {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
  }
  
  /* Скрываем меню по умолчанию */
  .navbar-menu--open {
    display: block !important;
  }
  
  /* Стили ссылок */
  .link {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  
  .link:hover {
    text-decoration: underline;
  }
  
  .active {
    color: #f39c12;
  }
  
  /* Адаптивные стили */
  @media (max-width: 768px) {
    .menu-toggle {
      display: block; /* Показываем кнопку на мобильных */
    }
  
    .navbar-menu {
      display: none; /* Скрываем меню по умолчанию */
      flex-direction: column; /* Вертикальное расположение */
      position: absolute;
      top: 100%; /* Располагаем меню под кнопкой */
      left: 0;
      background-color: #333;
      width: 100%;
      padding: 1rem;
      z-index: 5;
    }
  
    .navbar-menu--open {
      display: flex; /* Показываем меню при открытии */
    }
  }
  </style>
  