// src/components/top-medicine-card.tsx
import Image from "next/image";

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
  price,
}: TopMedicineCardProps) {
  return (
    <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-md bg-white">
      {/* Image */}
      <div className="relative h-3/4 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center"
        />
      </div>

      {/* Bottom Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-blue-500 text-white h-1/4 flex flex-col justify-center rounded-b-lg">
        <p className="text-xs tracking-wide uppercase opacity-80">
          Pain Relievers
        </p>
        <h3 className="text-lg font-bold truncate">{title}</h3>
        <p className="text-sm font-medium mt-1">from ${price.toFixed(2)}</p>
      </div>
    </div>
  );
}
