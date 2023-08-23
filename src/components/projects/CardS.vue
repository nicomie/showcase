<template>
    <section class="flex flex-col justify-between p-4 w-full h-full">
    <article class="bg-secondary_contrast rounded-md h-full">
        <h1 class="text-white pt-5 pl-5 text-xl">{{props.title}}</h1>
        <ul class="text-white pl-5 pt-2 flex">
            <li v-for="tag in props.tags" class="pr-2">{{tag}}</li>
        </ul>
    </article>
    <article class="flex pt-4 [&>button]:p-2 [&>button]:rounded-md">
        <button class="bg-secondary_pop w-[60%] hover:bg-secondary_contrast transition-all duration-150">View design document</button>
        <button class="bg-secondary_pop ml-4 grow hover:bg-secondary_contrast transition-all duration-150">
            <img src="https://static.thenounproject.com/png/640392-200.png" alt="" class="w-6 h-6 m-auto">
        </button>
    </article>
</section>
</template>

<script setup lang="ts">
    const props = defineProps({
        title: String,
        tags: Array<String>,
    })

</script>