// src/components/medicine-category-card.tsx
import { type LucideIcon } from "lucide-react"; // Import LucideIcon type for props

interface MedicineCategoryCardProps {
  icon: LucideIcon; // Accepts a Lucide React icon component
  title: string;
  isActive?: boolean;
}

export function MedicineCategoryCard({
  icon: Icon,
  title,
  isActive = false,
}: MedicineCategoryCardProps) {
  return (
    <div
      className={`flex flex-col  items-center justify-center p-6 sm:p-8 border rounded-lg text-center cursor-pointer transition-all duration-300
        ${
          isActive
            ? "bg-blue-600 border-blue-600 text-white shadow-lg"
            : "bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200"
        }
      `}
    >
      <Icon
        className={`h-12 w-12 sm:h-16 sm:w-16 mb-3 ${
          isActive ? "text-white" : "text-gray-600"
        }`}
      />
      <span
        className={`text-sm sm:text-base font-medium ${
          isActive ? "text-white" : "text-gray-800"
        }`}
      >
        {title}
      </span>
    </div>
  );
}
