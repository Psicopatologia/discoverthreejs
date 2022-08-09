import { createCamera } from './components/camera.js';
import { createStandardCube } from './components/standardCube.js';
import { createBasicCube } from './components/basicCube.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

let camera;
let renderer;
let scene;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const cube = new createStandardCube();
    cube.rotation.set(-0.5, -0.1, 0.8);

    const light = new createLights();
    scene.add(cube, light);
    const resizer = new Resizer(container, camera, renderer);
    resizer.onResize = () => {
      this.render();
    }
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
}

export { World };
