"use client";

import Image from "next/image";
import FAQSection from "./FAQSection";

export default function BenefitsOfBuying() {
  const benefits = [
    {
      id: 1,
      title: "Higher Visibility",
      description: "Instagram's algorithm favors the most popular accounts, giving them greater visibility across the platform. By gaining real followers with authentic profiles, you instantly boost your popularity, increase exposure, and attract new audiences who may have never discovered your content before.",
      icon: "/benefit-higher-visibility.svg",
    },
    {
      id: 2,
      title: "Strengthen Trust",
      description: "Having more followers instantly boosts your Instagram credibility. When new users discover your profile, they see your popularity as proof of quality and trust. A strong follower base shows that others value your content, encouraging even more people to follow and engage with your posts.",
      icon: "/benefit-higher-strength.svg",
    },
    {
      id: 3,
      title: "Get Real Followers",
      description: "As your followers increase, your posts reach more people who naturally want to follow you. With engaging, high-quality content, your audience will keep growing. Buying active followers is a quick and effective way to jumpstart your Instagram growth and boost organic engagement.",
      icon: "/benefit-higher-follower.svg",
    },
  ];

  return (
    <section className="relative w-full bg-black py-24 sm:py-32">
      <div
        className="flex flex-col items-center mx-auto"
        style={{
          width: "1240px",
          maxWidth: "100%",
          gap: "45px",
        }}
      >
        {/* Header Section */}
        <div
          className="flex flex-col items-center"
          style={{
            width: "1240px",
            maxWidth: "100%",
            gap: "30px",
          }}
        >
          {/* Heading */}
          <h2
            className="font-inter text-center capitalize"
            style={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "48px",
              lineHeight: "88px",
              color: "#FFFFFF",
              width: "1267px",
              maxWidth: "100%",
              textAlign: "center",
            }}
          >
            Benefits of Buying{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #018DFF 48%, #00FFFF 85%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Instagram Followers
            </span>
          </h2>

          {/* Description */}
          <p
            className="font-inter text-center"
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "32px",
              color: "rgba(153, 161, 175, 1)",
              width: "1050px",
              maxWidth: "100%",
              textAlign: "center",
            }}
          >
            Buying Instagram followers can quickly boost your credibility and visibility, helping you attract real engagement and grow faster. A larger follower count builds trust, increases exposure, and makes your profile more appealing to brands, collaborators, and new audiences. With trusted providers like Eagle Likes, you can grow safely and effectively while keeping your account secure.
          </p>
        </div>

        {/* Benefits Cards */}
        <div
          className="flex flex-row items-center flex-wrap justify-center"
          style={{
            width: "1078px",
            maxWidth: "100%",
            gap: "20px",
          }}
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="relative"
              style={{
                width: "346px",
                height: "429px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "40px",
              }}
            >
              <div
                className="flex flex-col items-center"
                style={{
                  padding: "25px 0",
                  gap: "24px",
                  width: benefit.id === 1 ? "326px" : "281.99px",
                  margin: "0 auto",
                }}
              >
                {/* Icon */}
                <div className="flex items-center justify-center" style={{ width: "86px", height: "86px" }}>
                  {benefit.icon && (
                    <Image
                      src={benefit.icon}
                      alt={benefit.title}
                      width={86}
                      height={86}
                      className="object-contain"
                    />
                  )}
                </div>

                {/* Content */}
                <div
                  className="flex flex-col items-center"
                  style={{
                    gap: "28px",
                    width: benefit.id === 1 ? "326px" : "281.99px",
                  }}
                >
                  <h3
                    className="font-open-sans text-center capitalize"
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: 600,
                      fontSize: "26px",
                      lineHeight: "35px",
                      color: "#FFFFFF",
                      width: benefit.id === 1 ? "302px" : benefit.id === 2 ? "274px" : "281.99px",
                      textAlign: "center",
                      textTransform: "capitalize",
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="font-open-sans text-center"
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: "26.03px",
                      color: "#99A1AF",
                      width: "302px",
                      textAlign: "center",
                    }}
                  >
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div style={{ marginTop: "202px" }}>
          <FAQSection />
        </div>
      </div>
    </section>
  );
}

