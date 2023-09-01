<template>
 
  <div :class="{full:full}" class="h-screen w-[screen]  flex items-center flex-col justify-center" :style="{'background-color': color }">


      <CardL class="{out: ready}" title="Café ordering system" img="cafe.jpg" :tags="cafeTags" :full="full" ></CardL>
      <article :class="{bye:full}">
        <p @click="$emit('goTo', reference)" :class="{hello: ready}" class="oki absolute opacity-0 text-white text-[72px] 
         left-[550px] hover:cursor-pointer hover:text-secondary_pop whitespace-nowrap gap-5 
         items-center flex">View It <img class="h-8 w-12" src="../../assets/arrow_straight.svg"/></p>
        <p  :class="{hello2: ready}" class="oki absolute opacity-0 text-white text-[56px] 
        left-[550px] hover:cursor-pointer mt-48 hover:text-secondary_pop whitespace-nowrap gap-5 
        items-center flex">View It <img class="h-8 w-12" src="../../assets/arrow_straight.svg"/></p>
      </article>

    
    

 
  </div>
</template>

<script setup lang="ts">
import CardL from '../projects/CardL.vue';
import { useStateStore } from '../../store/state';
import { onBeforeMount, onBeforeUpdate, onMounted, onUnmounted, ref, watch } from 'vue';



let state = useStateStore()
const cafeTags = ["Go", "REST", "Authentication", "CI/CD", "Github Actions"]
const recipeTags = ["Vue", "Typescript", "SPA", "Cloud", "Firebase", "Authentication"]

const ready = ref(false)

const props = defineProps({
  color: String,
  reference: Number,
  full: Boolean
})

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

.bye {
  opacity: 0;
}

.oki{
  transition: all 1s ease-out;
  transform:  translateX(-600px) ;
  opacity: 0;
}



.hello {
  opacity: 1 !important;
  transform: translateX(-400px) ;
}
.hello2 {
  opacity: 1 !important;
  transform: translateX(-350px) ;
}
</style>