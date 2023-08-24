<template>
    <section class="flex flex-col h-full w-full gap-5 relative">
        <p class="after:content-[''] after:w-[33%] after:h-1 after:mt-3 after:bg-secondary_pop after:block text-white text-5xl ">{{title}}</p>
        <img :src="imageUrl"  alt="" class="h-[100%] w-[100%] m-auto">
        
</section>

</template>

<script setup lang="ts">

    const props = defineProps({
        title: String,
        tags: Array<String>,
        img: String
    })

    const imageUrl = new URL(`../../assets/${props.img}`, import.meta.url).href


 
</script>