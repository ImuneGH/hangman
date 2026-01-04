import type React from "react";
import "../css/components/confirmationModal.css";
import { FocusTrap } from "focus-trap-react";

type ConfirmationModalProps = {
  confirmationModalMessage: string;
  setConfirmModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  setChangeNicknameActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const ConfirmationModal = ({ setConfirmModalActive, setChangeNicknameActive }: ConfirmationModalProps) => {
  return (
    <FocusTrap focusTrapOptions={{ escapeDeactivates: false }}>
      <div className="confirmation-modal">
        <h4 className="message">Opravdu chceš změnit přezdívku?</h4>
        <div className="button-container">
          <button className="cancel-button" onClick={() => setConfirmModalActive(false)}>
            Zrušit
          </button>
          <button
            className="confirm-button"
            onClick={() => {
              setChangeNicknameActive(true);
              setConfirmModalActive(false);
            }}
          >
            Potvrdit
          </button>
        </div>
      </div>
    </FocusTrap>
  );
};

export default ConfirmationModal;
