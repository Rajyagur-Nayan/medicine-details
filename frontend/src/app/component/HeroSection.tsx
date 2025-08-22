"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative dark:bg-gray-900/70 w-full h-[400px] md:h-[500px] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with slow zoom */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      >
        <Image
          src="/img1.jpg"
          alt="Background of human anatomy for medical identification"
          fill
          className="w-full h-full object-cover object-center brightness-[0.6]"
        />
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-10 p-4 max-w-lg mx-auto text-white space-y-6 md:space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-extrabold leading-tight"
        >
          Quickly identify <br /> medicines
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-base md:text-lg opacity-90"
        >
          Get accurate information
        </motion.p>
      </div>
    </section>
  );
}
