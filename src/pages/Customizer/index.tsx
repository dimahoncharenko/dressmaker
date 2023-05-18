// Imports libraries
import { useState } from "react";
import { useQuery } from "react-query";
import { AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

// Imports utils
import { downloadCanvasToImage, downloadImage } from "../../utils/helpers";
import { editors, filters } from "../../utils/constants";
import { slideAnimation } from "../../utils/motion";
import { state, Decal } from "../../store";
import { useComplementary } from "../../hooks/useComplementary";
import config from "../../utils/config";

// Imports styles
import {
  EditorTabsContainer,
  FilterTabsContainer,
  FilterTabs,
  EditorTabs,
  CollectionContainer,
  ButtonContainer,
  Collection,
  TextureSample,
  DeleteTexture,
  DownloadButton,
  CloseEditor,
} from "./styled";
import { Button } from "../../shared/styled";

// Imports assets
import { hide } from "../../assets";

// Imports components
import { Tab } from "../../components/Tab";
import { Palette } from "./Palette";

export const Customizer = () => {
  const [activeTab, setActiveTab] = useState("");
  const [isOpenedCollection, setIsOpenedCollection] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const { baseColor, complementaryColor } = useComplementary();
  const snap = useSnapshot(state);

  useQuery({
    queryKey: ["Handling dissappearence", isHidden],
    queryFn: () => {
      if (!isHidden) {
        const timer = setTimeout(function () {
          setIsHidden(true);
          clearTimeout(timer);
        }, 4000);
      }
    },
  });

  const handleFilter = (tab: typeof filters[number]) => {
    switch (tab.name) {
      case "logoShirt":
        state.isLogoTexture = !state.isLogoTexture;
        break;
      case "stylishShirt":
        state.isFullTexture = !state.isFullTexture;
    }

    setActiveTab(tab.name);
  };

  const chooseTexture = (decal: Decal) => {
    if (decal.type === "LOGO") {
      state.isLogoTexture = true;
      state.isFullTexture = false;
      state.logoDecal = decal;
    } else {
      state.isLogoTexture = false;
      state.isFullTexture = true;
      state.fullDecal = decal;
    }

    setIsHidden(false);
  };

  const handleDeleteSample = async () => {
    if (snap.isLogoTexture && !Number.isFinite(snap.logoDecal.id)) return;
    if (snap.isFullTexture && !Number.isFinite(snap.fullDecal.id)) return;

    const id = snap.isLogoTexture ? snap.logoDecal.id : snap.fullDecal.id;

    await fetch(`${config.production.backendUrl}/api/v1/collection/${id}`, {
      method: "DELETE",
    });

    state.collection = state.collection.filter((sample) => sample.id !== id);

    if (snap.isLogoTexture) {
      state.logoDecal = {
        id: Infinity,
        title: "default",
        image: "./threejs.png",
        type: "LOGO",
      };

      state.isLogoTexture = false;
    } else {
      state.fullDecal = {
        id: Infinity,
        title: "default",
        image: "./threejs.png",
        type: "TEXTURE",
      };

      state.isFullTexture = false;
    }
  };

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <CollectionContainer {...slideAnimation("down")}>
            <Button
              variant="outlined"
              color={baseColor}
              onClick={() => setIsOpenedCollection(!isOpenedCollection)}
            >
              {!isOpenedCollection
                ? "Показати мою колекцію"
                : "Сховати мою колекцію"}
            </Button>
            <Collection showed={isOpenedCollection}>
              {snap.collection.map((decal) => (
                <TextureSample
                  key={decal.id}
                  src={decal.image}
                  alt={decal.title}
                  onClick={chooseTexture.bind(null, decal)}
                />
              ))}
            </Collection>
          </CollectionContainer>
          <ButtonContainer {...slideAnimation("down")}>
            <Button
              variant="filled"
              color={complementaryColor}
              bgColor={baseColor}
              onClick={() => (state.intro = true)}
            >
              Повернутись
            </Button>
          </ButtonContainer>

          <Palette />

          <EditorTabsContainer {...slideAnimation("left")}>
            <EditorTabs>
              {editors.map((tab) => (
                <Tab
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  isActive={activeTab === tab.name}
                  tab={tab}
                />
              ))}
              <CloseEditor onClick={() => setActiveTab("")}>
                <img src={hide} alt="close current editor" />
              </CloseEditor>
            </EditorTabs>
          </EditorTabsContainer>
          <FilterTabsContainer {...slideAnimation("up")}>
            <FilterTabs>
              {filters.map((tab) => (
                <Tab
                  key={tab.name}
                  onClick={() => handleFilter(tab)}
                  isActive={activeTab === tab.name}
                  tab={tab}
                />
              ))}
              <DownloadButton
                variant="outlined"
                color={baseColor}
                onClick={() => {
                  downloadCanvasToImage();
                  snap.isFullTexture &&
                    downloadImage(snap.fullDecal.image, "TEXTURE");
                  snap.isLogoTexture &&
                    downloadImage(snap.logoDecal.image, "LOGO");
                }}
              >
                Завантажити <br />
                на пристрій
              </DownloadButton>
            </FilterTabs>
            {!isHidden && (
              <DeleteTexture
                {...slideAnimation("left")}
                onClick={handleDeleteSample}
              >
                Видалити зразок?
              </DeleteTexture>
            )}
          </FilterTabsContainer>
        </>
      )}
    </AnimatePresence>
  );
};
