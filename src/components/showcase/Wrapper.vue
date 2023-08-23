<template>
 
  <div class="h-screen w-screen flex items-center justify-center" :style="{'background-color': color }">
    <section class="flex gap-8 [&>*]:h-64 [&>*]:w-64 [&>*]:rounded [&>*]:bg-secondary_contrast ">
      <article><h1>Hello</h1></article>
      <article><h1>There</h1></article>
    </section>
  </div>
</template>

<script setup lang="ts">
defineProps({
  color: String
})
</script>