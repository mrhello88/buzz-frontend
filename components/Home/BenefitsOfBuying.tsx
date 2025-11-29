"use client";

import { useRef } from "react";
import Image from "next/image";
import FAQSection from "./FAQSection";

export default function BenefitsOfBuying() {
  const cardsScrollRef = useRef<HTMLDivElement>(null);

  const scrollCardsLeft = () => {
    if (cardsScrollRef.current) {
      cardsScrollRef.current.scrollBy({ left: -335, behavior: "smooth" });
    }
  };

  const scrollCardsRight = () => {
    if (cardsScrollRef.current) {
      cardsScrollRef.current.scrollBy({ left: 335, behavior: "smooth" });
    }
  };

  const benefits = [
    {
      id: 1,
      title: "Higher Visibility",
      description: "Instagram's algorithm favors the most popular accounts, giving them greater visibility across the platform. By gaining real followers with authentic profiles, you instantly boost your popularity, increase exposure, and attract new audiences who may have never discovered your content before.",
      icon: "/benefit-higher-visibility.svg",
    },
    {
      id: 2,
      title: "Strengthen Trust",
      description: "Having more followers instantly boosts your Instagram credibility. When new users discover your profile, they see your popularity as proof of quality and trust. A strong follower base shows that others value your content, encouraging even more people to follow and engage with your posts.",
      icon: "/benefit-higher-strength.svg",
    },
    {
      id: 3,
      title: "Get Real Followers",
      description: "As your followers increase, your posts reach more people who naturally want to follow you. With engaging, high-quality content, your audience will keep growing. Buying active followers is a quick and effective way to jumpstart your Instagram growth and boost organic engagement.",
      icon: "/benefit-higher-follower.svg",
    },
  ];

  return (
    <section className="relative w-full bg-black py-24 sm:py-32">
      <div className="absolute -right-90 top-200 z-1 rounded-full w-96 h-96 bg-blue-600 opacity-80 blur-3xl" />
      <div className="absolute -left-90 top-330 z-1 rounded-full w-96 h-96 bg-blue-600 opacity-80 blur-3xl" />

      <div className="flex flex-col items-center gap-[45px] w-full max-w-[1240px] mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-6 min-[600px]:gap-[30px] w-full max-w-[1240px]">
          {/* Heading */}
          <h2 className="font-inter font-semibold text-center capitalize text-[32px] min-[600px]:text-[48px] leading-[44px] min-[600px]:leading-[88px] text-white w-full max-w-[1267px]">
            Benefits of Buying{" "}
            <span
              className="bg-clip-text"
              style={{
                WebkitTextFillColor: "transparent",
                backgroundImage: "linear-gradient(90deg, #018DFF 48%, #00FFFF 85%)",
              }}
            >
              Instagram Followers
            </span>
          </h2>

          {/* Description */}
          <p className="font-inter font-normal text-center text-base min-[600px]:text-[18px] leading-7 min-[600px]:leading-8 text-[#99A1AF] w-full max-w-[1050px]">
            Buying Instagram followers can quickly boost your credibility and visibility, helping you attract real engagement and grow faster. A larger follower count builds trust, increases exposure, and makes your profile more appealing to brands, collaborators, and new audiences. With trusted providers like Eagle Likes, you can grow safely and effectively while keeping your account secure.
          </p>
        </div>

        {/* Benefits Cards Section */}
        <div className="flex flex-col items-start gap-[15.968px] min-[600px]:gap-5 w-full max-w-[1078px] relative">
          {/* Mobile: Horizontal Scroll Container */}
          <div
            ref={cardsScrollRef}
            className="flex gap-[15.968px] min-[600px]:hidden items-center w-full overflow-x-auto scrollbar-hide"
          >
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="relative shrink-0 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.15)] h-[285px] min-[600px]:h-[429px] rounded-[40px] w-[319.36px] shadow-[0px_0px_8px_rgba(0,0,0,0.1)]"
              >
                <div className="flex flex-col items-center py-[19.96px] min-[600px]:py-[25px] gap-[19.162px] min-[600px]:gap-6 mx-auto w-[260.278px] min-[600px]:w-full min-[600px]:px-4">
                  {/* Icon */}
                  <div className="flex items-center justify-center shrink-0 size-[68.662px] min-[600px]:size-[86px]">
                    {benefit.icon && (
                      <Image
                        src={benefit.icon}
                        alt={benefit.title}
                        width={86}
                        height={86}
                        className="object-contain w-full h-full"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-center gap-[22.355px] min-[600px]:gap-7 text-center w-full">
                    <h3 className="font-open-sans font-semibold text-center capitalize text-[20.758px] min-[600px]:text-[26px] leading-[27.944px] min-[600px]:leading-[35px] text-white w-full">
                      {benefit.title}
                    </h3>
                    <p className="font-open-sans font-normal text-center text-[11.976px] min-[600px]:text-[15px] leading-[20.785px] min-[600px]:leading-[26.03px] text-[#99A1AF] w-full">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Wrap Layout */}
          <div className="hidden min-[600px]:flex flex-row items-center flex-wrap justify-center gap-5 w-full">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="relative shrink-0 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.15)] h-[429px] rounded-[40px] w-full min-[1127px]:w-[346px] shadow-[0px_0px_8px_rgba(0,0,0,0.1)]"
              >
                <div className="flex flex-col items-center py-[25px] gap-6 mx-auto w-full px-4">
                  {/* Icon */}
                  <div className="flex items-center justify-center shrink-0 size-[86px]">
                    {benefit.icon && (
                      <Image
                        src={benefit.icon}
                        alt={benefit.title}
                        width={86}
                        height={86}
                        className="object-contain w-full h-full"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-center gap-7 text-center w-full">
                    <h3 className="font-open-sans font-semibold text-center capitalize text-[26px] leading-[35px] text-white w-full">
                      {benefit.title}
                    </h3>
                    <p className="font-open-sans font-normal text-center text-[15px] leading-[26.03px] text-[#99A1AF] w-full max-w-[302px]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex gap-[6.643px] items-center justify-center min-[600px]:hidden mt-4 w-full">
            <button
              onClick={scrollCardsLeft}
              className="flex items-center justify-center relative shrink-0 size-[27.679px] bg-black border border-[rgba(255,255,255,0.4)] rounded-full"
              aria-label="Scroll left"
            >
              <svg width="14" height="17" viewBox="0 0 14 17" fill="none">
                <path d="M5 8.5L9 4.5L9 12.5L5 8.5Z" fill="rgba(255,255,255,0.4)" />
              </svg>
            </button>
            <button
              onClick={scrollCardsRight}
              className="flex items-center justify-center relative shrink-0 size-[27.679px] bg-[#018DFF] rounded-full"
              aria-label="Scroll right"
            >
              <svg width="14" height="17" viewBox="0 0 14 17" fill="none">
                <path d="M9 8.5L5 4.5L5 12.5L9 8.5Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-[50px] min-[600px]:mt-[202px] w-full">
          <FAQSection />
        </div>
      </div>
    </section>
  );
}
