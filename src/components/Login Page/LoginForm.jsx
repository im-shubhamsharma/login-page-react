import React, { useState } from "react";
import { validateLoginForm } from "./validateForm";

const LoginForm = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const [errorMessages, setErrorMessage] = useState({});

  // Function for control inputs
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setErrorMessage((prevMessage) => ({
      ...prevMessage,
      [name]: "",
      general: "",
    }));
  };

  // Function to validate the login form
  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateLoginForm(userDetails);

    if (Object.keys(error).length !== 0) {
      setErrorMessage(error);
    } else {
      setUserDetails({
        email: "",
        password: "",
      });
      alert("Login Succesfull");
    }
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <p>Welcome back! &#128075;</p>
        <h2>Sign into your account</h2>
        <div className="input-container">
          <label>
            Username{" "}
            {errorMessages.email && (
              <p className="error">{errorMessages.email}</p>
            )}{" "}
          </label>
          <input
            type="text"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <label>
            Password{" "}
            {errorMessages.password && (
              <p className="error">{errorMessages.password}</p>
            )}{" "}
          </label>
          <input
            type="password"
            name="password"
            value={userDetails.password}
            onChange={handleChange}
          />
        </div>

        {errorMessages.general && (
          <p className="login-error">{errorMessages.general}</p>
        )}

        <div className="button-container">
          <button type="submit">Login</button>
        </div>

        <div className="forget-password">
          <a href="#">Forget your password ?</a>
        </div>

        <div className="message">
          <p>
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
