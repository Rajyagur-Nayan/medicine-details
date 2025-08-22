"use client";
// src/components/sections/scan-for-free-section.tsx
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function ScanForFreeSection() {
  const [, setIsScanDialogOpen] = useState(false);

  return (
    <motion.section
      className="bg-blue-50 dark:bg-gray-900/70 py-12 px-4 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
        <motion.div
          className="flex flex-col space-y-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 leading-tight">
            Scan for free
          </h2>
          <p className="text-gray-700 dark:text-white text-lg">
            Limited time <span className="font-semibold">offe Free</span> per
            user
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/scan-medicineDialog"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 justify-center items-center flex rounded-md text-base font-semibold transition-colors duration-300"
            onClick={() => setIsScanDialogOpen(true)}
          >
            Start Scanning
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
