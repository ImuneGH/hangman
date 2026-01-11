export type OutletContextType = {
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
  savedNickname: string | null;
  setSavedNickname: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  difficulty: "easy" | "medium" | "hard";
  setDifficulty: React.Dispatch<React.SetStateAction<"easy" | "medium" | "hard">>;
};
