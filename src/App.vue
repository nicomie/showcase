<script setup lang="ts">
import { onBeforeMount, onMounted } from 'vue'
import { useStateStore } from './store/state';
import { storeToRefs } from 'pinia';


const state = useStateStore()

const {activeIndex} = storeToRefs(state)


onMounted(() => {

  

  setTimeout(() => {
    const doc = document.getElementById('html')

  console.log("logging" + activeIndex)
    if(activeIndex.value == 0){
        if(doc) {
          doc.style.backgroundColor="#34344a"
        }
    
    }
    if(activeIndex.value == 1) {
      if(doc) {

        doc.style.backgroundColor="#80475e"
      }
    }
    },0)


})

</script>

<template >

  <RouterView></RouterView>

</template>

<style>


html {


}
body {

}

</style>
