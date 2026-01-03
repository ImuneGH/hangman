export type OutletContextType = {
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
  savedNickname: string | null;
  setSavedNickname: React.Dispatch<React.SetStateAction<string>>;
};
