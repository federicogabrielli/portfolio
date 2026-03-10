import React, { useRef, useEffect } from 'react';
import { useGLTF, Trail } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Rocket = ({
  modelPath = '/models/rocket.glb',
  scale = 0.1,
  start = [0, 0, 0],
  direction = [1, 0],
  speed = 1,
  delay = 5,
  resetBounds = { xMin: -8, xMax: 8, yMin: -6, yMax: 6 },
  trailColor = '#a78bfa',
  trailWidth = 0.3,
  trailLength = 6,
  modelRotation = [0, 0, 0],
}) => {
  const { scene } = useGLTF(modelPath);
  const rocketRef = useRef();
  const elapsedRef = useRef(0);

  useEffect(() => {
    if (rocketRef.current) {
      rocketRef.current.position.set(start[0], start[1], start[2]);
      rocketRef.current.visible = false;
    }
  }, [start]);

  useFrame((_, delta) => {
    if (!rocketRef.current) return;

    elapsedRef.current += delta;

    if (elapsedRef.current < delay) {
      rocketRef.current.visible = false;
      return;
    }

    rocketRef.current.visible = true;

    rocketRef.current.position.x += direction[0] * speed * delta;
    rocketRef.current.position.y += direction[1] * speed * delta;

    const { x, y } = rocketRef.current.position;
    const { xMin, xMax, yMin, yMax } = resetBounds;

    const isOutOfScene = x < xMin || x > xMax || y < yMin || y > yMax;

    if (isOutOfScene) {
      rocketRef.current.position.set(start[0], start[1], start[2]);
      rocketRef.current.visible = false;
      elapsedRef.current = 0; // riapplica il delay a ogni reset
    }
  });

  return (
    <Trail
      width={trailWidth}
      length={trailLength}
      color={trailColor}
      attenuation={(t) => t * t}
    >
      <group ref={rocketRef}>
        <primitive
          object={scene.clone()}
          scale={scale}
          rotation={modelRotation}
        />
      </group>
    </Trail>
  );
};

useGLTF.preload('/models/rocket.glb');

export default Rocket;