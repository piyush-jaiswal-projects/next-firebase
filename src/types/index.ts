type CommonProps = {
  className?: string;
  theme?: "light" | "dark";
  children?: React.ReactNode;
};

export type TextLabelProps = CommonProps & {
  text: string;
};

export type TextInputProps = CommonProps & {
  placeholder: string;
  id: string;
  value: string;
  type: "password" | "text" | "number" | "email"
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type SubmitButtonProps = CommonProps & {
  text: string;
  onClick: () => void;
};

export type LoginSignupProps = {
    className?: string;
}
