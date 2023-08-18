<script setup lang="ts">
import { onMounted, reactive} from "vue";
import * as THREE from 'three';
import { CircleGeometry, Scene } from "three";

var scene: THREE.Scene;
var sceneGeometry: THREE.Mesh<THREE.CircleGeometry, THREE.MeshPhongMaterial>[] = [];
var camera: THREE.PerspectiveCamera;
var renderer: THREE.Renderer;
var mouse = THREE.Vector2;

const initScene = () => {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  window.addEventListener('mousemove', (event) => {
  // Calculate normalized mouse coordinates
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
  });

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x10120B)
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  camera.rotation.z -= .2
  camera.position.z = 10;
 
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth/2, window.innerHeight);

  camera.aspect = window.innerWidth/window.innerHeight/2;
  camera.updateProjectionMatrix();

  document.getElementById('landing')?.appendChild(renderer.domElement)

  const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
  scene.add( light );
}

const doThis = (e: MouseEvent) => {
  console.log("HI")
}


const addCircle = (x: number, y: number, size: number) => {
  const geometry = new THREE.CircleGeometry(size, 32);
  const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
  const circle = new THREE.Mesh( geometry, material );
  circle.position.x = x;
  circle.position.y = y;
  scene.add( circle );

  renderer.domElement.addEventListener('mouseover', doThis, false)

  sceneGeometry.push(circle);

}

const animate = () => {
  if(!sceneGeometry) {
    return
  }
  sceneGeometry.forEach((x) => {
    let val = 1 * (0.001 * mouse.mouseX);
    x.scale.set(val, val, val); 

  })
   
  requestAnimationFrame( animate );
  renderer.render( scene, camera );


}

onMounted(() => {

  initScene();
  addCircle(1,1, 0.5);
  addCircle(3,3, 0.7);
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

