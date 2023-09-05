<template>
 
  <div :class="{full:full}" class=" w-full h-full flex items-center   flex-row " :style="{'background-color': color }">

    


    
      <img :class="[{slide: ready}, {full:full}]" :src="img" 
    alt="" class="oki rounded object-cover ">


    <article :class="[{bye:full}, {notBye:!full}]" class="flex flex-col items-center text-center lg:items-center lg:ml-32 
    w-full lg:w-[50%] h-full left-0 justify-center absolute" v-if="!full">
        <article>
        <p class=" text-white text-[48px] lg:text-[72px]  font-a"> {{ title }} </p>
        <p @click="$emit('goTo', reference)"  class=" text-white text-[32px] lg:text-[56px] font-a 
         hover:cursor-pointer hover:text-[#C9F299] transition duration-200 gap-5 items-center flex">Tell me more <img class="h-8 w-12 mt-2" src="../../assets/arrow_straight.svg"/></p>
        </article>
      </article>

      <article ref="line" v-if="full" :class="[{bye:!full}, {fromDown:full}]" class="w-full h-full lg:w-[50%] right-0 flex flex-col items-center justify-center absolute">
        <p class="h-[30%] bottom-0 w-[3px]  bg-white absolute"></p>
        <p class="bottom-0 mb-32 ml-8 text-center text-white text-2xl  absolute rotate-90">scroll</p>
        <p  class="text-white text-[56px] ">{{title}}</p>
        <ul class="flex text-white text-xl">
          <li class="pl-4" v-for="tag in tags" :key="tag" >{{ tag }}</li>
        </ul>
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

@media screen and (max-width: 799px) {
  article {
    margin-top: 8rem;
  }
  .oki{
    transition: all 1.2s cubic-bezier(.59,.2,.53,.94);;
    position: absolute;
    top: 25%;
    width: 80%;
    left: 10%;
    height: auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
  .oki.full{
     
      top: 0px;
      width: 100%;
      left: 0%;
  }

}

@media screen and (min-width: 800px) {
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
  animation: toLeft 1.2s forwards  ease;
}
article.notBye {
  animation: fromLeft 1.2s  ease;
}

article.fromDown {
  animation: fromDown 1.2s  ease;
}

@keyframes fromDown {
  0% {
    transform: translateY(600px);
    opacity: 0;

  } 
  20% {
    transform: translateY(600px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes fromLeft {
  0% {
    transform: translateX(-600px);
    opacity: 0;

  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes toLeft {
  0% {
    transform: translateX(0px);
    opacity: 1;

  }
  100% {
    transform: translateX(600px);
    opacity: 0;
  }
}





}







</style>