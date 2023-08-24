<script setup lang="ts">
import {Ref, onMounted, ref, watch} from 'vue'
import { useScroll } from '@/composition/useScroll';

    const first = ref(null)
    const second = ref(null)
    const third = ref(null)
    const main = ref(null)
    const slots: Ref<HTMLElement | null>[] = [first, second,third]
    const idx = ref(0)

    const {direction, triggered} = useScroll(main, 300)

    const handleScroll = (val: number) => {

        if (val > 0) {
            if(idx.value >= slots.length-1 ) {
            return
            }
        } else if (val < 0) {
            if(idx.value <= 0) {
                return
            }
        }

        idx.value += val
    }

    watch(triggered, () => {
        direction.value ? handleScroll(-1) : handleScroll(1)
    })

    onMounted(() => {
        slots[idx.value].value?.classList.add("active1")
    })



</script>

<template>
    
    <section ref="main" class="h-screen w-screen flex items-center justify-center ">
   
        <ul class="flex flex-col gap-5 absolute left-0 ml-48 [&>*]:bg-main [&>*]:w-6 [&>*]:h-6 [&>*]:rounded-full z-10">
            
            <article :class="{active2: idx==0}"></article>

            <article :class="{active2: idx==1}"></article>
 
            <article :class="{active2: idx==2}"></article>
         
        </ul>

        <Transition :name="direction ? 'up' : 'down'" mode="in-out" >
        <div ref="first"  class="fixed  overflow-hidden" v-if="idx==0">
            <slot name="first">

            </slot>
        </div>
        </Transition>
 
        <Transition :name="direction ? 'up' : 'down'" >
        <div ref="second" class="fixed overflow-hidden" v-if="idx==1">
            <slot name="second"></slot>

        </div>
        </Transition>
        <Transition :name="direction ? 'up' : 'down'" >
            <div ref="third" class="fixed overflow-hidden z-9" v-if="idx==2">
                <slot name="third"></slot>
    
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
    animation: fromup 0.5s ;
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
        transform: translateY(-600px);
 
     
    }
    100% {
        transform: translateY(0px); 
    
        
    }
  }
</style>