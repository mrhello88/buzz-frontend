"use client";

import Image from "next/image";
import WhyChooseUs from "./WhyChooseUs";
import PrivacySection from "./PrivacySection";
import GetFollowersSection from "./GetFollowersSection";

export default function WhyInstagramFollowers() {
  return (
    <section className="relative w-full bg-black py-32">
      <div className="absolute -left-90 top-410 z-1 rounded-full w-96 h-96 bg-blue-600 opacity-80 blur-3xl" />
      <div className="absolute -right-90 top-620 z-1 rounded-full w-96 h-96 bg-blue-600 opacity-80 blur-3xl" />
      <div className="absolute -left-90 top-820 z-1 rounded-full w-96 h-96 bg-blue-600 opacity-80 blur-3xl" />
      <div className="absolute -right-90 top-1020 z-1 rounded-full w-96 h-96 bg-blue-600 opacity-80 blur-3xl" />
      <div className="absolute -left-90 top-1160 z-1 rounded-full w-96 h-96 bg-blue-600 opacity-80 blur-3xl" />

      {/* Main Container */}
      <div className="flex flex-col items-center gap-12 md:gap-[55px] w-full max-w-[1078px] py-20 mx-auto px-6">
      
        {/* Header Section */}
        <div className="flex flex-col items-center gap-6 md:gap-[30px] w-full">
          {/* Heading */}
          <h2 className="font-inter font-semibold text-white text-center text-[32px] md:text-[48px] leading-[130%] w-full max-w-[1241px]">
            Why Are{" "}
            <span className="text-[#FB64B6]">Instagram Followers</span>{" "}
            Important?
          </h2>

          {/* Description */}
          <p className="font-inter font-normal text-[#99A1AF] text-center text-base md:text-[18px] leading-7 md:leading-8 w-full max-w-[896px]">
            The followers are important because they represent your audience,
            your credibility, and your influence. A larger, more engaged
            following equates to reaching more people, building trust, and
            creating real opportunities for growth and brand success.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-start gap-12 md:gap-20 w-full">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-[178px] w-full">
            {/* Text Content */}
            <div className="flex flex-col items-center md:items-start gap-6 md:gap-[35px] w-full md:w-[517px] text-center md:text-left order-2 md:order-0">
              {/* Heading */}
              <h3 className="font-inter font-bold text-white text-[28px] md:text-[48px] leading-[36px] md:leading-[55px] capitalize w-full max-w-[503px]">
                why buy
                <br />Instagram Followers?
              </h3>

              {/* Description Container */}
              <div className="flex flex-col items-center md:items-start gap-4 w-full max-w-[390px]">
                <p className="font-inter font-semibold text-[#99A1AF] text-sm md:text-[18px] leading-6 md:leading-[30px] w-full m-0">
                  Buying Instagram followers can help you grow faster and
                  establish instant credibility in a competitive space. A larger
                  follower count makes your profile look trustworthy, attracts
                  real engagement, and increases your chances of being
                  discovered by new audiences.
                </p>
                <p className="font-inter font-normal text-[#99A1AF] text-xs md:text-base leading-5 md:leading-[26px] w-full m-0">
                  Whether you&apos;re a brand, influencer, or creator, more
                  followers can boost visibility, strengthen your reputation,
                  and open doors to new opportunities and collaborations.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative w-full md:w-[380px] h-[300px] md:h-[540px] rounded-[40px] md:rounded-[120px] overflow-hidden shadow-[0px_7px_30px_rgba(20,137,233,0.6)] shrink-0 order-1 md:order-1">
              <Image
                src="/why-instagram-follower-main-1.jpg"
                alt="Instagram followers growth"
                width={380}
                height={540}
                unoptimized
                className="w-full h-full object-cover rounded-[40px] md:rounded-[120px]"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-[300px] w-full">
            {/* Image */}
            <div className="relative w-full md:w-[380px] h-[300px] md:h-[540px] rounded-[40px] md:rounded-[100px] overflow-hidden shadow-[0px_7px_30px_rgba(20,137,233,0.6)] shrink-0 order-1 md:order-0">
              <Image
                src="/why-instagram-follower-main-2.jpg"
                alt="Boost organic growth"
                width={380}
                height={540}
                unoptimized
                className="w-full h-full object-cover rounded-[40px] md:rounded-[100px]"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-center md:items-start gap-6 md:gap-[35px] w-full md:w-[398px] text-center md:text-left order-2 md:order-1">
              {/* Heading */}
              <h3 className="font-inter font-bold text-white text-[28px] md:text-[48px] leading-[36px] md:leading-[55px] capitalize w-full max-w-[379px]">
                Boost Organic Growth
              </h3>

              {/* Description Container */}
              <div className="flex flex-col items-center md:items-start gap-4 w-full max-w-[520px]">
                <p className="font-inter font-semibold text-[#99A1AF] text-sm md:text-[18px] leading-6 md:leading-[30px] w-full max-w-[390px] m-0">
                  Boost your organic growth on Instagram by buying followers
                  from Eagle Likes. Our high-quality, real followers help
                  increase your visibility and attract genuine engagement. With
                  a stronger follower base, your content reaches more people
                  naturally, enhancing credibility and trust.
                </p>
                <p className="font-inter font-normal text-[#99A1AF] text-xs md:text-base leading-5 md:leading-[26px] w-full max-w-[390px] m-0">
                  Eagle Likes makes it easy to kickstart your growth and build
                  lasting success on Instagram—safely, quickly, and effectively
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUs />
      <PrivacySection />
      <GetFollowersSection />
    </section>
  );
}
