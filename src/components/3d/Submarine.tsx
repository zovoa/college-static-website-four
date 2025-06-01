import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Since we can't use an actual GLTF model without importing one,
// we'll create a simple submarine model using Three.js primitives
export const Submarine: React.FC = () => {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (group.current) {
      // Bob up and down
      group.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
      // Subtle rotation
      group.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.3) * 0.05;
    }
  });

  return (
    <group ref={group}>
      {/* Main body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 1, 3, 32]} />
        <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Front cone */}
      <mesh position={[0, 0, 1.8]}>
        <coneGeometry args={[1, 1.5, 32]} />
        <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Top fin */}
      <mesh position={[0, 0.8, -0.5]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.2, 0.8, 1.5]} />
        <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Periscope */}
      <mesh position={[0, 1.3, 0.5]}>
        <cylinderGeometry args={[0.1, 0.1, 0.8, 16]} />
        <meshStandardMaterial color="#555555" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Windows (portholes) */}
      {[-0.8, 0, 0.8].map((x, i) => (
        <mesh key={i} position={[x, 0.5, 0.8]}>
          <sphereGeometry args={[0.2, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#89CFF0" metalness={0.2} roughness={0.3} />
        </mesh>
      ))}
      
      {/* Propeller */}
      <mesh position={[0, 0, -1.7]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.2, 16]} />
        <meshStandardMaterial color="#555555" metalness={0.9} roughness={0.1} />
        
        {/* Propeller blades */}
        {[0, Math.PI/2, Math.PI, Math.PI*1.5].map((rotation, i) => (
          <mesh key={i} position={[0, 0, -0.15]} rotation={[Math.PI/2, 0, rotation]}>
            <boxGeometry args={[0.1, 0.8, 0.05]} />
            <meshStandardMaterial color="#555555" metalness={0.9} roughness={0.1} />
          </mesh>
        ))}
      </mesh>
    </group>
  );
};