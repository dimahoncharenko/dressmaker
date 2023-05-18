// Imports libraries
import { useState, ChangeEvent } from "react";
import { useSnapshot } from "valtio";

// Imports utils
import { state } from "../../store";
import { slideAnimation } from "../../utils/motion";
import { useComplementary } from "../../hooks/useComplementary";

// Imports styles
import {
  InstrumentSection,
  InstrumentLabel,
  InstrumentRange,
  InstrumentPalette,
  InstrumentSectionHeading,
  InstrumentMainSectionHeading,
  InstrumentContainer,
  PaletteToggler,
  VerticalText,
} from "./styled";

export const Palette = () => {
  const snap = useSnapshot(state);

  const [isOpenedPalette, setIsOpenedPalette] = useState(false);
  const [paletteMode, setPaletteMode] = useState<"LOGO" | "TEXTURE">("LOGO");

  const { baseColor, complementaryColor } = useComplementary();

  const handleChangeParam = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    switch (e.target.name) {
      case "scale":
        if (paletteMode === "LOGO") state.logoDecalParams.scale = Number(value);
        else state.fullDecalParams.scale = Number(value);
        break;
      case "translate_x":
        if (paletteMode === "LOGO")
          state.logoDecalParams.translate_x = Number(value);
        else state.fullDecalParams.translate_x = Number(value);
        break;
      case "translate_y":
        if (paletteMode === "LOGO")
          state.logoDecalParams.translate_y = Number(value);
        else state.fullDecalParams.translate_y = Number(value);
        break;
      case "rotate":
        if (paletteMode === "LOGO")
          state.logoDecalParams.rotate = Number(value);
        else state.fullDecalParams.rotate = Number(value);
        break;
    }
  };

  return (
    <InstrumentPalette
      isShowed={isOpenedPalette}
      color={baseColor}
      {...slideAnimation("right")}
    >
      <PaletteToggler onClick={() => setIsOpenedPalette(!isOpenedPalette)}>
        <VerticalText>Параметри</VerticalText>
      </PaletteToggler>
      {paletteMode === "LOGO" ? (
        <InstrumentSection
          color={complementaryColor}
          style={{ paddingTop: "2em" }}
        >
          <InstrumentMainSectionHeading
            color={complementaryColor}
            bgColor={baseColor}
            onClick={() => setPaletteMode("TEXTURE")}
          >
            Логотип
          </InstrumentMainSectionHeading>
          <InstrumentSection color={complementaryColor}>
            <InstrumentSectionHeading
              color={complementaryColor}
              bgColor={baseColor}
            >
              Масштаб
            </InstrumentSectionHeading>
            <InstrumentContainer>
              <InstrumentLabel color={complementaryColor} htmlFor="scale">
                Розмір:
              </InstrumentLabel>
              <InstrumentRange
                id="scale"
                type="range"
                name="scale"
                value={snap.logoDecalParams.scale}
                onChange={handleChangeParam}
                min={0.1}
                max={0.3}
                step={0.05}
                color={complementaryColor}
              />
            </InstrumentContainer>
          </InstrumentSection>
          <InstrumentSection color={complementaryColor}>
            <InstrumentSectionHeading
              color={complementaryColor}
              bgColor={baseColor}
            >
              Позиція
            </InstrumentSectionHeading>
            <InstrumentContainer>
              <InstrumentLabel color={complementaryColor} htmlFor="translate_x">
                По ширині:
              </InstrumentLabel>
              <InstrumentRange
                id="translate_x"
                type="range"
                name="translate_x"
                value={snap.logoDecalParams.translate_x}
                onChange={handleChangeParam}
                min={-0.15}
                max={0.15}
                step={0.001}
                color={complementaryColor}
              />
            </InstrumentContainer>
            <InstrumentContainer>
              <InstrumentLabel color={complementaryColor} htmlFor="translate_y">
                По висоті:
              </InstrumentLabel>
              <InstrumentRange
                id="translate_y"
                type="range"
                name="translate_y"
                value={snap.logoDecalParams.translate_y}
                onChange={handleChangeParam}
                min={-0.35}
                max={0.2}
                step={0.001}
                color={complementaryColor}
              />
            </InstrumentContainer>
          </InstrumentSection>
          <InstrumentSection color={complementaryColor}>
            <InstrumentSectionHeading
              color={complementaryColor}
              bgColor={baseColor}
            >
              Ротація
            </InstrumentSectionHeading>
            <InstrumentContainer>
              <InstrumentLabel color={complementaryColor} htmlFor="rotate">
                Поворот:
              </InstrumentLabel>
              <InstrumentRange
                id="rotate"
                name="rotate"
                type="range"
                value={snap.logoDecalParams.rotate}
                onChange={handleChangeParam}
                step={Math.PI / 12}
                min={-Math.PI}
                max={Math.PI}
                color={complementaryColor}
              />
            </InstrumentContainer>
          </InstrumentSection>
        </InstrumentSection>
      ) : (
        <InstrumentSection
          color={complementaryColor}
          style={{ paddingTop: "2em" }}
        >
          <InstrumentMainSectionHeading
            color={complementaryColor}
            bgColor={baseColor}
            onClick={() => setPaletteMode("LOGO")}
          >
            Текстура
          </InstrumentMainSectionHeading>
          <InstrumentSection color={complementaryColor}>
            <InstrumentSectionHeading
              color={complementaryColor}
              bgColor={baseColor}
            >
              Масштаб
            </InstrumentSectionHeading>
            <InstrumentContainer>
              <InstrumentLabel color={complementaryColor} htmlFor="scale">
                Розмір:
              </InstrumentLabel>
              <InstrumentRange
                id="scale"
                type="range"
                name="scale"
                value={snap.fullDecalParams.scale}
                onChange={handleChangeParam}
                min={0.3}
                max={1.3}
                step={0.05}
                color={complementaryColor}
              />
            </InstrumentContainer>
          </InstrumentSection>
          <InstrumentSection color={complementaryColor}>
            <InstrumentSectionHeading
              color={complementaryColor}
              bgColor={baseColor}
            >
              Позиція
            </InstrumentSectionHeading>
            <InstrumentContainer>
              <InstrumentLabel color={complementaryColor} htmlFor="translate_x">
                По ширині:
              </InstrumentLabel>
              <InstrumentRange
                id="translate_x"
                type="range"
                name="translate_x"
                value={snap.fullDecalParams.translate_x}
                onChange={handleChangeParam}
                min={-0.15}
                max={0.15}
                step={0.001}
                color={complementaryColor}
              />
            </InstrumentContainer>
            <InstrumentContainer>
              <InstrumentLabel color={complementaryColor} htmlFor="translate_y">
                По висоті:
              </InstrumentLabel>
              <InstrumentRange
                id="translate_y"
                type="range"
                name="translate_y"
                value={snap.fullDecalParams.translate_y}
                onChange={handleChangeParam}
                min={-0.35}
                max={0.2}
                step={0.001}
                color={complementaryColor}
              />
            </InstrumentContainer>
          </InstrumentSection>
          <InstrumentSection color={complementaryColor}>
            <InstrumentSectionHeading
              color={complementaryColor}
              bgColor={baseColor}
            >
              Ротація
            </InstrumentSectionHeading>
            <InstrumentContainer>
              <InstrumentLabel color={complementaryColor} htmlFor="rotate">
                Поворот:
              </InstrumentLabel>
              <InstrumentRange
                id="rotate"
                name="rotate"
                type="range"
                value={snap.fullDecalParams.rotate}
                onChange={handleChangeParam}
                step={Math.PI / 12}
                min={-Math.PI}
                max={Math.PI}
                color={complementaryColor}
              />
            </InstrumentContainer>
          </InstrumentSection>
        </InstrumentSection>
      )}
    </InstrumentPalette>
  );
};
