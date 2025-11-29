"use client";

import { useState } from "react";
import PricingGrid from "./PricingGrid";
import PricingSummary from "./PricingSummary";
import FollowersPreview from "./FollowersPreview";
import CustomerReviews from "./CustomerReviews";

export default function PricingSection() {
  const [selectedPrice, setSelectedPrice] = useState<number>(100);

  return (
    <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-7xl mx-auto" style={{ marginTop: "0px" }}>
      <div className="absolute -left-120 top-120 z-1 rounded-full w-96 h-96 bg-blue-600 opacity-80 blur-3xl" />

      {/* Pricing Grid */}
      <PricingGrid
        selectedPrice={selectedPrice}
        onPriceSelect={setSelectedPrice}
      />

      {/* Pricing Summary */}
      <PricingSummary />

      {/* Followers Preview Section */}
      <FollowersPreview />

      {/* Customer Reviews Section */}
      <CustomerReviews />
    </div>
  );
}
