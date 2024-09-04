import { createRenderer } from './systems/renderer.js';
import { createScene } from './components/scene.js';
import { createControls } from "./systems/controls.js";
import { createCamera } from './components/camera.js';
import { createLights } from "./components/lights.js";
import { Resizer } from './systems/Resizer.js';

//shapes
import { createCube } from './components/cube.js';
import { createSphere } from "./components/sphere.js";
import { createCylinder } from './components/cylinder.js';

import { Euler, Group, MathUtils, Quaternion } from 'three';
// import { Loop } from "./systems/Loop.js";

//declare
let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    //loop = new Loop(camera, scene, renderer);

    container.append(renderer.domElement);

    const controls = createControls(camera, renderer.domElement);
    const cube = createCube();
    const cylinder = createCylinder();
    const sphere = createSphere();
    const {mainlight, ambientlight} = createLights();

    cube.position.set(4, 0, 0);
    //cube.rotation.y = MathUtils.degToRad(45);

    cylinder.position.set(0, 0, 0);
    cylinder.add(cube);
    //loop.updatables.push(cube,cylinder,camera,light);
    //loop.updatables.push(controls);
    
    controls.addEventListener("change", () => {
      this.render();
    });

    const shapesGroup = new Group();
    shapesGroup.add(cylinder,sphere)

    scene.add(shapesGroup, mainlight, ambientlight);

    const resizer = new Resizer(container, camera, renderer);
    // resizer.onResize = () => {
    //   this.render();
    // };
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export {World};