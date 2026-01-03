import { useOutletContext } from "react-router-dom";
import "../css/components/savedNickname.css";
import type { OutletContextType } from "../types/types";

type SavedNicknameProps = {
  changeNicknameActive: boolean;
  setChangeNicknameActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const SavedNickname = ({ setChangeNicknameActive, changeNicknameActive }: SavedNicknameProps) => {
  const { savedNickname } = useOutletContext<OutletContextType>();

  console.log(changeNicknameActive);
  return (
    <div className="saved-nickname">
      {!changeNicknameActive && <span>Ahoj {savedNickname}, pojď si zahrát oběšence! Stačí vybrat téma, obtížnost a zmáčknout play!</span>}
      {!changeNicknameActive && (
        <button className="change-nickname" onClick={() => setChangeNicknameActive(true)}>
          Změň přezdívku
        </button>
      )}
    </div>
  );
};

export default SavedNickname;
