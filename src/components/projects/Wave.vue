<script setup lang="ts">
    import CardS from "./CardS.vue"
    import CardL from "./CardL.vue"
    import { useScroll } from "../../composition/useScroll";
    import { ref, watch } from "vue";
    const scrollTarget = ref(null)

    enum Direction {
        UP,
        DOWN
    }

    const {direction, triggered} = useScroll(scrollTarget,300)

    const triggerScroll = (dir: Direction) => {
        console.log(dir)
    }

    watch(triggered, () => {
        direction.value ? triggerScroll(Direction.UP) : triggerScroll(Direction.DOWN)
           

    })

    var list = ["Go", "REST API", "Authentication"]
</script>

<template>

    <section ref="scrollTarget" class="flex flex-col items-center h-[100%] w-screen bg-secondary ">
        <h1>{{direction}}</h1>

        <div class="w-screen relative bg-secondary_contrast mt-0 grow-0 " > 

            <img src="@/assets/go.png" alt="" class="w-24 h-24 m-auto " >
        </div>


    <div class="flex">
        
     
        <div class=" mt-20  grid grid-cols-[350px_800px] gap-3  [&>*]:rounded-md ">
                 
            <CardS title="hej" :tags="list" class="" ></CardS>
           
           
            <div class="row-span-2 ">
                
     
                <CardL title="Café ordering backend" :tags="list"></CardL>
      
           
            </div>
            <CardS title="då" :tags="list" class=""></CardS>
            
        </div>
    </div>

</section>
</template>

<style scoped>
</style>