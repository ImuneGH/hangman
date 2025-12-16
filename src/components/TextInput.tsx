import "../css/components/textInput.css";

type TextInputProps = {
  label: string;
};

const TextInput = ({ label }: TextInputProps) => {
  return (
    <>
      <label htmlFor="">{label}</label>
    </>
  );
};

export default TextInput;
