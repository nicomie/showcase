<template>

    <RouterLink :to="'/showcase/work/'+index">
    <article class="bg-secondary_pop h-[250px] rounded-lg flex flex-col justify-between hover:scale-105 transition duration-150">
        <article>
            <h1 class="text-3xl mt-6 ml-6">{{title}}</h1>
            <ul class="mt-5 max-w-[95%] ">
                <li class="ml-6" v-for="(tag, index) in tags" :key="index">
                   <p>{{ tag }}</p> 
                </li>
            </ul>
        </article>

    
        <button class="bg-secondary py-2 px-5 rounded-lg self-end mr-3 mb-3">View</button>
    </article>
</RouterLink>
</template>

<script setup lang="ts">

    defineProps({
        title: String,
        tags: Array<String>,
        img: String,
        index: Number
    })

</script>