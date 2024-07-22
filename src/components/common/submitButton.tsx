import { SubmitButtonProps } from "@/types";

const SubmitButton: React.FC<SubmitButtonProps> = ({
  text,
  className = "",
  theme = "light",
  onClick,
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`p-2 bg-blue-500 w-full text-white rounded-lg ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default SubmitButton;
