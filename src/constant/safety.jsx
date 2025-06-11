export const header = "Sea kayak safety performance";

export const introductionContent = {
  heading: "Introduction",
  paragraphs: [
    "The reports and other material listed here explore buoyancy design in kayaks used on the sea and open water along with the ability of the crew to control their craft after mishap. Much of this material pre-dates the internet and most have never been published in any other media and never collected together before. As kayaking on the sea becomes increasingly popular, this information is intended to increase awareness about the importance of buoyancy.  It also illustrates how basic design can be improved to increase the paddler's control. ",
  ],
  className: "md:col-span-4",
};

export const safetyImg1 = {
  heading: null,
  paragraphs: [
    () => (
      <div className="flex justify-end">
        <img src="./assets/safety/SternOnSeabed.jpg" className="rounded-2xl" />
      </div>
    ),
  ],
  className:
    "md:col-span-2 p-0 bg-transparent w-11/12 hover:shadow-none shadow-none border-none",
};

export const safetyImg2 = {
  heading: null,
  paragraphs: [
    () => (
      <div className="flex justify-start">
        <img src="./assets/safety/KayakSunk.jpg" className="rounded-2xl" />
      </div>
    ),
  ],
  className:
    "md:col-span-2 p-0 bg-transparent w-11/12 hover:shadow-none shadow-none border-none",
};

export const kayakSafetyContent = {
  heading:
    "Is your kayak capable of the above? Can it sink at one end if flooded? Can it sink altogether? Why?",
  paragraphs: [
    "In 1980 a new sea kayak (now not in production) was introduced to the UK market. It had solid foam buoyancy at each end, a Minimum Volume Cockpit of 95 litres volume and a confluent hull space separate from the cockpit.",
    "These three features confer a superior safety performance compared with conventional kayaks manufactured with bulkheads and no solid buoyancy that are commonly available up to the present in 2013. This safety performance follows some simple physics. It has been demonstrated by experimentation and several reported incidents tend to support the predicted outcome.",
    "During the 1980s and 1990s some key members of the UK kayak trade opposed the new design. As a result the advantages of the new buoyancy design were not promoted and test reports were not properly publicised.",
    () => (
      <p className="text-justify text-xl">
        The links{" "}
        <a href="#tests" className="text-blue-600 underline">
          below
        </a>{" "}
        lead to those test reports and others. In addition are included a simple
        kayak flooding test indicating ease of recovery from a capsize and kayak
        volume statistics compiled from a variety of sources.
      </p>
    ),
    "This collection of information concerns only recovery (self-rescue) by kayakers. Rescue by the assistance of outside agencies such as Coast Guard or lifeboats is not considered in the material here. The focus is on increasing self-reliance by improving both control and the recovery of control by better buoyancy design.",
    "Some other terms used in the following may be unfamiliar: primary and secondary buoyancy, paddled and safety performance.",
  ],
  className: "md:col-span-4",
};

export const primaryVsSecondaryBuoyancy = {
  heading: "Primary vs Secondary buoyancy",
  paragraphs: [
    `Primary Buoyancy is that which operates when the craft’s seating position (the non-buoyant part) is swamped through capsize or waves. Secondary Buoyancy is that which operates when the Primary Buoyancy is compromised by hull damage or malfunctioning hatches. In decked kayaks Primary Buoyancy should be a maximum and Secondary Buoyancy must be solid.`,
  ],
  className: "md:col-span-2",
};

export const safetyVsPaddledPerformance = {
  heading: "Safety vs Paddled performance",
  paragraphs: [
    `Performance of kayaks can be conceptually subdivided into paddled performance and safety performance. Paddled performance concerns how the craft behaves in waves, how fast the hull shape is for example. Safety performance is about how easily the craft can be recovered from mishap such as capsize or damage or other malfunction. There is some overlap, for example in respect of directional control, but the separation is a useful concept when considering recovery from mishap.`,
  ],
  className: "md:col-span-2",
};

export const documentLinks = {
  heading: "Document links",
  paragraphs: [
    () => (
      <p className="text-justify text-xl">
        Please note the links below are to PDF files, some of which are large.
        File size, numbers of pages and photographs are listed in each link. PDF
        files are best saved first then viewed in Adobe Reader, a free program (
        <a
          href="http://get.adobe.com/uk/reader/"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          http://get.adobe.com/uk/reader/
        </a>
        ). The{" "}
        <a href="#lamont" className="text-blue-600 underline">
          Lamont
        </a>{" "}
        and{" "}
        <a href="#winning" className="text-blue-600 underline">
          Winning
        </a>{" "}
        reports have many photographs that are internally linked to the text
        references. In Adobe Reader the relevant photograph can be viewed from
        the link in the text. A{" "}
        <span className="text-green-600 font-semibold">green</span> ‘return’
        button on the bottom menu bar will take the reader back to the same
        place in the text.
      </p>
    ),
  ],
  className: "md:col-span-4",
};
