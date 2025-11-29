"use client";

import Image from "next/image";

export default function PrivacySection() {
  return (
    <section className="relative w-full bg-black pb-24 sm:pb-32 pt-0">
     
      {/* Main Container */}
      <div className="flex flex-col items-center gap-12 md:gap-[55px] w-full max-w-[1078px] mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-6 md:gap-[30px] w-full">
          {/* Heading */}
          <h2 className="font-inter font-semibold text-white text-center text-[32px] md:text-[48px] leading-[130%] w-full max-w-[1241px]">
            Your Privacy is Our Focus
          </h2>

          {/* Description */}
          <p className="font-inter font-normal text-[#99A1AF] text-center text-base md:text-[18px] leading-7 md:leading-8 w-full max-w-[896px]">
            Being careful about your safety online is smart, scammers constantly
            look for ways to steal from unsuspecting users. You should also
            protect your social media accounts, as platforms have detailed rules
            that can be violated easily by mistake.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-start gap-12 md:gap-20 w-full">
          {/* Row 1 - Secure Payments */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-[178px] w-full">
            {/* Text Content */}
            <div className="flex flex-col items-center md:items-start gap-6 md:gap-[35px] w-full md:w-[517px] text-center md:text-left order-2 md:order-0">
              {/* Heading */}
              <h3 className="font-inter font-bold text-white text-[28px] md:text-[48px] leading-[36px] md:leading-[55px] capitalize w-full max-w-[410px]">
                Secure Payments
              </h3>

              {/* Description Container */}
              <div className="flex flex-col items-center md:items-start gap-4 w-full max-w-[390px]">
                <p className="font-inter font-semibold text-[#99A1AF] text-sm md:text-[18px] leading-6 md:leading-[30px] w-full m-0">
                  Your online payment details can be vulnerable without proper
                  protection. That&apos;s why we use the latest security
                  protocols and advanced fraud prevention systems to keep your
                  information completely safe.
                </p>
                <p className="font-inter font-normal text-[#99A1AF] text-xs md:text-base leading-5 md:leading-[26px] w-full m-0">
                  Every transaction on our platform is securely encrypted, and
                  we operate on advanced, protected servers to ensure your
                  financial information stays completely safe from hackers and
                  cybercriminals.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative w-full md:w-[380px] h-[300px] md:h-[540px] rounded-[40px] md:rounded-[120px] overflow-hidden shadow-[0px_7px_30px_rgba(20,137,233,0.6)] shrink-0 order-1 md:order-1">
              <Image
                src="/why-instagram-follower-main-4.png"
                alt="Secure Payments"
                width={380}
                height={540}
                unoptimized
                className="w-full h-full object-cover rounded-[40px] md:rounded-[120px]"
              />
            </div>
          </div>

          {/* Row 2 - Data Protection */}
          <div className="flex flex-col pb-24 md:flex-row items-center gap-8 md:gap-[300px] w-full">
            {/* Image */}
            <div className="relative w-full md:w-[380px] h-[300px] md:h-[540px] rounded-[40px] md:rounded-[100px] overflow-hidden shadow-[0px_7px_30px_rgba(20,137,233,0.6)] shrink-0 order-1 md:order-0">
              <Image
                src="/why-instagram-follower-main-5.png"
                alt="Data Protection"
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
                Data Protection
              </h3>

              {/* Description Container */}
              <div className="flex flex-col items-center md:items-start gap-4 w-full max-w-[520px]">
                <p className="font-inter font-semibold text-[#99A1AF] text-sm md:text-[18px] leading-6 md:leading-[30px] w-full max-w-[390px] m-0">
                  Your privacy is our top priority. No one will ever know
                  you&apos;ve purchased Instagram followers from Eagle Likes. We
                  strictly protect all client data, including your identity and
                  account details, with advanced encryption and security. We
                  never share customer information—ever.
                </p>
                <p className="font-inter font-normal text-[#99A1AF] text-xs md:text-base leading-5 md:leading-[26px] w-full max-w-[390px] m-0">
                  You can order privately no full name required and we offer
                  privacy-friendly payment options like Bitcoin and cards. We
                  also never ask for your Instagram password, so your account
                  remains fully secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
