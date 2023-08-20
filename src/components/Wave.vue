<script setup lang="ts">
    import CardS from "./CardS.vue"
    import CardL from "./CardL.vue"
    var list = ["Go", "REST API", "Authentication"]
</script>

<template>

    <section class="flex flex-col items-center h-[100%] w-screen absolute bottom-0 bg-secondary ">

        <div class="w-screen relative bg-secondary_contrast mt-0 grow-0 " > 

            <img src="../assets/go.png" alt="" class="w-24 h-24 m-auto " >
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