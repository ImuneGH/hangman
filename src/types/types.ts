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
  createHiddenWord: (word: string[]) => string;
  setGameData: React.Dispatch<React.SetStateAction<GameData>>;
  gameWords: {
    food: GameCategory;
    profession: GameCategory;
    programming: GameCategory;
    sport: GameCategory;
    geography: GameCategory;
    animals: GameCategory;
  };
  gameData: {
    hiddenWord: string;
    attempts: number;
    mistakes: number;
    letters: string[];
    status: "inGame" | "victory" | "lose";
  };
  setResultMessage: React.Dispatch<React.SetStateAction<string>>;
  resultMessage: string;
};

type Input = {
  content: string;
  value: string;
};

export type RadioButtonInputs = Input[];

type GameCategory = {
  theme: string;
  words: string[];
};

export type GameData = {
  hiddenWord: string;
  attempts: number;
  mistakes: number;
  letters: string[];
  status: "inGame" | "victory" | "lose";
};
