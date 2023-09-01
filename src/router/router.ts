import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";


const routes = [
    {
      path: "/",
      component: () => import("../views/Layout.vue"),
      children: [
      {
        path: '', // The default child route
        name: 'Home',
        component: Main,
        props: true,
      },
      {
        path: 'project/:id',
        name: 'Project',
        component: () => import("../views/Project.vue"),
        props: true,
      },
      ]
    },
 
]

const router = createRouter({
    history: createWebHistory('/showcase/'),
    routes,
  });


  router.beforeEach((to, from) => {

  })

export default router