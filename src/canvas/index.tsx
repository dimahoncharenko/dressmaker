// Imports libraries
import { Canvas } from "@react-three/fiber";
import { Center, Environment } from "@react-three/drei";

// Imports components
import { TShirt } from "./TShirt";
import { CameraView } from "./CameraView";
import { Backdrop } from "./Backdrop";

export const ThreeDModel = () => {
  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      shadows
      style={{ height: "100vh" }}
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraView>
        <Backdrop />
        <Center>
          <TShirt />
        </Center>
      </CameraView>
    </Canvas>
  );
};
