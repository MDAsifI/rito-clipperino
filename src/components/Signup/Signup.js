import React, { useCallback } from "react";
import app from "../../firebase";
import SignupHeader from "../SignupHeader/SignupHeader"

const Signup = ({
  // history
}) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
        window.location.href="/home";
    } catch (error) {
      alert(error);
    }
  }, [
    // history
  ]);

  return (
    <div>
      <SignupHeader/>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <a href="/login">
        <button type="submit">Sign Up</button>
        </a>
      </form>
    </div>
  );
};

export default Signup;