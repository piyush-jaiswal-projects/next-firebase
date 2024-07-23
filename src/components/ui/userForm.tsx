import { CreateZoomUser } from "@/types";
import { useState, useCallback } from "react";
import { TextLabel, TextInput } from "../common";
import { SubmitButton } from "../common";
import { createUser } from "@/services";

const initialUserData = {
    email: "",
    first_name: "",
    last_name: "",
    display_name: "",
    password: "",
    type: 0,
    zoom_phone: false,
    zoom_one_type: 0,
    plan_united_type: "",
  };

const UserForm: React.FC = () => {
  const [userData, setUserData] = useState(initialUserData);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    const field = id.slice(5);
    setUserData((prevData) => ({
      ...prevData,
      [field]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const handleSubmit = useCallback(async () => {
    const user: CreateZoomUser = {
      email: userData.email,
      first_name: userData.first_name,
      last_name: userData.last_name,
      display_name: userData.display_name,
      password: userData.password,
      type: userData.type,
      feature: {
        zoom_phone: userData.zoom_phone,
        zoom_one_type: userData.zoom_one_type,
      },
      plan_united_type: userData.plan_united_type,
    };

    await createUser("", user); // supply access token
  }, [userData]);

  return (
    <div className="bg-slate-100 shadow rounded-lg p-4 w-1/3 min-h-[300px]">
      <h1 className="text-md ">User Form</h1>
      <div className="m-2">
        <TextLabel text="Email" />
        <TextInput
          placeholder="Enter Your Email..."
          id="user-email"
          type="email"
          onChangeHandler={handleChange}
          value={userData.email}
        />
      </div>
      <div className="m-2">
        <TextLabel text="First Name" />
        <TextInput
          placeholder="Enter Your First Name..."
          id="user-first_name"
          type="text"
          onChangeHandler={handleChange}
          value={userData.first_name}
        />
      </div>
      <div className="m-2">
        <TextLabel text="Last Name" />
        <TextInput
          placeholder="Enter Your Last Name..."
          id="user-last_name"
          type="text"
          onChangeHandler={handleChange}
          value={userData.last_name}
        />
      </div>
      <div className="m-2">
        <TextLabel text="Display Name" />
        <TextInput
          placeholder="Enter Your Display Name..."
          id="user-display_name"
          type="text"
          onChangeHandler={handleChange}
          value={userData.display_name}
        />
      </div>
      <div className="m-2">
        <TextLabel text="Password" />
        <TextInput
          placeholder="Enter Your Password..."
          id="user-password"
          type="password"
          onChangeHandler={handleChange}
          value={userData.password}
        />
      </div>
      <div className="m-2">
        <TextLabel text="Type" />
        <TextInput
          placeholder="Enter Your Type..."
          id="user-type"
          type="number"
          onChangeHandler={handleChange}
          value={userData.type.toString()}
        />
      </div>
      <div className="m-2">
        <TextLabel text="Zoom Phone" />
        <TextInput
          placeholder="Enter Your Zoom Phone..."
          id="user-zoom_phone"
          type="text"
          onChangeHandler={handleChange}
          value={userData.zoom_phone.toString()}
        />
      </div>
      <div className="m-2">
        <TextLabel text="Zoom One Type" />
        <TextInput
          placeholder="Enter Your Zoom One Type..."
          id="user-zoom_one_type"
          type="number"
          onChangeHandler={handleChange}
          value={userData.zoom_one_type.toString()}
        />
      </div>
      <div className="m-2">
        <TextLabel text="Plan United Type" />
        <TextInput
          placeholder="Enter Your Plan United Type..."
          id="user-plan_united_type"
          type="text"
          onChangeHandler={handleChange}
          value={userData.plan_united_type}
        />
      </div>
      <div className="my-4">
        <SubmitButton text="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default UserForm;
