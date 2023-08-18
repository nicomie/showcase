<script setup lang="ts">
import { onMounted, ref } from "vue";
import Landing from "./views/Landing.vue"
import * as THREE from 'three';


onMounted(() => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x10120B)
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
 
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth/2, window.innerHeight * 0.5 * camera.aspect+11);



  document.getElementById('landing')?.appendChild(renderer.domElement)


  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 5;

  const animate = ()  => {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.02;
    cube.rotation.y += 0.01;



    renderer.render( scene, camera );
  }

  animate();

})

</script>



<template >
  <div id="landing" class="flex">
    <div class="bg-main h-screen text-white w-6/12 flex justify-center items-center flex-col-reverse" >
      <article>
        <h1 class="text-5xl">Nicholas Miettinen</h1>
        <p class="text-2xl">Explore my work</p>
        <img src="./assets/arrow.svg" alt="arrpw" class="pt-5 w-8/12 ml-80">
     
      </article>
  
      
    </div>
  
  </div>


</template>

