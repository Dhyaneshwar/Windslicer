import React from "react";
import { Outlet } from "react-router";
import { FloatingNav } from "../aceternityUi/floating-navbar";
import {
  galleryTooltip,
  homeTooltip,
  safetyTooltip,
} from "../constant/nav-bar";
import Footer from "./Footer";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import CollectionsIcon from "@mui/icons-material/Collections";
import HomeIcon from "@mui/icons-material/Home";

function NavLayout() {
  const navItems = [
    {
      name: "Home",
      message: homeTooltip,
      icon: <HomeIcon />,
      link: "/",
    },
    {
      name: "Gallery",
      message: galleryTooltip,
      icon: <CollectionsIcon />,
      link: "/gallery",
    },
    {
      name: "Safety",
      message: safetyTooltip,
      icon: <HealthAndSafetyIcon />,
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
