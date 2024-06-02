"use client"
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { GlobalAudioProvider, useGlobalAudio } from '@/components/GlobalAudio';
import GlobalAudio from '@/components/GlobalAudio';

/**
 * Client layout component to add global audio (without reloading audio) to the application.
 */

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const pathname = usePathname();
  const { playAudio } = useGlobalAudio();

  useEffect(() => {
    // Prevent the audio from reloading on route changes
    const handleRouteChange = () => {
      setIsFirstRender(false);
    };

    handleRouteChange(); // Call it initially to handle the first render

    return () => {
      // Cleanup function if needed
    };
  }, [pathname]);

  // Check if the current route is '/shakespeare'
  const isShakespeareRoute = pathname === '/shakespeare';

  return (
    <GlobalAudioProvider>
      {!isShakespeareRoute && <GlobalAudio />}
      {children}
    </GlobalAudioProvider>
  );
}