import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

const app = createApp(App);

app.use(axios);
app.use(router);
app.mount("#app");
