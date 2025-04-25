"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WebGLAnimation() {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef<number>(0);

  // MODEL & UPDATE
  const handleAnimationFrame = (delta: number) => {
    timeRef.current += delta / 1000; // Convert to seconds
    return timeRef.current;
  };

  // VIEW (Three.js scene setup)
  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const width = 400;
    const height = 400;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 100);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // MESH (Triangle)
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      0,
      0,
      0, // vertex 1
      1,
      1,
      0, // vertex 2
      1,
      -1,
      0, // vertex 3
    ]);
    const colors = new Float32Array([
      1,
      0,
      0, // red
      0,
      1,
      0, // green
      0,
      0,
      1, // blue
    ]);
    geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.MeshBasicMaterial({
      vertexColors: true,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Animation loop
    const animate = (delta: number) => {
      const t = handleAnimationFrame(delta);

      // Update camera position (orbit around origin)
      camera.position.x = 4 * Math.cos(t);
      camera.position.z = 4 * Math.sin(t);
      camera.lookAt(0, 0, 0);
      camera.up.set(0, 1, 0);

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        ref={mountRef}
        className="w-[400px] h-[400px] bg-white shadow-md rounded"
        style={{ display: "block" }}
      />
    </div>
  );
}
