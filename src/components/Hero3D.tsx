'use client';

import { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage, OrbitControls, useAnimations, ContactShadows } from '@react-three/drei';
// 🌟 1. นำเข้า THREE.js เข้ามาเพื่อใช้เป็นพิมพ์เขียว (Type)
import * as THREE from 'three';

function CustomModel() {
  // 🌟 2. บอกว่า groupRef นี้เอาไปชี้ที่ THREE.Group
  const groupRef = useRef<THREE.Group>(null); 
  const [hovered, setHover] = useState(false);
  
  const { scene, animations } = useGLTF('/my-model.glb'); 
  const { actions } = useAnimations(animations, groupRef);

  useMemo(() => {
    // 🌟 3. บอกว่า child ที่กำลังวนลูปอยู่คือ Object3D ของ Three.js
    scene.traverse((child: THREE.Object3D) => {
      // 🌟 4. แปลงร่าง child เป็น Mesh เพื่อให้เข้าถึง .material ได้
      const mesh = child as THREE.Mesh;
      
      if (mesh.isMesh && mesh.material) {
        // โมเดล .glb ส่วนใหญ่ใช้ MeshStandardMaterial
        const material = mesh.material as THREE.MeshStandardMaterial;
        
        material.depthWrite = true;
        material.transparent = false;
        material.polygonOffset = true;
        material.polygonOffsetFactor = 1;
        material.polygonOffsetUnits = 1;
        material.needsUpdate = true;
      }
    });
  }, [scene]);

  useEffect(() => {
    if (actions && actions['metarig|EnemyRun']) {
      actions['metarig|EnemyRun'].reset().fadeIn(0.5).play();
    }
    
    if (groupRef.current) {
      groupRef.current.position.y = -1.8; 
    }
  }, [actions]);

  // 🌟 5. ระบุ Type ให้ delta เป็นตัวเลข (number)
  useFrame((state, delta: number) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3; 
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={hovered ? 1.05 : 1}
    >
      <primitive object={scene} />

      <ContactShadows
        position={[0, -1.75, 0]} 
        opacity={0.8}
        scale={8} 
        blur={2} 
        resolution={256}
        color="#000000"
      />
    </group>
  );
}

useGLTF.preload('/my-model.glb');

export default function Hero3D() {
  return (
    <div className="w-full h-[300px] cursor-pointer overflow-visible">
      <Canvas camera={{ position: [0, 0, 8], fov: 40 }} dpr={[1, 2]}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        
        <Stage 
          environment="city" 
          intensity={0.5} 
          adjustCamera={1.2} 
          shadows={false} 
        >
          <CustomModel />
        </Stage>

        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate={false} 
        />
      </Canvas>
    </div>
  );
}