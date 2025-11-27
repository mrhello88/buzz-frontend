"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";

export default function FollowersPreview() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const scrollbarThumbRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -220, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 220, behavior: "smooth" });
    }
  };

  const handleScroll = useCallback(() => {
    if (
      scrollContainerRef.current &&
      scrollbarThumbRef.current &&
      scrollbarRef.current
    ) {
      const container = scrollContainerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;
      const scrollPercentage = maxScroll > 0 ? currentScroll / maxScroll : 0;

      const trackRect = scrollbarRef.current.getBoundingClientRect();
      const trackWidth = trackRect.width;
      const thumbWidth = trackWidth < 400 ? 44.5 : 104.45;
      const maxThumbPosition = trackWidth - thumbWidth;
      const thumbPosition = scrollPercentage * maxThumbPosition;
      scrollbarThumbRef.current.style.left = `${
        thumbPosition + (trackWidth < 400 ? 0.13 : 0.29)
      }px`;
    }
  }, []);

  const handleScrollbarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (scrollContainerRef.current && scrollbarRef.current) {
      const rect = scrollbarRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const trackWidth = rect.width;
      const thumbWidth = trackWidth < 400 ? 44.5 : 104.45;
      const clickPercentage = Math.max(
        0,
        Math.min(1, (clickX - thumbWidth / 2) / (trackWidth - thumbWidth))
      );

      const container = scrollContainerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      container.scrollTo({
        left: clickPercentage * maxScroll,
        behavior: "smooth",
      });
    }
  };

  const handleThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial position
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (e: MouseEvent) => {
        if (scrollContainerRef.current && scrollbarRef.current) {
          const rect = scrollbarRef.current.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const trackWidth = rect.width;
          const thumbWidth = trackWidth < 400 ? 44.5 : 104.45;
          const clickPercentage = Math.max(
            0,
            Math.min(1, (clickX - thumbWidth / 2) / (trackWidth - thumbWidth))
          );

          const container = scrollContainerRef.current;
          const maxScroll = container.scrollWidth - container.clientWidth;
          container.scrollTo({
            left: clickPercentage * maxScroll,
            behavior: "auto",
          });
        }
      };

      const handleMouseUp = () => {
        setIsDragging(false);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto gap-[22.632px] mt-[10px]">
      {/* Top Section - Rating & Stats */}
      <div className="flex flex-row items-center justify-center gap-[15px] min-[450px]:gap-[20px] min-[600px]:gap-[30px] mx-auto w-full">
        <div className="flex flex-row items-center gap-[8px] min-[450px]:gap-[12px] min-[600px]:gap-[16px] shrink-0">
          {/* Stars */}
          <div className="flex flex-row items-center gap-[4px] min-[450px]:gap-[6px] min-[600px]:gap-[8px] relative shrink-0 w-[76px] min-[450px]:w-[114px] min-[600px]:w-[152px] h-[12px] min-[450px]:h-[18px] min-[600px]:h-[24px]">
            {[1, 2, 3, 4, 5].map((star) => (
              <Image
                key={star}
                src="/follower-preview-star.svg"
                alt="Star"
                width={24}
                height={24}
                className="shrink-0 w-[12px] h-[12px] min-[450px]:w-[18px] min-[450px]:h-[18px] min-[600px]:w-[24px] min-[600px]:h-[24px]"
              />
            ))}
          </div>

          {/* Profile Pictures */}
          <div className="flex flex-row items-center relative shrink-0">
            {[1, 2, 3, 4].map((pic, index) => (
              <Image
                key={pic}
                src={`/testimonial-price-${pic}.png`}
                alt={`Testimonial ${pic}`}
                width={59}
                height={59}
                className={`rounded-full shrink-0 object-cover w-[30px] h-[30px] min-[450px]:w-[44px] min-[450px]:h-[44px] min-[600px]:w-[59px] min-[600px]:h-[59px] ${
                  index > 0 ? "ml-[-18px] min-[450px]:ml-[-26px] min-[600px]:ml-[-35.675px]" : ""
                }`}
                style={{
                  zIndex: 4 - index,
                }}
              />
            ))}
          </div>
        </div>

        {/* Stats Text */}
        <div className="flex flex-col items-center justify-center relative shrink-0 w-[115px] min-[450px]:w-[172px] min-[600px]:w-[229px] h-[22px] min-[450px]:h-[32px] min-[600px]:h-[43px]">
          <p className="font-open-sans font-normal text-white text-center leading-[18px] min-[450px]:leading-[24px] min-[600px]:leading-[30px] text-[12px] min-[450px]:text-[18px] min-[600px]:text-[24px] whitespace-pre-wrap">
            <span>38,571 people </span>
            <span className="font-inter font-medium text-[#01AAFF]">purchased 2+ times</span>
          </p>
        </div>
      </div>

      {/* Features Bar */}
      <div className="relative w-full h-[59px]">
        <div className="absolute inset-0 rounded-[50px] bg-[rgba(248,253,255,0.1)] border border-[rgba(196,229,242,0.1)] min-[640px]:border-[rgba(255,255,255,0.3)]" />
        <div className="absolute inset-0 flex flex-row items-center justify-center gap-[10px] min-[480px]:gap-[15px] min-[640px]:gap-[88px] px-[8px] min-[480px]:px-[12px] min-[640px]:px-[39.95px]">
          {/* Fast Checkout */}
          <div className="flex flex-row items-center gap-[6px] min-[480px]:gap-[8px] min-[640px]:gap-[10px] shrink-0">
            <div className="relative shrink-0 flex items-center justify-center w-[16px] min-[480px]:w-[18px] min-[640px]:w-[22px] h-[15px] min-[480px]:h-[17.438px] min-[640px]:h-[21.31px]">
              <div className="absolute inset-0 rounded-full bg-[#0663CD] w-[16px] min-[480px]:w-[18px] min-[640px]:w-[22px] h-[15px] min-[480px]:h-[17.438px] min-[640px]:h-[21.31px]" />
              <Image
                src="/follower-preview-correct-icon.svg"
                alt="Check Icon"
                width={22}
                height={21}
                className="relative shrink-0 w-[16px] min-[480px]:w-[18px] min-[640px]:w-[22px] h-[15px] min-[480px]:h-[17.438px] min-[640px]:h-[21.33px]"
              />
            </div>
            <span className="font-open-sans font-normal text-white text-[11px] min-[480px]:text-[13px] min-[640px]:text-[16px] leading-[16px] min-[480px]:leading-[20px] min-[640px]:leading-[30px] align-middle whitespace-nowrap">
              Fast Checkout
            </span>
          </div>

          {/* 100% Guarantee */}
          <div className="flex flex-row items-center gap-[6px] min-[480px]:gap-[8px] min-[640px]:gap-[10px] shrink-0">
            <div className="relative shrink-0 flex items-center justify-center w-[16px] min-[480px]:w-[18px] min-[640px]:w-[22px] h-[15px] min-[480px]:h-[17.438px] min-[640px]:h-[21.31px]">
              <div className="absolute inset-0 rounded-full bg-[#0663CD] w-[16px] min-[480px]:w-[18px] min-[640px]:w-[22px] h-[15px] min-[480px]:h-[17.438px] min-[640px]:h-[21.31px]" />
              <Image
                src="/follower-preview-correct-icon.svg"
                alt="Check Icon"
                width={22}
                height={21}
                className="relative shrink-0 w-[16px] min-[480px]:w-[18px] min-[640px]:w-[22px] h-[15px] min-[480px]:h-[17.438px] min-[640px]:h-[21.33px]"
              />
            </div>
            <span className="font-open-sans font-normal text-white text-[11px] min-[480px]:text-[13px] min-[640px]:text-[16px] leading-[16px] min-[480px]:leading-[20px] min-[640px]:leading-[30px] align-middle whitespace-nowrap">
              100% Guarantee
            </span>
          </div>

          {/* 24/7 Support */}
          <div className="flex flex-row items-center gap-[6px] min-[480px]:gap-[8px] min-[640px]:gap-[10px] shrink-0">
            <div className="relative shrink-0 flex items-center justify-center w-[16px] min-[480px]:w-[18px] min-[640px]:w-[22px] h-[15px] min-[480px]:h-[17.438px] min-[640px]:h-[21.31px]">
              <div className="absolute inset-0 rounded-full bg-[#0663CD] w-[16px] min-[480px]:w-[18px] min-[640px]:w-[22px] h-[15px] min-[480px]:h-[17.438px] min-[640px]:h-[21.31px]" />
              <Image
                src="/follower-preview-correct-icon.svg"
                alt="Check Icon"
                width={22}
                height={21}
                className="relative shrink-0 w-[16px] min-[480px]:w-[18px] min-[640px]:w-[22px] h-[15px] min-[480px]:h-[17.438px] min-[640px]:h-[21.33px]"
              />
            </div>
            <span className="font-open-sans font-normal text-white text-[11px] min-[480px]:text-[13px] min-[640px]:text-[16px] leading-[16px] min-[480px]:leading-[20px] min-[640px]:leading-[30px] align-middle whitespace-nowrap">
              24/7 Support
            </span>
          </div>
        </div>
      </div>

      {/* Followers Preview Card */}
      <div className="relative w-full h-[211px] md:h-[353px] overflow-hidden">
        {/* Background Card */}
        <div className="absolute inset-0 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.15)] shadow-[0px_0px_2.84px_rgba(0,0,0,0.2)] md:shadow-[0px_0px_4.748px_rgba(0,0,0,0.2)] rounded-[14.202px] md:rounded-[23.738px]" />

        {/* Header */}
        <div className="absolute flex flex-row items-center justify-between left-[11.36px] md:left-[16.4px] right-[11.36px] md:right-[16.4px] top-[7.61px] md:top-[13.06px] h-[26.273px] md:h-[43.915px]">
          <div className="flex flex-row items-center whitespace-nowrap gap-[8.521px] md:gap-[14.243px] h-auto md:h-[26.111px] shrink-0">
            <Image
              src="/follower-preview-person-icon.svg"
              alt="Person Icon"
              width={24}
              height={26}
              className="shrink-0 w-[14.202px] h-[15.622px] md:w-[23.738px] md:h-[26.111px]"
            />
            <span className="font-open-sans font-semibold text-white whitespace-nowrap text-[14.202px] md:text-[23.738px] leading-[21.303px] md:leading-[35.607px]">
              Followers Preview
            </span>
          </div>
          <div className="flex flex-row justify-center items-center whitespace-nowrap p-[7.101px] md:p-[11.869px] gap-[2.84px] md:gap-[4.748px] shrink-0 h-[26.273px] md:h-[43.915px] bg-[rgba(255,255,255,0.2)] rounded-[35.505px] md:rounded-[59.344px]">
            <Image
              src="/follower-preview-star.svg"
              alt="Star"
              width={23}
              height={23}
              className="shrink-0 w-[13.492px] h-[13.492px] md:w-[22.551px] md:h-[22.551px]"
            />
            <span className="font-open-sans font-semibold text-[#01AAFF] whitespace-nowrap text-[9.941px] md:text-[16.616px] leading-[21.303px] md:leading-[35.607px]">
              Real Followers
            </span>
          </div>
        </div>

        {/* Divider Line */}
        <div className="absolute w-full h-0 left-0 top-[41.7px] md:top-[70.01px] border-[0.71px] md:border-[1.18688px] border-solid border-[rgba(255,255,255,0.2)]" />

        {/* Follower Cards - Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="absolute overflow-x-auto overflow-y-hidden scrollbar-hide left-[9px] md:left-[13.85px] right-[9px] md:right-[13.85px] top-[54.82px] md:top-[92.59px] w-[calc(100%-18px)] md:w-[calc(100%-27.7px)] h-auto md:h-[197.02px]"
        >
          <div className="flex flex-row gap-[14.202px] md:gap-[23.738px] w-full">
            {/* First Set of Cards */}
            <div className="flex flex-col shrink-0 gap-[7.811px] md:gap-[13.056px] w-full">
              {/* Row 1 */}
              <div className="flex flex-row gap-[14.202px] md:gap-[23.738px] w-full h-[34.084px] md:h-[56.97px]">
                {/* Card 1 */}
                <div className="relative flex-1 min-w-0 h-[34.084px] md:h-[56.97px]">
                  <div className="absolute inset-0 bg-[rgba(237,237,237,0.05)] border border-[rgba(255,255,255,0.15)] md:border-[rgba(255,255,255,0.1)] rounded-[10.651px] md:rounded-[17.803px]" />
                  <div className="absolute flex flex-row items-center left-[4.26px] md:left-[7.12px] top-[4.26px] md:top-[7.12px] gap-[6.391px] md:gap-[10.682px] right-[4.26px] md:right-[7.12px] h-auto md:h-[43.915px]">
                    <Image
                      src="/follower-preview-1.png"
                      alt="Follower 1"
                      width={44}
                      height={44}
                      className="rounded-full shrink-0 object-cover w-[26.273px] h-[26.273px] md:w-[43.915px] md:h-[43.915px]"
                    />
                    <div className="flex flex-row items-center gap-[7.101px] md:gap-[11.869px] flex-1 min-w-0 h-auto md:h-[35.607px]">
                      <span className="font-open-sans font-normal text-white text-[9.941px] md:text-[16.616px] leading-[21.303px] md:leading-[35.607px] align-middle truncate">
                        started following you.
                      </span>
                      <span className="font-open-sans font-normal text-white text-right text-[8.521px] md:text-[14.243px] leading-[21.303px] md:leading-[35.607px] align-middle shrink-0">
                        10m
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="relative flex-1 min-w-0 h-[34.084px] md:h-[56.97px]">
                  <div className="absolute inset-0 bg-[rgba(237,237,237,0.05)] border border-[rgba(255,255,255,0.15)] md:border-[rgba(255,255,255,0.1)] rounded-[10.651px] md:rounded-[17.803px]" />
                  <div className="absolute flex flex-row items-center left-[4.26px] md:left-[7.12px] top-[4.26px] md:top-[7.12px] gap-[6.391px] md:gap-[10.682px] right-[4.26px] md:right-[7.12px] h-auto md:h-[43.915px]">
                    <Image
                      src="/follower-preview-2.png"
                      alt="Follower 2"
                      width={44}
                      height={44}
                      className="rounded-full shrink-0 object-cover w-[26.273px] h-[26.273px] md:w-[43.915px] md:h-[43.915px]"
                    />
                    <div className="flex flex-row items-center gap-[7.101px] md:gap-[11.869px] flex-1 min-w-0 h-auto md:h-[35.607px]">
                      <span className="font-open-sans font-normal text-white text-[9.941px] md:text-[16.616px] leading-[21.303px] md:leading-[35.607px] align-middle truncate">
                        started following you.
                      </span>
                      <span className="font-open-sans font-normal text-white text-right text-[8.521px] md:text-[14.243px] leading-[21.303px] md:leading-[35.607px] align-middle shrink-0">
                        30m
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-row gap-[14.202px] md:gap-[23.738px] w-full h-[34.084px] md:h-[56.97px]">
                {/* Card 3 */}
                <div className="relative flex-1 min-w-0 h-[34.084px] md:h-[56.97px]">
                  <div className="absolute inset-0 bg-[rgba(237,237,237,0.05)] border border-[rgba(255,255,255,0.15)] md:border-[rgba(255,255,255,0.1)] rounded-[10.651px] md:rounded-[17.803px]" />
                  <div className="absolute flex flex-row items-center left-[4.26px] md:left-[7.12px] top-[4.26px] md:top-[7.12px] gap-[6.391px] md:gap-[10.682px] right-[4.26px] md:right-[7.12px] h-auto md:h-[43.915px]">
                    <Image
                      src="/follower-preview-3.png"
                      alt="Follower 3"
                      width={44}
                      height={44}
                      className="rounded-full shrink-0 object-cover w-[26.273px] h-[26.273px] md:w-[43.915px] md:h-[43.915px]"
                    />
                    <div className="flex flex-row items-center gap-[7.101px] md:gap-[11.869px] flex-1 min-w-0 h-auto md:h-[35.607px]">
                      <span className="font-open-sans font-normal text-white text-[9.941px] md:text-[16.616px] leading-[21.303px] md:leading-[35.607px] align-middle truncate">
                        started following you.
                      </span>
                      <span className="font-open-sans font-normal text-white text-right text-[8.521px] md:text-[14.243px] leading-[21.303px] md:leading-[35.607px] align-middle shrink-0">
                        15m
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="relative flex-1 min-w-0 h-[34.084px] md:h-[56.97px]">
                  <div className="absolute inset-0 bg-[rgba(237,237,237,0.05)] border border-[rgba(255,255,255,0.15)] md:border-[rgba(255,255,255,0.1)] rounded-[10.651px] md:rounded-[17.803px]" />
                  <div className="absolute flex flex-row items-center left-[4.26px] md:left-[7.12px] top-[4.26px] md:top-[7.12px] gap-[6.391px] md:gap-[10.682px] right-[4.26px] md:right-[7.12px] h-auto md:h-[43.915px]">
                    <Image
                      src="/follower-preview-4.png"
                      alt="Follower 4"
                      width={44}
                      height={44}
                      className="rounded-full shrink-0 object-cover w-[26.273px] h-[26.273px] md:w-[43.915px] md:h-[43.915px]"
                    />
                    <div className="flex flex-row items-center gap-[7.101px] md:gap-[11.869px] flex-1 min-w-0 h-auto md:h-[35.607px]">
                      <span className="font-open-sans font-normal text-white text-[9.941px] md:text-[16.616px] leading-[21.303px] md:leading-[35.607px] align-middle truncate">
                        started following you.
                      </span>
                      <span className="font-open-sans font-normal text-white text-right text-[8.521px] md:text-[14.243px] leading-[21.303px] md:leading-[35.607px] align-middle shrink-0">
                        50m
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex flex-row gap-[14.202px] md:gap-[23.738px] w-full h-[34.084px] md:h-[56.97px]">
                {/* Card 5 */}
                <div className="relative flex-1 min-w-0 h-[34.084px] md:h-[56.97px]">
                  <div className="absolute inset-0 bg-[rgba(237,237,237,0.05)] border border-[rgba(255,255,255,0.15)] md:border-[rgba(255,255,255,0.1)] rounded-[10.651px] md:rounded-[17.803px]" />
                  <div className="absolute flex flex-row items-center left-[4.26px] md:left-[7.12px] top-[4.26px] md:top-[7.12px] gap-[6.391px] md:gap-[10.682px] right-[4.26px] md:right-[7.12px] h-auto md:h-[43.915px]">
                    <Image
                      src="/follower-preview-5.png"
                      alt="Follower 5"
                      width={44}
                      height={44}
                      className="rounded-full shrink-0 object-cover w-[26.273px] h-[26.273px] md:w-[43.915px] md:h-[43.915px]"
                    />
                    <div className="flex flex-row items-center gap-[7.101px] md:gap-[11.869px] flex-1 min-w-0 h-auto md:h-[35.607px]">
                      <span className="font-open-sans font-normal text-white text-[9.941px] md:text-[16.616px] leading-[21.303px] md:leading-[35.607px] align-middle truncate">
                        started following you.
                      </span>
                      <span className="font-open-sans font-normal text-white text-right text-[8.521px] md:text-[14.243px] leading-[21.303px] md:leading-[35.607px] align-middle shrink-0">
                        20m
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card 6 */}
                <div className="relative flex-1 min-w-0 h-[34.084px] md:h-[56.97px]">
                  <div className="absolute inset-0 bg-[rgba(237,237,237,0.05)] border border-[rgba(255,255,255,0.15)] md:border-[rgba(255,255,255,0.1)] rounded-[10.651px] md:rounded-[17.803px]" />
                  <div className="absolute flex flex-row items-center left-[4.26px] md:left-[7.12px] top-[4.26px] md:top-[7.12px] gap-[6.391px] md:gap-[10.682px] right-[4.26px] md:right-[7.12px] h-auto md:h-[43.915px]">
                    <Image
                      src="/follower-preview-6.png"
                      alt="Follower 6"
                      width={44}
                      height={44}
                      className="rounded-full shrink-0 object-cover w-[26.273px] h-[26.273px] md:w-[43.915px] md:h-[43.915px]"
                    />
                    <div className="flex flex-row items-center gap-[7.101px] md:gap-[11.869px] flex-1 min-w-0 h-auto md:h-[35.607px]">
                      <span className="font-open-sans font-normal text-white text-[9.941px] md:text-[16.616px] leading-[21.303px] md:leading-[35.607px] align-middle truncate">
                        started following you.
                      </span>
                      <span className="font-open-sans font-normal text-white text-right text-[8.521px] md:text-[14.243px] leading-[21.303px] md:leading-[35.607px] align-middle shrink-0">
                        55m
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Duplicate Set of Cards for Infinite Scroll */}
            <div className="flex flex-col shrink-0 gap-[7.811px] md:gap-[13.056px] w-full">
              {/* Row 1 */}
              <div className="flex flex-row gap-[14.202px] md:gap-[23.738px] w-full h-[34.084px] md:h-[56.97px]">
                {/* Card 1 */}
                <div className="relative flex-1 min-w-0 h-[34.084px] md:h-[56.97px]">
                  <div className="absolute inset-0 bg-[rgba(237,237,237,0.05)] border border-[rgba(255,255,255,0.15)] md:border-[rgba(255,255,255,0.1)] rounded-[10.651px] md:rounded-[17.803px]" />
                  <div className="absolute flex flex-row items-center left-[4.26px] md:left-[7.12px] top-[4.26px] md:top-[7.12px] gap-[6.391px] md:gap-[10.682px] right-[4.26px] md:right-[7.12px] h-auto md:h-[43.915px]">
                    <Image
                      src="/follower-preview-1.png"
                      alt="Follower 1"
                      width={44}
                      height={44}
                      className="rounded-full shrink-0 object-cover w-[26.273px] h-[26.273px] md:w-[43.915px] md:h-[43.915px]"
                    />
                    <div className="flex flex-row items-center gap-[7.101px] md:gap-[11.869px] flex-1 min-w-0 h-auto md:h-[35.607px]">
                      <span className="font-open-sans font-normal text-white text-[9.941px] md:text-[16.616px] leading-[21.303px] md:leading-[35.607px] align-middle truncate">
                        started following you.
                      </span>
                      <span className="font-open-sans font-normal text-white text-right text-[8.521px] md:text-[14.243px] leading-[21.303px] md:leading-[35.607px] align-middle shrink-0">
                        10m
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="relative flex-1 min-w-0 h-[34.084px] md:h-[56.97px]">
                  <div className="absolute inset-0 bg-[rgba(237,237,237,0.05)] border border-[rgba(255,255,255,0.15)] md:border-[rgba(255,255,255,0.1)] rounded-[10.651px] md:rounded-[17.803px]" />
                  <div className="absolute flex flex-row items-center left-[4.26px] md:left-[7.12px] top-[4.26px] md:top-[7.12px] gap-[6.391px] md:gap-[10.682px] right-[4.26px] md:right-[7.12px] h-auto md:h-[43.915px]">
                    <Image
                      src="/follower-preview-2.png"
                      alt="Follower 2"
                      width={44}
                      height={44}
                      className="rounded-full shrink-0 object-cover w-[26.273px] h-[26.273px] md:w-[43.915px] md:h-[43.915px]"
                    />
                    <div className="flex flex-row items-center gap-[7.101px] md:gap-[11.869px] flex-1 min-w-0 h-auto md:h-[35.607px]">
                      <span className="font-open-sans font-normal text-white text-[9.941px] md:text-[16.616px] leading-[21.303px] md:leading-[35.607px] align-middle truncate">
                        started following you.
                      </span>
                      <span className="font-open-sans font-normal text-white text-right text-[8.521px] md:text-[14.243px] leading-[21.303px] md:leading-[35.607px] align-middle shrink-0">
                        30m
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-row gap-[14.202px] md:gap-[23.738px] w-full h-[34.084px] md:h-[56.97px]">
                {/* Card 3 */}
                <div className="relative flex-1 min-w-0 h-[34.084px] md:h-[56.97px]">
                  <div className="absolute inset-0 bg-[rgba(237,237,237,0.05)] border border-[rgba(255,255,255,0.15)] md:border-[rgba(255,255,255,0.1)] rounded-[10.651px] md:rounded-[17.803px]" />
                  <div className="absolute flex flex-row items-center left-[4.26px] md:left-[7.12px] top-[4.26px] md:top-[7.12px] gap-[6.391px] md:gap-[10.682px] right-[4.26px] md:right-[7.12px] h-auto md:h-[43.915px]">
                    <Image
                      src="/follower-preview-3.png"
                      alt="Follower 3"
                      width={44}
                      height={44}
                      className="rounded-full shrink-0 object-cover w-[26.273px] h-[26.273px] md:w-[43.915px] md:h-[43.915px]"
                    />
                    <div className="flex flex-row items-center gap-[7.101px] md:gap-[11.869px] flex-1 min-w-0 h-auto md:h-[35.607px]">
                      <span className="font-open-sans font-normal text-white text-[9.941px] md:text-[16.616px] leading-[21.303px] md:leading-[35.607px] align-middle truncate">
                        started following you.
                      </span>
                      <span className="font-open-sans font-normal text-white text-right text-[8.521px] md:text-[14.243px] leading-[21.303px] md:leading-[35.607px] align-middle shrink-0">
                        15m
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="relative flex-1 min-w-0 h-[34.084px] md:h-[56.97px]">
                  <div className="absolute inset-0 bg-[rgba(237,237,237,0.05)] border border-[rgba(255,255,255,0.15)] md:border-[rgba(255,255,255,0.1)] rounded-[10.651px] md:rounded-[17.803px]" />
                  <div className="absolute flex flex-row items-center left-[4.26px] md:left-[7.12px] top-[4.26px] md:top-[7.12px] gap-[6.391px] md:gap-[10.682px] right-[4.26px] md:right-[7.12px] h-auto md:h-[43.915px]">
                    <Image
                      src="/follower-preview-4.png"
                      alt="Follower 4"
                      width={44}
                      height={44}
                      className="rounded-full shrink-0 object-cover w-[26.273px] h-[26.273px] md:w-[43.915px] md:h-[43.915px]"
                    />
                    <div className="flex flex-row items-center gap-[7.101px] md:gap-[11.869px] flex-1 min-w-0 h-auto md:h-[35.607px]">
                      <span className="font-open-sans font-normal text-white text-[9.941px] md:text-[16.616px] leading-[21.303px] md:leading-[35.607px] align-middle truncate">
                        started following you.
                      </span>
                      <span className="font-open-sans font-normal text-white text-right text-[8.521px] md:text-[14.243px] leading-[21.303px] md:leading-[35.607px] align-middle shrink-0">
                        50m
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex flex-row gap-[14.202px] md:gap-[23.738px] w-full h-[34.084px] md:h-[56.97px]">
                {/* Card 5 */}
                <div className="relative flex-1 min-w-0 h-[34.084px] md:h-[56.97px]">
                  <div className="absolute inset-0 bg-[rgba(237,237,237,0.05)] border border-[rgba(255,255,255,0.15)] md:border-[rgba(255,255,255,0.1)] rounded-[10.651px] md:rounded-[17.803px]" />
                  <div className="absolute flex flex-row items-center left-[4.26px] md:left-[7.12px] top-[4.26px] md:top-[7.12px] gap-[6.391px] md:gap-[10.682px] right-[4.26px] md:right-[7.12px] h-auto md:h-[43.915px]">
                    <Image
                      src="/follower-preview-5.png"
                      alt="Follower 5"
                      width={44}
                      height={44}
                      className="rounded-full shrink-0 object-cover w-[26.273px] h-[26.273px] md:w-[43.915px] md:h-[43.915px]"
                    />
                    <div className="flex flex-row items-center gap-[7.101px] md:gap-[11.869px] flex-1 min-w-0 h-auto md:h-[35.607px]">
                      <span className="font-open-sans font-normal text-white text-[9.941px] md:text-[16.616px] leading-[21.303px] md:leading-[35.607px] align-middle truncate">
                        started following you.
                      </span>
                      <span className="font-open-sans font-normal text-white text-right text-[8.521px] md:text-[14.243px] leading-[21.303px] md:leading-[35.607px] align-middle shrink-0">
                        20m
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card 6 */}
                <div className="relative flex-1 min-w-0 h-[34.084px] md:h-[56.97px]">
                  <div className="absolute inset-0 bg-[rgba(237,237,237,0.05)] border border-[rgba(255,255,255,0.15)] md:border-[rgba(255,255,255,0.1)] rounded-[10.651px] md:rounded-[17.803px]" />
                  <div className="absolute flex flex-row items-center left-[4.26px] md:left-[7.12px] top-[4.26px] md:top-[7.12px] gap-[6.391px] md:gap-[10.682px] right-[4.26px] md:right-[7.12px] h-auto md:h-[43.915px]">
                    <Image
                      src="/follower-preview-6.png"
                      alt="Follower 6"
                      width={44}
                      height={44}
                      className="rounded-full shrink-0 object-cover w-[26.273px] h-[26.273px] md:w-[43.915px] md:h-[43.915px]"
                    />
                    <div className="flex flex-row items-center gap-[7.101px] md:gap-[11.869px] flex-1 min-w-0 h-auto md:h-[35.607px]">
                      <span className="font-open-sans font-normal text-white text-[9.941px] md:text-[16.616px] leading-[21.303px] md:leading-[35.607px] align-middle truncate">
                        started following you.
                      </span>
                      <span className="font-open-sans font-normal text-white text-right text-[8.521px] md:text-[14.243px] leading-[21.303px] md:leading-[35.607px] align-middle shrink-0">
                        55m
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollbar */}
        <div className="absolute flex flex-row items-center gap-[6.391px] md:gap-[10.682px] left-[9px] md:left-[14.65px] right-[9px] md:right-[14.65px] top-[186.82px] md:top-[312.16px] w-[calc(100%-18px)] md:w-[calc(100%-29.3px)] h-[8.521px] md:h-[14.243px]">
          <button onClick={scrollLeft} className="cursor-pointer">
            <Image
              src="/scroll-left-icon.svg"
              alt="Scroll Left"
              width={10}
              height={10}
              className="shrink-0 w-[5.681px] h-[5.681px] md:w-[9.495px] md:h-[9.495px]"
            />
          </button>
          <div
            ref={scrollbarRef}
            onClick={handleScrollbarClick}
            className="relative flex-1 cursor-pointer h-[8.521px] md:h-[14.243px]"
          >
            <div className="absolute inset-0 bg-[rgba(255,255,255,0.3)] md:bg-[rgba(255,255,255,0.1)] rounded-[21.303px] md:rounded-[35.607px]" />
            <div
              ref={scrollbarThumbRef}
              onMouseDown={handleThumbMouseDown}
              className="absolute inset-y-0 cursor-grab active:cursor-grabbing bg-white rounded-[21.303px] md:rounded-[35.607px] w-[44.5px] md:w-[104.446px] left-[0.13px] md:left-[0.3px]"
            />
          </div>
          <button onClick={scrollRight} className="cursor-pointer">
            <Image
              src="/scroll-right-icon.svg"
              alt="Scroll Right"
              width={10}
              height={10}
              className="shrink-0 w-[5.681px] h-[5.681px] md:w-[9.495px] md:h-[9.495px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
