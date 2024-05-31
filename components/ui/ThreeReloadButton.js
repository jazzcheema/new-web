"use client"
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeReloadButton = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Create texture with text
    const createTextTexture = (text, color) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 4096; // Increase canvas size for better resolution
      canvas.height = 4096;
      context.fillStyle = 'black';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = color;
      context.font = 'bold 300px Arial'; // Increase font size for better visibility
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(text, canvas.width / 2, canvas.height / 2);
      return new THREE.CanvasTexture(canvas);
    };

    const blueTexture = createTextTexture('Reload', '#0077ff');
    const greenTexture = createTextTexture('Reload', '#00ff00');

    // Geometry and Material
    const geometry = new THREE.TorusGeometry(3.2, 1.3, 16, 100); // Increase size of torus
    const material = new THREE.MeshBasicMaterial({ map: blueTexture });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      torus.rotation.x += 100;
      torus.rotation.y += 10;
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      const { clientWidth, clientHeight } = mount;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Handle hover effects
    const handleMouseOver = () => {
      material.map = greenTexture;
    };
    const handleMouseOut = () => {
      material.map = blueTexture;
    };
    mount.addEventListener('mouseover', handleMouseOver);
    mount.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('resize', handleResize);
      mount.removeEventListener('mouseover', handleMouseOver);
      mount.removeEventListener('mouseout', handleMouseOut);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  const handleReload = () => {
    window.location.href = '/';
  };

  return (
    <div className="relative flex flex-col items-center">
      <div
        ref={mountRef}
        className="w-80 h-80" // Increase size of the container
        onClick={handleReload}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default ThreeReloadButton;




