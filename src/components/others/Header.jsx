import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl">
        hello <br /> rakshtih
      </h1>
      <button className="bg-red-400">Log Out</button>
    </div>
  );
};

export default Header;
