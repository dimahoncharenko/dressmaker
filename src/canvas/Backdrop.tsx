import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

export const Backdrop = () => {
  return (
    <AccumulativeShadows
      position={[0, 0, -0.09]}
      frames={60}
      alphaTest={0.2}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <RandomizedLight
        intensity={0.5}
        amount={4}
        ambient={0.25}
        radius={10}
        position={[3, 2, -5]}
      />
      <RandomizedLight
        intensity={0.3}
        amount={3}
        ambient={0.25}
        radius={9}
        position={[0, -3, 5]}
      />
    </AccumulativeShadows>
  );
};
