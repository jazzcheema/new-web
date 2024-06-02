"use client";

import React from 'react';
import { SparklesCore } from '@/components/ui/Sparkles';
import { NavbarDemo } from '@/components/NavBar';

/**
 * About page. Includes statement.
 */

const Page = () => {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-8">
        <div className="mb-10">
        <NavbarDemo/>
        </div>
      <header className="text-center">
        <h1 className="text-4xl font-bold animate-slow-glow font-digital1">filmmaker turned software engineer.</h1>
        <div className="relative w-full flex justify-center mt-1">
          <div className="relative w-full h-40 mask-container">
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={300}
              className="h-20"
              particleColor="#FFFFFF"
              speed={1000}
            />
          </div>
        </div>
      </header>
      <section className="flex flex-col md:flex-row md:justify-around w-full max-w-5xl">
        <div className="flex-1 p-4">
          <h2 className="text-lg font-light mb-4">who am I?</h2>
          <p>
            southern california-born software engineer, with previous professional experience as a video producer, director, and editor. with a keen eye for visual storytelling, I am able to conceptualize and execute high-quality projects from start to finish. proficient in various software and possess excellent communication skills to collaborate with clients and team members. I adapt my approach to meet unique needs of each project.
          </p>
        </div>
        <div className="flex-1 p-4">
          <h2 className="text-lg font-light mb-4">why programming?</h2>
          <p>
            programming feels immediate & concrete, and has direct effect in the world. I'm attracted to working on impactful projects that stimulate the user and encourage creative spirit. <br /><br />I love having the ability to deeply understand, manipulate, and create systems of technologies that we are able to use in our everyday lives.
          </p>
        </div>
        <div className="flex-1 p-4">
          <h2 className="text-lg font-light mb-4">what I'm looking for?</h2>
          <p>
            I'm most interested in working on meaningful projects, with team members that are willing to push one another to elevate our experiences and reach beyond the goals of our projects. I'm always open to listening to new and exciting ideas. <br /> <br />I embrace experimentation and am eager to explore new possibilities. my fearlessness in trying unfamiliar things consistently leads to the best results.
          </p>
        </div>
      </section>
      <style jsx>{`
        .mask-container {
          mask-image: linear-gradient(to right, transparent, black 60%, black 60%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 60%, black 60%, transparent);
          overflow: hidden;
        }
      `}</style>
    </main>
  );
};

export default Page;