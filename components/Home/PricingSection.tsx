"use client";

import { useState } from "react";
import PricingGrid from "./PricingGrid";
import PricingSummary from "./PricingSummary";
import FollowersPreview from "./FollowersPreview";
import CustomerReviews from "./CustomerReviews";

export default function PricingSection() {
  const [selectedPrice, setSelectedPrice] = useState<number>(100);

  return (
    <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-5xl mx-auto" style={{ marginTop: "0px" }}>
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
