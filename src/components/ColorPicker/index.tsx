// Imports libraries
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

// Imports utils
import { state } from "../../store";

// Imports styles
import { PickerWrapper } from "./styled";

export const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <PickerWrapper>
      <SketchPicker
        className="sketch-picker_bg"
        disableAlpha
        color={snap.color}
        onChange={(color) => (state.color = color.hex)}
      />
    </PickerWrapper>
  );
};
