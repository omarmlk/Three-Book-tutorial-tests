import {  Mesh, MeshStandardMaterial, Sphere, SphereGeometry, TextureLoader } from "three";

const radius = 2;
const widthSegments = 16;
const heightSegments = 16;


function createMaterial() {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load("/textures/uv-test-col.png");

  const material = new MeshStandardMaterial({ color: "green", map: texture });
  return material;
}

function createSphere() {
  const geometry = new SphereGeometry(
    radius,
    widthSegments,
    heightSegments
  );
  const material = createMaterial();
  const sphere = new Mesh(geometry, material);

  sphere.position.set(-5, 1, 0);

  // const radiansPerSecond = MathUtils.degToRad(180);

  // cube.tick = (delta) => {
  //   // increase the cube's rotation each frame
  //   cube.rotation.z += radiansPerSecond * delta;
  //   cube.rotation.x += radiansPerSecond * delta;
  //   cube.rotation.y += radiansPerSecond * delta;
  // };

  return sphere;
}

export { createSphere };