import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Login = ({ trigger }) => {
  const [showSignup, setShowSignup] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Add your login functionality here
    if (email === "example@ex.com" && password === "password") {
      console.log("Login successful");
      setLoginError("");
      // Reset form fields
      setEmail("");
      setPassword("");
    } else {
      console.log("Login failed");
      setLoginError("Invalid email or password");
    }
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    // Add your signup functionality here
    console.log("Signing up with fullname:", fullname, "email:", email, "and password:", password);
    // Reset form fields
    setFullname("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      {/* Login Modal */}
      <div className={`modal ${!showSignup ? "show" : ""}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h2>Login</h2>
            <button onClick={trigger} className="close-button">
              <RxCross2 size="1.4em" className="crossicon" />
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleLoginSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-control mb-3"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-control mb-3"
              />
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <p className="error">{loginError}</p>
            <p className="mt-3">
              Don't have an account?{" "}
              <span className="text-primary" onClick={toggleSignup}>
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      <div className={`modal ${showSignup ? "show" : ""}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h2>Sign Up</h2>
            <button onClick={trigger} className="close-button">
              <RxCross2 size="1.4em" className="crossicon" />
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSignupSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
                className="form-control mb-3"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-control mb-3"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-control mb-3"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="form-control mb-3"
              />
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
            <p className="mt-3">
              Already have an account?{" "}
              <span className="text-primary" onClick={toggleSignup}>
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
