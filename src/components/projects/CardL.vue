<template>
    <section class="flex h-full w-full gap-5 bg-secondary_contrast relative">

        <img src="@/assets/i.svg" alt="" class="h-[60%] w-[60%] m-auto">
        
        <p class="absolute text-white text-5xl bottom-0 whitespace-nowrap right-0 translate-x-24 translate-y-6">{{title}}</p>

</section>

</template>

<script setup lang="ts">
    defineProps({
        title: String,
        tags: Array<String>,
    })

</script>