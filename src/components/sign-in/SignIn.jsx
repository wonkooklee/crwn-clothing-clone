import React, { useState } from "react";

import FormInput from "../form-input/Form-input";
import CustomButton from "../custom-button/Custom-button";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./SignIn.scss";

const SignIn = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserInput({ email: "", password: "" });
  };

  const handleChange = ({ target: { name, value } }) => {
    setUserInput({ ...userInput, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          value={userInput.email || ""}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={userInput.password || ""}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
