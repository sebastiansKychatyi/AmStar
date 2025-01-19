<template>
  <div>
    
    <div v-if="shouldShowHeader">
      <Navbar />
    </div>

    
    <div :class="containerClass">
      <NuxtPage />
    </div>

    
    <div v-if="shouldShowFooter">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, watchEffect } from "vue";
import { useRoute } from "#app";
import stateStore from "~/utils/store";
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

export default defineComponent({
  components: {
    Navbar,
    Footer,
  },
  setup() {
    const isLoading = ref(true);
    const stateStoreInstance = stateStore;
    const route = useRoute();

    // Маршруты, где не показываются шапка и подвал
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

    const shouldShowHeader = computed(() => !hiddenRoutes.includes(route.path));
    const shouldShowFooter = computed(() => !hiddenRoutes.includes(route.path));

    const containerClass = computed(() => ({
      "main-content-container": !hiddenRoutes.includes(route.path),
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
      shouldShowHeader,
      shouldShowFooter,
      containerClass,
      route,
    };
  },
});
</script>
