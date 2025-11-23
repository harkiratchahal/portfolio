'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      // Base rotation
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      
      // Mouse interaction (subtle rotation based on cursor)
      sphereRef.current.rotation.x += state.mouse.y * 0.2;
      sphereRef.current.rotation.y += state.mouse.x * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} ref={sphereRef} scale={2.5}>
        <MeshDistortMaterial
          color="#00FF88"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
          emissive="#00FF88"
          emissiveIntensity={0.2}
        />
      </Sphere>
      <Sphere args={[0.8, 64, 64]} scale={2.4}>
         <MeshDistortMaterial
          color="#1DB954"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.6}
        />
      </Sphere>
    </Float>
  );
};

export const HeroScene = () => {
  return (
    <div className="w-full h-[500px] md:h-[600px] relative cursor-move">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00FF88" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#9d4edd" />
        
        <AnimatedSphere />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        
        {/* Add some sparkles for extra magic */}
        <group position={[0, 0, -5]}>
           <mesh>
             <sphereGeometry args={[0.1, 16, 16]} />
             <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={2} />
           </mesh>
        </group>
      </Canvas>
    </div>
  );
};
