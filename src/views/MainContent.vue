<script setup lang="ts">
import { ref, watch} from 'vue'
import { useScroll } from '../composition/useScroll';
import { useStateStore } from '../store/state';
  
    let state = useStateStore()
    const main = ref(null)
    const idx = ref(0)

    const props = defineProps<{
        content: Array<string>
    }>()

    const {direction, triggered} = useScroll(main, 300)

    const handleScroll = (val: number) => {

        if (val > 0) {
            if(idx.value >= props.content.length-1 ) {
            return
            }
        } else if (val < 0) {
            if(idx.value <= 0) {
                return
            }
        }

        idx.value += val
  
        state.setActiveIndex(idx.value)
              
    }

    watch(triggered, () => {
        direction.value ? handleScroll(-1) : handleScroll(1)
    })



</script>

<template>
    
    <section ref="main" class="h-screen w-screen flex items-center justify-center ">
   
        <ul class="flex flex-col gap-5 absolute left-0 ml-48 [&>*]:bg-main [&>*]:w-6 [&>*]:h-6 [&>*]:rounded-full z-10">
            
            <article :class="{active2: idx==0}"></article>

            <article :class="{active2: idx==1}"></article>
 
            <article :class="{active2: idx==2}"></article>
         
        </ul>
        
        <Transition :name="direction ? 'up' : 'down'" v-for="(name, index) in content"  >
        <div class="fixed overflow-hidden h-full w-full" :ref="name" v-if="(idx==index) == true" >
            <slot :name="name" >

            </slot>
        </div>
        </Transition>

    </section>
</template>

<style scoped>

ul > article {
    transition: all .35s ease;

}
.active2 {
    height: 3rem;
    background-color: #1B8198;
    

}
.up-enter-active {
    animation: fromdown 0.5s ;
}
.up-leave-active {
    animation: down 0.5s;
}

.down-enter-active {
    animation: fromup  0.5s ;
}
.down-leave-active {
    animation: up 0.5s;
}

@keyframes up{
    0% {
        transform: translateY(0px);
 
    }
    100% {

        transform: translateY(-100%);  
    }
  }


@keyframes down{
    0% {
        transform: translateY(0px);
    
    }
    100% {

        transform: translateY(100%);  
    }
  }

@keyframes fromup{
    0% {
        transform: translateY(100%);

     
    }
    100% {
 
        transform: translateY(0px); 
    
        
    }
  }
  @keyframes fromdown{
    0% {
        transform: translateY(-100%);
 
     
    }
    100% {
        transform: translateY(0px); 
    
        
    }
  }
</style>