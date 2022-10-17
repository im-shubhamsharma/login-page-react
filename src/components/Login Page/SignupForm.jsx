import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateSignUpForm } from "./validateForm";

const SignupForm = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessages, setErrorMessage] = useState({});
  const navigate = useNavigate();

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
    }));
  };

  // Function to validate the sign up form
  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateSignUpForm(userDetails);
    if (Object.keys(error).length !== 0) {
      setErrorMessage(error);
    } else {
      if (!localStorage.getItem(userDetails.email)) {
        localStorage.setItem(userDetails.email, JSON.stringify(userDetails));
        setUserDetails({
          email: "",
          password: "",
          confirmPassword: "",
        });
        navigate("/login");
        alert("Signup Succesfull");
      }
    }
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <p>Hello! &#128075;</p>
        <h2>Sign up to get started</h2>
        <div className="input-container">
          <label>
            Email
            {errorMessages.email && (
              <p className="error">{errorMessages.email}</p>
            )}
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
            Password
            {errorMessages.password && (
              <p className="error">{errorMessages.password}</p>
            )}
          </label>
          <input
            type="password"
            name="password"
            value={userDetails.password}
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <label>
            Confirm Password
            {errorMessages.confirmPassword && (
              <p className="error">{errorMessages.confirmPassword}</p>
            )}
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={userDetails.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div className="button-container">
          <button type="submit">Sign Up</button>
        </div>

        <div className="message">
          <p>
            Already have an account? <a href="#">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
