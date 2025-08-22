// src/components/top-medicine-card.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface TopMedicineCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  price: number;
}

export function TopMedicineCard({
  imageSrc,
  imageAlt,
  title,
  description,
  price,
}: TopMedicineCardProps) {
  return (
    <motion.div
      className="relative w-full h-96 rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-800"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image */}
      <div className="relative h-2/3 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center"
        />
      </div>

      {/* Content Section */}
      <div className="relative h-1/3 w-full p-4 flex flex-col justify-between bg-gradient-to-t from-blue-600 to-blue-500 text-white">
        <div>
          <h3 className="text-lg font-bold truncate">{title}</h3>
          <p className="text-sm opacity-90 mt-1 line-clamp-2">{description}</p>
        </div>
        <div className="mt-3">
          <span className="inline-block bg-white text-blue-600 font-semibold text-sm px-3 py-1 rounded-full shadow">
            ${price.toFixed(2)}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
