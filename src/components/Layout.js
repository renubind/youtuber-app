import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <>
      <div className="grid grid-cols-12  gap-5 md:max-w-[1440px] md:mx-auto">
        <div className="col-start-1 col-end-13">
          <Navbar />
        </div>
        <div className=" col-start-1 col-end-3">
          <Sidebar />
        </div>
        <div className=" col-start-3 col-end-13">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
