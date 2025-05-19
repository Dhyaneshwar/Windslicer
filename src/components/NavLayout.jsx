import React from "react";
import { Outlet } from "react-router";

function NavLayout() {
  return (
    <>
      <div>NavLayout</div>
      <Outlet />
    </>
  );
}

export default NavLayout;
