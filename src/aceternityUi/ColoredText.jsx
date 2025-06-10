"use client";
import React from "react";
import { ColourfulText } from "./colourful-text";
import { motion } from "motion/react";

export function ColoredText({ text }) {
  return (
    <div className="w-full flex items-center justify-center relative overflow-hidden">
      <h1 className="text-2xl md:text-7xl font-bold text-center text-white relative z-2 font-sans">
        <ColourfulText text={text} /> <br />
      </h1>
    </div>
  );
}
