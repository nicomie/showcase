<template>
    <section class="w-screen h-screen bg-main text-white flex items-center justify-center flex-col">
    <h1 class="text-5xl">{{ data.name }}</h1>
    <ul class="mt-5 max-w-[95%] ">
        <li class="text-xl" v-for="(tag, index) in data.tags" :key="index">
           <p>{{ tag }}</p> 
        </li>
    </ul>
    </section>

</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import projects from '../store/data.ts'

    const route = useRoute()

    let id = parseInt(route.params.id[0])

    let data = projects.projects[id]
</script>