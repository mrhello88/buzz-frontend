"use client";

import Image from "next/image";

export default function WhyChooseUs() {
  const features = [
    {
      label: "Real Followers",
      eagleLikes: "Always Real",
      others: "Often Bots",
    },
    {
      label: "Pricing",
      eagleLikes: "Transparent",
      others: "Hidden Fees",
    },
    {
      label: "Support",
      eagleLikes: "24/7 Support Team",
      others: "Limited Help",
    },
    {
      label: "Payment Options",
      eagleLikes: "All Major Cards",
      others: "Few Options",
    },
    {
      label: "Delivery Speed",
      eagleLikes: "Lightning Fast",
      others: "Slow & Delayed",
    },
    {
      label: "Login Info Needed",
      eagleLikes: "Not Required",
      others: "Often Asked",
    },
    {
      label: "Experience",
      eagleLikes: "10+ Years",
      others: "New/Unproven",
    },
    {
      label: "Account Safety",
      eagleLikes: "100% Secure",
      others: "Risky / Unsafe",
    },
  ];

  return (
    <section className="relative w-full bg-black py-20 lg:py-[160px]  overflow-x-hidden">
     
      {/* Main Container */}
      <div className="relative w-full max-w-[1060px] h-auto lg:h-[580.81px] mx-auto px-4 lg:px-5">
        {/* Heading - Why Choose us? */}
        <h2 className="font-inter font-semibold text-white text-center text-[24px] lg:text-[48px] leading-[32px] lg:leading-[75px] w-full">
          Why Choose us?
        </h2>

        {/* Cards Container */}
        <div className="relative w-full max-w-[360px] lg:max-w-[960px] h-auto lg:h-[413.08px] mx-auto mt-20 lg:mt-[149px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.15)] rounded-[20px] lg:rounded-[40px] overflow-visible min-h-[206px] lg:min-h-[413.08px] p-3 lg:p-6">
          {/* Left Card - Features Labels */}
          <div className="absolute left-3 lg:left-6 top-2.5 lg:top-5 w-[140px] lg:w-[280px] z-10">
            <div className="flex flex-col gap-0">
              {features.map((feature, index) => (
                <div key={index} className="mb-[5px] lg:mb-[10px]">
                  <div className="flex items-center gap-1 lg:gap-2">
                    <Image
                      src={`/why-choose-us-${index + 1}.svg`}
                      alt={`Icon ${index + 1}`}
                      width={17}
                      height={17}
                      className="shrink-0 w-[8.5px] h-[8.5px] lg:w-[17px] lg:h-[17px]"
                    />
                    <span className="font-open-sans font-normal text-white text-[7.33px] lg:text-[14.67px] leading-[12.22px] lg:leading-[24.44px]">
                      {feature.label}
                    </span>
                  </div>
                  <div className="w-[85px] min-[395px]:w-[100px] lg:w-[280px] h-[0.4px] lg:h-[0.814758px] bg-white opacity-30 mt-[5px] lg:mt-[10px]" />
                </div>
              ))}
            </div>
          </div>

          {/* Center Card - EAGLE LIKES */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:left-[320px] lg:translate-x-0 top-[-32px] lg:top-[-65px] w-[120px] lg:w-[280px] h-auto lg:h-[493.74px] bg-[#121212] border-2 lg:border-4 border-[#01AAFF] rounded-[20px] lg:rounded-[40px] p-2 lg:p-5 z-30">
            {/* Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 top-2 lg:top-5 w-[84px] lg:w-[196px] h-[18px] lg:h-[42px] flex items-center justify-center">
              <Image
                src="/nav-icon.svg"
                alt="Eagle Likes"
                width={196}
                height={42}
                className="object-contain w-full h-full"
                unoptimized
              />
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-0 mt-[30px] lg:mt-[60px] relative">
              {features.map((feature, index) => (
                <div key={index} className="mb-[5px] lg:mb-[10px] relative">
                  <div className="flex flex-row items-center gap-[4.89px] lg:gap-[9.78px] p-0">
                    <Image
                      src="/why-choose-us-center-1.svg"
                      alt="Center Icon"
                      width={16}
                      height={16}
                      className="shrink-0 w-2 h-2 lg:w-4 lg:h-4"
                    />
                    <span className="font-open-sans font-normal text-white text-[7.33px] lg:text-[14.67px] leading-[12.22px] lg:leading-[24.44px]">
                      {feature.eagleLikes}
                    </span>
                  </div>
                  <div className="w-[104px] lg:w-[252px] h-0 border-[0.4px] lg:border-[0.814758px] border-white opacity-30 mt-[5px] lg:mt-[10px]" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Card - Others */}
          <div className="absolute -right-15 min-[395px]:-right-12 lg:left-[620px] top-[-27.5px] lg:top-[-55px] w-[156px] lg:w-[312.05px] pb-[4.5px] lg:pb-[9px] z-10">
            {/* Others Header */}
            <div className="box-border flex flex-row justify-center items-center p-[6px_3px] min-[395px]:p-[8px_4px] lg:p-[16.15px_8.14758px] gap-[3px] min-[395px]:gap-[4px] lg:gap-[8.15px] w-[90px] min-[395px]:w-[95px] lg:w-full lg:max-w-[312.05px] h-[20px] min-[395px]:h-[22.8px] lg:h-[45.63px] bg-[rgba(6,99,205,0.15)] border-[0.4px] lg:border-[0.814758px] border-[rgba(6,99,205,0.5)] rounded-[6px] min-[395px]:rounded-[8px] lg:rounded-[16.2952px] mb-2.5 lg:mb-5">
              <span className="font-open-sans font-bold text-[#0663CD] text-[7px] min-[395px]:text-[8.15px] lg:text-[16.3px] leading-[12px] min-[395px]:leading-[14.26px] lg:leading-[28.52px] capitalize">
                Others
              </span>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-0 mt-[15px] lg:mt-[30px] relative">
              {features.map((feature, index) => (
                <div key={index} className="mb-[5px] lg:mb-[10px] relative">
                  <div className="flex flex-row items-center justify-start gap-[4.08px] lg:gap-[8.15px] p-0">
                    <Image
                      src="/why-choose-us-right-1.svg"
                      alt="Right Icon"
                      width={11}
                      height={11}
                      className="shrink-0 w-[5.5px] h-[5.5px] lg:w-[11px] lg:h-[11px]"
                    />
                    <span className="font-open-sans font-normal text-white text-[7.33px] lg:text-[14.67px] leading-[12.22px] lg:leading-[24.44px]">
                      {feature.others}
                    </span>
                  </div>
                  <div className="w-[90px] min-[395px]:w-[95px]  lg:w-[312.05px] h-0 border-[0.4px] lg:border-[0.814758px] border-white opacity-30 mt-[5px] lg:mt-[10px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
