import React from "react";
import Navbar from "../pages/shared/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import { ToastContainer } from "react-toastify";
import ScrollFix from "./ScrollFix";

const MainLayout = () => {
  return (
    <div>
      <ScrollFix></ScrollFix>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
