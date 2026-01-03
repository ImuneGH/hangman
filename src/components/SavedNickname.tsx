import { useOutletContext } from "react-router-dom";
import "../css/components/savedNickname.css";
import type { OutletContextType } from "../types/types";

const SavedNickname = () => {
  const { nickname } = useOutletContext<OutletContextType>();
  console.log(nickname);
  return (
    <div className="saved-nickname">
      <span>Ahoj {nickname}, pojď si zahrát oběšence! Stačí vybrat téma, obtížnost a zmáčknout play!</span>
      <button className="change-nickname">Změň přezdívku</button>
    </div>
  );
};

export default SavedNickname;
