<script setup lang="ts">
    import CardS from "./CardS.vue"
    import CardL from "./CardL.vue"
    var list = ["Go", "REST API", "Authentication"]
</script>

<template>
    <section class="flex h-[600px] w-screen absolute bottom-0 bg-secondary justify-center">
    <div class="flex  h-[600px] ] ">
        
        <div class="container m-auto grid grid-cols-[350px_450px] gap-3  [&>*]:rounded-md">
            <div><CardS title="hej" ></CardS></div>
            <div class="row-span-2 h-[460px]"><CardL title="Hello"></CardL></div>
            <div><CardS title="då"></CardS></div>
        </div>
    </div>
</section>
</template>

<style scoped>

</style>