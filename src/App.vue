<script setup lang="ts">


import { ref } from "vue";
import Intro from "./views/Intro.vue"
import Wrapper from "./components/showcase/Wrapper.vue"
import Header from "./components/header/Header.vue"
import MainContent from "./components/navigation/scroll_group/MainContent.vue"
const startExperience = ref(false)


</script>

<template >
  <section class="w-screen h-screen bg-secondary ">
  <Intro @done="startExperience=true"></Intro>
  <Transition>
  <section v-if="startExperience" class="flex items-center justify-center h-screen m-auto w-full">

    <MainContent>
      <template class="w-[300px] h-[300px] bg-white" v-slot:first>
        <Wrapper color="red"/>
      </template>
      <template class="w-[300px] h-[300px] bg-white" v-slot:second>
        <Wrapper color="white"/>
      </template>
      <template class="w-[300px] h-[300px] bg-white" v-slot:third>
        <Wrapper color="blue"/>
      </template>
    </MainContent>
 


</section>


</Transition>
 
  </section>
</template>

<style>

.v-enter-active,
.v-leave-active {
  transition: opacity .5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>