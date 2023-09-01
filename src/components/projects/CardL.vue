<template>
    <section class="flex flex-col w-[800px] gap-5 " >
      
        <article class="flex h-[550px] w-[800px] rounded ">
        <img :class="[{slide: ready}, {full:full}]" src="https://images.unsplash.com/photo-1475257026007-0753d5429e10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
        alt="" class="oki rounded object-cover">
        </article>  
 
   
    </section>

</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';


    const props = defineProps({
        title: String,
        tags: Array<string>,
        img: String,
        full: Boolean
    })

    const imageUrl = new URL(`../../assets/${props.img}`, import.meta.url).href

    const ready = ref(false)
    
    onMounted(() => {
  setTimeout(() => {
    ready.value = true;
}, 200);
})

onUnmounted(() => {
    setTimeout(() => {
    ready.value = false;
}, 0);
})
</script>

<style scoped>



.oki{
    transition: all 1s ease-in-out;
    transform: translateX(-50px) scale(0.85) ;
    position: absolute;
    width: 800px;
    height: 500px;
    top: 25%;
    left: 25%;
}

.oki.full{
    transform: translateX(0px) scale(2) ;
    height: 100%;
    top: 0px;
    left: 0;
    width: 50%;
    
}
.oki.slide {

    transform: translateX(0px) scale(1);
}
</style>