"use client";
import Link from "next/link";
import { Tablet } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4 lg:px-8 text-sm">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Tablet className="h-5 w-5 text-blue-400" />
          <span className="font-semibold text-white">MediLink</span>
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="text-center sm:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          &copy; 2025 MediLink. All rights reserved.
        </motion.p>

        {/* Links */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Link href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </motion.div>
      </motion.div>
    </footer>
  );
}
