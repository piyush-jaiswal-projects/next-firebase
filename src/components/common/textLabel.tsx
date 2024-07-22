import { TextLabelProps } from "@/types";

const TextLabel: React.FC<TextLabelProps> = ({
  text,
  theme = "light",
  className = "",
  children,
}) => {
  return (
    <div className={`${className ?? ""}`}>
      {children ?? (
        <label className={theme === "dark" ? "text-white" : "text-black"}>
          {text}
        </label>
      )}
    </div>
  );
};

export default TextLabel;
