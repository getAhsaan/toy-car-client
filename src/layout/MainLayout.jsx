import React from "react";
import Navbar from "../pages/shared/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
