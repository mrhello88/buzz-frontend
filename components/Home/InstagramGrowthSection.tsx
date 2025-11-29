"use client";

import Image from "next/image";
import {
  Instagram,
  Heart,
  MessageCircle,
  Share2,
  Twitter,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import HowItWorksSection from "./HowItWorksSection";

export default function InstagramGrowthSection() {
  return (
    <>
      <section className="relative w-full bg-black py-24 sm:py-32">
      <div className="absolute -left-90 top-120 z-1 rounded-full w-96 h-96 bg-blue-600 opacity-80 blur-3xl" />
      <div className="absolute -right-90 top-300 z-1 rounded-full w-96 h-96 bg-blue-600 opacity-80 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6">
       
          <div className="flex flex-col min-[1024px]:flex-row items-center gap-12 min-[1024px]:gap-16">
            {/* Image Section - Desktop: Left, Mobile: Second */}
            <div className="relative w-full min-[1024px]:w-1/2 flex justify-center items-center order-2 min-[1024px]:order-1">
              <div
                className="relative w-full max-w-[342px] min-[1024px]:max-w-[400px]"
                style={{ height: "auto", minHeight: "400px" }}
              >
                {/* Gradient Background Blur */}
                <div
                  className="absolute inset-0 rounded-full blur-3xl opacity-30"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 105, 0, 0.3) 0%, rgba(246, 51, 154, 0.3) 50%, rgba(173, 70, 255, 0.3) 100%)",
                  }}
                />

                {/* Main Image Container */}
                <div className="relative z-10 w-full h-full overflow-visible">
                  <div
                    className="w-full h-full rounded-[40px] overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 105, 0, 0.1) 0%, rgba(246, 51, 154, 0.1) 50%, rgba(173, 70, 255, 0.1) 100%)",
                    }}
                  >
                    {/* Main Image */}
                    <Image
                      src="/instagram-growth-section-main.png"
                      alt="Instagram Growth"
                      width={400}
                      height={500}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>

                  {/* Floating Social Media Icons */}
                  <div>
                    {/* Instagram Icon - Top Left */}
                    <div
                      className="absolute z-20 flex items-center justify-center"
                      style={{
                        width: "clamp(40px, 8vw, 64.79px)",
                        height: "clamp(40px, 8vw, 64.79px)",
                        left: "clamp(20px, 7.5%, 31.61px)",
                        top: "clamp(-25px, -8%, -35.23px)",
                        background:
                          "linear-gradient(135deg, #9810FA 0%, #E60076 100%)",
                        borderRadius: "14px",
                        boxShadow:
                          "0px 25px 50px -12px rgba(173, 70, 255, 0.5)",
                      }}
                    >
                      <Instagram
                        className="w-8 h-8 text-white"
                        strokeWidth={2.7}
                      />
                    </div>

                    {/* Heart Icon - Mid Left */}
                    <div
                      className="absolute z-20 flex items-center justify-center"
                      style={{
                        width: "clamp(30px, 5.5vw, 44.55px)",
                        height: "clamp(30px, 5.5vw, 44.55px)",
                        left: "clamp(-25px, -8%, -33px)",
                        top: "clamp(100px, 30%, 158.82px)",
                        background:
                          "linear-gradient(135deg, #F6339A 0%, #FF2056 100%)",
                        borderRadius: "50%",
                        boxShadow:
                          "0px 10px 15px -3px rgba(246, 51, 154, 0.4), 0px 4px 6px -4px rgba(246, 51, 154, 0.4)",
                      }}
                    >
                      <Heart
                        className="w-5 h-5 text-white fill-white"
                        strokeWidth={1.74}
                      />
                    </div>

                    {/* Twitter Icon - Below Heart */}
                    <div
                      className="absolute z-20 flex items-center justify-center"
                      style={{
                        width: "clamp(42px, 8.2vw, 65.87px)",
                        height: "clamp(42px, 8.2vw, 65.87px)",
                        left: "clamp(-40px, -12%, -64.93px)",
                        top: "clamp(160px, 48%, 248.27px)",
                        background:
                          "linear-gradient(135deg, #2B7FFF 0%, #155DFC 100%)",
                        borderRadius: "14px",
                        boxShadow:
                          "0px 25px 50px -12px rgba(43, 127, 255, 0.5)",
                      }}
                    >
                      <Twitter
                        className="w-8 h-8 text-white"
                        strokeWidth={2.74}
                      />
                    </div>

                    {/* Share Icon - Below Twitter */}
                    <div
                      className="absolute z-20 flex items-center justify-center"
                      style={{
                        width: "clamp(30px, 5.5vw, 44.05px)",
                        height: "clamp(30px, 5.5vw, 44.05px)",
                        left: "clamp(10px, 4%, 25px)",
                        top: "clamp(170px, 52%, 300px)",
                        background:
                          "linear-gradient(135deg, #00C950 0%, #00BC7D 100%)",
                        borderRadius: "50%",
                        boxShadow:
                          "0px 10px 15px -3px rgba(0, 201, 80, 0.4), 0px 4px 6px -4px rgba(0, 201, 80, 0.4)",
                      }}
                    >
                      <Share2
                        className="w-5 h-5 text-white"
                        strokeWidth={1.67}
                      />
                    </div>

                    {/* Message Circle Icon - Top Right */}
                    <div
                      className="absolute z-40 flex items-center justify-center"
                      style={{
                        width: "clamp(30px, 5.5vw, 44.55px)",
                        height: "clamp(30px, 5.5vw, 44.55px)",
                        left: "clamp(calc(100% - 60px), 80%, 339.73px)",
                        top: "clamp(130px, 35%, 93.85px)",
                        background:
                          "linear-gradient(135deg, #51A2FF 0%, #00D3F2 100%)",
                        borderRadius: "50%",
                        boxShadow:
                          "0px 10px 15px -3px rgba(0, 184, 219, 0.4), 0px 4px 6px -4px rgba(0, 184, 219, 0.4)",
                      }}
                    >
                      <MessageCircle
                        className="w-5 h-5 text-white"
                        strokeWidth={1.69}
                      />
                    </div>

                    {/* YouTube Icon - Mid Right */}
                    <div
                      className="absolute z-20 flex items-center justify-center"
                      style={{
                        width: "clamp(40px, 8vw, 64.06px)",
                        height: "clamp(40px, 8vw, 64.06px)",
                        left: "clamp(calc(100% - 30px), 92%, 383.97px)",
                        top: "clamp(40px, 12%, 63.77px)",
                        background:
                          "linear-gradient(135deg, #E7000B 0%, #FB2C36 100%)",
                        borderRadius: "14px",
                        boxShadow: "0px 25px 50px -12px rgba(251, 44, 54, 0.5)",
                      }}
                    >
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.498 6.186c-.271-1.017-1.2-1.806-2.224-1.9C18.584 4 12 4 12 4s-6.583 0-9.275.284c-1.024.094-1.953.883-2.224 1.9C0 9 0 12 0 12s0 3 0.501 5.814c.271 1.016 1.2 1.806 2.224 1.9C5.417 20 12 20 12 20s6.583 0 9.275-.286c1.024-.094 1.953-.883 2.224-1.9C24 15 24 12 24 12s0-3-.502-5.814zM9.545 15.568V8.432l6.273 3.568-6.273 3.568z"
                        fill="white"
                      />
                    </svg>
                    </div>

                    {/* TikTok Icon - Bottom Right */}
                    <div
                      className="absolute z-20 flex items-center justify-center"
                      style={{
                        width: "clamp(45px, 8.8vw, 70.75px)",
                        height: "clamp(45px, 8.8vw, 70.75px)",
                        left: "clamp(calc(100% - 55px), calc(100% - 28px), 363.62px)",
                        top: "clamp(180px, 55%, 286.46px)",
                        background:
                          "linear-gradient(135deg, #000000 0%, #101828 100%)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "14px",
                        boxShadow: "0px 25px 50px -12px rgba(0, 184, 219, 0.3)",
                      }}
                    >
                      <svg
                        className="w-8 h-8 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7.41a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.09z" />
                      </svg>
                    </div>
                  </div>

                  {/* Stats Bar at Bottom */}
                  <div
                    className="absolute z-20 -bottom-8 min-[1024px]:-bottom-10 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[310px] min-[1024px]:max-w-[360px]"
                    style={{
                      height: "auto",
                      minHeight: "70px",
                      padding: "12px 16px 12px 20px",
                      background: "rgba(16, 24, 40, 0.95)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "14px",
                      boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <div className="flex items-center justify-between gap-3 sm:gap-4 min-[1024px]:gap-6 w-full">
                      {/* Followers */}
                      <div className="flex flex-col items-start">
                        <span
                          className="font-inter font-bold text-white text-[20px] min-[1024px]:text-[24px] leading-[28px] min-[1024px]:leading-[32px]"
                          style={{
                            letterSpacing: "0px",
                            textAlign: "center",
                          }}
                        >
                          125K
                        </span>
                        <span
                          className="font-inter font-semibold text-white/60 text-[10px] min-[1024px]:text-[12px] leading-[14px] min-[1024px]:leading-[16px]"
                          style={{
                            letterSpacing: "0px",
                            textAlign: "center",
                          }}
                        >
                          Followers
                        </span>
                      </div>

                      {/* Divider */}
                      <div className="w-px h-8 min-[1024px]:h-10 bg-white/20" />

                      {/* Engagement */}
                      <div className="flex flex-col items-start">
                        <span
                          className="font-inter font-bold text-white text-[20px] min-[1024px]:text-[24px] leading-[28px] min-[1024px]:leading-[32px]"
                          style={{
                            letterSpacing: "0px",
                            textAlign: "center",
                          }}
                        >
                          4.8M
                        </span>
                        <span
                          className="font-inter font-semibold text-white/60 text-[10px] min-[1024px]:text-[12px] leading-[14px] min-[1024px]:leading-[16px]"
                          style={{
                            letterSpacing: "0px",
                            textAlign: "center",
                          }}
                        >
                          Engagement
                        </span>
                      </div>

                      {/* Divider */}
                      <div className="w-px h-8 min-[1024px]:h-10 bg-white/20" />

                      {/* Growth */}
                      <div className="flex flex-col items-start">
                        <div className="flex items-center gap-1">
                          <ArrowUpRight
                            className="w-4 h-4 min-[1024px]:w-5 min-[1024px]:h-5 text-[#05DF72]"
                            strokeWidth={1.67}
                          />
                          <span
                            className="font-inter font-bold text-[#05DF72] text-[20px] min-[1024px]:text-[24px] leading-[28px] min-[1024px]:leading-[32px]"
                            style={{
                              letterSpacing: "0px",
                              textAlign: "center",
                            }}
                          >
                            245%
                          </span>
                        </div>
                        <span
                          className="font-inter font-semibold ml-5 min-[1024px]:ml-6 text-white/60 text-[10px] min-[1024px]:text-[12px] leading-[14px] min-[1024px]:leading-[16px]"
                          style={{
                            letterSpacing: "0px",
                            textAlign: "center",
                          }}
                        >
                          Growth
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section - Desktop: Right, Mobile: First */}
            <div className="relative w-full min-[1024px]:w-1/2 flex flex-col gap-6 order-1 min-[1024px]:order-2 items-center min-[1024px]:items-start text-center min-[1024px]:text-left">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg w-fit"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255, 105, 0, 0.1) 0%, rgba(246, 51, 154, 0.1) 100%)",
                  border: "1px solid rgba(255, 105, 0, 0.2)",
                }}
              >
                <Image
                  src="/instagram-growth-section-speed-icon.svg"
                  alt="Speed Icon"
                  width={12}
                  height={12}
                  className="w-3 h-3"
                />
                <span
                  className="font-inter font-medium text-[#FF8904]"
                  style={{ fontSize: "12px", lineHeight: "16px" }}
                >
                  Social Media Growth
                </span>
              </div>

              {/* Heading and Description */}
              <div className="flex flex-col gap-4">
                <h2
                  className="font-inter font-bold text-white text-[32px] min-[1024px]:text-[48px] leading-[130%]"
                  style={{
                    letterSpacing: "-1.8px",
                    background:
                      "linear-gradient(180deg, #FF8904 0%, #FB64B6 50%, #C27AFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Grow Your<br />Instagram Followers
                </h2>
                <p
                  className="font-inter font-normal text-[#99A1AF] text-[16px] min-[1024px]:text-[18px] leading-[24px] min-[1024px]:leading-[29.25px]"
                  style={{
                    letterSpacing: "0px",
                    maxWidth: "461px",
                  }}
                >
                  Grow your Instagram audience with data-driven strategies and
                  proven tactics. Build an engaged community and expand your
                  reach effortlessly.
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 min-[1024px]:gap-6 w-full max-w-[467px] mx-auto">
                {/* Card 1 - Engagement Rate */}
                <div
                  className="flex flex-col items-start p-6 rounded-[30px] w-full"
                  style={{
                    minHeight: "166px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div
                    className="flex items-center justify-center mb-4 rounded-[14px]"
                    style={{
                      width: "48px",
                      height: "48px",
                      background:
                        "linear-gradient(135deg, #FF6900 0%, #F6339A 100%)",
                    }}
                  >
                    <TrendingUp
                      className="w-6 h-6 text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span
                      className="font-inter font-semibold text-white"
                      style={{
                        fontSize: "30px",
                        lineHeight: "36px",
                        letterSpacing: "0px",
                      }}
                    >
                      +245%
                    </span>
                    <span
                      className="font-inter font-normal text-white"
                      style={{
                        fontSize: "14px",
                        lineHeight: "20px",
                        letterSpacing: "0px",
                      }}
                    >
                      Engagement Rate
                    </span>
                  </div>
                </div>

                {/* Card 2 - Follower Growth */}
                <div
                  className="flex flex-col items-start p-6 rounded-[30px] w-full"
                  style={{
                    minHeight: "166px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div
                    className="flex items-center justify-center mb-4 rounded-[14px]"
                    style={{
                      width: "48px",
                      height: "48px",
                      background:
                        "linear-gradient(135deg, #AD46FF 0%, #F6339A 100%)",
                    }}
                  >
                    <Users className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span
                      className="font-inter font-semibold text-white"
                      style={{ fontSize: "30px", lineHeight: "36px" }}
                    >
                      +180%
                    </span>
                    <span
                      className="font-inter font-normal text-white"
                      style={{ fontSize: "14px", lineHeight: "20px" }}
                    >
                      Follower Growth
                    </span>
                  </div>
                </div>

                {/* Card 3 - Reach Increase */}
                <div
                  className="flex flex-col items-start p-6 rounded-[30px] w-full"
                  style={{
                    minHeight: "166px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div
                    className="flex items-center justify-center mb-4 rounded-[14px]"
                    style={{
                      width: "48px",
                      height: "48px",
                      background:
                        "linear-gradient(135deg, #2B7FFF 0%, #00B8DB 100%)",
                    }}
                  >
                    <Target className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span
                      className="font-inter font-semibold text-white"
                      style={{ fontSize: "30px", lineHeight: "36px" }}
                    >
                      +320%
                    </span>
                    <span
                      className="font-inter font-normal text-white"
                      style={{ fontSize: "14px", lineHeight: "20px" }}
                    >
                      Reach Increase
                    </span>
                  </div>
                </div>

                {/* Card 4 - Content Impact */}
                <div
                  className="flex flex-col items-start p-6 rounded-[30px] w-full"
                  style={{
                    minHeight: "166px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div
                    className="flex items-center justify-center mb-4 rounded-[14px]"
                    style={{
                      width: "48px",
                      height: "48px",
                      background:
                        "linear-gradient(135deg, #00C950 0%, #00BC7D 100%)",
                    }}
                  >
                    <BarChart3 className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span
                      className="font-inter font-semibold text-white"
                      style={{ fontSize: "30px", lineHeight: "36px" }}
                    >
                      10x
                    </span>
                    <span
                      className="font-inter font-normal text-white"
                      style={{ fontSize: "14px", lineHeight: "20px" }}
                    >
                      Content Impact
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="flex items-center justify-center min-[1024px]:justify-start gap-3 mt-4">
                <div className="flex items-center">
                  <Image
                    src="/instagram-growth-section-testimonial-1.png"
                    alt="Testimonial 1"
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-black object-cover"
                    style={{
                      width: "32px",
                      height: "32px",
                      zIndex: 3,
                    }}
                  />
                  <Image
                    src="/instagram-growth-section-testimonial-2.png"
                    alt="Testimonial 2"
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-black object-cover"
                    style={{
                      width: "32px",
                      height: "32px",
                      marginLeft: "-12px",
                      zIndex: 2,
                    }}
                  />
                  <Image
                    src="/instagram-growth-section-testimonial-3.png"
                    alt="Testimonial 3"
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-black object-cover"
                    style={{
                      width: "32px",
                      height: "32px",
                      marginLeft: "-12px",
                      zIndex: 1,
                    }}
                  />
                </div>
                <span
                  className="font-inter font-normal text-[#99A1AF]"
                  style={{
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: "0px",
                    textAlign: "center",
                  }}
                >
                  Join 50,000+ creators growing their audience
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HowItWorksSection />
    </>
  );
}
