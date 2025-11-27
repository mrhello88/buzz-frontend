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
    <section className="relative w-full bg-black" style={{ zIndex: 10, paddingTop: "160px", paddingBottom: "160px" }}>
      {/* Main Container - Group 1618874136 */}
      <div
        style={{
          position: "relative",
          width: "1060px",
          height: "580.81px",
          maxWidth: "100%",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Heading - Why Choose us? */}
        <h2
          style={{
            position: "absolute",
            width: "1060px",
            height: "44.81px",
            maxWidth: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            top: "0px",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "48px",
            lineHeight: "75px",
            letterSpacing: "0%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            verticalAlign: "middle",
            color: "#FFFFFF",
          }}
        >
          Why Choose us?
        </h2>

        {/* Main Card - Rectangle 161124961 */}
        <div
          style={{
            boxSizing: "border-box",
            position: "absolute",
            width: "1010.3px",
            height: "413.08px",
            maxWidth: "100%",
            left: "calc(50% - 1010.3px/2)",
            top: "149px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: "40px",
            overflow: "visible",
          }}
        >
          {/* Features Labels Column (Left) */}
          <div
            style={{
              position: "absolute",
              left: "24px",
              top: "20px",
              width: "280px",
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {features.map((feature, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Image
                    src={`/why-choose-us-${index + 1}.svg`}
                    alt={`Icon ${index + 1}`}
                    width={17}
                    height={17}
                    className="shrink-0"
                  />
                  <span
                    style={{
                      fontFamily: "Open Sans",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "14.67px",
                      lineHeight: "24.44px",
                      letterSpacing: "0%",
                      verticalAlign: "middle",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {feature.label}
                  </span>
                </div>
                <div
                  style={{
                    width: "280px",
                    height: "0.814758px",
                    background: "#FFFFFF",
                    opacity: 0.3,
                    marginTop: "10px",
                  }}
                />
              </div>
            ))}
          </div>

          {/* EAGLE LIKES Column (Center) - Rectangle 161124962 */}
          <div
            style={{
              boxSizing: "border-box",
              position: "absolute",
              width: "319.39px",
              height: "493.74px",
              left: "320px",
              top: "-65px",
              background: "#121212",
              border: "4px solid #01AAFF",
              borderRadius: "40px",
              padding: "20px",
              zIndex: 20,
            }}
          >
            {/* Logo - test 1 */}
            <div
              style={{
                position: "absolute",
                width: "196px",
                height: "42px",
                left: "calc(50% - 196px/2)",
                top: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="/nav-icon.svg"
                alt="Eagle Likes"
                width={196}
                height={42}
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Features List */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0",
                marginTop: "60px",
                position: "relative",
              }}
            >
              {features.map((feature, index) => (
                <div key={index} style={{ marginBottom: "10px", position: "relative" }}>
                  {/* Frame 2147229313 / Frame 2147229329 */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      padding: "0px",
                      gap: "9.78px",
                    }}
                  >
                    {/* SVG Icon */}
                    <Image
                      src="/why-choose-us-center-1.svg"
                      alt="Center Icon"
                      width={16}
                      height={16}
                      className="shrink-0"
                    />
                    {/* Feature Text */}
                    <span
                      style={{
                        fontFamily: "Open Sans",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14.67px",
                        lineHeight: "24.44px",
                        letterSpacing: "0%",
                        verticalAlign: "middle",
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {feature.eagleLikes}
                    </span>
                  </div>
                  {/* Separator Line - Line 17 */}
                  <div
                    style={{
                      width: "281.91px",
                      height: "0px",
                      border: "0.814758px solid #FFFFFF",
                      opacity: 0.3,
                      marginTop: "10px",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Others Column (Right) */}
          <div
            style={{
              position: "absolute",
              left: "660px",
              top: "-55px",
              width: "312.05px",
              paddingBottom: "9px",
            }}
          >
            {/* Others Header - Frame 2147229341 */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "16.15px 8.14758px",
                gap: "8.15px",
                width: "312.05px",
                height: "45.63px",
                background: "rgba(6, 99, 205, 0.15)",
                border: "0.814758px solid rgba(6, 99, 205, 0.5)",
                borderRadius: "16.2952px",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "16.3px",
                  lineHeight: "28.52px",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                  display: "flex",
                  alignItems: "center",
                  textTransform: "capitalize",
                  color: "#0663CD",
                }}
              >
                Others
              </span>
            </div>

            {/* Features List */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0",
                marginTop: "30px",
                position: "relative",
              }}
            >
              {features.map((feature, index) => (
                <div key={index} style={{ marginBottom: "10px", position: "relative" }}>
                  {/* Frame 2147229313 */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      padding: "0px",
                      gap: "8.15px",
                    }}
                  >
                    {/* SVG Icon */}
                    <Image
                      src="/why-choose-us-right-1.svg"
                      alt="Right Icon"
                      width={11}
                      height={11}
                      className="shrink-0"
                    />
                    {/* Feature Text */}
                    <span
                      style={{
                        fontFamily: "Open Sans",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14.67px",
                        lineHeight: "24.44px",
                        letterSpacing: "0%",
                        verticalAlign: "middle",
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {feature.others}
                    </span>
                  </div>
                  {/* Separator Line - Line 17 */}
                  <div
                    style={{
                      width: "312.05px",
                      height: "0px",
                      border: "0.814758px solid #FFFFFF",
                      opacity: 0.3,
                      marginTop: "10px",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
