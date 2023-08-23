<style>

@keyframes expand{
    0% {
      flex-grow: 1;
      transition: translateX(0);
    }
    50% {
        transition: translateX(0);
    }
    100% {
        flex-grow: 1;
        transition: translateX(500px);
    }
  }

  @keyframes shrink{
    0% {
        width: 50%;
    }

    100% {
        width: 100%;
    }
  }

  @keyframes start{
    0% {

        transform: translateX(0);
     
    }
    50% {

        transform: translateX(0);
    
    }
    90% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translateX(-100%);    
    
        
    }
  }

  .start {
    animation: start 1s forwards
  }
  .shrink {
    width: 0px !important;
  }
  .shrink > * {
    transition: all 0.1s ease-out;
    opacity: 0;
  }

  .expand {

    animation: expand .5s
  }

  .expand > * {
    transition: all 0.25s ease-out;
    opacity: 0;
  }

.intro-animation {
    transition: 0.5s ease
}

</style>


<template>
    <section v-if="!done" :class="{'start': introAnimation}" ref="intro" class="flex h-full w-full bg-main text-white [&>article]:w-[50%]">

     
        <article :class="{'shrink': introAnimation}" class="intro-animation bg-secondary flex items-center justify-center flex-col">
            <article>
                <h1 class="text-5xl">Nicholas Miettinen</h1>
                <p class="text-3xl">Software develper</p>
                <article class="flex items-center mt-5">        
                    <button class=" bg-secondary_pop py-2 px-4 rounded hover:bg-secondary_contrast transition duration-150">
                        <p class="text-xl">Get my CV</p>
                    </button>
                    <p class="hover:cursor-pointer pl-5 hover:text-secondary_pop transition duration-100 text-xl flex gap-4">View my work <img class="color-current" src="../assets/arrow_straight.svg"/> </p>
                </article>
            </article>
    
        </article>
 

        <article :class="{'expand': introAnimation}" class="intro-animation flex items-center justify-center">
            <h1 class="text-5xl">Or scroll to explore</h1>
        </article>
  

    </section>
</template>


<script setup lang="ts">
import { ref, watch, } from 'vue';
import { useScroll } from '../composition/useScroll';


const emit = defineEmits(['done'])

const intro = ref(null)
const introAnimation = ref(false)
const done = ref(false)

const {triggered} = useScroll(intro, 300)


watch(triggered, () => {
    introAnimation.value = true

    setTimeout(() => {
        done.value = true
        emit('done')
    }, 1100)
})

</script>