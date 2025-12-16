import "../css/components/textInput.css";
import LabelContext from "../context/LabelContext";
import { useContext } from "react";

const TextInput = () => {
  const { label } = useContext(LabelContext);
  return (
    <>
      <label htmlFor="">{label}</label>
    </>
  );
};

export default TextInput;
