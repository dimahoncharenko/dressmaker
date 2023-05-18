// Imports libraries
import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

// Imports styles
import {
  FilePickerWrapper,
  PickFile,
  PickFileLabel,
  Controls,
  RadioControl,
  RadioInput,
  RadioLabel,
} from "./styled";
import { Button, LoadingText } from "../../shared/styled";

// Imports utils
import { state, Decal } from "../../store";
import { useComplementary } from "../../hooks/useComplementary";
import config from "../../utils/config";

const isDecalType = (param: string): param is Decal["type"] => {
  const avaivableTypes = ["LOGO", "TEXTURE"];
  return avaivableTypes.includes(param);
};

export const FilePicker = () => {
  const { baseColor, complementaryColor } = useComplementary();
  const [file, setFile] = useState<File | null>(null);
  const [textureType, setTextureType] = useState<string>("LOGO");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];

    if (file && file.name) {
      setFile(file);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (file && file.name) {
        setIsLoading(true);

        const payload = new FormData();
        payload.append("image", file);

        const reply = await axios.post(
          `https://api.imgbb.com/1/upload?key=eda2fcfb800dadca06bc7eec00a6a17c`,
          payload
        );

        const decal: Decal = {
          id: Infinity,
          image: reply.data.data.url,
          title: file.name,
          type: isDecalType(textureType) ? textureType : "LOGO",
        };

        const response = await axios.post<{ decal: Decal }>(
          `${config.production.backendUrl}/api/v1/collection/add`,
          {
            decal,
          }
        );

        const newDecal = response.data.decal;

        if (textureType === "LOGO") {
          state.logoDecal = newDecal;
        } else {
          state.fullDecal = newDecal;
        }

        state.collection.push(newDecal);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <FilePickerWrapper onSubmit={handleSubmit}>
      {!isLoading ? (
        <>
          <PickFileLabel htmlFor="file-picker">
            <PickFile
              type="file"
              accept="image/*"
              id="file-picker"
              onChange={handleChange}
            />
            Вибрати файл
          </PickFileLabel>
          <Controls>
            <RadioControl color={baseColor}>
              <RadioLabel htmlFor="LOGO">Лого</RadioLabel>
              <RadioInput
                type="radio"
                id="LOGO"
                name="texture-type"
                defaultChecked
                value="LOGO"
                onChange={(e) => setTextureType(e.target.value)}
              />
            </RadioControl>
            <RadioControl color={complementaryColor}>
              <RadioLabel htmlFor="TEXTURE">Текстура</RadioLabel>
              <RadioInput
                id="TEXTURE"
                type="radio"
                name="texture-type"
                value="TEXTURE"
                onChange={(e) => setTextureType(e.target.value)}
              />
            </RadioControl>
          </Controls>
          <Button
            variant="filled"
            color={complementaryColor}
            bgColor={baseColor}
            style={{ margin: "0.2em" }}
            type="submit"
          >
            Застосувати
          </Button>
        </>
      ) : (
        <LoadingText style={{ padding: "4em" }}>
          Зачекайте будь-ласка
          <br />
          Ваш файл завантажується
        </LoadingText>
      )}
    </FilePickerWrapper>
  );
};
