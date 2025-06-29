import React from "react";

export default function DisplayContent({ content }) {
  return (
    <>
      <h2 className="max-md:text-lg text-2xl font-bold text-indigo-900">
        {content.heading}
      </h2>
      {content.paragraphs.map((para, index) => (
        <>
          {typeof para === "function" ? (
            <div key={index}>{para()}</div>
          ) : (
            <p key={index} className="text-justify max-md:text-sm text-xl">
              {para}
            </p>
          )}
          <br />
        </>
      ))}
    </>
  );
}
