"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, ChevronDown } from "lucide-react";

export default function Footer() {
  const topLinks = [
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  const instagramServices = [
    { name: "Buy Instagram Likes", href: "/buy-instagram-likes" },
    { name: "Buy Instagram Comments", href: "/buy-instagram-comments" },
    { name: "Buy Instagram Followers", href: "/buy-instagram-followers" },
    { name: "Buy Instagram Views", href: "/buy-instagram-views" },
  ];

  const tiktokServices = [
    { name: "Buy TikTok Likes", href: "/buy-tiktok-likes" },
    { name: "Buy TikTok Followers", href: "/buy-tiktok-followers" },
    { name: "Buy TikTok Views", href: "/buy-tiktok-views" },
  ];

  const youtubeServices = [
    { name: "Buy YouTube Views", href: "/buy-youtube-views" },
    { name: "Buy YouTube Subscribers", href: "/buy-youtube-subscribers" },
    { name: "Buy YouTube Likes", href: "/buy-youtube-likes" },
  ];

  const toolsAndResources = [
    { name: "Instagram Video Downloader", href: "/instagram-video-downloader" },
    { name: "Instagram Profile Picture Viewer", href: "/instagram-profile-picture-viewer" },
    { name: "Instagram Story Downloader", href: "/instagram-story-downloader" },
    { name: "Instagram Story Viewer", href: "/instagram-story-viewer" },
    { name: "Instagram Followers Counter", href: "/instagram-followers-counter" },
    { name: "Free Instagram Likes Trial", href: "/free-instagram-likes-trial" },
    { name: "Free Instagram Followers Trial", href: "/free-instagram-followers-trial" },
  ];

  const additionalTools = [
    { name: "Twitter Video Downloader", href: "/twitter-video-downloader" },
    { name: "Twitter GIF Downloader", href: "/twitter-gif-downloader" },
    { name: "Free TikTok Views", href: "/free-tiktok-views" },
    { name: "Facebook Video Downloader", href: "/facebook-video-downloader" },
    { name: "Facebook Reels Downloader", href: "/facebook-reels-downloader" },
  ];

  const accountLinks = [
    { name: "Log In", href: "/login" },
    { name: "Sign In", href: "/signin" },
  ];

  const paymentMethods = [
    { name: "VISA", src: "/visa-footer.png", width: 100, height: 32 },
    { name: "Mastercard", src: "/master-footer.png", width: 80, height: 48 },
    { name: "American Express", src: "/amex-footer.png", width: 100, height: 32 },
    { name: "Apple Pay", src: "/pay-footer.png", width: 100, height: 40 },
  ];

  return (
    <footer className="relative w-full bg-black border-t border-[rgba(255,255,255,0.1)]">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }} />
       <Image
          src="/herosection-grid-left-side.svg"
          alt="Grid left"
          width={170}
          height={150}
          className="absolute top-50 z-1 brightness-0 invert"
        />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Top Navigation Links */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 md:gap-12 md:mb-8 mb-4">
          {topLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-inter font-semibold text-white text-base md:text-lg hover:text-[#99A1AF] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-8 mb-12 md:mb-16">
          {/* Instagram Services */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-inter font-semibold text-white text-base md:text-lg mb-2 text-center md:text-left">
              Instagram Services
            </h3>
            <ul className="flex flex-col gap-3 items-center md:items-start">
              {instagramServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="font-inter font-normal text-[#99A1AF] text-sm md:text-base hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* TikTok Services */}
          <div className="flex flex-col md:-ml-2 items-center md:items-start">
            <h3 className="font-inter font-semibold text-white text-base md:text-lg mb-2 text-center md:text-left">
              TikTok Services
            </h3>
            <ul className="flex flex-col gap-3 items-center md:items-start">
              {tiktokServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="font-inter font-normal text-[#99A1AF] text-sm md:text-base hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* YouTube Services */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-inter font-semibold text-white text-base md:text-lg mb-2 text-center md:text-left">
              YouTube Services
            </h3>
            <ul className="flex flex-col gap-3 items-center md:items-start">
              {youtubeServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="font-inter font-normal text-[#99A1AF] text-sm md:text-base hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Resources */}
          <div className="flex flex-col md:-ml-4 items-center md:items-start">
            <h3 className="font-inter font-semibold text-white text-base md:text-lg mb-2 text-center md:text-left">
              Tools & Resources
            </h3>
            <ul className="flex flex-col gap-3 items-center md:items-start">
              {toolsAndResources.map((tool) => (
                <li key={tool.name}>
                  <Link
                    href={tool.href}
                    className="font-inter font-normal text-[#99A1AF] text-sm md:text-base hover:text-white transition-colors"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Tools - No Heading */}
          <div className="flex flex-col md:-ml-2 items-center md:items-start">
            <ul className="flex flex-col gap-3 mt-8 md:mt-9 items-center md:items-start">
              {additionalTools.map((tool) => (
                <li key={tool.name}>
                  <Link
                    href={tool.href}
                    className="font-inter font-normal text-[#99A1AF] text-sm md:text-base hover:text-white transition-colors"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* My Account */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-inter font-semibold text-white text-base md:text-lg mb-2 text-center md:text-left">
              My Account
            </h3>
            <ul className="flex flex-col gap-3 items-center md:items-start">
              {accountLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-inter font-normal text-[#99A1AF] text-sm md:text-base hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Language Selector - Above Bottom Section */}
        <div className="mb-6 md:mb-8 flex justify-start md:justify-center">
          <div className="flex items-center gap-2 cursor-pointer">
            <Globe className="w-4 h-4 text-white" />
            <span className="font-inter font-normal text-white text-sm md:text-base">EN</span>
            <ChevronDown className="w-3 h-3 text-white opacity-70" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between gap-6 md:gap-8 pt-8 border-t border-[rgba(255,255,255,0.1)]">
          {/* Left Side - Copyright */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            {/* Copyright */}
            <p className="font-inter font-normal text-[#99A1AF] text-sm md:text-base text-center md:text-center">
              Copyright © 2025 Eagle Likes, All Rights Reserved.
            </p>
          </div>

          {/* Right Side - Payment Methods */}
          <div className="flex items-center gap-0">
            {paymentMethods.map((method, index) => (
              <div key={method.name} className={`relative flex items-center justify-center ${index > 0 ? '-ml-14' : ''}`} style={{ width: `${method.width}px`, height: `${method.height}px` }}>
                <Image
                  src={method.src}
                  alt={method.name}
                  width={method.width}
                  height={method.height}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
