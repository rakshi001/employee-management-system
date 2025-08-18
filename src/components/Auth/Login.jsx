import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is ", email);
    console.log("password is ", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-emerald-100 to-emerald-800">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-96">
        <h2 className="text-3xl font-bold text-center text-emerald-600 mb-6">
          Welcome Back
        </h2>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col gap-5"
        >
          <input
            value={email}
            onChange={(e) => {
              // console.log("changing");
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
            className="border-2 border-emerald-300 rounded-xl px-4 py-3 outline-none focus:border-emerald-500"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
            className="border-2 border-emerald-300 rounded-xl px-4 py-3 outline-none focus:border-emerald-500"
          />
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-xl py-3 transition"
          >
            Log In
          </button>
          <p className="text-sm text-gray-500 text-center">
            Don’t have an account?{" "}
            <a href="#" className="text-emerald-600 font-medium">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
