export type OutletContextType = {
  maxAttempts: number;
  setMaxAttempts: React.Dispatch<React.SetStateAction<number>>;
  formData: {
    nickname: string;
    theme: "geography" | "animals" | "food" | "sport" | "programming" | "profession";
    difficulty: "easy" | "medium" | "hard";
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
  resultMessage: string;
  setResultMessage: React.Dispatch<React.SetStateAction<string>>;
  inputError: { nickname: boolean; theme: boolean; difficulty: boolean };
  setInputError: React.Dispatch<React.SetStateAction<{ nickname: boolean; theme: boolean; difficulty: boolean }>>;
  setLocalStorageNickname: React.Dispatch<React.SetStateAction<boolean>>;
  createNewGame: (e: React.FormEvent<HTMLFormElement>) => void;
  localStorageNickname: boolean;
  changeNicknameActive: boolean;
  setChangeNicknameActive: React.Dispatch<React.SetStateAction<boolean>>;
  errorModalActive: boolean;
  setErrorModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage: string;
  startGame: () => void;
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

export type Difficulty = "easy" | "medium" | "hard";
export type Theme = "geography" | "animals" | "food" | "sport" | "programming" | "profession";
