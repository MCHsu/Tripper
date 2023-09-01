import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import router from "@/router";
import "@/assets/tailwind.css";
import { register } from "swiper/element/bundle";
import VCalendar from "v-calendar";
import "v-calendar/style.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

createApp(App)
  .use(pinia)
  .use(router)
  .use(register)
  .use(VCalendar, {})
  .use(Toast)
  .mount("#app");
