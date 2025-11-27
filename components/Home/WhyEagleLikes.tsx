"use client";

import Image from "next/image";

export default function WhyEagleLikes() {
  const features = [
    {
      id: 1,
      title: "Affordable Growth",
      description: "At Eagle Likes, we believe social media growth should be for everyone. That's why we offer affordable packages for individuals, influencers, and businesses alike.",
      iconColor: "#FDC700",
      iconBg: "rgba(253, 199, 0, 0.1)",
      icon: "/eagle-like-star-icon.svg",
    },
    {
      id: 2,
      title: "Quality That Speaks",
      description: "While affordability matters, quality is our top priority. At Eagle Likes, we never compromise on service standards and every like, follower, and view is delivered with care to ensure authentic, natural growth.",
      iconColor: "#FB64B6",
      iconBg: "rgba(251, 100, 182, 0.1)",
      icon: "/eagle-like-heart-icon.svg",
    },
    {
      id: 3,
      title: "Speed You Can Trust",
      description: "In today's fast-paced digital world, timing is key. Eagle Likes ensures fast, reliable delivery and whether you need instant likes or steady, natural growth for your profile.",
      iconColor: "#51A2FF",
      iconBg: "rgba(81, 162, 255, 0.1)",
      icon: "/eagle-like-speed-icon.svg",
    },
    {
      id: 4,
      title: "Safe and Secure Services",
      description: "Trust is at the heart of everything we do. We use safe, proven methods to protect your account and ensure natural, risk-free growth so you can grow with confidence.",
      iconColor: "#00C950",
      iconBg: "rgba(0, 201, 80, 0.1)",
      icon: "/eagle-like-safe-icon.svg",
    },
    {
      id: 5,
      title: "Customer-Centric Support",
      description: "We understand that every customer is unique. That's why our dedicated support team is always ready to assist, guide, and resolve your queries from choosing the right package to ensuring smooth, hassle-free delivery.",
      iconColor: "#FF0000",
      iconBg: "rgba(255, 0, 0, 0.1)",
      icon: "/eagle-like-support-icon.svg",
    },
    {
      id: 6,
      title: "A Brand You Can Rely On",
      description: "Eagle Likes is more than just a service it's your trusted partner in social media growth. Join the thousands of satisfied customers who've chosen us to elevate their online presence with confidence.",
      iconColor: "#C27AFF",
      iconBg: "rgba(194, 122, 255, 0.1)",
      icon: "/eagle-like-polygon-icon.svg",
    },
  ];

  const logos = [
    { name: "Yahoo", src: "/yahoo.svg", width: 132, height: 31 },
    { name: "FOX", src: "/fox.svg", width: 64, height: 31 },
    { name: "MarketWatch", src: "/mark-watch.svg", width: 161, height: 32 },
    { name: "Tripadvisor", src: "/trip-advisor.svg", width: 149, height: 30 },
    { name: "Digital Journal", src: "/digital-journal.svg", width: 139, height: 58 },
    { name: "NBC", src: "/nbc.svg", width: 64, height: 42 },
    { name: "USA TODAY", src: "/usa-today.svg", width: 112, height: 43 },
  ];

  return (
    <div className="relative w-full bg-black">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
        {/* Eagle Likes is seen on... Section */}
        <div className="flex flex-col items-center mb-16" style={{ gap: "49px" }}>
          <span
            className="font-open-sans font-semibold text-center"
            style={{
              fontSize: "18px",
              lineHeight: "18px",
              letterSpacing: "0px",
              textAlign: "center",
              color: "#99A1AF",
            }}
          >
            Eagle Likes is seen on...
          </span>
          <div className="flex flex-row items-center justify-center" style={{ gap: "40.96px", width: "1065px", maxWidth: "100%", flexWrap: "nowrap" }}>
            {logos.map((logo, index) => (
              <div key={index} style={{ width: `${logo.width}px`, height: `${logo.height}px`, flexShrink: 0 }}>
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Why Eagle Likes? Section */}
        <div className="flex flex-col items-center" style={{ width: "1078px", maxWidth: "100%", gap: "50px", margin: "0 auto" }}>
          {/* Heading */}
          <h2
            className="font-inter font-bold text-center capitalize"
            style={{
              fontSize: "48px",
              lineHeight: "100px",
              letterSpacing: "0px",
              textTransform: "capitalize",
              width: "100%",
            }}
          >
            <span style={{ color: "#FFFFFF" }}>Why </span>
            <span
              style={{
                background:
                  "linear-gradient(90deg, #018DFF 48%, #00FFFF 85%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Eagle Likes?
            </span>
          </h2>

          {/* Features Grid */}
          <div className="flex flex-col items-start" style={{ width: "1078px", maxWidth: "100%", gap: "20px" }}>
            {/* Row 1 */}
            <div className="flex flex-row items-center flex-wrap justify-center" style={{ width: "100%", gap: "20px" }}>
              {features.slice(0, 3).map((feature) => (
                <div
                  key={feature.id}
                  className="relative"
                  style={{
                    width: "346px",
                    height: "357px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: "40px",
                  }}
                >
                  <div className="flex flex-col items-center" style={{ padding: "26px 0", width: "281.99px", margin: "0 auto" }}>
                    {/* Icon */}
                    <div
                      className="flex items-center justify-center"
                      style={{ width: "86px", height: "86px", marginBottom: "24px" }}
                    >
                      {feature.icon && (
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={86}
                          height={86}
                          className="object-contain"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col items-center" style={{ width: "281.99px" }}>
                      <h3
                        className="font-inter font-semibold text-center capitalize"
                        style={{
                          fontSize: "23px",
                          lineHeight: "35px",
                          letterSpacing: "0px",
                          color: "#FFFFFF",
                          textTransform: "capitalize",
                          marginBottom: "28px",
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="font-inter font-normal text-center"
                        style={{
                          fontSize: "15px",
                          lineHeight: "26.03px",
                          letterSpacing: "0px",
                          color: "#99A1AF",
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex flex-row items-center flex-wrap justify-center" style={{ width: "100%", gap: "20px" }}>
              {features.slice(3, 6).map((feature) => (
                <div
                  key={feature.id}
                  className="relative"
                  style={{
                    width: "346px",
                    height: "357px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: "40px",
                  }}
                >
                  <div className="flex flex-col items-center" style={{ padding: "25px 0", width: "281.99px", margin: "0 auto" }}>
                    {/* Icon */}
                    <div
                      className="flex items-center justify-center"
                      style={{ width: "86px", height: "86px", marginBottom: "24px" }}
                    >
                      {feature.icon && (
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={86}
                          height={86}
                          className="object-contain"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col items-center" style={{ width: "281.99px" }}>
                      <h3
                        className="font-inter font-semibold text-center capitalize"
                        style={{
                          fontSize: "23px",
                          lineHeight: "35px",
                          letterSpacing: "0px",
                          color: "#FFFFFF",
                          textTransform: "capitalize",
                          marginBottom: "28px",
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="font-inter font-normal text-center"
                        style={{
                          fontSize: "15px",
                          lineHeight: "26.03px",
                          letterSpacing: "0px",
                          color: "#99A1AF",
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

