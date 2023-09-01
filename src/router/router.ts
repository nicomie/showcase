import { RouteLocationNormalized, createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";

import { useStateStore } from "../store/state";


const routes = [
      {
        path: '', // The default child route
        name: 'Home',
        component: Main,
        props: (route: RouteLocationNormalized) => ({
          id: route.query.id,
          fullscreen: route.query.fullscreen
        }),
      },
 
]

const router = createRouter({
    history: createWebHistory('/showcase/'),
    routes,
  });


  router.beforeEach((to, _) => {
    let state = useStateStore()
    
    if(to.name=='Home' && 'fullscreen' in to.query) {
      state.setFullscreen(true)

    } else {
      console.log("NO")
      state.setFullscreen(false)
    }
      

    

    
  })

export default router