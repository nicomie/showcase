<script setup lang="ts">


import { ref } from "vue";
import Intro from "./views/Intro.vue"
import Wrapper from "./components/showcase/Wrapper.vue"
import Header from "./components/header/Header.vue"
const startExperience = ref(false)
</script>

<template >
  <section class="w-screen h-screen bg-secondary">
  <Intro @done="startExperience=true"></Intro>
  <Transition>
  <main v-if="startExperience" class="relative w-screen h-screen flex items-center justify-center text-white flex-col">
    <Header/>
    <Wrapper/>
    <section>

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