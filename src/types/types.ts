export type OutletContextType = {
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
  savedNickname: string | null;
  setSavedNickname: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  difficulty: string;
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
};

type Input = {
  content: string;
  value: string;
};

export type RadioButtonInputs = Input[];
