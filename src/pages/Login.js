import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { BiAt, BiSolidShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Welcome Back Homelander!
        </h1>
        <form
          onSubmit={signIn}
          action=""
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">Sign in to your account</p>

          <div>
            <label className="sr-only">Email</label>

            <div className="relative">
              <input
                type="email"
                value={email}
                style={{ height: '3.3rem', border: '1px solid #718096' }}
                name="uname"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="remove w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                required
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <BiAt />
              </span>
            </div>
          </div>

          <div>
            <label className="sr-only">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Enter password"
                style={{ height: '3.3rem', border: '1px solid #718096' }}
                name="pass"
                onChange={(e) => setPassword(e.target.value)}
                className="remove w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                required
              />
              <span
                className="absolute inset-y-0 end-0 grid place-content-center px-4"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                <BiSolidShow />
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>
          <p className="text-center text-sm text-blue-500">
            <Link
              className="hover:text-violet-900 transtion text-sm"
              to="/signup"
            >
              Forgotten Password
            </Link>
          </p>
          <p className="text-center text-sm text-gray-500">
            No account?

            <span> </span>
            <Link
              className=" text-red-400 hover:text-red-800 transtion text-sm"
              to="/signup"
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
