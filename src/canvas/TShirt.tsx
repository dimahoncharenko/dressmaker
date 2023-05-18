// Imports libraries
import { useTexture, useGLTF, Decal } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

// Imports utils
import { state } from "../store";

export const TShirt = () => {
  const snap = useSnapshot(state);
  const model = useGLTF("./shirt_baked.glb");

  const logoDecal = useTexture(state.logoDecal.image);
  const fullDecal = useTexture(state.fullDecal.image);

  useFrame((_, delta) =>
    // @ts-ignore
    easing.dampC(model.materials.lambert1.color, snap.color, 0.25, delta)
  );

  return (
    <mesh
      key={JSON.stringify(snap)}
      castShadow
      // @ts-ignore
      geometry={model.nodes.T_Shirt_male.geometry}
      // @ts-ignore
      material={model.materials.lambert1}
      material-roughness={1}
      dispose={null}
    >
      {snap.isFullTexture && (
        <Decal
          position={[
            snap.fullDecalParams.translate_x,
            snap.fullDecalParams.translate_y,
            0,
          ]}
          rotation={[0, 0, snap.fullDecalParams.rotate]}
          scale={snap.fullDecalParams.scale}
          map={fullDecal}
        />
      )}

      {snap.isLogoTexture && (
        <Decal
          position={[
            snap.logoDecalParams.translate_x,
            snap.logoDecalParams.translate_y,
            0.15,
          ]}
          rotation={[0, 0, snap.logoDecalParams.rotate]}
          scale={snap.logoDecalParams.scale}
          map={logoDecal}
          map-anisotropy={16}
          depthTest={false}
          depthWrite={true}
        />
      )}
    </mesh>
  );
};
