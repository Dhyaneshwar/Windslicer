import React from "react";
import { AuroraBackground } from "../aceternityUi/aurora-background";
import { motion } from "motion/react";
import { windslicerIntro, welcomeMsg } from "../constant/home";

function Home() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          {welcomeMsg}
        </div>
        <div className="font-extralight text-base md:text-3xl dark:text-neutral-200 py-4 px-10 text-justify">
          {windslicerIntro}
        </div>
        <img
          src="./assets/paddles.jpg"
          alt="A Selection of Windslicer blades"
          className="max-md:w-2/3 max-lg:w-1/2 h-auto"
        />
      </motion.div>
    </AuroraBackground>
  );
}

export default Home;
