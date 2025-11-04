'use client';

import { useRouter } from 'next/navigation';
import { useGlobalAudio } from '@/components/GlobalAudio';
import { useEffect, useState } from 'react';
import { Vortex } from '@/components/ui/Vortex';

/**
 * Page that appears on load -> loads sound and graphics.
 */

const LandingPage = () => {
  const router = useRouter();
  const { playAudio } = useGlobalAudio();
  const [showButtonArea, setShowButtonArea] = useState(false);
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowButtonArea(true);
      setShowVideo(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  const handleButtonClick = () => {
    playAudio();
    router.push('/start');
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-black">
      {showVideo && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <video
            autoPlay
            muted
            className="w-full h-full object-cover mix-blend-difference"
          >
            <source src="/FULL_CODE_02.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      {showButtonArea && (
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <Vortex
            backgroundColor="black"
            rangeY={800}
            particleCount={500}
            baseHue={120}
            className="w-full h-full"
          />
        </div>
      )}
      {showButtonArea && (
        <div
          className={`relative z-10 text-center border-4 border-white p-8 bg-opacity-70 bg-black transition-opacity duration-1000 ${
            showButtonArea ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className='text-xs pb-4'>Ensure you are using the latest browser version for the best performance.</h3>
          <p className="text-white text-xl mb-4">Click start to begin</p>
          <button
            className="px-4 py-2 border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
            onClick={handleButtonClick}
          >
            START
          </button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
