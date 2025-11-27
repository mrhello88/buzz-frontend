"use client";

import { ShoppingCart, UserCheck, Lock } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: ShoppingCart,
      iconColor: "#C27AFF",
      iconBg: "rgba(173, 70, 255, 0.1)",
      iconBorder: "rgba(173, 70, 255, 0.2)",
      title: "Pick a Service",
      description: "Pick the service that fits your goals and start growing now",
    },
    {
      number: "02",
      icon: UserCheck,
      iconColor: "#51A2FF",
      iconBg: "rgba(43, 127, 255, 0.1)",
      iconBorder: "rgba(43, 127, 255, 0.2)",
      title: "Enter Information",
      description: "Enter your information to get started quickly and securely!",
    },
    {
      number: "03",
      icon: Lock,
      iconColor: "#00D492",
      iconBg: "rgba(0, 188, 125, 0.1)",
      iconBorder: "rgba(0, 188, 125, 0.2)",
      title: "Pay Securely",
      description: "Pay securely and complete your order in seconds!",
    },
  ];

  return (
    <section className="relative w-full bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <h2 className="font-inter font-bold text-white text-center" style={{ fontSize: "48px", lineHeight: "58px" }}>
            How it works
          </h2>
          <p
            className="font-inter text-[#99A1AF] text-center max-w-[650px]"
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "130%",
              letterSpacing: "0%",
              textAlign: "center",
            }}
          >
            Ordering services is simple — pick your package, pay quickly, and watch your growth begin instantly
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1280px] mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="relative"
                style={{
                  width: "100%",
                  maxWidth: "405.33px",
                  height: "230px",
                }}
              >
                {/* Card Background */}
                <div
                  className="relative w-full h-full rounded-[24px] overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #18181B 0%, #09090B 100%)",
                    border: "1px solid #27272A",
                  }}
                >
                  {/* Large Background Number */}
                  <div
                    className="absolute pointer-events-none"
                    style={{
                      width: "129.38px",
                      height: "180px",
                      right: "-17px",
                      top: "-25px",
                      opacity: 0.05,
                    }}
                  >
                    <span
                      className="font-normal text-white"
                      style={{
                        fontFamily: "Arial, sans-serif",
                        fontSize: "120px",
                        lineHeight: "180px",
                        color: "#FFFFFF",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col items-start p-8 gap-6 h-full">
                    {/* Icon and Number Row */}
                    <div className="flex items-center justify-between w-full">
                      {/* Icon Container */}
                      <div
                        className="flex items-center justify-center rounded-[16px]"
                        style={{
                          width: "56px",
                          height: "56px",
                          background: step.iconBg,
                          border: `1px solid ${step.iconBorder}`,
                        }}
                      >
                        <IconComponent
                          className="w-7 h-7"
                          style={{
                            color: step.iconColor,
                            stroke: step.iconColor,
                            strokeWidth: 2.33,
                          }}
                        />
                      </div>

                      {/* Small Number */}
                      <span
                        className="font-normal text-[#52525C]"
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontSize: "16px",
                          lineHeight: "24px",
                        }}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-white"
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 600,
                        fontSize: "16px",
                        lineHeight: "24px",
                        letterSpacing: "0px",
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-[#9F9FA9]"
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 600,
                        fontSize: "16px",
                        lineHeight: "24px",
                        letterSpacing: "0px",
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

