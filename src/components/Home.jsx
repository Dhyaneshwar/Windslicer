import React from "react";
import {
  windslicerIntro,
  welcomeMsg,
  windslicerPaddles,
  downloadFiles,
} from "../constant/home";
import HomePageWrapper from "./HomePageWrapper";
import { Button, Fab } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { ColoredText } from "../aceternityUi/ColoredText";

function Home() {
  return (
    <HomePageWrapper>
      <div className="flex justify-center items-center text-3xl md:text-7xl font-bold text-center">
        <div className="my-12 mt-20">
          <p className="text-lg md:text-5xl">{welcomeMsg}</p>
          <ColoredText text={windslicerPaddles} />
        </div>
      </div>
      <div className="flex max-lg:flex-col flex-row items-center mx-10 -mt-10 gap-5">
        <div className="font-extralight text-base md:text-3xl md:px-10 text-justify">
          {windslicerIntro}
        </div>
        <img
          src="./assets/paddles.jpg"
          alt="A Selection of Windslicer blades"
          className="max-md:w-7/8 h-auto rounded-2xl"
        />
      </div>
      <div className="flex justify-around w-full flex-wrap gap-8 mt-4">
        {downloadFiles.map((file, idx) => (
          <Button
            key={idx}
            variant="outlined"
            href={file.href}
            target="_blank"
            className="flex justify-center rounded-3xl max-md:w-7/8"
          >
            <Fab color="primary" aria-label="add" size="medium">
              <DownloadIcon />
            </Fab>
            <div className="pl-4 flex flex-col">
              <span>{file.title}</span>
              <span>{file.details}</span>
            </div>
          </Button>
        ))}
      </div>
    </HomePageWrapper>
  );
}

export default Home;
