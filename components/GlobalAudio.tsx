"use client"
import { createContext, useContext, useEffect, useRef, ReactNode } from 'react';

interface GlobalAudioContextType {
  playAudio: () => void;
}

const GlobalAudioContext = createContext<GlobalAudioContextType | undefined>(undefined);

export const GlobalAudioProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/73bpm.mp3');
    audioRef.current.loop = true;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Audio playback failed:', error);
      });
    }
  };

  return (
    <GlobalAudioContext.Provider value={{ playAudio }}>
      {children}
    </GlobalAudioContext.Provider>
  );
};

export const useGlobalAudio = (): GlobalAudioContextType => {
  const context = useContext(GlobalAudioContext);
  if (!context) {
    throw new Error('useGlobalAudio must be used within a GlobalAudioProvider');
  }
  return context;
};

const GlobalAudio = () => {
  return null; // This component doesn't render anything visible
};

export default GlobalAudio;