<template>
    <section class="flex flex-col justify-between h-full p-4">
    <article class="bg-secondary_contrast rounded-md h-full">
        <h1 class="text-white pt-5 pl-5 text-xl">{{props.title}}</h1>
        <ul class="text-white pl-5 pt-2 flex">
            <li v-for="tag in props.tags" class="pr-2">{{tag}}</li>
        </ul>
    </article>
    <article class="flex pt-4 [&>button]:p-2 [&>button]:rounded-md">
        <button class="bg-secondary_pop w-48 hover:bg-secondary_contrast transition-all duration-150">hej</button>
        <button class="bg-secondary_pop ml-4 grow hover:bg-secondary_contrast transition-all duration-150">då</button>
    </article>
</section>
</template>

<script setup lang="ts">
    const props = defineProps({
        title: String,
        tags: Array<String>,
    })

</script>