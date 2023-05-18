// Imports libraries
import { useState } from "react";

// Imports styles
import {
  AIPickerWrapper,
  AIPickerPrompt,
  Controls,
  LoadingText,
} from "./styled";
import { Button } from "../../shared/styled";

// Imports utils
import { state } from "../../store";

export const AIPicker = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [decalType, setDecalType] = useState<"LOGO" | "TEXTURE" | "">("");

  const handleSubmit = async (type: typeof decalType) => {
    try {
      if (!decalType) return;
      setIsGenerating(true);

      const request = await fetch("http://localhost:5000/api/v1/dall-e", {
        method: "POST",
        body: JSON.stringify({
          prompt,
          decalType: type,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await request.json();
      const decal = data.decal;

      if (type === "LOGO") {
        state.logoDecal = decal;
        state.logoPrompt = prompt;
      } else {
        state.fullDecal = decal;
        state.texturePrompt = prompt;
      }

      state.collection.push(decal);
      setPrompt("");
      setIsGenerating(false);
    } catch (err) {
      console.log(err);
      setIsGenerating(false);
    }
  };

  return (
    <AIPickerWrapper>
      <AIPickerPrompt
        placeholder="Запит до AI"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={3}
      />
      {!isGenerating ? (
        <Controls>
          <Button variant="outlined" onClick={setDecalType.bind(null, "LOGO")}>
            Лого
          </Button>
          <Button variant="filled" onClick={setDecalType.bind(null, "TEXTURE")}>
            Текстура
          </Button>
        </Controls>
      ) : (
        <LoadingText>
          Зачекайте будь-ласка
          <br />
          Ваша текстура оброблюється
        </LoadingText>
      )}

      {decalType !== "" && !isGenerating && prompt !== "" && (
        <>
          <Button onClick={handleSubmit.bind(null, decalType)} variant="filled">
            Сгенерувати
          </Button>
        </>
      )}
    </AIPickerWrapper>
  );
};
