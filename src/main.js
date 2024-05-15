import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { routes } from "./router/index.js";
import { createRouter, createWebHistory } from "vue-router";
import ElementPlus from 'element-plus'


const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.use(ElementPlus)
app.mount("#app");
