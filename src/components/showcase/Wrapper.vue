<template>
 
  <div :class="{full:full}" class=" w-full h-full flex items-center flex-row " :style="{'background-color': color }">

    


    
      <img :class="[{slide: ready}, {full:full}]" :src="img" 
    alt="" class="oki rounded object-cover ">
      <article :class="[{bye:full}, {notBye:!full}]" class=" ">
   
        <p  :class="{hello: ready}" class=" text-white text-[72px] items-center flex font-a font-a"> {{ title }} </p>
        <p @click="$emit('goTo', reference)" :class="{hello2: ready}" class=" text-white text-[56px] font-a 
         hover:cursor-pointer hover:text-[#C9F299] transition duration-200 gap-5 items-center flex">Tell me more <img class="h-8 w-12 mt-2" src="../../assets/arrow_straight.svg"/></p>
      
      </article>

    
      

 
  </div>
</template>

<script setup lang="ts">

//import { useStateStore } from '../../store/state';
import { onMounted, onUnmounted, ref, watch } from 'vue';



//let state = useStateStore()
//const cafeTags = ["Go", "REST", "Authentication", "CI/CD", "Github Actions"]
//const recipeTags = ["Vue", "Typescript", "SPA", "Cloud", "Firebase", "Authentication"]

const ready = ref(false)

const props = defineProps({
  color: String,
  reference: Number,
  full: Boolean,
  img: String,
  title: String,
  tags: Array<string>,
})

//const imageUrl = new URL(`../../assets/${props.img}`, import.meta.url).href

const fullProp = ref(props.full)

const emit = defineEmits<{
  (e: 'goTo', index: number): void
  (e: 'stopScroll', value: boolean): void
}>()


watch(fullProp, () => {
  if(fullProp.value == true) {
    emit('stopScroll', true)
  } else {
    emit('stopScroll', false)
  }
})


onMounted(() => {
  setTimeout(() => {
    ready.value = true;
}, 100);
})

onUnmounted(() => {
  setTimeout(() => {
    ready.value = false;
}, 100);
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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
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
article{
  transition: 0.5s all ease;
}
article.bye {
  animation: getGood 1.2s forwards  ease;
}
article.notBye {
  animation: cool 1.2s  ease;
}
@keyframes cool {
  0% {
    transform: translateX(800px);
    opacity: 0.2;
  } 

  50%{
    transform: translateX(1200px);
    opacity: 0;

  }
  51% {
    transform: translateX(-300px);
    opacity: 0;

  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes getGood {
  0% {
    transform: translateX(0px);
    opacity: 1;
  } 

  50% {
    transform: translateX(-300px);
    opacity: 0;
  }
  51% {
    transform: translateX(1100px);
    opacity: 0;

  }
  100% {
    transform: translateX(800px);
  }
}


.hello {
  opacity: 1 !important;
  transform:  translateX(250px) ;

}
.hello2 {
  opacity: 1 !important;
  transform:  translateX(250px) ;

}
</style>