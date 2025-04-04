import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import 'vuetify/styles';

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
        defaultTheme: "light", 
        themes: {
        light: {
            dark: false,
            colors: {
                primary: "#1976D2", 
                secondary: "#424242", 
            },
            },
        },
    },
});

    nuxtApp.vueApp.use(vuetify);
});
