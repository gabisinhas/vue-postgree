import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vuelidate from "vuelidate";
import VueSweetalert2 from "vue-sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/nprogress/nprogress.css";

createApp(App).use(router, Vuelidate, VueSweetalert2).mount("#app");
