"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function HeroSection() {
  const [isVipSelected, setIsVipSelected] = useState(false);
  const [selectedCard, setSelectedCard] = useState<"premium" | "active" | "vip">("premium");

  return (
    <section
      className="relative w-full max-w-full bg-black overflow-hidden shadow-lg min-h-[600px] md:min-h-[800px] lg:h-[1049px] pt-[60px] md:pt-20 lg:pt-[106px]"
      style={{
        borderRadius: "0 0 65px 65px",
        marginTop: "0px",
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/herosection-background-image.png')",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 ">
        {/* Ellipse images */}
        <div className="absolute -top-90 left-90 -z-1 rounded-full w-96 h-96 bg-blue-600 opacity-80 blur-3xl" />
        <div className="absolute -left-95 top-30 -z-1 rounded-full w-96 h-96 bg-blue-600 opacity-80 blur-3xl" />
        <div className="absolute -right-130 bottom-40 -z-1 rounded-full w-96 h-96 bg-blue-600 opacity-80 blur-3xl" />

        <Image
          src="/herosection-grid.svg"
          alt="Grid"
          width={800}
          height={800}
          className="absolute top-30 left-50  z-1"
        />

        <Image
          src="/herosection-grid-left-side.svg"
          alt="Grid left"
          width={170}
          height={150}
          className="absolute -left-20 top-80 z-1 brightness-0 invert"
        />

        <Image
          src="/herosection-grid-right-side.svg"
          alt="Grid right"
          width={150}
          height={150}
          className="absolute -right-20 top-20 z-1"
        />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col items-center gap-9 w-full">
            {/* Title and Description */}
            <div className="flex flex-col items-center w-full gap-[25px] md:gap-[35px]">
              <h1 className="font-rethink-sans font-bold text-center text-white max-w-[298px] min-[366px]:max-w-[400px] md:max-w-3xl text-[26px] md:text-[40px] lg:text-[54px] leading-[32px] md:leading-[110%]">
                <span className="whitespace-nowrap">Buy Instagram Followers</span>
                <br />
                <span 
                  className="inline-block whitespace-nowrap"
                  style={{
                    background: "linear-gradient(90deg, #018DFF 48%, #00FFFF 85%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  with Fast Delivery!
                </span>
              </h1>
              <p className="font-inter font-medium text-center max-w-2xl text-[14px] md:text-[16px] lg:text-[18px] leading-[24px] md:leading-[28px] lg:leading-[32px] text-[rgba(153,161,175,1)] px-4">
                Quickly get premium Instagram followers safely and easily! Boost
                your IG influence and engagement instantly! Always great prices
                and offers!
              </p>
            </div>

            {/* Toggle Switch */}
            <div className="relative flex items-center justify-center w-full max-w-[343px] min-[366px]:max-w-[367px] h-[44.861px] min-[366px]:h-12 mt-[10px] px-4">
              {/* Gradient Border Wrapper */}
              <div 
                className="absolute inset-0 rounded-full md:rounded-full"
                style={{
                  background: "linear-gradient(90deg, #EE1D52 0%, #F64C50 50%, #9146FF 100%)",
                  padding: "1px",
                  borderRadius: "93.46px",
                }}
              >
                <div 
                  className="w-full h-full rounded-full md:rounded-full"
                  style={{
                    backgroundColor: "rgba(16, 24, 40, 1)",
                    borderRadius: "93.46px",
                  }}
                >
                  <div className="flex items-center justify-between h-full px-[14.95px] md:justify-center md:px-4 md:gap-20">
                    <div className="flex items-center gap-[11.215px] md:gap-3">
                      <button
                        onClick={() => setIsVipSelected(!isVipSelected)}
                        className="relative transition-all shrink-0"
                        style={{
                          width: "49px",
                          height: "23px",
                          borderRadius: "30px",
                          border: "1px solid rgba(191, 169, 181, 1)",
                        }}
                      >
                        <div
                          className="absolute rounded-full transition-transform bg-pink-300"
                          style={{
                            width: "13px",
                            height: "13px",
                            top: "5px",
                            left: "5px",
                            transform: isVipSelected ? "translateX(29px)" : "translateX(0)",
                          }}
                        />
                      </button>
                      <span className="font-open-sans font-normal text-white capitalize whitespace-nowrap text-[16.823px] md:text-[18px] leading-[29.907px] md:leading-[32px]">
                        I need vip treatment
                      </span>
                    </div>
                    <Image
                      src="/herosection-toggle-info-icon.svg"
                      alt="Info"
                      width={20}
                      height={20}
                      className="shrink-0 w-[18.692px] h-[18.692px] md:w-5 md:h-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="relative w-full max-w-4xl mt-6 md:mt-[25px]">
            <div className="flex md:flex-row items-center justify-center overflow-x-auto pb-4 md:pb-0 scrollbar-hide max-md:flex-nowrap max-md:justify-start max-md:px-4" style={{ gap: "45px" }}>
              {/* Premium Followers Card */}
              <div 
                className="relative cursor-pointer shrink-0" 
                style={{ width: "210px", height: "377px" }}
                onClick={() => setSelectedCard("premium")}
              >
                <div 
                  className="absolute inset-0" 
                  style={{ 
                    borderRadius: "20px", 
                    border: selectedCard === "premium" 
                      ? "2px solid #01AAFF" 
                      : "1px solid rgba(255, 255, 255, 0.5)" 
                  }} 
                />
                <div className="absolute inset-0 bg-[#01AAFF] h-[72px] md:h-[72px] rounded-t-[20px]" />
                <div className="absolute top-[72px] left-0 right-0 bottom-0 bg-[rgba(255,255,255,0.1)] rounded-b-[20px]" />
                <div className="absolute top-[17.99px] left-3 right-3 md:left-[12px] md:right-[12px] flex justify-between items-start">
                  <h3 className="font-inter font-semibold text-base md:text-[18px] leading-[130%] text-white">
                    Premium
                    <br />
                    Followers
                  </h3>
                  <Image
                    src="/premium-card-icon.svg"
                    alt="Premium Icon"
                    width={49}
                    height={54}
                    className="shrink-0 w-10 h-auto md:w-[49px] md:h-[54px]"
                  />
                </div>
                <div 
                  className="absolute flex flex-col items-center p-0 gap-[22px] w-[calc(100%-24px)] md:w-[180px] left-3 md:left-[11.83px] top-[91px]"
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      padding: "0px",
                      gap: "10px",
                      width: "180px",
                      height: "32px",
                    }}
                  >
                    <Check
                      className="shrink-0"
                      style={{
                        width: "18px",
                        height: "13px",
                        opacity: 1,
                        color: "#01AAFF",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <p
                      style={{
                        width: "149px",
                        height: "32px",
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "22px",
                        color: "#FFFFFF",
                        flexShrink: 0,
                        whiteSpace: "normal",
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>Premium followers</span>
                      <br />
                      <span style={{ color: "#01AAFF", whiteSpace: "nowrap" }}>What&apos;s the difference?</span>
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      padding: "0px",
                      gap: "10px",
                      width: "180px",
                      height: "13px",
                    }}
                  >
                    <Check
                      className="shrink-0"
                      style={{
                        width: "18px",
                        height: "13px",
                        opacity: 1,
                        color: "#01AAFF",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <p
                      style={{
                        width: "149px",
                        height: "11px",
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "22px",
                        color: "#FFFFFF",
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ fontWeight: 700 }}>Super Fast</span> Delivery
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      padding: "0px",
                      gap: "10px",
                      width: "180px",
                      height: "13px",
                    }}
                  >
                    <Check
                      className="shrink-0"
                      style={{
                        width: "18px",
                        height: "13px",
                        opacity: 1,
                        color: "#01AAFF",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <p
                      style={{
                        width: "149px",
                        height: "11px",
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "22px",
                        color: "#FFFFFF",
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>No password</span> needed
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      padding: "0px",
                      gap: "10px",
                      width: "180px",
                      height: "13px",
                    }}
                  >
                    <Check
                      className="shrink-0"
                      style={{
                        width: "18px",
                        height: "13px",
                        opacity: 1,
                        color: "#01AAFF",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <p
                      style={{
                        width: "149px",
                        height: "10px",
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "22px",
                        color: "#FFFFFF",
                        flexShrink: 0,
                      }}
                    >
                      24-hour support
                    </p>
                  </div>
                </div>
                <button
                  className={`absolute bottom-8 left-40 w-8 h-8 rounded-full flex items-center justify-center ${
                    selectedCard === "premium"
                      ? "bg-linear-to-r from-blue-700 to-blue-500"
                      : "border-2 border-gray-600 bg-transparent"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCard("premium");
                  }}
                >
                  {selectedCard === "premium" && <Check className="text-white w-4 h-3" />}
                </button>
              </div>

              {/* Active Followers Card */}
              <div 
                className="relative cursor-pointer shrink-0" 
                style={{ width: "210px", height: "377px" }}
                onClick={() => setSelectedCard("active")}
              >
                <div 
                  className="absolute inset-0" 
                  style={{ 
                    borderRadius: "20px", 
                    border: selectedCard === "active" 
                      ? "2px solid #D71E77" 
                      : "1px solid rgba(255, 255, 255, 0.5)"
                  }} 
                />
                <div className="absolute inset-0 bg-[#D71E77]" style={{ height: "72px", borderRadius: "20px 20px 0 0" }} />
                <div className="absolute" style={{ top: "72px", left: 0, right: 0, bottom: 0, backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "0 0 20px 20px" }} />
                <div className="absolute" style={{ top: "17.99px", left: "12px", right: "12px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <h3 className="font-open-sans font-semibold text-[18px] leading-[130%] text-white">
                    Active
                    <br />
                    Followers
                  </h3>
                  <div className="relative shrink-0">
                    <Image
                      src="/active-card-start-icon.svg"
                      alt="Active Start Icon"
                      width={16}
                      height={12}
                      className="absolute -top-4 left-4"
                    />
                    <Image
                      src="/active-card-icon.svg"
                      alt="Active Icon"
                      width={41}
                      height={54}
                      className="relative"
                    />
                  </div>
                </div>
                <div 
                  className="absolute"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "0px",
                    gap: "22px",
                    width: "180px",
                    height: "172px",
                    left: "12px",
                    top: "91px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      padding: "0px",
                      gap: "10px",
                      width: "180px",
                      height: "32px",
                    }}
                  >
                    <Check
                      className="shrink-0"
                      style={{
                        width: "18px",
                        height: "13px",
                        opacity: 1,
                        color: "#D71E77",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <p
                      style={{
                        width: "149px",
                        height: "32px",
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "22px",
                        color: "#FFFFFF",
                        flexShrink: 0,
                        whiteSpace: "normal",
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>Real Active</span> followers
                      <br />
                      <span style={{ color: "#D71E77", whiteSpace: "nowrap" }}>What&apos;s the difference?</span>
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      padding: "0px",
                      gap: "10px",
                      width: "180px",
                      height: "13px",
                    }}
                  >
                    <Check
                      className="shrink-0"
                      style={{
                        width: "18px",
                        height: "13px",
                        opacity: 1,
                        color: "#D71E77",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <p
                      style={{
                        width: "149px",
                        height: "11px",
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "22px",
                        color: "#FFFFFF",
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>Trusted</span> Delivery
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      padding: "0px",
                      gap: "10px",
                      width: "180px",
                      height: "13px",
                    }}
                  >
                    <Check
                      className="shrink-0"
                      style={{
                        width: "18px",
                        height: "13px",
                        opacity: 1,
                        color: "#D71E77",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <p
                      style={{
                        width: "149px",
                        height: "11px",
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "22px",
                        color: "#FFFFFF",
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>30 day</span> refills
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      padding: "0px",
                      gap: "10px",
                      width: "180px",
                      height: "13px",
                    }}
                  >
                    <Check
                      className="shrink-0"
                      style={{
                        width: "18px",
                        height: "13px",
                        opacity: 1,
                        color: "#D71E77",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <p
                      style={{
                        width: "149px",
                        height: "10px",
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "22px",
                        color: "#FFFFFF",
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>No password</span> needed
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      padding: "0px",
                      gap: "10px",
                      width: "180px",
                      height: "13px",
                    }}
                  >
                    <Check
                      className="shrink-0"
                      style={{
                        width: "18px",
                        height: "13px",
                        opacity: 1,
                        color: "#D71E77",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <p
                      style={{
                        width: "149px",
                        height: "10px",
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "22px",
                        color: "#FFFFFF",
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>24-hour</span> support
                    </p>
                  </div>
                </div>
                <button 
                  className={`absolute bottom-8 left-40 w-8 h-8 rounded-full flex items-center justify-center ${
                    selectedCard === "active"
                      ? "bg-pink-600"
                      : "bg-transparent border-2 border-gray-600"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCard("active");
                  }}
                >
                  {selectedCard === "active" && <Check className="text-white w-4 h-3" />}
                </button>
              </div>

              {/* VIP Followers Card */}
              <div 
                className="relative cursor-pointer shrink-0" 
                style={{ width: "210px", height: "377px" }}
                onClick={() => setSelectedCard("vip")}
              >
                <div 
                  className="absolute inset-0" 
                  style={{ 
                    borderRadius: "20px", 
                    border: selectedCard === "vip" 
                      ? "2px solid #02A83D" 
                      : "1px solid rgba(255, 255, 255, 0.5)"
                  }} 
                />
                <div className="absolute inset-0 bg-[#02A83D]" style={{ height: "72px", borderRadius: "20px 20px 0 0" }} />
                <div className="absolute" style={{ top: "72px", left: 0, right: 0, bottom: 0, backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "0 0 20px 20px" }} />
                <div className="absolute" style={{ top: "17.99px", left: "12px", right: "12px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <h3 className="font-open-sans font-semibold text-[18px] leading-[130%] text-white">
                    VIP
                    <br />
                    Followers
                  </h3>
                  <div className="relative shrink-0">
                    <Image
                      src="/vip-card-crown-icon.svg"
                      alt="VIP Crown Icon"
                      width={25}
                      height={14}
                      className="absolute -top-4 left-3"
                    />
                    <Image
                      src="/vip-card-icon.svg"
                      alt="VIP Icon"
                      width={41}
                      height={54}
                      className="relative"
                    />
                  </div>
                </div>
                <div 
                  className="absolute"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "0px",
                    gap: "22px",
                    width: "180px",
                    height: "261px",
                    left: "11.83px",
                    top: "91px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      padding: "0px",
                      gap: "10px",
                      width: "180px",
                      height: "32px",
                    }}
                  >
                    <Check
                      className="shrink-0"
                      style={{
                        width: "18px",
                        height: "13px",
                        opacity: 1,
                        color: "#02A83D",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <p
                      style={{
                        width: "149px",
                        height: "32px",
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "22px",
                        color: "#02A83D",
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>All features</span> of Active, plus:
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      padding: "0px",
                      gap: "10px",
                      width: "180px",
                      height: "30px",
                    }}
                  >
                    <Check
                      className="shrink-0"
                      style={{
                        width: "18px",
                        height: "13px",
                        opacity: 1,
                        color: "#02A83D",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <p
                      style={{
                        width: "149px",
                        height: "30px",
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "22px",
                        color: "#FFFFFF",
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>Real followers</span> from<br />Targeted users
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      padding: "0px",
                      gap: "10px",
                      width: "180px",
                      height: "51px",
                    }}
                  >
                    <Check
                      className="shrink-0"
                      style={{
                        width: "18px",
                        height: "13px",
                        opacity: 1,
                        color: "#02A83D",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <p
                      style={{
                        width: "149px",
                        height: "51px",
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "22px",
                        color: "#FFFFFF",
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>Hit the explore page</span> and grow your engagement
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      padding: "0px",
                      gap: "10px",
                      width: "180px",
                      height: "30px",
                    }}
                  >
                    <Check
                      className="shrink-0"
                      style={{
                        width: "18px",
                        height: "13px",
                        opacity: 1,
                        color: "#02A83D",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <p
                      style={{
                        width: "149px",
                        height: "30px",
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "22px",
                        color: "#FFFFFF",
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>Instant Delivery </span>Guaranteed
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      padding: "0px",
                      gap: "10px",
                      width: "180px",
                      height: "30px",
                    }}
                  >
                    <Check
                      className="shrink-0"
                      style={{
                        width: "18px",
                        height: "13px",
                        opacity: 1,
                        color: "#02A83D",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <p
                      style={{
                        width: "149px",
                        height: "30px",
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "22px",
                        color: "#FFFFFF",
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>VIP support</span> with lifetime access
                    </p>
                  </div>
                </div>
                <button 
                  className={`absolute bottom-8 left-40 w-8 h-8 rounded-full flex items-center justify-center ${
                    selectedCard === "vip"
                      ? "bg-green-600"
                      : "bg-transparent border-2 border-gray-600"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCard("vip");
                  }}
                >
                  {selectedCard === "vip" && <Check className="text-white w-4 h-3" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
