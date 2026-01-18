import "../css/components/difficultySelect.css";
import type { RadioButtonInputs } from "../types/types";
import RadioButton from "./RadioButton";

type DifficultySelectProps = {
  controlledInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: {
    nickname: string;
    theme: string | null;
    difficulty: string | null;
  };
  inputError: boolean;
};

const DifficultySelect = ({ controlledInput, formData, inputError }: DifficultySelectProps) => {
  const radioButtonDifficulty: RadioButtonInputs = [
    {
      content: "Lehká",
      value: "easy",
    },
    {
      content: "Střední",
      value: "medium",
    },
    {
      content: "Těžká",
      value: "hard",
    },
  ];

  return (
    <div className="difficulty-select">
      <h3>Obtížnost</h3>
      <div className={inputError ? "difficulty-radiobuttons error-border" : "difficulty-radiobuttons"}>
        {radioButtonDifficulty.map((difficulty) => (
          <RadioButton
            key={difficulty.value}
            inputContent={difficulty.content}
            inputValue={difficulty.value}
            inputName="difficulty"
            controlledInput={controlledInput}
            savedValue={formData.difficulty}
          />
        ))}
      </div>
    </div>
  );
};

export default DifficultySelect;
