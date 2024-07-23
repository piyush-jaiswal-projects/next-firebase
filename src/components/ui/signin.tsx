"use client";
import { LoginSignupProps } from "@/types";
import { SubmitButton, TextInput, TextLabel } from "../common";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Signin: React.FC<LoginSignupProps> = ({ className }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [authType, setAuthType] = useState<"signup" | "login">("signup");
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    setError("");
  }, [email, password, authType]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "email-input") {
      setEmail(value);
    } else if (id === "password-input") {
      setPassword(value);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        authType === "login" ? "/api/login" : "/api/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const { message } = await response.json();

      if (!response.ok) {
        setError(message || "Unknown error");
        setMsg("");
        return;
      }

      setMsg(message);
      setError("");
      router.push(`/zoom/${email}`);
    } catch (error) {
      console.error("An error occurred while signing up:", error);
      setError("An unexpected error occurred.");
      setMsg("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={className}>
      <TextLabel
        text={
          authType === "login" ? "Login to your account" : "Create new account"
        }
      />
      <button
        onClick={() => setAuthType(authType === "login" ? "signup" : "login")}
        className="underline text-gray-500 text-xs"
      >
        {authType === "login" ? "Create new account?" : "Login to account"}
      </button>
      <div className="m-2">
        <TextLabel text="Email" />
        <TextInput
          placeholder="Enter Your Email..."
          id="email-input"
          type="email"
          onChangeHandler={handleChange}
          value={email}
        />
      </div>
      <div className="m-2">
        <TextLabel text="Password" />
        <TextInput
          placeholder="Enter Your Password..."
          id="password-input"
          type="password"
          onChangeHandler={handleChange}
          value={password}
        />
      </div>
      <div className="m-4">
        <SubmitButton text="Submit" onClick={handleSubmit} />
      </div>
      {loading && <div className="text-blue-500">Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {msg && <div className="text-green-500">{msg}</div>}
    </div>
  );
};

export default Signin;
