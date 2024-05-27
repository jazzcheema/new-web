"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeButton = ({ onClick }) => {
  const mountRef = useRef(null);
  const cubeRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Geometry and material
    const geometry = new THREE.BoxGeometry(4, 4, 4);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    });
    const cube = new THREE.Mesh(geometry, material);
    cubeRef.current = cube;
    scene.add(cube);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Clean up
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  const handleClick = () => {
    if (cubeRef.current) {
      // Animate the cube's scale
      cubeRef.current.scale.set(1.5, 1.5, 1.5);

      // Reset the scale after 0.5 seconds
      setTimeout(() => {
        cubeRef.current.scale.set(1, 1, 1);
      }, 500);
    }

    // Call the passed onClick function if any
    if (onClick) {
      onClick();
    }
  };

  return (
    <div ref={mountRef} className="relative w-80 h-80" onClick={handleClick}>
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl animate-flash-pulse">
        <p className="hover:text-2xl transition-all duration-300">Enter</p>
      </div>
    </div>
  );
};

export default ThreeButton;
