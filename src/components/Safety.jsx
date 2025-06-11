import React from "react";
import { AuroraBackground } from "../aceternityUi/aurora-background";
import {
  documentLinks,
  header,
  introductionContent,
  kayakSafetyContent,
  primaryVsSecondaryBuoyancy,
  safetyImg1,
  safetyImg2,
  safetyVsPaddledPerformance,
} from "../constant/safety";
import { SafetyBentoGrid } from "./SafetyBentoGrid";

const DisplayContent = ({ content }) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-indigo-900">{content.heading}</h2>
      {content.paragraphs.map((para, index) => (
        <>
          {typeof para === "function" ? (
            <div key={index}>{para()}</div>
          ) : (
            <p key={index} className="text-justify text-xl">
              {para}
            </p>
          )}
          <br />
        </>
      ))}
    </>
  );
};

function Safety() {
  return (
    <AuroraBackground childClassname="">
      <div className="text-5xl font-bold mt-10 mb-4 text-center text-shadow-lg">
        {header}
      </div>

      <div className="px-20">
        <DisplayContent content={introductionContent} />

        <div className="flex gap-4 justify-center">
          <DisplayContent content={safetyImg1} />
          <DisplayContent content={safetyImg2} />
        </div>
        <br />

        <DisplayContent content={kayakSafetyContent} />

        <DisplayContent content={primaryVsSecondaryBuoyancy} />

        <DisplayContent content={safetyVsPaddledPerformance} />

        <DisplayContent content={documentLinks} />

        <h2 id="tests" className="text-2xl font-bold text-indigo-900">
          Test reports and other references
        </h2>
      </div>
    </AuroraBackground>
  );
}

export default Safety;
