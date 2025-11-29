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
          <h2 className="font-inter font-bold text-white text-center text-[48px] leading-[58px]">
            How it works
          </h2>
          <p className="font-inter text-[#99A1AF] text-center max-w-[650px] font-medium text-[18px] leading-[130%]">
            Ordering services is simple — pick your package, pay quickly, and watch your growth begin instantly
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-wrap justify-center gap-8 max-w-[1280px] mx-auto z-2">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="relative w-full md:w-[calc(33.333%-21.33px)] min-[1024px]:w-[405.33px] h-[230px]"
              >
                {/* Card Background */}
                <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-gradient-to-br from-[#18181B] to-[#09090B] border border-[#27272A]">
                  {/* Large Background Number */}
                  <div className="absolute pointer-events-none w-[129.38px] h-[180px] -right-[17px] -top-[25px] opacity-[0.05]">
                    <span className="font-normal text-white text-[120px] leading-[180px]" style={{ fontFamily: "Arial, sans-serif" }}>
                      {step.number}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col items-start p-8 gap-6 h-full">
                    {/* Icon and Number Row */}
                    <div className="flex items-center justify-between w-full">
                      {/* Icon Container */}
                      <div
                        className="flex items-center justify-center rounded-[16px] w-14 h-14"
                        style={{
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
                      <span className="font-normal text-[#52525C] text-base leading-6" style={{ fontFamily: "Arial, sans-serif" }}>
                        {step.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-inter font-semibold text-base leading-6">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#9F9FA9] font-inter font-semibold text-base leading-6">
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

