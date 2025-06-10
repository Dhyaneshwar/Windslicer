import React from "react";
import { Outlet } from "react-router";
import { FloatingNav } from "../aceternityUi/floating-navbar";
import {
  galleryTooltip,
  homeTooltip,
  safetyTooltip,
} from "../constant/nav-bar";
import Footer from "./Footer";

function NavLayout() {
  const navItems = [
    {
      name: "Home",
      message: homeTooltip,
      link: "/",
    },
    {
      name: "Gallery",
      message: galleryTooltip,
      link: "/gallery",
    },
    {
      name: "Safety",
      message: safetyTooltip,
      link: "/safety",
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default NavLayout;
