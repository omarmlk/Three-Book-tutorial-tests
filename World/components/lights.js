import { AmbientLight, DirectionalLight, HemisphereLight, PointLight, SpotLight } from "three";

function createLights() {
  // Create a directional light
  
  //const ambientlight = new AmbientLight("white", 1);
  const ambientlight = new HemisphereLight(
    "white", // bright sky color
    "darkslategrey", // dim ground color
    2 // intensity
  );

  ambientlight.position.set(0,-20,0)
  const mainlight = new DirectionalLight("white", 5);
  //const light = new SpotLight("white", 800);
  // move the light right, up, and towards us
  mainlight.position.set(0, 0, 0);
  mainlight.tick = (delta) => {
    // increase the cube's rotation each frame
    mainlight.position.x -= 1 * delta;
  };
  return {mainlight, ambientlight};
}

export { createLights };
