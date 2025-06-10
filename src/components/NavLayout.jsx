import React from "react";
import { Outlet } from "react-router";
import { FloatingNav } from "../aceternityUi/floating-navbar";

function NavLayout() {
  const navItems = [
    {
      name: "Home",
      message:
        "Windslicer paddles and why narrow blades are good for sea kayaking.",
      link: "/",
    },
    {
      name: "Gallery",
      message:
        "Details of native paddles from museums and Windslicer paddles for comparison",
      link: "/gallery",
    },
    {
      name: "Safety",
      message:
        "Kayak test reports and articles concentrating on buoyancy design and  improvement in recovery potential. These reports are not available elsewhere.",
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
