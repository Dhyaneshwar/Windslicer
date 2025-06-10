import React from "react";
import { Outlet } from "react-router";
import { FloatingNav } from "../aceternityUi/floating-navbar";
// import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

function NavLayout() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    {
      name: "Safety",
      link: "/safety",
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <Outlet />
    </div>
  );
}

export default NavLayout;
