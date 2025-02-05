
import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane
    100 // far clipping plane
  );

  // move the camera back so we can view the scene
  camera.position.set(0, 0, 30);
  camera.tick = (delta) => {
    // increase the cube's rotation each frame
    camera.position.z -= 1 * delta;
    
  };
  return camera;
}

export { createCamera };