<template>
  

  

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
    transition: all 1.2s cubic-bezier(.59,.2,.53,.94);;
    transform: translateX(-50px) scale(0.8) ;
    position: absolute;
    width: 800px;
    height: 500px;
    top: 25%;
    left: 45%;
  
}

.oki.full{
    transform: translateX(0) scale(1);
    height: 100%;
    top: 0px;
    left: 0;
    width: 50%;

    
}
.oki.slide {

    transform: translateX(0px) scale(1);
}
</style>