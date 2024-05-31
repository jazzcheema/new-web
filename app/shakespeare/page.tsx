"use client";
import React, { useRef, useEffect } from "react";
import Sonnet18 from "@/components/Sonnet18";
import { SparklesCore } from "@/components/ui/Sparkles";

const Shakespeare = () => {



  return (
    <div className="relative w-full h-full overflow-x-hidden">
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.1}
          maxSize={0.3}
          particleDensity={500}
          className="w-full h-full"
          particleColor="#39FF14"
        />
      </div>
      <div className="relative z-10">
        <Sonnet18 />
      </div>
    </div>
  );
};

export default Shakespeare;
