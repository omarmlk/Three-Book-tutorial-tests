//import * as Three from "three";
import { World } from "./World/World.js";

//      //      //      //                              World app                   //          //      //
const container = document.querySelector("#scene-container");
const world = new World(container);

function main(){

    

    

    world.render();
}

const button = document.querySelector(".render-button").onclick = function(){main()};
let animationstate = false;
const animationbutton = (document.querySelector(".animation-button").onclick =
  function () {
    if (animationstate) {world.stop();animationstate = !animationstate}
    else {world.start();animationstate = !animationstate}
  });


/*
// create a Scene
const scene = new Three.Scene();

// Set the background color
scene.background = new Three.Color("skyblue");

// Create a camera
const fov = 35; // AKA Field of View
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

const camera = new Three.PerspectiveCamera(fov, aspect, near, far);

// every object is initially created at ( 0, 0, 0 )
// move the camera back so we can view the scene
camera.position.set(0, 0, 10);

// create a geometry
const geometry = new Three.BoxGeometry(2, 2, 2);

// create a default (white) Basic material
const material = new Three.MeshBasicMaterial();

// create a Mesh containing the geometry and material
const cube = new Three.Mesh(geometry, material);

// add the mesh to the scene
scene.add(cube);

// create the renderer
const renderer = new Three.WebGLRenderer();

// next, set the renderer to the same size as our container element
renderer.setSize(container.clientWidth, container.clientHeight);

// finally, set the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio);

// add the automatically created <canvas> element to the page
container.append(renderer.domElement);

// render, or 'create a still image', of the scene
renderer.render(scene, camera);
*/
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   45,
//   window.innerWidth / window.innerHeight,
//   1,
//   500
// );
// camera.position.set(0, 0, 100);
// camera.lookAt(0, 0, 0);

// document.body.appendChild(renderer.domElement);

//  //                                                Green CUBE animation
// const light = new THREE.PointLight(0xffffff,1,100)
// light.position.set(0,10,10)
// scene.add(light)

// const geometry = new THREE.SphereGeometry(3,64,64);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 20;

// const canvas = document.querySelector(".webgl")
// const renderer = new THREE.WebGLRenderer({canvas})
// renderer.setSize(window.innerWidth, window.innerHeight)

// function animate() {
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//   renderer.render(scene, camera);
// }
// renderer.setAnimationLoop(animate);

//                                                 Drawing lines

// const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
// const points = [];
// points.push(new THREE.Vector3(-10, 0, 0));
// points.push(new THREE.Vector3(0, 10, 0));
// points.push(new THREE.Vector3(10, 0, 0));

// const geometry = new THREE.BufferGeometry().setFromPoints(points);

// const line = new THREE.Line(geometry, material);

// scene.add(line);
// renderer.render(scene, camera);
// import * as THREE from "three";

// import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
// import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

// import { GUI } from "lil-gui";

// THREE.Cache.enabled = true;

// let container;

// let camera, cameraTarget, scene, renderer;

// let group, textMesh1, textMesh2, textGeo, materials;

// let firstLetter = true;

// let text = "three.js",
//   bevelEnabled = true,
//   font = undefined,
//   fontName = "optimer", // helvetiker, optimer, gentilis, droid sans, droid serif
//   fontWeight = "bold"; // normal bold

// const depth = 20,
//   size = 70,
//   hover = 30,
//   curveSegments = 4,
//   bevelThickness = 2,
//   bevelSize = 1.5;

// const mirror = true;

// const fontMap = {
//   helvetiker: 0,
//   optimer: 1,
//   gentilis: 2,
//   "droid/droid_sans": 3,
//   "droid/droid_serif": 4,
// };

// const weightMap = {
//   regular: 0,
//   bold: 1,
// };

// const reverseFontMap = [];
// const reverseWeightMap = [];

// for (const i in fontMap) reverseFontMap[fontMap[i]] = i;
// for (const i in weightMap) reverseWeightMap[weightMap[i]] = i;

// let targetRotation = 0;
// let targetRotationOnPointerDown = 0;

// let pointerX = 0;
// let pointerXOnPointerDown = 0;

// let windowHalfX = window.innerWidth / 2;

// let fontIndex = 1;

// init();

// function init() {
//   container = document.createElement("div");
//   document.body.appendChild(container);

//   // CAMERA

//   camera = new THREE.PerspectiveCamera(
//     30,
//     window.innerWidth / window.innerHeight,
//     1,
//     1500
//   );
//   camera.position.set(0, 400, 700);

//   cameraTarget = new THREE.Vector3(0, 150, 0);

//   // SCENE

//   scene = new THREE.Scene();
//   scene.background = new THREE.Color(0x000000);
//   scene.fog = new THREE.Fog(0x000000, 250, 1400);

//   // LIGHTS

//   const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
//   dirLight.position.set(0, 0, 1).normalize();
//   scene.add(dirLight);

//   const pointLight = new THREE.PointLight(0xffffff, 4.5, 0, 0);
//   pointLight.color.setHSL(Math.random(), 1, 0.5);
//   pointLight.position.set(0, 100, 90);
//   scene.add(pointLight);

//   materials = [
//     new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }), // front
//     new THREE.MeshPhongMaterial({ color: 0xffffff }), // side
//   ];

//   group = new THREE.Group();
//   group.position.y = 100;

//   scene.add(group);

//   loadFont();

//   const plane = new THREE.Mesh(
//     new THREE.PlaneGeometry(10000, 10000),
//     new THREE.MeshBasicMaterial({
//       color: 0xffffff,
//       opacity: 0.5,
//       transparent: true,
//     })
//   );
//   plane.position.y = 100;
//   plane.rotation.x = -Math.PI / 2;
//   scene.add(plane);

//   // RENDERER

//   renderer = new THREE.WebGLRenderer({ antialias: true });
//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.setAnimationLoop(animate);
//   container.appendChild(renderer.domElement);

//   // EVENTS

//   container.style.touchAction = "none";
//   container.addEventListener("pointerdown", onPointerDown);

//   document.addEventListener("keypress", onDocumentKeyPress);
//   document.addEventListener("keydown", onDocumentKeyDown);

//   //

//   const params = {
//     changeColor: function () {
//       pointLight.color.setHSL(Math.random(), 1, 0.5);
//     },
//     changeFont: function () {
//       fontIndex++;

//       fontName = reverseFontMap[fontIndex % reverseFontMap.length];

//       loadFont();
//     },
//     changeWeight: function () {
//       if (fontWeight === "bold") {
//         fontWeight = "regular";
//       } else {
//         fontWeight = "bold";
//       }

//       loadFont();
//     },
//     changeBevel: function () {
//       bevelEnabled = !bevelEnabled;

//       refreshText();
//     },
//   };

//   //

//   const gui = new GUI();

//   gui.add(params, "changeColor").name("change color");
//   gui.add(params, "changeFont").name("change font");
//   gui.add(params, "changeWeight").name("change weight");
//   gui.add(params, "changeBevel").name("change bevel");
//   gui.open();

//   //

//   window.addEventListener("resize", onWindowResize);
// }

// function onWindowResize() {
//   windowHalfX = window.innerWidth / 2;

//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();

//   renderer.setSize(window.innerWidth, window.innerHeight);
// }

// //

// function onDocumentKeyDown(event) {
//   if (firstLetter) {
//     firstLetter = false;
//     text = "";
//   }

//   const keyCode = event.keyCode;

//   // backspace

//   if (keyCode == 8) {
//     event.preventDefault();

//     text = text.substring(0, text.length - 1);
//     refreshText();

//     return false;
//   }
// }

// function onDocumentKeyPress(event) {
//   const keyCode = event.which;

//   // backspace

//   if (keyCode == 8) {
//     event.preventDefault();
//   } else {
//     const ch = String.fromCharCode(keyCode);
//     text += ch;

//     refreshText();
//   }
// }

// function loadFont() {
//   const loader = new FontLoader();
//   loader.load(
//     "fonts/" + fontName + "_" + fontWeight + ".typeface.json",
//     function (response) {
//       font = response;

//       refreshText();
//     }
//   );
// }

// function createText() {
//   textGeo = new TextGeometry(text, {
//     font: font,

//     size: size,
//     depth: depth,
//     curveSegments: curveSegments,

//     bevelThickness: bevelThickness,
//     bevelSize: bevelSize,
//     bevelEnabled: bevelEnabled,
//   });

//   textGeo.computeBoundingBox();

//   const centerOffset =
//     -0.5 * (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x);

//   textMesh1 = new THREE.Mesh(textGeo, materials);

//   textMesh1.position.x = centerOffset;
//   textMesh1.position.y = hover;
//   textMesh1.position.z = 0;

//   textMesh1.rotation.x = 0;
//   textMesh1.rotation.y = Math.PI * 2;

//   group.add(textMesh1);

//   if (mirror) {
//     textMesh2 = new THREE.Mesh(textGeo, materials);

//     textMesh2.position.x = centerOffset;
//     textMesh2.position.y = -hover;
//     textMesh2.position.z = depth;

//     textMesh2.rotation.x = Math.PI;
//     textMesh2.rotation.y = Math.PI * 2;

//     group.add(textMesh2);
//   }
// }

// function refreshText() {
//   group.remove(textMesh1);
//   if (mirror) group.remove(textMesh2);

//   if (!text) return;

//   createText();
// }

// function onPointerDown(event) {
//   if (event.isPrimary === false) return;

//   pointerXOnPointerDown = event.clientX - windowHalfX;
//   targetRotationOnPointerDown = targetRotation;

//   document.addEventListener("pointermove", onPointerMove);
//   document.addEventListener("pointerup", onPointerUp);
// }

// function onPointerMove(event) {
//   if (event.isPrimary === false) return;

//   pointerX = event.clientX - windowHalfX;

//   targetRotation =
//     targetRotationOnPointerDown + (pointerX - pointerXOnPointerDown) * 0.02;
// }

// function onPointerUp() {
//   if (event.isPrimary === false) return;

//   document.removeEventListener("pointermove", onPointerMove);
//   document.removeEventListener("pointerup", onPointerUp);
// }

// //

// function animate() {
//   group.rotation.y += (targetRotation - group.rotation.y) * 0.05;

//   camera.lookAt(cameraTarget);

//   renderer.clear();
//   renderer.render(scene, camera);
// }
