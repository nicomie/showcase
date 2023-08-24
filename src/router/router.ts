import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";


const routes = [
    {
      path: "/",
      name: "Home",
      component: Main,
    },
    {
    path: "/showcase/work",
    name: "Work",
    component: () => import("../views/Work.vue"),
    },
    {
    path: "/showcase/work/:id",
    name: "Project",
    component: () => import("../views/Project.vue")
    }
]

const router = createRouter({
    history: createWebHistory('/showcase/'),
    routes,
  });

export default router