import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { NavbarDemo } from "@/components/NavBar";
import Link from "next/link";

/**
 * Contact page.
 */

export default function Contact() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <div className="mb-20">
        <NavbarDemo/>
        </div>

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 xs:top-40"
        fill="white"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10  w-full mb-24 pt-10 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        <span className="font-digital2">Jazz</span> <br /> is open to speak.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          I&apos;m always open to discuss new ideas and keep all channels of
          communication open. Please feel free to connect with me through any of
          the methods below.
        </p>
          <br />
          <br />
          <div className="flex space-x-6 items-center justify-center">
        <Link href="mailto:jaskamalc@gmail.com" className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded">
          Email
        </Link>
        <Link href="tel:+17146554069" className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded">
          Phone
        </Link>
        <Link href="https://www.linkedin.com/in/jazz-cheema-294797118" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded">
          LinkedIn
        </Link>
      </div>
      </div>
    </div>
  );
}
