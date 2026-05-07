'use client';

import { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
// 🌟 นำเข้า ContactShadows, Stage, OrbitControls ตามปกติ
import { useGLTF, Stage, OrbitControls, useAnimations, ContactShadows } from '@react-three/drei';

function CustomModel() {
  const groupRef = useRef(); 
  const [hovered, setHover] = useState(false);
  
  // 🌟 โหลดไฟล์ .glb (สมมติชื่อ my-model.glb)
  const { scene, animations } = useGLTF('/my-model.glb'); 
  
  // 🌟 ผูกแอนิเมชันเข้ากับกลุ่มโมเดล
  const { actions } = useAnimations(animations, groupRef);

  // แก้บั๊กชุดซ้อน/กระพริบ (ที่แก้ไว้สมบูรณ์แล้ว)
  useMemo(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.depthWrite = true;
        child.material.transparent = false;
        child.material.polygonOffset = true;
        child.material.polygonOffsetFactor = 1;
        child.material.polygonOffsetUnits = 1;
        child.material.needsUpdate = true;
      }
    });
  }, [scene]);

  useEffect(() => {
    // 🌟 1. ระบุชื่อแอนิเมชันให้ถูกต้อง 'metarig|EnemyRun' และสั่งเล่นครับ
    if (actions && actions['metarig|EnemyRun']) {
      actions['metarig|EnemyRun'].reset().fadeIn(0.5).play();
    }
    
    // 🌟 2. 🎯 ทริคแก้ตัวลอย (ฉบับจบปัญหา): 
    // เราจะบังคับ Y ลงเพื่อวางเท้าไว้ที่ระนาบพื้น 0.0 ของซีนครับ 
    // ฉันจะใช้ -1.8 (คุณลองปรับเลขนี้ดูทีละนิดครับ เช่น -1.5 หรือ -2.0)
    // จนกว่าเท้าจะดูเหมือนแตะระนาบพื้นที่มีเงาแตะพอดีครับ
    if (groupRef.current) {
      groupRef.current.position.y = -1.8; 
    }
  }, [actions]);

  // ให้โมเดลหมุนอัตโนมัติช้าๆ
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3; // หมุนช้าลงเพื่อให้เห็นท่าวิ่งชัดๆ
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

      {/* 🌟 3. 🎯 สร้างแผ่นเงาเองเลย! 🎯 🌟 */}
      {/* 🎯 ทริค: ลองปรับเลข -1.75 ตรงนี้ดูครับ! 
          ค่านี้จะต้องสอดคล้องกับค่า Y ที่เราบังคับให้โมเดลเลื่อนลง (Y=-1.8)
          ฉันจะใช้ `-1.75` เพื่อให้เงามันอยู่ *ใต้* รองเท้าบูทพอดีครับ
          ถ้าเงามันต่ำไป ก็ลองแก้เป็น -1.7, ถ้ามันสูงไปกินขา ก็ลองแก้เป็น -1.8 ดูก่อนครับ! */}
      <ContactShadows
        position={[0, -1.75, 0]} // 👈 จุดที่แก้ไขเพื่อให้เงาแตะใต้เท้าพอดีครับ
        opacity={0.8}
        scale={8} // ความกว้างของเงา
        blur={2} // ความเบลอของขอบเงา
        resolution={256}
        color="#000000"
      />
    </group>
  );
}

useGLTF.preload('/my-model.glb');

export default function Hero3D() {
  return (
    // กำหนดพื้นที่แนวตั้ง และใส่ overflow-visible กันขอบตัด
    <div className="w-full h-[300px] cursor-pointer overflow-visible">
      <Canvas camera={{ position: [0, 0, 8], fov: 40 }} dpr={[1, 2]}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        
        {/* 🌟 4. ปิดเงาอัตโนมัติของ Stage ทิ้งไปเลย ด้วย shadows={false} */}
        {/* 🌟 🎯 จุดที่ต้องแก้ไขเด็ดขาดเพื่อแก้ขนาด 🎯 🌟 */}
        {/* 🌟 ปรับ adjustCamera={1.2} เพื่อนำกล้องเข้ามาใกล้ตัวละครอย่างเต็มที่ ทำให้โมเดลดูใหญ่ขึ้นเต็มหน้าจอครับ */}
        {/* (ถ้ามันยังดูเล็กไป ให้ลองลดเหลือ 1.0 หรือ 0.8 ทีละนิดครับ จนกว่าจะพอดี) */}
        <Stage 
          environment="city" 
          intensity={0.5} 
          adjustCamera={1.2} // 👈 ปรับค่านี้เพื่อขยายขนาดโมเดลครับ
          shadows={false} // ปิดเงาอัตโนมัติของ Stage เพื่อใช้ ContactShadows ที่เราสร้างเอง
        >
          <CustomModel />
        </Stage>

        {/* 🌟 เพิ่ม enablePan={false} ห้ามคลิกขวาลากจอ (ย้ายตำแหน่ง) เด็ดขาด */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate={false} 
        />
      </Canvas>
    </div>
  );
}