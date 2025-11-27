"use client";

import Image from "next/image";
import { TrendingUp, Heart, MessageCircle, Instagram, Twitter, Facebook } from "lucide-react";

export default function GetFollowersSection() {
  return (
    <section className="relative w-full bg-black py-24 sm:py-32">
      {/* Container */}
      <div
        style={{
          position: "relative",
          width: "1078px",
          maxWidth: "100%",
          height: "480px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* ContentSection - Left Side */}
        <div
          style={{
            position: "absolute",
            width: "500px",
            maxWidth: "100%",
            height: "449.67px",
            left: "0px",
            top: "15px",
          }}
        >
          {/* TrustedBadge */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "0px 17px",
              gap: "12px",
              position: "absolute",
              width: "250.62px",
              height: "42px",
              left: "0px",
              top: "0px",
              background: "rgba(173, 70, 255, 0.2)",
              border: "1px solid rgba(173, 70, 255, 0.3)",
              borderRadius: "33554400px",
            }}
          >
            {/* Icon Container */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0px",
                width: "18px",
                height: "18px",
                borderRadius: "0px",
                flex: "none",
                order: 0,
                flexGrow: 0,
              }}
            >
              <TrendingUp
                size={18}
                style={{
                  color: "#C27AFF",
                  strokeWidth: 1.5,
                  width: "18px",
                  height: "18px",
                }}
              />
            </div>
            {/* Paragraph */}
            <div
              style={{
                width: "184.62px",
                height: "24px",
                borderRadius: "0px",
                flex: "none",
                order: 1,
                flexGrow: 1,
                position: "relative",
              }}
            >
              {/* Text */}
              <span
                style={{
                  position: "absolute",
                  width: "189px",
                  height: "24px",
                  left: "0px",
                  top: "-2px",
                  fontFamily: "Arial",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#DAB2FF",
                }}
              >
                Trusted by 100K+ creators
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "0px",
              position: "absolute",
              width: "363.05px",
              height: "120px",
              left: "0px",
              top: "58px",
            }}
          >
            {/* Get Thousands of */}
            <h2
              style={{
                width: "418px",
                height: "60px",
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: "48px",
                lineHeight: "60px",
                letterSpacing: "0px",
                color: "#FFFFFF",
                margin: 0,
                flex: "none",
                order: 0,
                flexGrow: 0,
              }}
            >
              Get Thousands of
            </h2>
            {/* Active Followers */}
            <h2
              style={{
                width: "388px",
                height: "60px",
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: "48px",
                lineHeight: "60px",
                letterSpacing: "0px",
                background: "linear-gradient(90deg, #C27AFF 0%, #FB64B6 50%, #51A2FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                margin: 0,
                flex: "none",
                order: 1,
                flexGrow: 1,
              }}
            >
              Active Followers
            </h2>
          </div>

          {/* Description */}
          <p
            style={{
              position: "absolute",
              width: "464px",
              maxWidth: "100%",
              height: "84px",
              left: "0px",
              top: "194px",
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "27.9px",
              letterSpacing: "0px",
              color: "rgba(153, 161, 175, 1)",
              margin: 0,
            }}
          >
            Grow your social media presence organically with real, engaged
            followers. Watch your influence expand across all platforms.
          </p>

          {/* FeatureBoxes */}
          <div
            style={{
              position: "absolute",
              width: "459px",
              maxWidth: "100%",
              height: "156px",
              left: "0px",
              top: "294px",
              display: "flex",
              gap: "16px",
            }}
          >
            {/* FeatureBox 1 - Real */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "17px 0px",
                gap: "8px",
                width: "142.33px",
                height: "156px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "32px",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "0px",
                  width: "20px",
                  height: "20px",
                }}
              >
                <Image
                  src="/get-follower-section-icon-1.svg"
                  alt="Real"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              {/* Real */}
              <span
                style={{
                  width: "50px",
                  height: "36px",
                  fontFamily: "Arial",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "36px",
                  letterSpacing: "0px",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                Real
              </span>
              {/* Organic Growth */}
              <span
                style={{
                  width: "106.33px",
                  height: "48px",
                  fontFamily: "Arial",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0px",
                  textAlign: "center",
                  color: "#99A1AF",
                }}
              >
                Organic Growth
              </span>
            </div>

            {/* FeatureBox 2 - Fast */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "17px 0px 41px",
                gap: "8px",
                width: "142.33px",
                height: "156px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "32px",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "0px",
                  width: "20px",
                  height: "20px",
                }}
              >
                <Image
                  src="/get-follower-section-icon-2.svg"
                  alt="Fast"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              {/* Fast */}
              <span
                style={{
                  width: "47px",
                  height: "36px",
                  fontFamily: "Arial",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "36px",
                  letterSpacing: "0px",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                Fast
              </span>
              {/* Instant Results */}
              <span
                style={{
                  width: "106px",
                  height: "24px",
                  fontFamily: "Arial",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0px",
                  textAlign: "center",
                  color: "#99A1AF",
                }}
              >
                Instant Results
              </span>
            </div>

            {/* FeatureBox 3 - Safe */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "17px 0px 41px",
                gap: "8px",
                width: "142.33px",
                height: "156px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "32px",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "0px",
                  width: "20px",
                  height: "20px",
                }}
              >
                <Image
                  src="/get-follower-section-icon-3.svg"
                  alt="Safe"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              {/* Safe */}
              <span
                style={{
                  width: "50px",
                  height: "36px",
                  fontFamily: "Arial",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "36px",
                  letterSpacing: "0px",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                Safe
              </span>
              {/* 100% Secure */}
              <span
                style={{
                  width: "97px",
                  height: "24px",
                  fontFamily: "Arial",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0px",
                  textAlign: "center",
                  color: "#99A1AF",
                }}
              >
                100% Secure
              </span>
            </div>
          </div>
        </div>

        {/* PhotoWithIcons - Right Side */}
        <div
          style={{
            position: "absolute",
            width: "460px",
            height: "480px",
            left: "618px",
            top: "0px",
          }}
        >
          {/* Main Image */}
          <div
            style={{
              position: "absolute",
              width: "460px",
              height: "480px",
              left: "0px",
              top: "0px",
              borderRadius: "40px",
              overflow: "hidden",
              transform: "scaleX(-1)",
            }}
          >
            <Image
              src="/why-instagram-follower-main-3.png"
              alt="Happy creator working"
              width={460}
              height={480}
              unoptimized
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "40px",
              }}
            />
          </div>

          {/* Social Icons Overlay */}
          {/* Instagram Icon - Top Left */}
          <div
            style={{
              boxSizing: "border-box",
              position: "absolute",
              width: "46px",
              height: "46px",
              left: "20px",
              top: "20px",
              background: "rgba(16, 24, 40, 0.8)",
              border: "1px solid rgba(228, 64, 95, 0.25)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Instagram
              size={22}
              style={{
                color: "#E4405F",
                strokeWidth: 1.96,
              }}
            />
          </div>

          {/* Twitter/X Icon - Top Right */}
          <div
            style={{
              boxSizing: "border-box",
              position: "absolute",
              width: "46px",
              height: "46px",
              left: "394px",
              top: "20px",
              background: "rgba(0, 0, 0, 0.8)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Twitter
              size={22}
              style={{
                color: "#FFFFFF",
                strokeWidth: 2,
              }}
            />
          </div>

          {/* Facebook Icon - Bottom Left */}
          <div
            style={{
              boxSizing: "border-box",
              position: "absolute",
              width: "46px",
              height: "46px",
              left: "20px",
              top: "414px",
              background: "rgba(16, 24, 40, 0.8)",
              border: "1px solid rgba(66, 103, 178, 0.25)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Facebook
              size={22}
              style={{
                color: "#4267B2",
                strokeWidth: 2.13,
              }}
            />
          </div>

          {/* Stats Card 1 - Likes */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "0px 13px",
              gap: "10px",
              position: "absolute",
              width: "144.31px",
              height: "64px",
              left: "295.69px",
              top: "296px",
              background: "rgba(16, 24, 40, 0.8)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
              borderRadius: "12px",
            }}
          >
            {/* Icon Container */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px",
                width: "36px",
                height: "36px",
                background: "rgba(246, 51, 154, 0.2)",
                borderRadius: "33554400px",
              }}
            >
              <Heart
                size={16}
                style={{
                  color: "#F6339A",
                  fill: "#F6339A",
                  strokeWidth: 1.45,
                }}
              />
            </div>
            {/* Text Container */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0px",
                width: "70.31px",
                height: "32.5px",
              }}
            >
              <span
                style={{
                  width: "74px",
                  height: "18px",
                  fontFamily: "Arial",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "18px",
                  color: "#FFFFFF",
                }}
              >
                +2.4K Likes
              </span>
              <span
                style={{
                  width: "73px",
                  height: "15px",
                  fontFamily: "Arial",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "15px",
                  color: "#99A1AF",
                }}
              >
                Last 24 hours
              </span>
            </div>
          </div>

          {/* Stats Card 2 - Comments */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "0px 13px",
              gap: "10px",
              position: "absolute",
              width: "176.98px",
              height: "64px",
              left: "263.02px",
              top: "396px",
              background: "rgba(16, 24, 40, 0.8)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
              borderRadius: "12px",
            }}
          >
            {/* Icon Container */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px",
                width: "36px",
                height: "36px",
                background: "rgba(43, 127, 255, 0.2)",
                borderRadius: "33554400px",
              }}
            >
              <MessageCircle
                size={16}
                style={{
                  color: "#51A2FF",
                  strokeWidth: 1.45,
                }}
              />
            </div>
            {/* Text Container */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0px",
                width: "102.98px",
                height: "17.5px",
              }}
            >
              <span
                style={{
                  width: "104px",
                  height: "18px",
                  fontFamily: "Arial",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "18px",
                  color: "#FFFFFF",
                }}
              >
                +856 Comments
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

