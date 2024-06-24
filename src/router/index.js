import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "mainLayout",
      component: MainLayout,
      children: [
        {
          path: "/",
          component: Home,
        },
        {
          path: "/about",
          component: About,
        },
      ],
    },
  ],
});
export default router;
