// src/components/layout/footer.tsx
import Link from "next/link";
import { Tablet } from "lucide-react"; // Re-using Tablet icon for logo

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4 lg:px-8 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Tablet className="h-5 w-5 text-blue-400" />
          <span className="font-semibold text-white">MediLink</span>
        </div>
        <p className="text-center sm:text-left">
          &copy; 2025 MediLink. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
