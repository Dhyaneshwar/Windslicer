import React from "react";
import { AuroraBackground } from "../aceternityUi/aurora-background";
import {
  authorContent,
  documentLinks,
  header,
  introductionContent,
  kayakSafetyContent,
  primaryVsSecondaryBuoyancy,
  safetyImg1,
  safetyImg2,
  safetyVsPaddledPerformance,
  testCards,
  testsConclusion,
} from "../constant/safety";
import DisplayContent from "../lib/DisplayContent";
import { ExpandableCard } from "../aceternityUi/ExpandableCard";

function Safety() {
  return (
    <AuroraBackground childClassname="">
      <div className="max-md:text-xl text-5xl font-bold mt-10 mb-4 text-center text-shadow-lg">
        {header}
      </div>

      <div className="px-20">
        <DisplayContent content={introductionContent} />

        <div className="flex max-md:hidden gap-4 justify-center">
          <DisplayContent content={safetyImg1} />
          <DisplayContent content={safetyImg2} />
        </div>
        <br />

        <div className="max-md:block hidden">
          <DisplayContent content={safetyImg1} />
        </div>

        <div className="max-md:block hidden">
          <DisplayContent content={safetyImg2} />
        </div>

        <DisplayContent content={kayakSafetyContent} />

        <DisplayContent content={primaryVsSecondaryBuoyancy} />

        <DisplayContent content={safetyVsPaddledPerformance} />

        <DisplayContent content={documentLinks} />
      </div>
      <h2
        id="tests"
        className="text-center max-md:text-lg text-2xl font-bold text-indigo-900"
      >
        Test reports and other references
      </h2>

      <ExpandableCard cards={testCards} />

      <section className="px-20 text-slate-800">
        <p className="font-semibold text-indigo-900 text-justify max-md:text-sm text-xl mt-4 mb-8">
          {testsConclusion}
        </p>

        <DisplayContent content={authorContent} />
      </section>
    </AuroraBackground>
  );
}

export default Safety;
