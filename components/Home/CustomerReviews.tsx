"use client";

import Image from "next/image";
import Link from "next/link";

export default function CustomerReviews() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-[20px] mt-12">
      {/* Stars and Reviews Text */}
      <div className="flex flex-row items-center justify-center w-full gap-[14px]">
        {/* Stars */}
        <div className="flex flex-row items-center justify-center shrink-0 w-[65px] min-[450px]:w-[130px] h-[11px] min-[450px]:h-[22px] gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Image
              key={star}
              src="/herosection-customer-star-icon.svg"
              alt="Star"
              width={22}
              height={22}
              className="shrink-0 w-[11px] h-[11px] min-[450px]:w-[22px] min-[450px]:h-[22px]"
            />
          ))}
        </div>
        {/* Reviews Text */}
        <div className="flex flex-col justify-center relative shrink-0 w-[125px] min-[450px]:w-[249px] h-[8px] min-[450px]:h-[16px]">
          <p className="font-open-sans font-normal text-white leading-[15px] min-[450px]:leading-[30px] text-[8px] min-[450px]:text-[16px] whitespace-pre-wrap">
            <span>8000+ Verified </span>
            <Link
              href="https://twicsy.com/reviews"
              className="cursor-pointer md:no-underline underline"
            >
              Customer Reviews
            </Link>
          </p>
        </div>
      </div>
      {/* Users Count Text */}
      <div className="flex flex-col justify-center relative shrink-0 w-full h-[8px] min-[450px]:h-[16px]">
        <p className="font-open-sans font-normal text-white text-center leading-[15px] min-[450px]:leading-[30px] text-[8px] min-[450px]:text-[16px] whitespace-pre-wrap">
          5 million individual users and counting
        </p>
      </div>
    </div>
  );
}

