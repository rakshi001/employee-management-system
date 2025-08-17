import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="border-2 border-red-600">
          <form className="flex flex-col items-center justify">
            <input type="email" placeholder="enter your email"></input>
            <input type="password" placeholder="enter password"></input>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
