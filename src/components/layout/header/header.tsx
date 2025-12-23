"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X, Search, User, Heart, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/stores/cart-store";
import { useUIStore } from "@/stores/ui-store";
import { mainNavItems } from "@/data/navigation";
import { Nav } from "./nav";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { items: cartItems } = useCartStore();
  const { isPromoVisible, hidePromo, isMobileMenuOpen, toggleMobileMenu } =
    useUIStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="absolute right-0 top-0 w-full z-[101]">
        {/* Promo Banner */}
        {isPromoVisible && (
          <div className="absolute top-0 right-0 w-full bg-[#222222] text-white py-3 px-4 text-center text-sm">
            <span className="font-bold opacity-80">۳۰٪ تخفیف روی همه محصولات - کد تخفیف: khanoomkhanooma2024</span>
            <button
              onClick={hidePromo}
              className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
              aria-label="Close promo"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Main Header - Overlays hero */}
        <div
          className={cn(
            "transition-all duration-300 px-[15px] md:px-[40px] lg:px-[70px]",
            isPromoVisible ? "pt-[55px] md:pt-[72px]" : "pt-[45px] md:pt-[72px]",
            isScrolled && "fixed top-0 left-0 right-0 shadow-md bg-peach/90 !pt-5 pb-2.5"
          )}
        >
          <div className="w-full">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/assets/img/header-logo.svg"
                  alt="خانم خانوما"
                  width={120}
                  height={40}
                  priority
                />
              </Link>

              {/* Desktop Navigation */}
              <Nav items={mainNavItems} className="hidden lg:flex" />

              {/* Header Actions - Hidden on mobile, shown in mobile menu instead */}
              <div className="hidden lg:flex items-center gap-11">
                <Link href="/faq" className="text-[#222222] hover:text-[#d05278] transition-colors">
                  <Search className="h-5 w-5" />
                </Link>

                <Link href="/profile" className="text-[#222222] hover:text-[#d05278] transition-colors">
                  <User className="h-5 w-5" />
                </Link>

                <Link href="/wishlist" className="text-[#222222] hover:text-[#d05278] transition-colors">
                  <Heart className="h-5 w-5" />
                </Link>

                <Link href="/cart" className="flex items-center text-[#222222] hover:text-[#d05278] transition-colors">
                  <ShoppingBag className="h-5 w-5" />
                  {cartItems.length > 0 && (
                    <span className="ml-1 w-[22px] h-[22px] rounded-full bg-[#d05278] text-white text-xs font-bold flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
              </div>

              {/* Mobile Menu Toggle - Only visible on mobile */}
              <button
                className="lg:hidden text-[#222222] w-[22px] h-[45px] flex flex-col justify-center items-center"
                onClick={toggleMobileMenu}
              >
                <span className={cn(
                  "block w-[22px] h-[2px] bg-[#222222] transition-transform origin-center",
                  isMobileMenuOpen ? "translate-y-[1px] rotate-45" : ""
                )} />
                <span className={cn(
                  "block w-[22px] h-[2px] bg-[#222222] my-[5px] transition-opacity",
                  isMobileMenuOpen ? "opacity-0" : ""
                )} />
                <span className={cn(
                  "block w-[22px] h-[2px] bg-[#222222] transition-transform origin-center",
                  isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                )} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu items={mainNavItems} />
    </>
  );
}


