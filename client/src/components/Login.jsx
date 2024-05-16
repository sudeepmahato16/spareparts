import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { signUp,  signIn } from "../services/auth";
import {useDispatch} from "react-redux"
import { setUser } from "../store/userSlice";

const Login = ({ trigger }) => {
  const [showSignup, setShowSignup] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const dispatch = useDispatch();

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  const handleLoginSubmit =async (event) => {
    event.preventDefault();
    // Add your login functionality here

    try{
      const data = await signIn({
        email,
        password,
      });
      dispatch(setUser(data));
  
    trigger()
  
    }
      catch(e){
        console.log(e.message);
      }
    
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    // Add your signup functionality here
    console.log(
      "Signing up with fullname:",
      fullname,
      "email:",
      email,
      "and password:",
      password
    );
    try{
    const data = await signUp({
      email,
      name: fullname,
      password,
    });
    dispatch(setUser(data));

  trigger()

  }
    catch(e){
      console.log(error.message);
    }
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
              <button type="submit" className="btn btn-primary">
                Login
              </button>
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
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
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
