"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background.js";
import { MovingBorderDemo } from "./moving-border.js";

export function AuroraBackgroundDemo() {
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
        className="relative flex flex-col gap-1 items-center justify-center px-2"
      >
        <div className="mt-10 text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 via-yellow-400 to-red-500 drop-shadow-lg text-center">
  Afshan Kiran
</div>



        <div className="text-5xl font-extralight md:text-4xl text-yellow-600 dark:text-yellow-600 py-4 drop-shadow-md">
          Artist
        </div>
        <MovingBorderDemo/>
      </motion.div>
    </AuroraBackground>
  );
}
