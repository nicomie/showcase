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
    transition: 0.4s ease
}

</style>


<template>
    <section ref="intro" class="flex h-full w-full bg-main text-white [&>article]:w-[50%]">

     
        <article  class="intro-animation bg-secondary flex items-center justify-center flex-col">
            <article>
                <h1 class="text-5xl">Nicholas Miettinen</h1>
                <p class="text-3xl">Software developer</p>
                <article class="flex items-center mt-5">        
                    <button class=" bg-secondary_pop py-2 px-4 rounded hover:bg-secondary_contrast transition text-black duration-150">
                        <p class="text-xl">Get my CV</p>
                    </button>
                    <RouterLink to="/showcase/work">
                    <p class="hover:cursor-pointer pl-5 hover:text-secondary_pop transition duration-100 text-xl flex gap-4">View my work <img class="color-current" src="../assets/arrow_straight.svg"/> </p>
                    </RouterLink>
                </article>
            </article>
    
        </article>

    
 

        <article class="intro-animation flex items-center justify-center">
            <h1 class="text-5xl">Or <span class="text-secondary_pop">scroll </span> to explore</h1>
        </article>
  

    </section>
</template>


<script setup lang="ts">

</script>