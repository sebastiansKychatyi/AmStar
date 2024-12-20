<template>
  <div>
    <LayoutPreloader v-if="isLoading" />
    <LayoutLeftSidebar v-if="shouldShowSidebar" />
    <div
      :class="[
        'main-content d-flex flex-column',
        { active: stateStoreInstance.open },
        { 'padding-minus': shouldShowPaddingLeftZero },
      ]"
    >
      <!-- Шапка и навигация -->
      <header v-if="shouldShowHeader">
        <h1>AmStar</h1>
        <nav>
          <NuxtLink to="/">Home</NuxtLink> |
          <NuxtLink to="/Authentication/SignIn">Sign in</NuxtLink> |
          <NuxtLink to="/Authentication/SignUp">Sign up</NuxtLink>
        </nav>
      </header>

      <!-- Основной контент -->
      <div :class="containerClass">
        <NuxtPage />
      </div>
      <div class="flex-grow-1"></div>

      <!-- Подвал -->
      <LayoutMainFooter v-if="shouldShowFooter" />
      <LayoutSettingsSidebar />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, watchEffect } from "vue";
import { useRoute } from "#app";
import stateStore from "~/utils/store";

export default defineComponent({
  setup() {
    const isLoading = ref(true);
    const stateStoreInstance = stateStore;
    const route = useRoute();

    const hiddenRoutes = [
      "/",
      "/features",
      "/team",
      "/faq",
      "/contact",
      "/errors/not-found",
      "/extra-pages/coming-soon",
      "/authentication/sign-in",
      "/authentication/sign-up",
      "/authentication/logout",
      "/authentication/forgot-password",
      "/authentication/reset-password",
      "/authentication/confirm-email",
      "/authentication/lock-screen",
    ];

    const shouldShowSidebar = computed(() => !hiddenRoutes.includes(route.path));
    const shouldShowHeader = computed(() => !hiddenRoutes.includes(route.path));
    const shouldShowFooter = computed(() => !hiddenRoutes.includes(route.path));
    const shouldShowPaddingLeftZero = computed(() =>
      hiddenRoutes.includes(route.path)
    );

    const containerClass = computed(() => ({
      "main-content-container": ![
        "/",
        "/features",
        "/team",
        "/faq",
        "/contact",
      ].includes(route.path),
    }));

    onMounted(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 1000);

      watchEffect(() => {
        if (stateStoreInstance.open) {
          document.body.classList.remove("sidebar-show");
          document.body.classList.add("sidebar-hide");
        } else {
          document.body.classList.remove("sidebar-hide");
          document.body.classList.add("sidebar-show");
        }
      });
    });

    return {
      isLoading,
      stateStoreInstance,
      shouldShowSidebar,
      shouldShowHeader,
      shouldShowFooter,
      shouldShowPaddingLeftZero,
      containerClass,
      route,
    };
  },
});
</script>

