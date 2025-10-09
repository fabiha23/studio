import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Mainlayout = () => {
  return (
    <div className="bg-black">
      <header className="bg-transparent sticky top-0 z-50 border-b-1 border-[#383837] backdrop-blur-sm">
        <header className="max-w-8xl xl:mx-auto xl:px-9 lg:px-6 mx-3">
          <Navbar></Navbar>
        </header>
      </header>
      <Outlet></Outlet>
      <footer className="bg-black">
        <footer className="max-w-8xl xl:mx-auto xl:px-9 lg:px-6 mx-3">
          <Footer></Footer>
        </footer>
      </footer>
    </div>
  );
};

export default Mainlayout;
