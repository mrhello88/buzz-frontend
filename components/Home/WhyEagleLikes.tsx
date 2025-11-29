"use client";

import { useRef } from "react";
import Image from "next/image";

export default function WhyEagleLikes() {
  const cardsScrollRef = useRef<HTMLDivElement>(null);
  const logosScrollRef = useRef<HTMLDivElement>(null);

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
  const features = [
    {
      id: 1,
      title: "Affordable Growth",
      description: "At Eagle Likes, we believe social media growth should be for everyone. That's why we offer affordable packages for individuals, influencers, and businesses alike.",
      iconColor: "#FDC700",
      iconBg: "rgba(253, 199, 0, 0.1)",
      icon: "/eagle-like-star-icon.svg",
    },
    {
      id: 2,
      title: "Quality That Speaks",
      description: "While affordability matters, quality is our top priority. At Eagle Likes, we never compromise on service standards and every like, follower, and view is delivered with care to ensure authentic, natural growth.",
      iconColor: "#FB64B6",
      iconBg: "rgba(251, 100, 182, 0.1)",
      icon: "/eagle-like-heart-icon.svg",
    },
    {
      id: 3,
      title: "Speed You Can Trust",
      description: "In today's fast-paced digital world, timing is key. Eagle Likes ensures fast, reliable delivery and whether you need instant likes or steady, natural growth for your profile.",
      iconColor: "#51A2FF",
      iconBg: "rgba(81, 162, 255, 0.1)",
      icon: "/eagle-like-speed-icon.svg",
    },
    {
      id: 4,
      title: "Safe and Secure Services",
      description: "Trust is at the heart of everything we do. We use safe, proven methods to protect your account and ensure natural, risk-free growth so you can grow with confidence.",
      iconColor: "#00C950",
      iconBg: "rgba(0, 201, 80, 0.1)",
      icon: "/eagle-like-safe-icon.svg",
    },
    {
      id: 5,
      title: "Customer-Centric Support",
      description: "We understand that every customer is unique. That's why our dedicated support team is always ready to assist, guide, and resolve your queries from choosing the right package to ensuring smooth, hassle-free delivery.",
      iconColor: "#FF0000",
      iconBg: "rgba(255, 0, 0, 0.1)",
      icon: "/eagle-like-support-icon.svg",
    },
    {
      id: 6,
      title: "A Brand You Can Rely On",
      description: "Eagle Likes is more than just a service it's your trusted partner in social media growth. Join the thousands of satisfied customers who've chosen us to elevate their online presence with confidence.",
      iconColor: "#C27AFF",
      iconBg: "rgba(194, 122, 255, 0.1)",
      icon: "/eagle-like-polygon-icon.svg",
    },
  ];

  const logos = [
    { name: "Yahoo", src: "/yahoo.svg", width: 132, height: 31 },
    { name: "FOX", src: "/fox.svg", width: 64, height: 31 },
    { name: "MarketWatch", src: "/mark-watch.svg", width: 161, height: 32 },
    { name: "Tripadvisor", src: "/trip-advisor.svg", width: 149, height: 30 },
    { name: "Digital Journal", src: "/digital-journal.svg", width: 139, height: 58 },
    { name: "NBC", src: "/nbc.svg", width: 64, height: 42 },
    { name: "USA TODAY", src: "/usa-today.svg", width: 112, height: 43 },
  ];

  return (
    <div className="relative w-full bg-black">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
      <div className="absolute -right-100 top-120 z-1 rounded-full w-96 h-96 bg-blue-600 opacity-80 blur-3xl" />

        {/* Eagle Likes is seen on... Section */}
        <div className="flex flex-col items-center mb-16" style={{ gap: "49px" }}>
          <span
            className="font-open-sans font-semibold text-center"
            style={{
              fontSize: "18px",
              lineHeight: "18px",
              letterSpacing: "0px",
              textAlign: "center",
              color: "#99A1AF",
            }}
          >
            Eagle Likes is seen on...
          </span>
          <div 
            ref={logosScrollRef}
            className="flex flex-row items-center justify-center gap-[40.96px] w-full lg:w-[1065px] max-w-full overflow-x-auto scrollbar-hide"
            style={{ flexWrap: "nowrap" }}
          >
            {logos.map((logo, index) => (
              <div key={index} className="shrink-0" style={{ width: `${logo.width}px`, height: `${logo.height}px` }}>
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Why Eagle Likes? Section */}
        <div className="flex flex-col items-center gap-[30px] min-[600px]:gap-[50px] w-full min-[600px]:w-[1078px] max-w-full mx-auto">
          {/* Heading */}
          <div className="flex flex-col font-open-sans font-semibold min-[600px]:h-[44px] h-[24px] justify-center leading-0 shrink-0 text-center text-white w-full">
            <h2 className="font-inter font-bold min-[600px]:leading-[100px] min-[600px]:text-[48px] leading-[88px] text-[30px] whitespace-pre-wrap capitalize">
              <span className="text-white">why </span>
              <span
                className="bg-clip-text"
                style={{ 
                  WebkitTextFillColor: "transparent",
                  backgroundImage: "linear-gradient(90deg, #018DFF 48%, #00FFFF 85%)"
                }}
              >
                Eagle Likes?
              </span>
            </h2>
          </div>

          {/* Features Grid - Mobile: Horizontal Scroll, Desktop: Wrap */}
          <div className="flex flex-col items-start gap-[15.968px] min-[600px]:gap-[20px] w-full min-[600px]:w-[1078px] max-w-full relative">
            {/* Mobile: Horizontal Scroll Container */}
            <div 
              ref={cardsScrollRef}
              className="flex gap-[15.968px] min-[600px]:hidden items-center w-full overflow-x-auto scrollbar-hide"
            >
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="relative shrink-0 bg-[rgba(255,255,255,0.05)] border-[0.798px] border-[rgba(255,255,255,0.15)] border-solid h-[285.029px] rounded-[40px] w-[319.36px] shadow-[0px_0px_6.387px_0px_rgba(0,0,0,0.1)]"
                >
                  <div className="box-border flex flex-col gap-[19.162px] items-center mx-auto mt-[19.96px] w-[260.278px]">
                    {/* Icon */}
                    <div className="relative shrink-0 size-[68.662px]">
                      {feature.icon && (
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={69}
                          height={69}
                          className="object-contain w-full h-full"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-[22.355px] items-center leading-0 not-italic relative shrink-0 text-center w-full">
                      <h3 className="capitalize flex flex-col font-open-sans font-semibold justify-center relative shrink-0 text-[20.758px] text-white">
                        <span className="leading-[27.944px] whitespace-pre-wrap">{feature.title}</span>
                      </h3>
                      <p className="flex flex-col font-open-sans font-normal justify-center relative shrink-0 text-[#99a1af] text-[11.976px] w-full">
                        <span className="leading-[20.785px] whitespace-pre-wrap">{feature.description}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Wrap Layout */}
            <div className="hidden min-[600px]:flex flex-col items-start gap-[20px] w-full">
              {/* Row 1 */}
              <div className="flex gap-[20px] items-center w-full flex-wrap">
                {features.slice(0, 3).map((feature) => (
                  <div
                    key={feature.id}
                    className="relative shrink-0 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.15)] border-solid h-[357px] rounded-[40px] w-full min-[1127px]:w-[346px]"
                  >
                    <div className="box-border flex flex-col gap-[24px] items-center mx-auto mt-[26px] w-full px-4">
                      {/* Icon */}
                      <div className="relative shrink-0 size-[86px]">
                        {feature.icon && (
                          <Image
                            src={feature.icon}
                            alt={feature.title}
                            width={86}
                            height={86}
                            className="object-contain w-full h-full"
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-[28px] items-center leading-0 not-italic relative shrink-0 text-center w-full">
                        <h3 className="capitalize flex flex-col font-inter font-semibold justify-center relative shrink-0 text-[23px] text-white">
                          <span className="leading-[35px] whitespace-pre-wrap">{feature.title}</span>
                        </h3>
                        <p className="flex flex-col font-inter font-normal justify-center relative shrink-0 text-[#99a1af] text-[15px] w-full">
                          <span className="leading-[26.034px] whitespace-pre-wrap">{feature.description}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2 */}
              <div className="flex gap-[20px] items-center w-full flex-wrap">
                {features.slice(3, 6).map((feature) => (
                  <div
                    key={feature.id}
                    className="relative shrink-0 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.15)] border-solid h-[357px] rounded-[40px] w-full min-[1127px]:w-[346px]"
                  >
                    <div className="box-border flex flex-col gap-[24px] items-center mx-auto mt-[25px] w-full px-4">
                      {/* Icon */}
                      <div className="relative shrink-0 size-[86px]">
                        {feature.icon && (
                          <Image
                            src={feature.icon}
                            alt={feature.title}
                            width={86}
                            height={86}
                            className="object-contain w-full h-full"
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-[28px] items-center leading-0 not-italic relative shrink-0 text-center w-full">
                        <h3 className="capitalize flex flex-col font-inter font-semibold justify-center relative shrink-0 text-[23px] text-white">
                          <span className="leading-[35px] whitespace-pre-wrap">{feature.title}</span>
                        </h3>
                        <p className="flex flex-col font-inter font-normal justify-center relative shrink-0 text-[#99a1af] text-[15px] w-full">
                          <span className="leading-[26.034px] whitespace-pre-wrap">{feature.description}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
        </div>
      </div>
    </div>
  );
}

