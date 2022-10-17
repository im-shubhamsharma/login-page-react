import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import "./Login.scss";
import { Link, Route, Routes, useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();

  useEffect(() => {
    let path = location.pathname.slice(1);
    if (path === "login") {
      document.getElementById("login").classList.add("active");
      document.getElementById("signup").classList.remove("active");
    } else {
      document.getElementById("signup").classList.add("active");
      document.getElementById("login").classList.remove("active");
    }
  }, [location]);

  return (
    <div className="login-page">
      <div className="container">
        <div className="login-options">
          <Link className="link" to="/login">
            <button id="login">Login</button>
          </Link>

          <Link className="link" to="/signup">
            <button id="signup">Sign Up</button>
          </Link>
        </div>

        <Routes>
          {/* Remove below path when using login component in other website */}
          <Route path="/" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default Login;
