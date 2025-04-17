import React from "react";
import Navbar from "../components/Page/Navbar";
import Main from "../components/Page/Main";
import Footer from "../components/Page/Footer";
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