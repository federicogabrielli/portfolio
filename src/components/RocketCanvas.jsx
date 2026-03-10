import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Rocket from './Rocket';

const RocketCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ alpha: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        {/* 1) basso destra -> alto sinistra */}
        <Rocket
          start={[6.5, -4.2, 0]}
          direction={[-1, 1]}
          speed={2}
          delay={1.5}
          scale={0.2}
          trailColor="#a78bfa"
          trailWidth={0.28}
          trailLength={6}
          modelRotation={[0, 0, Math.PI/4]}
        />

        {/* 2) basso sinistra -> alto centro */}
        <Rocket
          start={[-6.5, -4.0, 0]}
          direction={[0.8, 1]}
          speed={4}
          delay={4}
          scale={0.1}
          trailColor="#c4b5fd"
          trailWidth={0.28}
          trailLength={6}
          modelRotation={[0, 0, -Math.PI/5]}
        />

        {/* 3) orizzontale sinistra -> destra */}
        <Rocket
          start={[-7.0, 1.2, 0]}
          direction={[1, 0]}
          speed={4}
          delay={8}
          scale={0.1}
          trailColor="#93c5fd"
          trailWidth={0.24}
          trailLength={5}
          modelRotation={[0, 0, -Math.PI/2]}
        />
      </Suspense>
    </Canvas>
  );
};

export default RocketCanvas;