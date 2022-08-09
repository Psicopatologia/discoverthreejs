import { BoxBufferGeometry, Mesh, MeshBasicMaterial } from "../../../vendor/three/build/three.module.js";

function createBasicCube() {
    const geometry = new BoxBufferGeometry(2,2,2);

    const material = new MeshBasicMaterial({color: 'purple'});

    const cube = new Mesh(geometry, material);

    return cube;
}

export { createBasicCube };