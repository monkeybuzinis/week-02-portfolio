"use client";

import { useState } from "react";
import Image from "next/image";

type Tab = { key: string; label: string };

const tabs: Tab[] = [
  { key: "painting", label: "Painting" },
  { key: "outdoor-sports", label: "Outdoor Sports" },
  { key: "nature", label: "Nature" },
];

type Photo = { src: string; alt: string };

const photos: Record<string, Photo[]> = {
  painting: [
    { src: "/interests/painting/1.jpg", alt: "Painting 1" },
    { src: "/interests/painting/2.jpg", alt: "Painting 2" },
    { src: "/interests/painting/3.jpg", alt: "Painting 3" },
    
  ],
  "outdoor-sports": [
    { src: "/interests/outdoor-sports/1.jpg", alt: "Outdoor sports 1" },
    { src: "/interests/outdoor-sports/2.jpg", alt: "Outdoor sports 2" },
    { src: "/interests/outdoor-sports/3.jpeg", alt: "Outdoor sports 3" },

  ],
  nature: [
    { src: "/interests/nature/1.jpeg", alt: "Nature 1" },
    { src: "/interests/nature/2.jpeg", alt: "Nature 2" },
    
  ],
};

export default function InterestsTabs({
  initialTab,
}: {
  initialTab: string;
}) {
  const validKey = tabs.some((t) => t.key === initialTab)
    ? initialTab
    : "painting";
  const [activeTab, setActiveTab] = useState(validKey);

  const activeLabel = tabs.find((t) => t.key === activeTab)?.label ?? "";
  const activePhotos = photos[activeTab] ?? [];

  return (
    <div className="flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-white mb-2">Interests</h1>
        <p className="text-slate-400">
          A glimpse into life outside of code.
        </p>
      </section>

      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={
              activeTab === tab.key
                ? "px-4 py-2 rounded-full text-sm font-medium bg-teal-500 text-slate-900"
                : "px-4 py-2 rounded-full text-sm font-medium bg-slate-800 text-slate-300 border border-slate-700 hover:border-teal-500 hover:text-teal-400 transition-colors"
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      <section aria-label={activeLabel}>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {activePhotos.map((photo) => (
            <li key={photo.src}>
              <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-800">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
