import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear cubo sólido
const geometry = new THREE.BoxGeometry(1, 1, 1, 9, 9, 9);
const material = new THREE.MeshBasicMaterial({ color:"rgb(0,0,0)" });
const cube = new THREE.Mesh(geometry, material);

// Crear líneas de los triángulos individuales
const wireframeGeometry = new THREE.WireframeGeometry(geometry);
const wireframeMaterial = new THREE.LineBasicMaterial({ color:"rgb(255,255,255)" }); 
const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);

// Agrupar cubo y su wireframe
const group = new THREE.Group();
group.add(cube);
group.add(wireframe);
scene.add(group);

camera.position.z = 5;

function animate() {
  group.rotation.x += 0.01;
  group.rotation.y += 0.01;

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
