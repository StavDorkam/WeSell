import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

import {
  SignInContainer,
  TitleContainer,
  ButtonsContainer
} from "./sign-in.styles";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { email, password } = credentials;

  const handleSubmit = async ev => {
    ev.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = ev => {
    const { name, value } = ev.target;
    setCredentials({ ...credentials, [name]: value });
  };
  return (
    <SignInContainer>
      <TitleContainer>I already have an account</TitleContainer>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleChange}
          name="email"
          type="email"
          value={email}
          label="Email"
          autoComplete="username"
          required
        />
        <FormInput
          onChange={handleChange}
          name="password"
          type="password"
          value={password}
          label="Password"
          autoComplete="current-password"
          required
        />
        <ButtonsContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
