import React from "react";
import { windslicerIntro, welcomeMsg, downloadFiles } from "../constant/home";
import HomePageWrapper from "./HomePageWrapper";
import { Button, Fab } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

function Home() {
  return (
    <HomePageWrapper>
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
      <div className="flex justify-around w-full flex-wrap gap-8">
        {downloadFiles.map((file, idx) => (
          <Button
            key={idx}
            variant="outlined"
            href={file.href}
            target="_blank"
            className="flex justify-center"
          >
            <Fab color="primary" aria-label="add">
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
