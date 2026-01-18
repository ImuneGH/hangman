export type OutletContextType = {
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
  savedNickname: string | null;
  setSavedNickname: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  difficulty: string;
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
  formData: {
    nickname: string;
    theme: string | null;
    difficulty: string | null;
  };
  setFormData: React.Dispatch<React.SetStateAction<{ nickname: string; theme: string | null; difficulty: string | null }>>;
};

type Input = {
  content: string;
  value: string;
};

export type RadioButtonInputs = Input[];
