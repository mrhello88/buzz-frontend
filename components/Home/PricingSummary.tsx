"use client";

import Image from "next/image";

export default function PricingSummary() {
  return (
    <div className="flex flex-col min-[600px]:flex-row items-center min-[600px]:items-center justify-center w-full max-w-4xl mx-auto gap-[26px] min-[600px]:gap-0 -mt-[70px] min-[600px]:mt-0">
      {/* Left Section - Pricing Details */}
      <div className="flex flex-col items-center gap-[10px] relative shrink-0 w-[181px] min-[600px]:w-[278px]">
        {/* Price Section */}
        <div className="flex flex-col items-start relative shrink-0 w-full" style={{ gap: "26px" }}>
          <div className="capitalize font-semibold relative shrink-0 w-full" style={{ height: "36px" }}>
            <span className="font-inter font-semibold text-white capitalize absolute text-[35px] min-[600px]:text-[48px] leading-[88px] left-[58px] min-[600px]:left-[66.5px] top-[18px] min-[600px]:top-[18.2px] transform translate-x-[-50%] translate-y-[-50%] w-[116px] min-[600px]:w-[133px] text-center">
              $2.97
            </span>
            <span className="font-rethink-sans font-semibold text-[#b1b0b0] capitalize line-through absolute text-[15px] min-[600px]:text-[20px] leading-[20px] left-[110px] min-[600px]:left-[139.04px] top-[10.6px] min-[600px]:top-[7.5px] transform translate-y-[-50%] w-[47px] min-[600px]:w-[57.052px]">
              $3.62
            </span>
          </div>
        </div>

        {/* Savings Section */}
        <div className="flex flex-row items-center gap-[14px] relative shrink-0 w-[194px] min-[600px]:w-full">
          <span className="font-inter font-medium text-white relative shrink-0 text-[14px] min-[600px]:text-[20px] leading-[28.636px] w-[88px] min-[600px]:w-[128px] h-[18px]">
            you&apos;re saving
          </span>
          <div className="flex flex-row items-center gap-[14px] relative shrink-0 w-[86px]">
            <div className="relative shrink-0 mt-2 rounded-full" style={{ width: "30px", height: "30px", backgroundColor: "rgba(255, 255, 255, 0.15)" }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/hand-icon.svg"
                  alt="Hand Icon"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </div>
            </div>
            <span className="font-inter font-semibold text-[#01aaff] relative shrink-0 text-[14px] min-[600px]:text-[20px] leading-[28.636px] w-[47px] min-[600px]:w-[67px] h-[20px] min-[600px]:h-[11px]">
              $0.65
            </span>
          </div>
        </div>
      </div>

      {/* Right Section - Buy Now Button */}
      <div className="flex flex-row justify-center items-center relative shrink-0 rounded-[10px] w-[350px] min-[600px]:w-[277px] h-[49px] min-[600px]:h-[68px] px-[28px] py-[16px] gap-[10px]" style={{ background: "linear-gradient(90deg, #0663CD 0%, #01AAFF 100%)" }}>
        <span className="font-open-sans font-bold text-white capitalize whitespace-nowrap text-[16px] min-[600px]:text-[22px] leading-normal">
          buy now
        </span>
      </div>
    </div>
  );
}
