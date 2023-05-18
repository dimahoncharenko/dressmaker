// Imports libraries
import { useSnapshot } from "valtio";
import { useState, useEffect } from "react";

// Imports utils
import { state } from "../store";

export const useComplementary = () => {
  const snap = useSnapshot(state);
  const [complementaryColor, setComplementaryColor] = useState<string>("#fff");

  useEffect(() => {
    /**
     * Given a color in the format "#RRGGBB", returns its complementary color.
     */

    // Convert color to RGB values
    let r = parseInt(snap.color.slice(1, 3), 16);
    let g = parseInt(snap.color.slice(3, 5), 16);
    let b = parseInt(snap.color.slice(5, 7), 16);

    // Find complement RGB values
    let rComp = 255 - r;
    let gComp = 255 - g;
    let bComp = 255 - b;

    // Convert complement RGB values back to hex format
    let compColor =
      "#" + rComp.toString(16) + gComp.toString(16) + bComp.toString(16);

    // Assign the complementary color
    setComplementaryColor(compColor);
  }, [snap.color]);

  return { baseColor: snap.color, complementaryColor };
};
