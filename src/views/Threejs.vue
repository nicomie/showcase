<script setup lang="ts">
    import * as THREE from 'three';
    import { useMouse } from "../composition/useMouse";
    import { onMounted, reactive} from "vue";

    var scene: THREE.Scene;
    var sceneGeometry: THREE.Mesh<THREE.CircleGeometry, THREE.MeshPhongMaterial>[] = [];
    var camera: THREE.PerspectiveCamera;
    var renderer: THREE.Renderer;
    var raycaster: THREE.Raycaster;
    var mouse = reactive(useMouse())
    var vec: THREE.Vector3;

const initScene = () => {
    vec = new THREE.Vector3(mouse.mouseX, mouse.mouseY, 1)


    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x10120B)
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.rotation.z -= .2
    camera.position.z = 10;
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth/2, 1000);

    camera.aspect = window.innerWidth/window.innerHeight/2;
    camera.updateProjectionMatrix();

    raycaster = new THREE.Raycaster(camera.position, vec.sub(camera.position).normalize());

    document.getElementById('landing')?.appendChild(renderer.domElement)

    const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
    scene.add( light );
}

const addCircle = (x: number, y: number, size: number) => {
  const geometry = new THREE.CircleGeometry(size, 32);
  const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
  const circle = new THREE.Mesh( geometry, material );
  circle.position.x = x;
  circle.position.y = y;
  scene.add( circle );
  sceneGeometry.push(circle);

}
const animate = () => {
  if(!sceneGeometry) {
    return
  }


  sceneGeometry.forEach((x) => {
    let val = 1 * (0.001 * mouse.mouseX);
    x.scale.set(val, val, val); 

    const intersects = raycaster.intersectObject(x)
    if(intersects.length > 0) {
      console.log(intersects)
    }

  })
   
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
}

onMounted(() => {

// initScene();
// addCircle(1,1, 0.5);
// addCircle(3,3, 0.7);
// animate();

})

</script>