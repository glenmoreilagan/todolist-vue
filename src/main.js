import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import axios from 'axios'
import VueAxios from 'vue-axios'

// COMPONENTS
import TodoView from "@/components/TodoComponent/TodoView.vue";
import AddTodo from "@/components/TodoComponent/AddTodo.vue";
import EditTodo from "@/components/TodoComponent/EditTodo.vue";

import JobPosting from "@/components/JobComponent/JobPosting.vue";

import LoginView from "@/components/LoginComponent/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path : '/', component : TodoView },
    { path : '/todo', component : AddTodo },
    { path : '/todo/:id', component : EditTodo },

    { path : '/jobs', component : JobPosting },
    
    { path : '/login', component : LoginView },
  ],
});

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios)
app.mount("#app");
