<template>
    <section class="flex flex-col w-[400px] gap-5 " >
        <p class="text-white text-4xl">{{title}}</p>
        <article class="flex h-[250px] w-full rounded ">
        <img :src="imageUrl"  alt="" class="rounded object-cover">
        </article>
        <ul class="flex flex-wrap gap-4 ">
            <li v-for="tag in tags" :key="tag" class="text-white text-xl">{{tag}} </li>
        </ul>
 
   
    </section>

</template>

<script setup lang="ts">

    const props = defineProps({
        title: String,
        tags: Array<string>,
        img: String
    })

    const imageUrl = new URL(`../../assets/${props.img}`, import.meta.url).href


 
</script>