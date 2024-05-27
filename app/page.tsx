import { SparklesCore } from "@/components/ui/Sparkles";
import Link from "next/link";
import ThreeButton from "@/components/ui/ThreeButton";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
      <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={15}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="text-4xl md:text-5xl lg:text-6xl">
          Jazz Cheema
          <br />
        </div>
        <p className="font-light text-xl md:text-2xl lg:text-3xl animate-flash-pulse">
          Software Engineer
        </p>

        <Link href="/about">
          <ThreeButton onClick={<></>} />
        </Link>
      </div>
    </main>
  );
}
