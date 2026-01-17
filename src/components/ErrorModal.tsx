import "../css/components/errorModal.css";
import { FocusTrap } from "focus-trap-react";
import { useEffect } from "react";

type ErrorModalProps = {
  setErrorModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  errorModalActive: boolean;
  errorMessage: string;
};

const ErrorModal = ({ setErrorModalActive, errorModalActive, errorMessage }: ErrorModalProps) => {
  const modalShortcuts = (e: KeyboardEvent) => {
    e.key === "Enter" && setErrorModalActive(false);
  };

  useEffect(() => {
    if (errorModalActive) {
      document.addEventListener("keydown", modalShortcuts);
      return () => {
        document.removeEventListener("keydown", modalShortcuts);
      };
    }
  }, [errorModalActive]);

  return (
    <FocusTrap focusTrapOptions={{ escapeDeactivates: false }}>
      <div className="error-modal">
        <h4 className="message">{errorMessage}</h4>
        <button className="confirm-button" onClick={() => setErrorModalActive(false)}>
          Rozumím
        </button>
      </div>
    </FocusTrap>
  );
};

export default ErrorModal;
