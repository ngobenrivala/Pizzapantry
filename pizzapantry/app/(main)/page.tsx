import React from 'react'
// Make sure the path is correct
// Make sure the path is correct
// If the Hero component is in 'app/components/Hero.tsx', use the following import:
import Hero from "../../components/Hero";
// Otherwise, update the path to match the actual location of the Hero component.

export default function HomePage() {
  return (
    <>
      <div className="text-2xl font-semibold text-gray-800 mb-4">
        HomePage
      </div>
      <main>
        <Hero />
      </main>
    </>
  );
}
