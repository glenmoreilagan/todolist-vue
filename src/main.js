import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

// COMPONENTS
import TodoView from "@/components/TodoView/TodoView.vue";
import JobPosting from "@/components/JobPosting/JobPosting.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path : '/', component : TodoView },
    { path : '/jobs', component : JobPosting },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
