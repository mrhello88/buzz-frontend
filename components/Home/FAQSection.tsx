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
    <div
      className="flex flex-col items-center mx-auto"
      style={{
        width: "932px",
        maxWidth: "100%",
      }}
    >
      {/* Header Section */}
      <div
        className="flex flex-col items-center"
        style={{
          width: "813px",
          maxWidth: "100%",
        }}
      >
        {/* Heading */}
        <h2
          className="font-inter text-center capitalize"
          style={{
            fontFamily: "Inter",
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: "58px",
            color: "#FFFFFF",
            width: "813px",
            maxWidth: "100%",
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          Frequently Asked Questions
        </h2>

        {/* Description */}
        <p
          className="font-inter text-center"
          style={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "30px",
            color: "#99A1AF",
            width: "550px",
            maxWidth: "100%",
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "40px",
          }}
        >
          Have questions? We&apos;ve got answers. Here are some of the most common queries about our Instagram Followers
        </p>
      </div>

      {/* FAQ Items */}
      <div
        className="flex flex-col items-start"
        style={{
          width: "932px",
          maxWidth: "100%",
          gap: "15px",
        }}
      >
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className="relative cursor-pointer overflow-hidden"
            style={{
              width: "932px",
              maxWidth: "100%",
              opacity: 1,
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "15px",
              transition: "all 0.3s ease-in-out",
            }}
            onClick={() => toggleFAQ(index)}
          >
            <div
              className="flex items-center justify-between"
              style={{
                padding: "27px 21px",
                width: "932px",
                height: "71px",
              }}
            >
              <h3
                className="font-inter capitalize flex-1"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "22px",
                  lineHeight: "58px",
                  color: "#FFFFFF",
                  textTransform: "capitalize",
                }}
              >
                {faq.question}
              </h3>
              <ChevronDown
                className="shrink-0"
                style={{
                  width: "12px",
                  height: "16px",
                  color: "#FFFFFF",
                  opacity: 0.7,
                  transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  marginLeft: "10px",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </div>
            <div
              className="overflow-hidden"
              style={{
                maxHeight: openIndex === index ? "1000px" : "0px",
                transition: "max-height 0.3s ease-in-out, padding 0.3s ease-in-out",
                paddingTop: openIndex === index ? "0px" : "0px",
                paddingLeft: "21px",
                paddingRight: "21px",
                paddingBottom: openIndex === index ? "27px" : "0px",
              }}
            >
              <p
                className="font-inter"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#99A1AF",
                  opacity: openIndex === index ? 1 : 0,
                  transition: "opacity 0.3s ease-in-out",
                }}
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

