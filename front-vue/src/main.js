import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueSweetalert2 from "vue-sweetalert2";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserPlus,
  faUserEdit,
  faTrash,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/nprogress/nprogress.css";

library.add(faUserSecret, faUserPlus, faUserEdit, faTrash);

createApp(App).use(router, VueSweetalert2).mount("#app");
