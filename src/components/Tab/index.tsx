// Imports styled
import { TabIcon, TabWrapper } from "./styled";

// Imports utils
import type { Tab as TTab } from "../../utils/constants";

// Imports components
import { ColorPicker, FilePicker, AIPicker } from "../../components";

type Props = {
  tab: TTab;
  isActive: boolean;
  onClick?: () => void;
};

export const Tab = ({ tab, isActive, onClick }: Props) => {
  const renderTab = (tab: Props["tab"]) => {
    switch (tab.name) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker />;
      case "aipicker":
        return <AIPicker />;
      default:
        return null;
    }
  };

  return (
    <TabWrapper onClick={onClick}>
      <TabIcon src={tab.icon} alt={tab.name} />
      {isActive && renderTab(tab)}
    </TabWrapper>
  );
};
