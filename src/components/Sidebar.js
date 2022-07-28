import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div
        className="border-2 bg-slate-200 md:max-w-3/4 py-1 mx-auto
         md:flex md:flex-col gap-10
       md:justify-start md:text-left md:h-96"
      >
        <Link to={"/"}>Home</Link>

        <Link to={"playlist"}>Playlist</Link>
        <Link to={"likes"}>Likes</Link>
        <Link to={"watchlater"}>Watch Later</Link>
        <Link to={"history"}>History</Link>
      </div>
    </>
  );
};

export default Sidebar;
