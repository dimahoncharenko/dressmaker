import styled from "styled-components";
import { motion } from "framer-motion";

import { Button } from "../../shared/styled";

export const EditorTabsContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 100;
`;

export const FilterTabsContainer = styled(motion.div)`
  --padding: 1.1em;

  width: max-content;
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100vw - var(--padding));
  display: flex;
  justify-content: center;
  z-index: 100;
`;

export const CollectionContainer = styled(motion.div)`
  --sample-size: 3em;

  position: absolute;
  top: 2em;
  left: 2em;
  z-index: 200;
`;

type CollectionProps = {
  showed: boolean;
};

export const Collection = styled.div<CollectionProps>`
  display: ${(props) => (props.showed ? "flex" : "none")};
  border: 0.1em solid ${(props) => props.color};
  border-radius: 0.4em;
  flex-wrap: wrap;

  max-width: calc(var(--sample-size) * 4 + 1.1em);
  max-height: calc(var(--sample-size) * 2);
  min-height: var(--sample-size);
  overflow: auto;
`;

export const TextureSample = styled.img`
  position: relative;
  max-width: var(--sample-size);
  border-radius: 0.2em;
  cursor: pointer;

  &:hover ~ #delete_btn {
    display: block;
  }
`;

export const ButtonContainer = styled(motion.div)`
  position: absolute;
  top: 2em;
  right: 2em;
  z-index: 100;
`;

export const EditorTabs = styled.div`
  position: relative;
  border-radius: 0.5em;
  background-color: hsla(0deg, 0%, 70%, 0.6);
`;

export const FilterTabs = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.5em;
  background-color: hsla(0deg, 0%, 70%, 0.6);
  padding: 0.2em;
  gap: 0.2em;
`;

export const DeleteTexture = styled(motion.button)`
  --color: hsla(0deg, 0%, 0%, 1);

  position: absolute;
  left: 70vw;
  bottom: 200%;
  background-color: var(--color);

  @media screen and (min-width: 800px) {
    left: 65vw;
  }

  @media screen and (min-width: 1100px) {
    left: 60vw;
  }

  &::before {
    content: " ";
    position: absolute;
    display: block;
    width: 0.1em;
    height: 7em;
    background-color: var(--color);
    top: 0;
    left: 0;
    transform: rotateZ(300deg) translateY(-4em) translateX(3em);
  }
`;

export const DownloadButton = styled(Button)`
  border: 0.1em dashed ${(props) => props.color};
  font-size: clamp(0.5rem, 2vw + 0.1em, 1rem);
`;

type InstrumentPaletteProps = {
  isShowed: boolean;
  color?: string;
};
export const InstrumentPalette = styled(motion.div)<InstrumentPaletteProps>`
  --radius: 0.5em;
  --width: 250px;

  max-height: 300px;
  position: absolute;
  right: 0;
  top: 30%;
  width: var(--width);
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 1em;
  background-color: ${(props) => props.color};

  transition: transform 0.1s ease-in;
  transform: ${(props) =>
    !props.isShowed && "translateX(calc(var(--width) + 2em))"} !important;
`;

export const PaletteToggler = styled.button`
  --offset: 2em;

  border-radius: 0;
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  padding: 0.3em;
  position: absolute;
  height: 100%;
  top: 0;
  left: calc(var(--offset) * (-1));
  background-color: hsla(0deg, 0%, 100%, 0.3);
  font-size: clamp(1.2rem, 1vw + 0.3em, 1rem);
`;

export const VerticalText = styled.span`
  writing-mode: vertical-lr;
`;

type InstrumentSectionProps = {
  color?: string;
};
export const InstrumentSection = styled.div<InstrumentSectionProps>`
  padding: 1em;

  display: flex;
  flex-direction: column;
  gap: 1em;

  border-style: dashed;
  border-width: 0.1em;
  border-color: ${(props) => props.color};
  border-radius: var(--radius);

  position: relative;
`;

type InstrumentSectionHeadingProps = {
  color?: string;
  bgColor: string;
};
export const InstrumentSectionHeading = styled.p<InstrumentSectionHeadingProps>`
  position: absolute;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  top: -2em;
  left: 1em;
  z-index: 10;
  border-style: dashed;
  border-width: 0.1em;
  border-color: inherit;
  border-radius: var(--radius);
  padding: 0.2em 2em;
  font-size: clamp(0.5rem, 1vw + 0.3em, 0.8rem);
`;

type InstrumentMainSectionHeadingProps = {
  color: string;
  bgColor: string;
};
export const InstrumentMainSectionHeading = styled.p<
  InstrumentMainSectionHeadingProps
>`
  position: absolute;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  top: -2em;
  right: 1em;
  left: 1em;
  z-index: 10;
  border-style: dashed;
  border-width: 0.1em;
  border-color: inherit;
  border-radius: var(--radius);
  padding: 0.2em 0.5em;
  font-size: clamp(0.5rem, 1vw + 0.3em, 0.8rem);

  border-style: solid;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: ${(props) => props.bgColor};
    background-color: ${(props) => props.color};
  }

  &::before {
    content: "<";
    display: inline-block;
    font-size: 0.9rem;
  }

  &::after {
    content: ">";
    display: inline-block;
    font-size: 0.9rem;
  }
`;

export const InstrumentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5em;
  align-items: center;

  > * {
    flex: 1;
  }
`;

type InstrumentLabelProps = {
  color?: string;
};
export const InstrumentLabel = styled.label<InstrumentLabelProps>`
  color: ${(props) => props.color};
`;

type InstrumentRangeProps = {
  color?: string;
};
export const InstrumentRange = styled.input<InstrumentRangeProps>`
  &[type="range"] {
    appearance: none;

    width: 50%;

    background-color: transparent;
    height: 0.3em;
    border-radius: 0.5em;
    border-style: dotted;
    border-width: 0.1em;
    border-color: ${(props) => props.color || "black"};

    &::-webkit-slider-thumb {
      cursor: pointer;
      appearance: none;
      width: 2vmin;
      height: 2vmin;
      background: white;
      border-radius: 50%;
      box-shadow: 0em 0em 0.1em gray;
    }
  }
`;

export const CloseEditor = styled.button`
  border: 0;
  background-color: transparent;
  text-align: center;
  padding: 0.5em;
  width: 100%;

  > img {
    max-width: 30px;
    object-fit: contain;
  }
`;
