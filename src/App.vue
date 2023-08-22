<script setup lang="ts">


import { ref } from "vue";
import Intro from "./views/Intro.vue"

const startExperience = ref(false)
</script>

<template >
  <section class="w-screen h-screen bg-secondary">
  <Intro @done="startExperience=true"></Intro>
  <Transition>
  <main v-if="startExperience" class="relative w-screen h-screen flex items-center justify-center text-white flex-col">
    <nav class="absolute top-0 h-24 w-screen bg-secondary_contrast flex content-center justify-around ">
      <ul class="[&>li]:text-xl flex items-center gap-20">
        <li>Nicholas Miettinen</li>
        <li>Hej</li>
      </ul>
    </nav>
    <section>
 
    <section class="flex gap-[100px] [&>article]:w-[400px] [&>article]:h-[300px] [&>article]:bg-secondary_contrast ">
      <p class="absolute text-xl mt-[420px] left flex gap-4">View all of my work <img class="color-current" src="@/assets/arrow_straight.svg"/></p>
      <article class="flex">
        <h1 class="text-5xl absolute pt-[275px] pl-[260px]">Boba shop</h1>
      </article>
      <article class="flex mt-10">
        <h1 class="text-5xl absolute pt-[280px] pl-[220px]">Not a boba shop</h1>
      </article>
      
    </section>
  </section>
  
  </main>
</Transition>
 
  </section>
</template>

<style>

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>