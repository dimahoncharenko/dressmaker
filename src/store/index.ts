import { proxy } from "valtio";

export type Decal = {
  id: number;
  title: string;
  image: string;
  type: "LOGO" | "TEXTURE";
};

type DecalParams = {
  translate_x: number;
  translate_y: number;
  rotate: number;
  scale: number;
};

type State = {
  intro: boolean;
  color: string;
  isLogoTexture: boolean;
  isFullTexture: boolean;
  logoDecal: Decal;
  logoDecalParams: DecalParams;
  fullDecalParams: DecalParams;
  fullDecal: Decal;
  logoPrompt: string;
  texturePrompt: string;
  collection: Decal[];
};

export const state = proxy<State>({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: {
    id: Infinity,
    title: "default",
    image: "./dressmakers.png",
    type: "LOGO",
  },
  logoDecalParams: {
    translate_x: 0,
    translate_y: 0.04,
    rotate: 0,
    scale: 0.15,
  },
  fullDecalParams: {
    translate_x: 0,
    translate_y: 0,
    rotate: 0,
    scale: 1,
  },
  fullDecal: {
    id: Infinity,
    title: "default",
    image: "./default_bg.jfif",
    type: "TEXTURE",
  },
  logoPrompt: "",
  texturePrompt: "",
  collection: [],
});
