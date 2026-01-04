import "../css/components/confirmationModal.css";
import { FocusTrap } from "focus-trap-react";

// type ConfirmationModalProps = {
//   confirmationModalMessage: string;
// };

const ConfirmationModal = ({}) => {
  return (
    <FocusTrap focusTrapOptions={{ escapeDeactivates: false }}>
      <div className="confirmation-modal">
        <h4 className="message">Opravdu chceš změnit přezdívku?</h4>
        <div className="button-container">
          <button className="cancel-button">Zrušit</button>
          <button className="confirm-button">Potvrdit</button>
        </div>
      </div>
    </FocusTrap>
  );
};

export default ConfirmationModal;
