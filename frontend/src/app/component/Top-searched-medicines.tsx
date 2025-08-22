// src/components/sections/top-searched-medicines.tsx

import { TopMedicineCard } from "./Top-medicine-card";

export function TopSearchedMedicines() {
  return (
    <section className="relative py-16 px-6 lg:px-10 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-emerald-600 to-green-400 bg-clip-text text-transparent drop-shadow-sm">
          🌿 Top Searched Medicines
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TopMedicineCard
            imageSrc="/img3.jpg"
            imageAlt="Red medicine pills spelling COVID"
            title="Aspirin"
            description="Pain reliever"
            price={10}
          />
          <TopMedicineCard
            imageSrc="/img4.jpeg"
            imageAlt="Child hugging teddy bear near medicine"
            title="Amoxicillin"
            description="Antibiotic"
            price={15}
          />
          <TopMedicineCard
            imageSrc="/img5.jpeg"
            imageAlt="Wristwatch showing heartbeat"
            title="Tylenol"
            description="Pain and fever relief"
            price={12}
          />
        </div>
      </div>

      {/* Decorative background accent */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-200/40 dark:bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-green-300/30 dark:bg-emerald-600/10 rounded-full blur-3xl" />
    </section>
  );
}
