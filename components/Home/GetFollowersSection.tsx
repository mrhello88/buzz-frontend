"use client";

import Image from "next/image";
import {
  TrendingUp,
  Heart,
  MessageCircle,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";

export default function GetFollowersSection() {
  return (
    <section className="relative w-full bg-black">
      {/* Container */}
      <div className="relative w-full max-w-[1078px] mx-auto px-5 min-[1024px]:px-5">
        <div className="flex flex-col min-[1024px]:flex-row items-center gap-12 min-[1024px]:gap-16">
          {/* Content Section - Left Side - Desktop: Left, Mobile: First */}
          <div className="relative w-full min-[1024px]:w-1/2 flex flex-col items-center min-[1024px]:items-start gap-6 order-1 min-[1024px]:order-1">
            {/* TrustedBadge */}
            <div className="inline-flex items-center gap-3 px-[17px] py-0 h-[42px] bg-[rgba(173,70,255,0.2)] border border-[rgba(173,70,255,0.3)] rounded-full w-fit">
              <TrendingUp
                size={18}
                className="text-[#C27AFF] shrink-0"
                style={{ strokeWidth: 1.5 }}
              />
              <span className="font-normal text-[#DAB2FF] text-base leading-6">
                Trusted by 100K+ creators
              </span>
            </div>

            {/* Heading */}
            <div className="flex flex-col items-center min-[1024px]:items-start gap-0 text-center min-[1024px]:text-left">
              <h2 className="font-inter font-bold text-white text-[32px] min-[1024px]:text-[48px] leading-[60px] m-0">
                Get Thousands of
              </h2>
              <h2
                className="font-inter font-bold text-[32px] min-[1024px]:text-[48px] leading-[60px] m-0"
                style={{
                  background:
                    "linear-gradient(90deg, #C27AFF 0%, #FB64B6 50%, #51A2FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Active Followers
              </h2>
            </div>

            {/* Description */}
            <p className="font-inter font-normal text-[#99A1AF] text-base min-[1024px]:text-[18px] leading-[27.9px] m-0 w-full max-w-[464px] text-center min-[1024px]:text-left">
              Grow your social media presence organically with real, engaged
              followers. Watch your influence expand across all platforms.
            </p>

            {/* FeatureBoxes - Full Width Cards */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              {/* FeatureBox 1 - Real */}
              <div className="flex flex-col items-center justify-center py-[17px] gap-2 w-full sm:w-1/3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[32px] min-h-[156px]">
                <Image
                  src="/get-follower-section-icon-1.svg"
                  alt="Real"
                  width={20}
                  height={20}
                  className="object-contain w-5 h-5"
                />
                <span className="font-normal text-white text-xl min-[1024px]:text-2xl leading-9 text-center">
                  Real
                </span>
                <span className="font-normal text-[#99A1AF] text-base leading-6 text-center">
                  Organic Growth
                </span>
              </div>

              {/* FeatureBox 2 - Fast */}
              <div className="flex flex-col items-center justify-center py-[17px] pb-[41px] gap-2 w-full sm:w-1/3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[32px] min-h-[156px]">
                <Image
                  src="/get-follower-section-icon-2.svg"
                  alt="Fast"
                  width={20}
                  height={20}
                  className="object-contain w-5 h-5"
                />
                <span className="font-normal text-white text-xl min-[1024px]:text-2xl leading-9 text-center">
                  Fast
                </span>
                <span className="font-normal text-[#99A1AF] text-base leading-6 text-center">
                  Instant Results
                </span>
              </div>

              {/* FeatureBox 3 - Safe */}
              <div className="flex flex-col items-center justify-center py-[17px] pb-[41px] gap-2 w-full sm:w-1/3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[32px] min-h-[156px]">
                <Image
                  src="/get-follower-section-icon-3.svg"
                  alt="Safe"
                  width={20}
                  height={20}
                  className="object-contain w-5 h-5"
                />
                <span className="font-normal text-white text-xl min-[1024px]:text-2xl leading-9 text-center">
                  Safe
                </span>
                <span className="font-normal text-[#99A1AF] text-base leading-6 text-center">
                  100% Secure
                </span>
              </div>
            </div>
          </div>

          {/* PhotoWithIcons - Right Side - Desktop: Right, Mobile: Second */}
          <div className="relative w-full min-[1024px]:w-1/2 flex justify-center items-center order-2 min-[1024px]:order-2">
            <div className="relative w-full max-w-[460px] h-auto min-h-[300px] min-[1024px]:h-[480px]">
              {/* Main Image */}
              <div
                className="relative w-full h-full rounded-[40px] overflow-hidden"
                style={{ transform: "scaleX(-1)" }}
              >
                <Image
                  src="/why-instagram-follower-main-3.png"
                  alt="Happy creator working"
                  width={460}
                  height={480}
                  unoptimized
                  className="w-full h-full object-cover rounded-[40px]"
                />
              </div>

              {/* Social Icons Overlay */}
              {/* Instagram Icon - Top Left */}
              <div
                className="absolute flex items-center justify-center z-20"
                style={{
                  width: "clamp(36px, 8vw, 46px)",
                  height: "clamp(36px, 8vw, 46px)",
                  left: "clamp(10px, 4.3%, 20px)",
                  top: "clamp(10px, 4.2%, 20px)",
                  background: "rgba(16, 24, 40, 0.8)",
                  border: "1px solid rgba(228, 64, 95, 0.25)",
                  borderRadius: "12px",
                }}
              >
                <Instagram
                  size={22}
                  className="text-[#E4405F]"
                  style={{ strokeWidth: 1.96 }}
                />
              </div>

              {/* Twitter/X Icon - Top Right */}
              <div
                className="absolute flex items-center justify-center z-20"
                style={{
                  width: "clamp(36px, 8vw, 46px)",
                  height: "clamp(36px, 8vw, 46px)",
                  left: "clamp(calc(100% - 66px), 85.7%, 394px)",
                  top: "clamp(10px, 4.2%, 20px)",
                  background: "rgba(0, 0, 0, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  borderRadius: "12px",
                }}
              >
                <Twitter
                  size={22}
                  className="text-white"
                  style={{ strokeWidth: 2 }}
                />
              </div>

              {/* Facebook Icon - Bottom Left */}
              <div
                className="absolute flex items-center justify-center z-20"
                style={{
                  width: "clamp(36px, 8vw, 46px)",
                  height: "clamp(36px, 8vw, 46px)",
                  left: "clamp(10px, 4.3%, 20px)",
                  top: "clamp(calc(100% - 66px), 86.3%, 414px)",
                  background: "rgba(16, 24, 40, 0.8)",
                  border: "1px solid rgba(66, 103, 178, 0.25)",
                  borderRadius: "12px",
                }}
              >
                <Facebook
                  size={22}
                  className="text-[#4267B2]"
                  style={{ strokeWidth: 2.13 }}
                />
              </div>

              {/* Stats Card 1 - Likes */}
              <div
                className="absolute flex flex-row items-center gap-2.5 px-[13px] z-20"
                style={{
                  width: "clamp(120px, 25vw, 144.31px)",
                  height: "clamp(56px, 13.3vw, 64px)",
                  left: "clamp(calc(100% - 180px), 64.3%, 295.69px)",
                  top: "clamp(calc(100% - 200px), 61.7%, 296px)",
                  background: "rgba(16, 24, 40, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  borderRadius: "12px",
                }}
              >
                <div className="flex items-center justify-center w-9 h-9 bg-[rgba(246,51,154,0.2)] rounded-full shrink-0">
                  <Heart
                    size={16}
                    className="text-[#F6339A] fill-[#F6339A]"
                    style={{ strokeWidth: 1.45 }}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-normal text-white text-sm leading-[18px]">
                    +2.4K Likes
                  </span>
                  <span className="font-normal text-[#99A1AF] text-xs leading-[15px]">
                    Last 24 hours
                  </span>
                </div>
              </div>

              {/* Stats Card 2 - Comments */}
              <div
                className="absolute flex flex-row items-center gap-2.5 px-[13px] z-20"
                style={{
                  width: "clamp(150px, 30vw, 176.98px)",
                  height: "clamp(56px, 13.3vw, 64px)",
                  left: "clamp(calc(100% - 210px), 57.2%, 263.02px)",
                  top: "clamp(calc(100% - 100px), 82.5%, 396px)",
                  background: "rgba(16, 24, 40, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  borderRadius: "12px",
                }}
              >
                <div className="flex items-center justify-center w-9 h-9 bg-[rgba(43,127,255,0.2)] rounded-full shrink-0">
                  <MessageCircle
                    size={16}
                    className="text-[#51A2FF]"
                    style={{ strokeWidth: 1.45 }}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-normal text-white text-sm leading-[18px]">
                    +856 Comments
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
