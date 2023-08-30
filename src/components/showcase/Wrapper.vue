<template>
 
  <div class="h-screen w-screen flex items-center flex-col justify-center " :style="{'background-color': color }">
    <section class="flex items-center flex-col justify-center w-auto">

      <section class="flex flex gap-32 h-full w-full justify-center ">
      <article class="">
        <CardL title="Café ordering system" img="cafe.jpg" :tags="cafeTags"></CardL>

      </article>
      <article class="">
        <CardL title="Recipe creation service" img="food.png" :tags="recipeTags"></CardL>
      </article>
     </section>

     <RouterLink to="/showcase/work" class="self-start  translate-y-24 ">
      <p class="  text-white text-3xl bottom-0 hover:cursor-pointer hover:text-secondary_pop transition duration-100 whitespace-nowrap gap-5 items-center flex">View all my work <img class="h-8 w-12" src="../../assets/arrow_straight.svg"/></p>
    </RouterLink>
  
  

  </section>


 
  </div>
</template>

<script setup lang="ts">
import CardL from '../projects/CardL.vue';

const cafeTags = ["Go", "REST", "Authentication", "CI/CD", "Github Actions"]
const recipeTags = ["Vue", "Typescript", "SPA", "Cloud", "Firebase", "Authentication"]

defineProps({
  color: String
})
</script>