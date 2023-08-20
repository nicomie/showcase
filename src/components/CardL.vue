<template>
    <section class="flex h-full gap-5">


    <section class="flex flex-col justify-between relative p-4 w-[60%] ">
  
    <article class="bg-secondary_contrast rounded-md h-full ]">
  
        <img src="../assets/i.svg" alt="" class="h-full w-full ">
    
        
    </article>
    <article class="flex pt-4 [&>button]:p-2 [&>button]:rounded-md">
        <button class="bg-secondary_pop w-[60%] hover:bg-secondary_contrast transition-all duration-150">hej</button>
        <button class="bg-secondary_pop ml-4 grow hover:bg-secondary_contrast transition-all duration-150">då</button>
    </article>
</section>
<article class="w-[40%]">
    <h1 class="text-white pt-5 text-5xl ">{{props.title}}</h1>
    <ul class="text-white pr-5 pt-2 flex">
        <li v-for="tag in props.tags" class="pr-2 text-xl">{{tag}}</li>
    </ul>
    <p class="text-white pt-5">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam dolore iste ratione voluptate perferendis adipisci saepe doloremque velit dolorum minus, omnis vel dolores odio incidunt quidem et voluptatibus! Eius.
    Molestias dignissimos illo accusantium adipisci, hic eum sit nostrum consequatur culpa aliquam et assumenda ratione recusandae eligendi voluptates repellat molestiae aliquid? Eum fugit maiores porro iure excepturi vero veritatis quo.
    </p>
</article>

</section>
</template>

<script setup lang="ts">
    const props = defineProps({
        title: String,
        tags: Array<String>,
    })

</script>