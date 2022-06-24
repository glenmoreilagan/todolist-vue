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

export default router;
