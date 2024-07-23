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
  type: "password" | "text" | "number" | "email";
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type SubmitButtonProps = CommonProps & {
  text: string;
  onClick: () => void;
};

export type LoginSignupProps = {
  className?: string;
};

export type CreateZoomUser = {
  email: string;
  first_name: string;
  last_name: string;
  display_name: string;
  password: string;
  type: number;
  feature: {
    zoom_phone: boolean;
    zoom_one_type: number;
  };
  plan_united_type: string;
};
