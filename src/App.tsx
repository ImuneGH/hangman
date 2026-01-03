import "./css/app.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [savedNickname, setSavedNickname] = useState<string | null>(localStorage.getItem("nickname"));
  const [nickname, setNickname] = useState<string>("");
  return (
    <div className="wrapper">
      <Outlet context={{ nickname, setNickname, savedNickname, setSavedNickname }} />
    </div>
  );
}

export default App;
