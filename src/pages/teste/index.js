import { useEffect, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { ARButton } from 'three/examples/jsm/webxr/ARButton';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Home() {
  const arButtonContainer = useRef();
  const sceneRef = useRef();

  useEffect(() => {
    if (arButtonContainer.current) {
      const arButton = ARButton.createButton(new THREE.WebGLRenderer(), {
        requiredFeatures: ['hit-test'],
      });

      arButtonContainer.current.appendChild(arButton);
    }
  }, []);

  const onLoad = (gltf) => {
    const { scene } = gltf;
    scene.scale.set(0.1, 0.1, 0.1);
    scene.position.set(0, -0.5, -1.5);
    scene.rotation.y = Math.PI;

    if (sceneRef.current) {
      sceneRef.current.add(scene);
    }
  };

  const gltfLoader = new GLTFLoader();
  gltfLoader.load('/glasses.glb', onLoad);

  return (
    <div className={"container"}>
      <div className={"arButtonContainer"} ref={arButtonContainer}></div>
      <Canvas
        onCreated={({ gl, scene }) => {
          scene.background = null;
          gl.xr.enabled = true;
          gl.setClearColor(0xffffff, 0);
          sceneRef.current = scene;
        }}
      />
    </div>
  );
}