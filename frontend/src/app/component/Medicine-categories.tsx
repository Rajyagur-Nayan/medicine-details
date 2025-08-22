"use client";

import {
  Brain,
  Heart,
  Pill,
  Syringe,
  Stethoscope,
  Droplet,
} from "lucide-react";
import { MedicineCategoryCard } from "./Medicine-category-card";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // delay between each card
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

export function MedicineCategories() {
  return (
    <section className="py-12 px-4 dark:bg-gray-900/70 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"
        >
          Medicine categories
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6"
        >
          <motion.div variants={itemVariants}>
            <MedicineCategoryCard icon={Pill} title="Pain Reliever" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <MedicineCategoryCard icon={Syringe} title="Antibiotics" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <MedicineCategoryCard icon={Stethoscope} title="Cold & Flu" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <MedicineCategoryCard icon={Heart} title="Heart Health" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <MedicineCategoryCard icon={Brain} title="Mental Health" isActive />
          </motion.div>
          <motion.div variants={itemVariants}>
            <MedicineCategoryCard icon={Droplet} title="Allergy Relief" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
