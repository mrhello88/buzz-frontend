"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "Why should I buy Instagram followers?",
      answer: "Buying Instagram followers can help you establish instant credibility and boost your profile's visibility. A larger follower count makes your account look more trustworthy and attractive to potential followers, brands, and collaborators. It helps you stand out in a competitive space and can accelerate your growth by attracting organic followers who see your popularity as social proof.",
    },
    {
      id: 2,
      question: "Can buying Instagram followers boost my organic engagement?",
      answer: "Yes, buying followers can help boost your organic engagement. When you have more followers, Instagram's algorithm tends to favor your content, giving it greater visibility. This increased exposure can lead to more likes, comments, and shares from both your purchased followers and new organic followers who discover your content. However, it's important to maintain high-quality, engaging content to maximize engagement.",
    },
    {
      id: 3,
      question: "How quickly will I receive Instagram followers after purchase?",
      answer: "At Eagle Likes, we offer fast delivery options. Most orders start processing immediately after purchase, and you can begin receiving followers within hours. The exact delivery time depends on the package size you choose. Smaller packages (100-500 followers) typically complete within 24-48 hours, while larger packages may take a few days to ensure safe and gradual delivery that protects your account.",
    },
    {
      id: 4,
      question: "Will my account get banned for buying Instagram followers?",
      answer: "No, your account will not get banned when you buy followers from Eagle Likes. We use safe, organic-looking delivery methods that mimic natural growth patterns. We never ask for your password, and all our followers come from real accounts. Our service is designed to be completely safe and compliant with Instagram's terms of service. We've served thousands of customers without any account issues.",
    },
    {
      id: 5,
      question: "Can buying Instagram followers help me get featured on the Explore page?",
      answer: "Yes, buying followers can increase your chances of appearing on the Explore page. Instagram's algorithm favors accounts with higher engagement rates and follower counts. When you buy followers and they engage with your content, it signals to Instagram that your account is popular and relevant, which can help your posts appear on the Explore page. Combined with quality content and consistent posting, purchased followers can significantly boost your visibility.",
    },
    {
      id: 6,
      question: "How do Instagram followers from Eagle Likes help with brand growth?",
      answer: "Instagram followers from Eagle Likes help with brand growth in multiple ways. A larger follower count increases your brand's credibility and makes you more attractive to potential customers and partners. It improves your social proof, which is crucial for building trust. More followers also mean greater reach for your content, helping you connect with your target audience more effectively. This can lead to increased website traffic, sales, and business opportunities.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center mx-auto w-full max-w-[932px] px-4">
      {/* Header Section */}
      <div className="flex flex-col items-center w-full max-w-[813px]">
        {/* Heading */}
        <h2 className="font-inter font-bold text-center capitalize text-[32px] md:text-[48px] leading-[40px] md:leading-[58px] text-white w-full">
          Frequently Asked Questions
        </h2>

        {/* Description */}
        <p className="font-inter font-normal text-center text-base leading-[30px] text-[#99A1AF] w-full max-w-[550px] mt-[30px] mb-10">
          Have questions? We&apos;ve got answers. Here are some of the most common queries about our Instagram Followers
        </p>
      </div>

      {/* FAQ Items */}
      <div className="flex flex-col items-start w-full max-w-[932px] gap-[15px]">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className="relative cursor-pointer overflow-hidden w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.15)] rounded-[15px] transition-all duration-300"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-center justify-between p-[27px_21px] w-full min-h-[71px]">
              <h3 className="font-inter font-semibold capitalize flex-1 min-w-0 text-white text-base md:text-[22px] leading-6 md:leading-[32px] pr-2.5">
                {faq.question}
              </h3>
              <ChevronDown
                className={`shrink-0 w-3 h-4 text-white opacity-70 ml-2.5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 px-[21px] ${
                openIndex === index
                  ? "max-h-[1000px] pb-[27px]"
                  : "max-h-0 pb-0"
              }`}
            >
              <p
                className={`font-inter font-normal text-base leading-[26px] text-[#99A1AF] transition-opacity duration-300 ${
                  openIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
