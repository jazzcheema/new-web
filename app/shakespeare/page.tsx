"use client";
import React, { useRef, useEffect } from "react";
import Sonnet18 from "@/components/Sonnet18";
import { SparklesCore } from "@/components/ui/Sparkles";

const Shakespeare = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Ensure the audio plays once enough data is loaded
    const handleCanPlayThrough = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("Audio play error:", error);
        });
      }
    };

    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener("canplaythrough", handleCanPlayThrough);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener(
          "canplaythrough",
          handleCanPlayThrough
        );
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-x-hidden">
      <audio ref={audioRef} autoPlay loop>
        <source src="/shakespeare.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
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
