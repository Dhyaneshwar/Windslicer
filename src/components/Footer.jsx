import React from "react";

function Footer() {
  return (
    <>
      <div className="flex max-md:flex-col max-md:gap-4 max-md:items-center items-center justify-between  bg-black/80 p-4 text-white text-lg max-md:text-md font-bold">
        <div className="flex-1 max-md:text-center text-left">
          <span className="max-md:inline block text-sm">
            info@windslicer.co.uk
          </span>
        </div>
        <div className="flex-1 text-center max-md:order-last">
          <span>2025 &copy; P Lamont</span>
        </div>
        <div className="flex-1 max-md:text-center text-right text-sm">
          <span className="max-md:inline block">
            Windslicer, Isle of Luing,{" "}
          </span>
          <span className="max-md:inline block">
            Argyll, Scotland, PA34 4TY, UK
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
