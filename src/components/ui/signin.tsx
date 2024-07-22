"use client";

import { LoginSignupProps } from "@/types";
import { SubmitButton, TextInput, TextLabel } from "../common";
import { useState } from "react";

const Signin: React.FC<LoginSignupProps> = ({ className }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [authType, setAuthType] = useState<"signup" | "login">("signup");

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

      if (!response.ok) {
        const { message } = await response.json();
        setError(message || "Unknown error");
        setMsg("");
        return;
      }

      const { message } = await response.json();
      setMsg(message);
      setError("");
    } catch (error) {
      console.error("An error occurred while signing up:", error);
      setError("An unexpected error occurred.");
      setMsg("");
    }
  };

  return (
    <div className={className}>
      <TextLabel text={authType === "login" ? "Login to your account" : "Create new account"} />
      <button
        onClick={() => setAuthType(authType === "login" ? "signup" : "login")}
        className="underline text-gray-500"
      >
        {authType === "login" ? "Create new account?" : "Log in to account"}
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
      {error && <div className="text-red-500">{error}</div>}
      {msg && <div className="text-green-500">{msg}</div>}
    </div>
  );
};

export default Signin;
