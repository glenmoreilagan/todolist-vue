import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import axios from 'axios'
import VueAxios from 'vue-axios'

// COMPONENTS
import TodoView from "@/components/TodoView/TodoView.vue";
import EditTodo from "@/components/TodoView/EditTodo.vue";
import JobPosting from "@/components/JobPosting/JobPosting.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path : '/', component : TodoView },
    { path : '/todo/:id', component : EditTodo },
    { path : '/jobs', component : JobPosting },
  ],
});

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios)
app.mount("#app");
