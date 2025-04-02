import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import "./Layout.scss";

function Layout() {
  return <div>
    <Navbar />
    <Main>
      <Outlet/>
    </Main>
    <Footer/>
  </div>
}

export default Layout;