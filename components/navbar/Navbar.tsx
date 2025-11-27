"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, User } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent text-navbar-foreground min-[1152px]:top-6">
      <div className="mx-auto relative flex h-[51px] min-[1152px]:h-[35px] w-full max-w-7xl items-center justify-between px-4 min-[1152px]:justify-between">
        {/* Logo - Mobile: 119px width, 27px height | Desktop: 164px width, 35px height (Figma design) - Left edge */}
        <Link href="/" className="flex items-center shrink-0 z-10">
          <Image
            src="/nav-icon.svg"
            width={164}
            height={35}
            alt="Logo"
            className="h-[27px] w-[119px] min-[1152px]:h-[35px]! min-[1152px]:w-[164px]! object-contain"
            unoptimized
          />
          <span className="sr-only">Home</span>
        </Link>

        {/* Center navigation (Frame 8 in Figma) - Centered in viewport */}
        <nav className="flex-1 max-[1151px]:hidden min-[1152px]:flex min-[1152px]:absolute min-[1152px]:left-1/2 min-[1152px]:-translate-x-1/2 min-[1152px]:z-0">
          <NavigationMenu className="w-full justify-center">
            <NavigationMenuList className="flex items-center justify-center gap-6 min-[1152px]:gap-[24px]">
              {/* Tiktok dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent px-0 py-0 h-auto font-['Open_Sans',sans-serif] font-normal text-[16px] leading-0 text-white hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent inline-flex items-end gap-[10px] [&>svg]:w-[10px]! [&>svg]:h-[14px]! [&>svg]:rotate-270! [&>svg]:shrink-0! [&>svg]:ml-0! [&>svg]:relative! [&>svg]:top-[2px]!">
                  <span className="h-[12px] flex items-center justify-center">TIKTOK</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-72 p-2 sm:w-80">
                    <NavigationMenuLink
                      asChild
                      className="block rounded-md p-3 hover:bg-accent"
                    >
                      <Link href="/tiktok">
                        <div className="text-sm font-medium">Go to Tiktok</div>
                        <p className="text-muted-foreground text-sm">
                          See short videos and latest updates.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Instagram dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent px-0 py-0 h-auto font-['Open_Sans',sans-serif] font-normal text-[16px] leading-0 text-white hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent inline-flex items-end gap-[10px] [&>svg]:w-[10px]! [&>svg]:h-[14px]! [&>svg]:rotate-270! [&>svg]:shrink-0! [&>svg]:ml-0! [&>svg]:relative! [&>svg]:top-[2px]!">
                  <span className="h-[12px] flex items-center justify-center">INSTAGRAM</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-72 p-2 sm:w-80">
                    <NavigationMenuLink
                      asChild
                      className="block rounded-md p-3 hover:bg-accent"
                    >
                      <Link href="/instagram">
                        <div className="text-sm font-medium">
                          Go to Instagram
                        </div>
                        <p className="text-muted-foreground text-sm">
                          Photos, reels and stories.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* YouTube dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent px-0 py-0 h-auto font-['Open_Sans',sans-serif] font-normal text-[16px] leading-0 text-white hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent inline-flex items-end gap-[10px] [&>svg]:w-[10px]! [&>svg]:h-[14px]! [&>svg]:rotate-270! [&>svg]:shrink-0! [&>svg]:ml-0! [&>svg]:relative! [&>svg]:top-[2px]!">
                  <span className="h-[12px] flex items-center justify-center">YOUTUBE</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-72 p-2 sm:w-80">
                    <NavigationMenuLink
                      asChild
                      className="block rounded-md p-3 hover:bg-accent"
                    >
                      <Link href="/youtube">
                        <div className="text-sm font-medium">Go to YouTube</div>
                        <p className="text-muted-foreground text-sm">
                          Watch our latest videos and streams.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Facebook dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent px-0 py-0 h-auto font-['Open_Sans',sans-serif] font-normal text-[16px] leading-0 text-white hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent inline-flex items-end gap-[10px] [&>svg]:w-[10px]! [&>svg]:h-[14px]! [&>svg]:rotate-270! [&>svg]:shrink-0! [&>svg]:ml-0! [&>svg]:relative! [&>svg]:top-[2px]!">
                  <span className="h-[12px] flex items-center justify-center">FACEBOOK</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-72 p-2 sm:w-80">
                    <NavigationMenuLink
                      asChild
                      className="block rounded-md p-3 hover:bg-accent"
                    >
                      <Link href="/facebook">
                        <div className="text-sm font-medium">
                          Go to Facebook
                        </div>
                        <p className="text-muted-foreground text-sm">
                          Posts, events and community.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Twitter dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent px-0 py-0 h-auto font-['Open_Sans',sans-serif] font-normal text-[16px] leading-0 text-white hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent inline-flex items-end gap-[10px] [&>svg]:w-[10px]! [&>svg]:h-[14px]! [&>svg]:rotate-270! [&>svg]:shrink-0! [&>svg]:ml-0! [&>svg]:relative! [&>svg]:top-[2px]!">
                  <span className="h-[12px] flex items-center justify-center">TWITTER (X)</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-72 p-2 sm:w-80">
                    <NavigationMenuLink
                      asChild
                      className="block rounded-md p-3 hover:bg-accent"
                    >
                      <Link href="/twitter">
                        <div className="text-sm font-medium">Go to Twitter</div>
                        <p className="text-muted-foreground text-sm">
                          Quick updates and announcements.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Blog dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent px-0 py-0 h-auto font-['Open_Sans',sans-serif] font-normal text-[16px] leading-0 text-white hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent inline-flex items-end gap-[10px] [&>svg]:w-[10px]! [&>svg]:h-[14px]! [&>svg]:rotate-270! [&>svg]:shrink-0! [&>svg]:ml-0! [&>svg]:relative! [&>svg]:top-[2px]!">
                  <span className="h-[12px] flex items-center justify-center">BLOG</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-72 p-2 sm:w-80">
                    <NavigationMenuLink
                      asChild
                      className="block rounded-md p-3 hover:bg-accent"
                    >
                      <Link href="/blog">
                        <div className="text-sm font-medium">Go to Blog</div>
                        <p className="text-muted-foreground text-sm">
                          Read news, guides and updates.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Contact dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent px-0 py-0 h-auto font-['Open_Sans',sans-serif] font-normal text-[16px] leading-0 text-white hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent inline-flex items-end gap-[10px] [&>svg]:w-[10px]! [&>svg]:h-[14px]! [&>svg]:rotate-270! [&>svg]:shrink-0! [&>svg]:ml-0! [&>svg]:relative! [&>svg]:top-[2px]!">
                  <span className="h-[12px] flex items-center justify-center">CONTACT US</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-72 p-2 sm:w-80">
                    <NavigationMenuLink
                      asChild
                      className="block rounded-md p-3 hover:bg-accent"
                    >
                      <Link href="/contact">
                        <div className="text-sm font-medium">Contact Us</div>
                        <p className="text-muted-foreground text-sm">
                          Get in touch with our team.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuViewport />
            <NavigationMenuIndicator />
          </NavigationMenu>
        </nav>

        {/* Mobile: Rating and Menu (right side) */}
        <div className="flex items-center gap-[18px] min-[1152px]:hidden">
          {/* Rating Group: 5.0 + Stars */}
          <div className="flex items-center gap-[10px]">
            {/* 5.0 Rating Text */}
            <span
              className="font-['Open_Sans',sans-serif] font-semibold text-[14px] leading-0 text-white capitalize"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              5.0
            </span>
            {/* 5 Star Icons */}
            <div className="flex items-center gap-[6.278px]">
              {[1, 2, 3, 4, 5].map((star) => (
                <Image
                  key={star}
                  src="/nav-star-icon.svg"
                  width={18}
                  height={18}
                  alt="Star"
                  className="w-[17.578px] h-[17.578px] object-contain"
                />
              ))}
            </div>
          </div>
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex h-[16px] w-[23.313px] items-center justify-center text-white hover:opacity-80"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Login button (Frame 9 in Figma) - Desktop: 41px height, border #0663cd, padding 28px horizontal, 14px vertical, border-radius 10px - Right edge */}
        <div className="hidden items-center min-[1152px]:flex min-[1152px]:z-10 min-[1152px]:shrink-0">
          <Link
            href="/login"
            className="inline-flex h-[41px] items-center justify-center gap-[10px] rounded-[10px] border border-[#0663cd] px-[28px] py-[14px] font-['Open_Sans',sans-serif] font-bold text-[15px] leading-0 capitalize text-white hover:opacity-80"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <User className="h-[18px] w-[16px] shrink-0" />
            <span>login</span>
          </Link>
        </div>
      </div>

      {/* Separator */}
      <div className="mx-auto max-w-7xl px-4 mt-0 min-[1152px]:mt-6">
        <Separator className="bg-blue-500 h-0.5" />
      </div>

      {/* Mobile Menu (below 1152px) */}
      {isMenuOpen && (
        <div className="min-[1152px]:hidden border-t bg-black/95 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/tiktok"
                className="text-sm font-medium text-white hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                TIKTOK
              </Link>
              <Link
                href="/instagram"
                className="text-sm font-medium text-white hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                INSTAGRAM
              </Link>
              <Link
                href="/youtube"
                className="text-sm font-medium text-white hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                YOUTUBE
              </Link>
              <Link
                href="/facebook"
                className="text-sm font-medium text-white hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                FACEBOOK
              </Link>
              <Link
                href="/twitter"
                className="text-sm font-medium text-white hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                TWITTER (X)
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium text-white hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                BLOG
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-white hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT US
              </Link>
              <Link
                href="/login"
                className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-lg border border-navbar-accent text-sm font-bold capitalize text-white hover:bg-navbar-accent/10"
                onClick={() => setIsMenuOpen(false)}
              >
                login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
