import { useEffect } from "react";
import "../css/components/nicknameInput.css";

type NicknameInputProps = {
  setNickname: (nickname: string) => void;
  nickname: string;
  emptyInputError: boolean;
  setEmptyInputError: React.Dispatch<React.SetStateAction<{ nickname: boolean; theme: boolean; difficulty: boolean }>>;
};

const NicknameInput = ({ setNickname, nickname, emptyInputError, setEmptyInputError }: NicknameInputProps) => {
  useEffect(() => {
    if (nickname && emptyInputError) {
      setEmptyInputError((prev) => ({ ...prev, nickname: false }));
    }
  }, [nickname]);

  return (
    <div className="text-input">
      <label htmlFor="text-input">Přezdívka</label>
      <div className="guess-word-container">
        <input
          className={emptyInputError ? "error-border" : ""}
          type="text"
          id="text-input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNickname(e.target.value);
          }}
          value={nickname}
        />
      </div>
    </div>
  );
};

export default NicknameInput;
