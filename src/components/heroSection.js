import React from "react";
import { BackgroundLines } from "../components/ui/background-lines.js";
import { MovingBorderDemo } from "./moving-border.js";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="p-0 flex items-center justify-center w-full flex-col px-4 min-h-screen">
      <h2 className="text-4xl sm:p-0 md:mt-0 sm:text-7xl bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white md:text-7xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Afshan Kiran
      </h2>
      <h2 className="text-3xl dark:to-white font-mono text-center">Painter</h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Get the best advices from our experts, including expert artists,
        painters, marathon enthusiasts and RDX, totally free.
      </p>
      <MovingBorderDemo/>
    </BackgroundLines>
  );
}
