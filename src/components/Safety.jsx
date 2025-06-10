import React from "react";
import { AuroraBackground } from "../aceternityUi/aurora-background";
import { header, intro } from "../constant/safety";

const CustomHeader = ({ text }) => (
  <p className="text-[#000077] text-2xl font-semibold"> {text}</p>
);

function Safety() {
  return (
    <AuroraBackground>
      <div className="text-5xl font-bold mt-10 mb-4 text-shadow-lg">
        {header}
      </div>
      <div className="px-20">
        <CustomHeader text="Introduction" />
        <div className="text-xl">{intro}</div>
        <br />

        <div className="flex gap-4 justify-center">
          <img src="./assets/safety/SternOnSeabed.jpg" />
          <img src="./assets/safety/KayakSunk.jpg" />
        </div>
      </div>
    </AuroraBackground>
  );
}

export default Safety;
