import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="border-2 font-bold bg-slate-200 py-1 mx-auto md:flex md:justify-around md:items-baseline">
        <h1 className="text-4xl font-serif font-bold text-red-500">
          Stream <span className="text-black"> tube</span>
        </h1>
        <div className="flex w-[200] gap-1">
          <input className="rounded-lg p-1" type="text" placeholder="search" />
          <label>Search</label>
        </div>
        <div className="flex gap-5">
          <Link to={"/"}>Home</Link>
          <Link to={"explore"}>Explore</Link>
          <Link to={"mockapi"}>MockApi</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
