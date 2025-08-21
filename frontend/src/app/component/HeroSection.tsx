// src/components/sections/hero-section.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative dark:bg-gray-900/70 w-full h-[400px] md:h-[500px] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <Image // Changed from Image to img
        src="/img1.jpg" // Placeholder for /img1.jpg
        alt="Background of human anatomy for medical identification"
        fill
        className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.6]" // Added absolute inset-0 for fill behavior
      />

      {/* Content Overlay */}
      <div className="relative z-10 p-4 max-w-lg mx-auto text-white space-y-6 md:space-y-8">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Quickly identify <br /> medicines
        </h1>
        <p className="text-base md:text-lg opacity-90">
          Get accurate information
        </p>
      </div>
    </section>
  );
}
