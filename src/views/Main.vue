<script setup lang="ts">
import { reactive, ref, watch} from 'vue'
import { useScroll } from '../composition/useScroll';
import { useStateStore } from '../store/state';
import Wrapper from "../components/showcase/Wrapper.vue"
import { useRouter } from 'vue-router';

  
    let state = useStateStore()
    const main = ref(null)
    const idx = ref(0)
    const hash = ref("0")
    const router = useRouter()

    const nextRoute = reactive({
        index: -1,
        ready: false
    })

    const isPaused = ref(false)

    const {direction, triggered} = useScroll(main, 300, isPaused)

    const handleScroll = (val: number) => {

        if (val > 0) {
            if(idx.value >= 1 ) {
            return
            }
        } else if (val < 0) {
            if(idx.value <= 0) {
                return
            }
        }

        idx.value += val
        state.setActiveIndex(idx.value)
        // TODO
        window.location.hash = idx.value.toString()
        hash.value = window.location.hash;
              
    }

    watch(triggered, () => {
        direction.value ? handleScroll(-1) : handleScroll(1)
    })

    const changeView = (val: number) => {
        isPaused.value =true;
        nextRoute.index = val
        nextRoute.ready = true
        router.push({
        name: 'Home',
        query: {
            id: nextRoute.index
        }
    })
    }

</script>

<template>
    
    <section  ref="main" class="h-screen w-screen flex flex-col items-center relative justify-center ">
   
        <ul class="flex flex-col gap-5 absolute left-0 ml-48 [&>*]:bg-main [&>*]:w-6 [&>*]:h-6 [&>*]:rounded-full z-10">
            
            <article :class="{active2: idx==0}"></article>

            <article :class="{active2: idx==1}"></article>
 
            <article :class="{active2: idx==2}"></article>
            {{ nextRoute.ready }}
            {{ nextRoute.index }}
            {{ isPaused }}
           
        </ul>
        


        <Transition :name="direction ? 'up' : 'down'">
        
          <Wrapper @goTo="changeView" class="absolute h-full w-full" v-if="idx==0" :full="nextRoute.index==0" :reference="idx"/>
 
        </Transition>
   
      
       
        <Transition :name="direction ? 'up' : 'down'" >
          <Wrapper @goTo="changeView" class=" absolute h-full w-full" v-if="idx==1" :full="nextRoute.index==1" :reference="idx"/>
     

        </Transition>
        
   
  
    </section>
    <section v-if="nextRoute.ready" class="h-[1600px] z-10 bg-white w-[100%] right-0 absolute "> HELLo</section>
</template>

<style scoped>

.out{
    animation: 1s toLeft cubic-bezier(.59,.2,.53,.94) forwards;
}

ul > article {
    transition: all .35s ease;

}
.active2 {
    height: 3rem;
    background-color: #1B8198;

}

.bye-enter-active {
    animation: .8s fromLeft cubic-bezier(.59,.2,.53,.94);
}
.bye-leave-active {
    animation: .8s toLeft cubic-bezier(.59,.2,.53,.94);
}

.up-enter-active {
    animation: .8s fromdown cubic-bezier(.59,.2,.53,.94);
}
.up-leave-active {
    animation: .8s down cubic-bezier(.59,.2,.53,.94);
}

.down-enter-active {
    animation: .8s fromup cubic-bezier(.59,.2,.53,.94) ;
}
.down-leave-active {
    animation: .8s up cubic-bezier(.59,.2,.53,.94);
}

@keyframes toLeft{
    0% {
        transform: translatex(0%) scale(1);
        opacity: 1;

 
    }

    100% {

        transform: translatex(-100%) scale(0.5);  
        opacity: 0;
    }
  }


@keyframes up{
    0% {
        transform: translateY(0%);
 
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