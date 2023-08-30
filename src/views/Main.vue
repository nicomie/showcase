<script setup lang="ts">

import Intro from "../views/Intro.vue"
import Wrapper from "../components/showcase/Wrapper.vue"
import MainContent from "../views/MainContent.vue"

</script>

<template>
<section class="w-screen h-screen bg-secondary ">
   
    <Transition>
    <section class="flex items-center justify-center h-screen m-auto w-full">
  
      <MainContent :content="['first', 'second', 'third']">
        <template  v-slot:first>
          <Intro ></Intro>
        </template>
        <template  v-slot:second>
          <Wrapper color="#192948"/>
        </template>
        <template  v-slot:third>
          <Wrapper color="#303C54"/>
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