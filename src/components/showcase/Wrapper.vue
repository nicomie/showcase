<template>
 
  <div class="h-screen w-screen flex items-center justify-center " :style="{'background-color': color }">
    <section class="flex gap-32 [&>*]:h-[300px] [&>*]:w-[450px] [&>*]:rounded  relative">
      <article class="">
        <CardL title="Café ordering system" img="i.svg"></CardL>

      </article>
      <article class="">
        <CardL title="Recipe creation service" img="food.png"></CardL>
      </article>

      <RouterLink to="/showcase/work" class="absolute">
      <p class=" absolute text-white text-3xl bottom-0 hover:cursor-pointer hover:text-secondary_pop transition duration-100 whitespace-nowrap left-0 translate-y-[200px] gap-5 items-center flex">View all my work <img class="h-8 w-12" src="../../assets/arrow_straight.svg"/></p>
      </RouterLink>

    </section>
 
  </div>
</template>

<script setup lang="ts">
import CardL from '../projects/CardL.vue';

defineProps({
  color: String
})
</script>