import React, { Component } from "react";
import * as THREE from "three";

class ThreeScene2 extends Component {
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    //ADD SCENE
    this.scene = new THREE.Scene();
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;
    //ADD RENDERER

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    // this.renderer.setClearColor("0x000000, 0");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    //ADD CUBE

    const geometry = new THREE.BoxGeometry(2.5, 2.5, 2.5);

    const texture = new THREE.TextureLoader().load(
      "https://media-exp1.licdn.com/dms/image/C4D03AQEHj4ZQuCMxSw/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=FQEJs2tFv77fi9cuR3OvBJlM5PvF4PBOWpUtKuuCAQg"
    );
    texture.minFilter = THREE.LinearFilter;

    const material = new THREE.MeshBasicMaterial({ map: texture });

    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            width: "300px",
            height: "300px"
          }}
          ref={mount => {
            this.mount = mount;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ThreeScene2;
