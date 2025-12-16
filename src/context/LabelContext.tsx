import { createContext } from "react";

type LabelContextType = {
  label: string;
  setLabel: React.Dispatch<React.SetStateAction<string>>;
};

const LabelContext = createContext<LabelContextType>({
  label: "",
  setLabel: () => {},
});

export default LabelContext;
