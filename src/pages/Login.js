import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Css/Login.css";
import { auth } from "../firebase/firebase";
import apartment from "../assets/img/apartment.webp";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
        // Signed in

        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={apartment}
        alt=""
      />
      <div className="flex justify-center items-center h-full">
        <form
          className="max-w-[400px] w-full mx-auto bg-white p-8 "
          onSubmit={signIn}
        >
          <h2 className="text-4xl font-bold text-center py-4">SIGN IN</h2>
          <div className="flex flex-col mb-4">
            <label>Username </label>
            <input
              type="email"
              value={email}
              name="uname"
              onChange={(e) => setEmail(e.target.value)}
              className="border relative bg-gray-100 p-2"
              required
            />
          </div>
          <div className="flex flex-col">
            <label>Password </label>
            <input
              type="password"
              value={password}
              name="pass"
              onChange={(e) => setPassword(e.target.value)}
              className="border relative bg-gray-100 p-2"
              required
            />
          </div>
          <button className="w-full py-3 mt-8 bg-violet-600 hover:bg-violet-500 relative text-white">Sign In</button>
          <p className="flex items-center text-sm"><input className="mr-2" type="checkbox"/>Remember me?</p>
          <p className="text-sm">
            New user?{" "}
            <Link
              className="hover:text-violet-900 transtion text-sm"
              to="/registeruserinfo"
            >
              Create an account
            </Link>
          </p>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
