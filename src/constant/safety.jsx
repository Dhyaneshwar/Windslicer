export const header = "Sea kayak safety performance";

export const introductionContent = {
  heading: "Introduction",
  paragraphs: [
    "The reports and other material listed here explore buoyancy design in kayaks used on the sea and open water along with the ability of the crew to control their craft after mishap. Much of this material pre-dates the internet and most have never been published in any other media and never collected together before. As kayaking on the sea becomes increasingly popular, this information is intended to increase awareness about the importance of buoyancy.  It also illustrates how basic design can be improved to increase the paddler's control. ",
  ],
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
};

export const primaryVsSecondaryBuoyancy = {
  heading: "Primary vs Secondary buoyancy",
  paragraphs: [
    `Primary Buoyancy is that which operates when the craft’s seating position (the non-buoyant part) is swamped through capsize or waves. Secondary Buoyancy is that which operates when the Primary Buoyancy is compromised by hull damage or malfunctioning hatches. In decked kayaks Primary Buoyancy should be a maximum and Secondary Buoyancy must be solid.`,
  ],
};

export const safetyVsPaddledPerformance = {
  heading: "Safety vs Paddled performance",
  paragraphs: [
    `Performance of kayaks can be conceptually subdivided into paddled performance and safety performance. Paddled performance concerns how the craft behaves in waves, how fast the hull shape is for example. Safety performance is about how easily the craft can be recovered from mishap such as capsize or damage or other malfunction. There is some overlap, for example in respect of directional control, but the separation is a useful concept when considering recovery from mishap.`,
  ],
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
};

export const testCards = [
  {
    title:
      "2012—Attitudes to buoyancy: a comment on complacency, copyright P Lamont",
    description: "[PDF 394KB, 4 text pages]",
    ctaLink: "./pdf/safety/Attitudes_to_buoyancy.pdf",
    content: () => {
      return (
        <p>
          Prevalent attitudes to safety in the canoeing and kayak world rightly
          focus on training and personal equipment. Little seems to have been
          written about the possibility of improvements in the buoyancy design
          of the basic craft itself. This article challenges attitudes to the
          subject with special reference to published accounts of kayak
          incidents, in particular{" "}
          <em>
            Deep Trouble: Stories and Their Lessons from Sea Kayaker Magazine.
          </em>
        </p>
      );
    },
  },
  {
    title:
      "Lamont, P, (1989) Experimental Progressive Flooding of Two Sea Kayaks",
    description: "[PDF 17.9MB, 46 pages; 28 colour photos]",
    ctaLink: "./pdf/safety/ACAS template.pdf",
    content: () => {
      return (
        <p>
          This report was submitted to the Director of Coaching, British Canoe
          Union in September 1989 but remains unpublished. The report covers the
          progressive flooding of two kayaks in flat water: one with two
          bulkheads and no secondary buoyancy and another with solid secondary
          end buoyancy, a confluent (continuous) hull space and minimum volume
          cockpit (MVC). Internal links between text and photographs can be used
          when viewed in{" "}
          <a
            href="http://get.adobe.com/uk/reader/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 underline"
          >
            Adobe Reader
          </a>
          .
        </p>
      );
    },
  },
  {
    title:
      "Winning, DR, OBE, (1990), Sea Tiger Report: Report on comparative tests of “Sea Tiger” sea kayak and other sea kayaks on behalf of the British Canoe Union",
    description: "[PDF 10.2MB, 109 pages; 81 colour photos]",
    ctaLink: "./pdf/safety/Sea Tiger Report.pdf",
    content: () => (
      <p>
        This report was submitted to Director of Coaching, British Canoe Union,
        October 1990, but remained unpublished (although photocopies could be
        obtained, on request, at least up to 2007). The PDF version here has
        been transcribed from the original handwritten version and reformatted.
        Units of measurement have been converted to SI: litres and kilograms.
        The report and testing was not supported by the manufacturing trade
        except by Sea Tiger UK. No magazine, nor the British Canoe Union can
        publish this report.
      </p>
    ),
  },
  {
    title: "The original Sea Tiger report",
    description: "[PDF 15.2MB, 85 pages; 81 colour photographs]",
    ctaLink: "./pdf/safety/Sea Tiger Report Original.pdf",
    content: () => (
      <p>
        The original Sea Tiger report as submitted to the British Canoe Union,
        October 1990.
        <strong> NOTE</strong> – this is a scan of the report and is a large
        file.
      </p>
    ),
  },
  {
    title:
      "Padwick, N, & Atkinson, M, (1988), Incident report and results of subsequent investigations,",
    description: "[PDF 732KB, 13 pages B&W scanned document]",
    ctaLink: "./pdf/safety/Padwick+Atkinson_1988.pdf",
    content: () => (
      <p>
        Circulated privately by Sea Tiger UK, this investigation was carried out
        after a seminal incident in 1988 where a paddler in a leaking kayak
        became effectively immobile in large waves and high wind off Anglesey,
        Wales. The weight of water in the kayak made progress impossible and the
        paddler was eventually rescued by a helicopter. As a result of the
        incident a method of emptying hull water from the confluent hull kayak
        was discovered and this became known as the ‘Hatches off Rescue‘. This
        method was later validated by Winning and included in his{" "}
        <a
          href="./pdf/safety/Sea Tiger Report.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-700 underline"
        >
          1990 report (p16)
        </a>
        . No such method exists for emptying water from the compartment of a
        conventional bulkhead kayak with no solid, secondary buoyancy.
      </p>
    ),
  },
  {
    title: "Padwick, N, (1986), The Sea Tiger Handbook",
    description: "[PDF 0.75MB, 16 pages, B&W scanned document]",
    ctaLink: "./pdf/safety/SeaTiger_manual_c1986.pdf",
    content: () => (
      <p>
        This PDF is a scan of the Sea Tiger handbook supplied with each new Sea
        Tiger kayak in which the recovery capabilities of the kayak are
        described (the Sea Tiger is no longer in production). No comparable user
        manual was ever supplied with any other UK kayak as far as we are aware.
      </p>
    ),
  },
  {
    title: "Carter, PJ, (1991), A kayak flooding experiment",
    description: "[PDF 3.1MB, 19 pages; 13 pages of B&W photos]",
    ctaLink: "./pdf/safety/A Kayak Flooding Experiment.pdf",
    content: () => (
      <p>
        Following the Lamont and Winning reports, Peter Carter duplicated some
        of the tests and, importantly, extended the testing to a comparative
        paddled performance over a triangular course in moderate wind with a
        simulated hull leak. These experiments demonstrate the advantages of a
        confluent hull.
        <br />
        Author’s Web version:{" "}
        <a
          href="http://www.users.on.net/%7Epcarter/flooding.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline"
        >
          A kayak flooding experiment
        </a>
      </p>
    ),
  },
  {
    title: "Gronseth, G, (1993), Saved by a drysuit",
    description: "[PDF 325kb, 2 pages of text]",
    ctaLink: "./pdf/safety/Minimum_Volume_Cockpit_kayak_incidents.pdf",
    content: () => (
      <p>
        The paddler in this story in{" "}
        <a
          href="https://www.seakayakermag.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline"
        >
          Sea Kayaker magazine
        </a>
        , Summer 1993, Vol 10, No 1, pp34–37, was using a confluent hull kayak
        that remained controllable with a hull leak for longer than a bulkhead
        kayak would have been. This had an important bearing on the outcome of
        the paddler’s ordeal—it was jointly responsible, with his drysuit, for
        saving his life—but was a vital point not credited in this account in
        Sea Kayaker.
        <br />
        The article cannot be reproduced here for copyright reasons but is
        outlined in the second example of an incident with an MVC cockpit – see{" "}
        <a
          href="./pdf/safety/Minimum_Volume_Cockpit_kayak_incidents.pdf"
          target="_blank"
          className="text-purple-700 underline"
        >
          Minimum Volume Cockpit kayaks - 4 Incidents
        </a>
        .
      </p>
    ),
  },
  {
    title: "Carter, PJ, and Lamont, P, (2004), Cockpit intake test: CIT volume",
    description: "[pdf file 225KB, 5 pages with small colour photos]",
    ctaLink: "./pdf/safety/CIT_measure.pdf",
    content: () => (
      <p>
        The CIT measurement is an easy test for any paddler with a bucket and
        sponge to carry out. It provides an indication of the ease of recovery
        of a decked kayak and is strongly recommended. The lower the measure the
        better: below 10 litres is recommended.
        <br />
        Coauthor’s Web version:{" "}
        <a
          href="http://www.users.on.net/%7Epcarter/cit.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline"
        >
          Cockpit intake test
        </a>
      </p>
    ),
  },
  {
    title: "Minimum Volume Cockpit kayaks - 4 Incidents",
    description: "[pdf file 205KB, 2 pages of text]",
    ctaLink: "./pdf/safety/Minimum_Volume_Cockpit_kayak_incidents.pdf",
    content: () => (
      <p>
        This compilation summarizes four incidents involving kayaks with minimum
        volume cockpits (= low CIT measurement). 1) A hull leak off Anglesey,
        Wales in 1988 in difficult conditions; 2) A hull leak followed by a long
        swim; 3) A crossing of the Minch, Scotland with a hull leak; 4) A
        capsize and swim towing the kayak.
      </p>
    ),
  },
  {
    title: "Lamont, P, (2007), Commercially manufactured volumes",
    description: "[PDF 83KB, 3 pages of text]",
    ctaLink: "./pdf/safety/volumes.xls",
    content: () => (
      <p>
        This is a table of kayak volumes collated from various sources (gathered
        in 2007). It illustrates why paddlers may encounter problems after
        capsize and exit. Note that, by proportion, a greater volume of a double
        kayak is non-buoyant compared to a single.
      </p>
    ),
  },
  {
    title: "State of the Art?",
    description: "[PDF 123KB, 1 page text]",
    ctaLink: "./pdf/safety/Lamont_2007_Volume_Table.pdf",
    content: () => (
      <p>
        This one page document was prepared in 2000 for a committee as a
        stimulant for discussion. How do the questions apply to your kayak? Is
        your kayak the State of whose Art?
      </p>
    ),
  },
];

export const testsConclusion = `Compilation of all these data, reports and tests owes much to Peter Carter and Alan Byde. All of this started in the first place with the design and development of the "pod" or integrated cockpit for kayaks by Alan Byde in the late 1970’s.`;

export const authorContent = {
  heading: "About the authors",
  paragraphs: [
    () => (
      <ul className="space-y-3 text-justify">
        <li className="text-justify text-xl">
          <strong>Peter Lamont:</strong> 44 years paddling, including 15 years
          instructing beginners and novices on multiday expeditions in the
          waters around the Corryvreckan, Scotland
        </li>
        <li className="text-justify text-xl">
          <strong>Peter Carter:</strong> 40 years paddling and instructing and a
          member of the Australian Canoeing Education and Safety Technical
          Committee (
          <a
            href="http://www.users.on.net/~pcarter/seakayak.html"
            className="text-blue-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            link
          </a>
          ).
        </li>
        <li className="text-justify text-xl">
          <strong>Alan Byde:</strong> now retired, was one of the first senior
          BCU Coaches in the early 1960s and has written several books on
          canoeing and canoe construction
        </li>
      </ul>
    ),
  ],
};
