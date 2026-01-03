import { useOutletContext } from "react-router-dom";
import "../css/components/savedNickname.css";
import type { OutletContextType } from "../types/types";

const SavedNickname = () => {
  const { savedNickname } = useOutletContext<OutletContextType>();
  return (
    <div className="saved-nickname">
      <span>Ahoj {savedNickname}, pojď si zahrát oběšence! Stačí vybrat téma, obtížnost a zmáčknout play!</span>
      <button className="change-nickname">Změň přezdívku</button>
    </div>
  );
};

export default SavedNickname;
