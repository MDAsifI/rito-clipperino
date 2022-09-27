import React, { useCallback, useContext } from "react";
import { Navigate } from "react-router";
import app from "../../firebase";
import { AuthContext } from "../../contexts/AuthContext";

const Login = ({ 
 }) => {
  // const AuthContext = React.createContext()
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
          window.location.href="/home";
      } catch (error) {
        alert(error);
      }
    },
    [

    ]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;