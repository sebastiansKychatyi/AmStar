import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import 'vuetify/styles';

export default defineNuxtPlugin((nuxtApp) => {
const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "light", // Название темы
        themes: {
        light: {
            dark: false,
            colors: {
                primary: "#1976D2", // Основной цвет
                secondary: "#424242", // Вторичный цвет
            },
            },
        },
    },
});

    nuxtApp.vueApp.use(vuetify);
});
