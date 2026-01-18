import { useEffect } from "react";
import "../css/components/nicknameInput.css";

type NicknameInputProps = {
  inputError: boolean;
  setInputError: React.Dispatch<React.SetStateAction<{ nickname: boolean; theme: boolean; difficulty: boolean }>>;
  formData: {
    nickname: string;
    theme: string | null;
    difficulty: string | null;
  };
  controlledInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const NicknameInput = ({ inputError, setInputError, formData, controlledInput }: NicknameInputProps) => {
  // console.log(formData);
  // useEffect(() => {
  //   if (nickname && inputError) {
  //     setInputError((prev) => ({ ...prev, nickname: false }));
  //   }
  // }, [nickname]);

  return (
    <div className="text-input">
      <label htmlFor="text-input">Přezdívka</label>
      <div className="guess-word-container">
        <input
          className={inputError ? "error-border" : ""}
          type="text"
          id="text-input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            controlledInput(e);
          }}
          value={formData.nickname}
          name="nickname"
        />
      </div>
    </div>
  );
};

export default NicknameInput;
