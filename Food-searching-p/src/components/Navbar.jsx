import React from "react";

const Navbar = () => {
  return (
    <div className="main lg:flex md:flex sm:flex-wrap justify-between px-4 bg-[#F8EFBA] items-center py-4 shadow-md">
      <div className="left">
        <h1 className="font-bold text-2xl text-center">Food App</h1>
      </div>
      <div className="right">
        <ul className="flex space-x-3 cursor-pointer justify-center">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
