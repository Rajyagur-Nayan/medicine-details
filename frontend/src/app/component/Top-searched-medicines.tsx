// src/components/sections/top-searched-medicines.tsx

import { TopMedicineCard } from "./Top-medicine-card";

export function TopSearchedMedicines() {
  return (
    <section className="py-12 px-4 lg:px-8 dark:bg-gray-900/70 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Top searched medicines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
          <TopMedicineCard
            imageSrc="/img1.jpg"
            imageAlt="Red medicine pills spelling COVID"
            title="Aspirin"
            description="Pain reliever"
            price={10}
          />
          <TopMedicineCard
            imageSrc="/img1.jpg"
            imageAlt="Child hugging teddy bear near medicine"
            title="Amoxicillin"
            description="Antibiotic"
            price={15}
          />
          <TopMedicineCard
            imageSrc="/img1.jpg"
            imageAlt="Wristwatch showing heartbeat"
            title="Tylenol"
            description="Pain and fever relief"
            price={12}
          />
        </div>
      </div>
    </section>
  );
}
