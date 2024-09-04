import {
  CylinderGeometry,
  Mesh,
  MeshPhongMaterial,
  MeshStandardMaterial,
  TextureLoader,
  MathUtils,
} from "three";

function createMaterial() {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load("/textures/uv-test-col.png");
  const texture2 = textureLoader.load("/textures/uv-test-bw.png");
  texture2.offset.set(2, 2);
;
  const material = new MeshPhongMaterial();
  material.map = texture;
  //material.color.set("red");
  console.log(texture);

  return material;
}

function createCylinder() {
  // create a geometry
  const geometry = new CylinderGeometry(1, 1, 3, 10); 
  // create a default (white) Basic material
  const material = createMaterial();

  // create a Mesh containing the geometry and material
  const cylinder = new Mesh(geometry, material);

 const radiansPerSecond = MathUtils.degToRad(30);

 cylinder.tick = (delta) => {
   // increase the cube's rotation each frame
   cylinder.rotation.z += radiansPerSecond * delta;
   cylinder.rotation.x += radiansPerSecond * delta;
   cylinder.rotation.y += radiansPerSecond * delta;
 };

  return cylinder;
}

export { createCylinder };
