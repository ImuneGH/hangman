import type React from "react";
import "../css/components/confirmationModal.css";
import { FocusTrap } from "focus-trap-react";
import { useEffect } from "react";

type ConfirmationModalProps = {
  setConfirmModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  setChangeNicknameActive: React.Dispatch<React.SetStateAction<boolean>>;
  confirmModalActive: boolean;
};

const ConfirmationModal = ({ setConfirmModalActive, setChangeNicknameActive, confirmModalActive }: ConfirmationModalProps) => {
  const confirmNickChange = () => {
    setChangeNicknameActive(true);
    setConfirmModalActive(false);
  };

  const modalShortcuts = (e: KeyboardEvent) => {
    e.key === "Escape" && setConfirmModalActive(false);
    e.key === "Enter" && confirmNickChange();
  };

  useEffect(() => {
    if (confirmModalActive) {
      document.addEventListener("keydown", modalShortcuts);
      return () => {
        document.removeEventListener("keydown", modalShortcuts);
      };
    }
  }, [confirmModalActive]);

  return (
    <FocusTrap focusTrapOptions={{ escapeDeactivates: false }}>
      <div className="confirmation-modal">
        <h4 className="message">Opravdu chceš změnit přezdívku?</h4>
        <div className="button-container">
          <button className="cancel-button" onClick={() => setConfirmModalActive(false)}>
            Zrušit
          </button>
          <button className="confirm-button" onClick={confirmNickChange}>
            Potvrdit
          </button>
        </div>
      </div>
    </FocusTrap>
  );
};

export default ConfirmationModal;
