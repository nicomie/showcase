<script setup lang="ts">
import { reactive, ref, watch,  onMounted} from 'vue'
import { useScroll } from '../composition/useScroll';
import { useStateStore } from '../store/state';
import Wrapper from "../components/showcase/Wrapper.vue"
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import projects from '../store/data.ts'

    
    const state = useStateStore()
    let {fullscreen, activeIndex} = storeToRefs(state)
    const main = ref(null)
    const idx = activeIndex
    const router = useRouter()



    const isPaused = ref(false)

    const {direction, triggered} = useScroll(main, 800, fullscreen)

    const data = projects.projects


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
        router.push({
            name: 'Home',
            query: {
                id: idx.value
            }
        })


        const doc = document.getElementById('app')

        if(idx.value == 0){
            if(doc)
            doc.style.backgroundColor="#34344a"
        }
        if(idx.value == 1) {
            if(doc)
            doc.style.backgroundColor="#80475e"
        }


              
    }

    watch(triggered, () => {
        direction.value ? handleScroll(-1) : handleScroll(1)
    })

    const changeView = (val: number) => {
        isPaused.value =true;

        router.push({
            name: 'Home',
            query: {
                id: idx.value,
                fullscreen: "true"
            }
        })
        

    }




</script>

<template>
    
    <section  ref="main" class="h-screen  w-scren flex  flex-col items-center relative justify-center ">
   
        <ul v-if="!state.fullscreen" class="flex flex-col gap-5 absolute left-0 top-10 lg:top-auto lg:ml-32 [&>*]:bg-[white] [&>*]:w-5 [&>*]:h-2 [&>*]:rounded-full z-10">
            
            <article :class="{active2: idx==0}"></article>

            <article :class="{active2: idx==1}"></article>
 
 
           
        </ul>
        

        <Transition :name="direction ? 'up' : 'down'">
        
          <Wrapper :tags="data[0].tags" @goTo="changeView" class="absolute " v-if="idx==0" :full="state.fullscreen" :reference="idx" 
          :title="data[0].name" img="https://images.unsplash.com/photo-1528141603775-81fd11f61682?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"/>
 
        </Transition>
   
      
       
        <Transition :name="direction ? 'up' : 'down'" >
          <Wrapper :tags="data[1].tags" @goTo="changeView" class=" absolute " v-if="idx==1" :full="state.fullscreen" :reference="idx" 
          :title="data[1].name" img="https://images.unsplash.com/photo-1511227499331-25c621db940e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80"/>
     

        </Transition>
        
   
  
    </section>
 
    <section v-if="state.fullscreen" class="extra h-[800px] flex flex-col  items-start justify-start z-10 bg-main w-full right-0 absolute "> 
        

        <article class=" py-12 text-white bg-main w-full flex flex-col items-center">
            <article>
                <h2 class="text-5xl">Key challenges</h2>

            
            <ul class="mt-8">
                <li class="py-2 text-xl" v-for="(challenge, index) in data[idx].key_challenges" :key="index"> <span class="mr-4">#{{ index+1 }}</span> {{ challenge }}</li>
            </ul>
            </article>
            

        </article>
        <article class=" py-12 text-white bg-secondary_contrast w-full flex flex-col items-center">
            <article>
                <h2 class="text-5xl">Key challenges</h2>

            
            <ul class="mt-8">
                <li class="py-2 text-xl" v-for="(challenge, index) in data[idx].key_challenges" :key="index"> <span class="mr-4">#{{ index+1 }}</span> {{ challenge }}</li>
            </ul>
            </article>
            

        </article>
    </section>

</template>

<style scoped>

.out{
    animation: 1s toLeft cubic-bezier(.59,.2,.53,.94) forwards;
}

ul > article {
    transition: all .5s ease;

}

.extra {
    transition: all .35s ease;
}

.active2 {
    width: 4rem;


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