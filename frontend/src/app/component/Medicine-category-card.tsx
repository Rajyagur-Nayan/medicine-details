"use client";

import { type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface MedicineCategoryCardProps {
  icon: LucideIcon;
  title: string;
  isActive?: boolean;
}

export function MedicineCategoryCard({
  icon: Icon,
  title,
  isActive = false,
}: MedicineCategoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex flex-col items-center justify-center p-6 sm:p-8 border rounded-lg text-center cursor-pointer transition-colors duration-300
        ${
          isActive
            ? "bg-blue-600 border-blue-600 text-white shadow-lg"
            : "bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200"
        }
      `}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Icon
          className={`h-12 w-12 sm:h-16 sm:w-16 mb-3 ${
            isActive ? "text-white" : "text-gray-600"
          }`}
        />
      </motion.div>
      <span
        className={`text-sm sm:text-base font-medium ${
          isActive ? "text-white" : "text-gray-800"
        }`}
      >
        {title}
      </span>
    </motion.div>
  );
}
