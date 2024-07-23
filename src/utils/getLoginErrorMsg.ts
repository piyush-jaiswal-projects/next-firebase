const getLoginErrorMsg = (code: string): string => {
    const errorMessages: { [key: string]: string } = {
      "auth/email-already-in-use": "Email Already in Use",
      "auth/weak-password": "Weak Password",
      "auth/invalid-email": "Invalid Email",
      "auth/user-disabled": "User Disabled",
      "auth/user-not-found": "User Not Found",
      "auth/wrong-password": "Wrong Password",
    };
    return errorMessages[code] || "Internal Server Error";
  };

  export default getLoginErrorMsg;