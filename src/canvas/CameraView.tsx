// Imports libraries
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import { ReactNode, useRef } from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";

// Imports utils
import { state } from "../store";

type Props = {
  children: ReactNode;
};

export const CameraView = ({ children }: Props) => {
  const snap = useSnapshot(state);
  const ref = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;

    const isTablet = state.size.width <= 1260;
    const isMobile = state.size.width <= 600;

    let targetPosition = [0, 0, 0.5];

    if (snap.intro) {
      targetPosition = isTablet
        ? [0, 0, 0.7]
        : isMobile
        ? [0, 0.2, 2.5]
        : targetPosition;
    } else {
      targetPosition = isMobile ? [0, 0.2, 1.3] : [0, 0, 1];
    }

    easing.damp3(
      state.camera.position,
      [targetPosition[0], targetPosition[1], targetPosition[2]],
      0.25,
      delta
    );

    easing.dampE(
      ref.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });

  return <group ref={ref}>{children}</group>;
};
