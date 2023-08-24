<template>
    <section class="work bg-main h-screen text-white flex items-center justify-center">
       <div class="grid grid-cols-[350px_350px_350px] gap-10 "
>

            <Card v-for="(card, index) in projects.projects" :key="index" :title="card.name" :tags="card.tags" :index="index" >
   
              
            </Card>
        </div>
    </section>
</template>

<script setup lang="ts">


import Card from '../components/showcase/Card.vue';
import projects from '../store/data.ts'

</script>