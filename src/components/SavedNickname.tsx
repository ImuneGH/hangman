import { useOutletContext } from "react-router-dom";
import "../css/components/savedNickname.css";
import type { OutletContextType } from "../types/types";

type SavedNicknameProps = {
  changeNicknameActive: boolean;
  setConfirmModalActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const SavedNickname = ({ setConfirmModalActive, changeNicknameActive }: SavedNicknameProps) => {
  const { formData } = useOutletContext<OutletContextType>();

  return (
    <div className="saved-nickname">
      {!changeNicknameActive && <span>Ahoj {formData.nickname}, pojď si zahrát oběšence! Stačí vybrat téma, obtížnost a zmáčknout play!</span>}
      {!changeNicknameActive && (
        <button type="button" className="change-nickname" onClick={() => setConfirmModalActive(true)}>
          Změň přezdívku
        </button>
      )}
    </div>
  );
};

export default SavedNickname;
