import { TextInputProps } from "@/types";

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  id,
  value,
  className = "",
  type = "text",
  theme = "light",
  onChangeHandler,
  children,
}) => {
  return (
    <div className={`border rounded-lg w-full min-h-[30px] ${className}`}>
      {children}
      <input
        className="p-2 w-full h-full outline-none"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default TextInput;
