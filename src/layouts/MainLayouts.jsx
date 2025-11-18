import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer/footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const MainLayouts = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
