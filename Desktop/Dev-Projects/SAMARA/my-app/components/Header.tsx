"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FiMenu,
  FiSearch,
  FiUser,
  FiShoppingBag,
  FiHeart,
  FiX,
  FiChevronDown,
} from "react-icons/fi";

const navigation = [
  { label: "الرئيسية", href: "/" },
  { label: "العروض", href: "/offers" },
  { label: "الباقات", href: "/packs" },
  { label: "الأكثر مبيعًا", href: "/best-sellers" },
  { label: "المنتجات", href: "/products", hasDropdown: true },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header dir="rtl" className="w-full text-neutral-900">
      {/* Announcement Bar */}
      <div className="border-b border-neutral-200 bg-neutral-100">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-center px-4">
          <p className="text-[10px] font-medium tracking-wide text-neutral-700 sm:text-xs">
            🚚 الشحن مجاني على الطلبات فوق 300 درهم
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className="">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-2">

            {/* Right - Mobile Menu */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="فتح القائمة"
              className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-neutral-100 lg:hidden"
            >
              <FiMenu size={21} strokeWidth={1.7} />
            </button>

            {/* Logo */}
            <Link
              href="/"
              className="shrink-0 text-[22px] font-black tracking-[0.16em] sm:text-[32px] font-ruwudu text-black"
            >
              سمارة
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden flex-1 items-center justify-center lg:flex">
              <ul className="flex items-center gap-8">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-1.5 text-[13px] font-medium text-neutral-700 transition hover:text-black"
                    >
                      {item.label}

                      {item.hasDropdown && (
                        <FiChevronDown
                          size={13}
                          className="transition-transform group-hover:rotate-180"
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Search */}
              <button
                type="button"
                aria-label="البحث"
                className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-neutral-100"
              >
                <FiSearch size={20} strokeWidth={1.6} />
              </button>

              {/* Account */}
              <Link
                href="/account"
                aria-label="الحساب"
                className="hidden h-10 w-10 items-center justify-center rounded-full transition hover:bg-neutral-100 sm:flex"
              >
                <FiUser size={20} strokeWidth={1.6} />
              </Link>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                aria-label="المفضلة"
                className="hidden h-10 w-10 items-center justify-center rounded-full transition hover:bg-neutral-100 md:flex"
              >
                <FiHeart size={20} strokeWidth={1.6} />
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                aria-label="السلة"
                className="relative flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-neutral-100"
              >
                <FiShoppingBag size={20} strokeWidth={1.6} />

                {/* Cart Count */}
                <span className="absolute right-0.5 top-0.5 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-black px-1 text-[9px] font-bold text-white">
                  2
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <motion.button
            type="button"
            aria-label="إغلاق القائمة"
            onClick={() => setMobileMenuOpen(false)}
            className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* Drawer */}
          <motion.aside
            className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-white shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            
            {/* Drawer Header */}
            <div className="flex h-[76px] items-center justify-between border-b border-neutral-200 px-5">
              <span className="text-xl font-black tracking-[0.15em]">
                سمارة
              </span>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="إغلاق"
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100"
              >
                <FiX size={22} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-5 py-6">
              <ul className="space-y-1">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between border-b border-neutral-100 py-4 text-[15px] font-medium"
                    >
                      <span>{item.label}</span>

                      {item.hasDropdown && (
                        <FiChevronDown size={17} className="text-neutral-400" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Account */}
            <div className="border-t border-neutral-200 p-5">
              <Link
                href="/account"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 text-sm font-medium"
              >
                <FiUser size={20} />
                <span>حسابي</span>
              </Link>
            </div>
          </motion.aside>
        </div>
        )}
      </AnimatePresence>
    </header>
  );
}