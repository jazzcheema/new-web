import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';
import { GlobalAudioProvider } from '@/components/GlobalAudio';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Jazz Cheema',
  description: 'Software Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <GlobalAudioProvider>
          <ClientLayout>{children}</ClientLayout>
        </GlobalAudioProvider>
      </body>
    </html>
  );
}