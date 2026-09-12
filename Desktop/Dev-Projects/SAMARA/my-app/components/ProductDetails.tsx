"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FiCheck,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiStar,
  FiTruck,
  FiShield,
  FiChevronLeft,
} from "react-icons/fi";
import type { ProductsData } from "@/data/Products";

type Product = (typeof ProductsData)[number];

export function ProductDetails({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [added, setAdded] = useState(false);

  const total = product.price * quantity;
  const saving = product.oldPrice - product.price;

  function addToCart() {
    setAdded(true);

    window.setTimeout(() => {
      setAdded(false);
    }, 2200);
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-white text-neutral-950 selection:bg-neutral-950 selection:text-white"
    >
      <div className="mx-auto max-w-7xl px-4 pb-28 pt-5 sm:px-6 lg:px-8 lg:pb-16 lg:pt-8">

        {/* Breadcrumb */}
        <nav
          aria-label="مسار التنقل"
          className="mb-5 flex items-center gap-2 overflow-hidden whitespace-nowrap text-[11px] font-medium text-neutral-400 lg:hidden"
        >
          <Link
            href="/"
            className="transition-colors hover:text-neutral-950"
          >
            الرئيسية
          </Link>

          <FiChevronLeft className="h-3 w-3" />

          <span>{product.category}</span>

          <FiChevronLeft className="h-3 w-3" />

          <span className="max-w-[180px] truncate text-neutral-700">
            {product.name}
          </span>
        </nav>

        {/* =====================================================
            PRODUCT
        ====================================================== */}

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12 lg:[direction:ltr] xl:gap-16">

          {/* =====================================================
              PRODUCT IMAGE — 50%
          ====================================================== */}

          <section dir="rtl" className="w-full">
            <div className="relative overflow-hidden rounded-md border border-neutral-200 bg-neutral-50">

              {/* Discount */}
              <div className="absolute left-4 top-4 z-10 rounded bg-neutral-950 px-3 py-1.5 text-[10px] font-bold text-white">
                -{product.discount}%
              </div>

              {/* Badge */}
              <div className="absolute right-4 top-4 z-10 rounded border border-neutral-200 bg-white px-3 py-1.5 text-[10px] font-bold text-neutral-900">
                {product.badge}
              </div>

              <div className="relative aspect-square w-full">
                <Image
                  src={selectedColor.image}
                  alt={`${product.name} - ${selectedColor.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Stock Information */}
            <div className="mt-4 flex items-center justify-between px-1 text-[11px] text-neutral-500">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-500" />
                متوفر في المخزون
              </span>

              <span>
                متبقي {product.stock} قطع
              </span>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2 pt-3">
              {product.colors.map((color) => {
                const selected = selectedColor.id === color.id;

                return (
                  <button
                    key={color.id}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    aria-label={`عرض صورة اللون ${color.name}`}
                    aria-pressed={selected}
                    className={`relative h-20 w-20 shrink-0 cursor-pointer overflow-hidden rounded-md border bg-neutral-50 transition-all ${selected ? "border-neutral-950 ring-2 ring-neutral-950/10" : "border-neutral-200 hover:border-neutral-500"}`}
                  >
                    <Image
                      src={color.image}
                      alt={color.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                    <span
                      className="absolute bottom-1 right-1 h-3 w-3 rounded-full border border-white shadow-sm"
                      style={{ backgroundColor: color.hex }}
                    />
                  </button>
                );
              })}
            </div>
          </section>

          {/* =====================================================
              PRODUCT DETAILS — 50%
          ====================================================== */}

          <section dir="rtl" className="w-full lg:sticky lg:top-8">
            <div className="w-full">

              <nav
                aria-label="مسار التنقل"
                className="mb-9 hidden items-center gap-2 overflow-hidden whitespace-nowrap text-[11px] font-medium text-neutral-400 lg:flex"
              >
                <Link href="/" className="transition-colors hover:text-neutral-950">
                  الرئيسية
                </Link>

                <FiChevronLeft className="h-3 w-3" />

                <span>{product.category}</span>

                <FiChevronLeft className="h-3 w-3" />

                <span className="max-w-[180px] truncate text-neutral-700">
                  {product.name}
                </span>
              </nav>

              {/* Rating */}
              <div className="mb-7 flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-sm font-bold">
                  <FiStar className="h-4 w-4 fill-neutral-950 text-neutral-950" />
                  <span>{product.rating}</span>
                </div>

                {/* <span className="h-1 w-1 rounded-full bg-neutral-300" /> */}

                {/* <span className="text-xs text-neutral-500">
                  {product.reviews} تقييم
                </span> */}
              </div>

              {/* Title */}
              <h1 className="max-w-xl text-3xl font-black leading-[1.15] tracking-[-0.03em] text-neutral-950 sm:text-4xl lg:text-[42px]">
                {product.name}
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-500 sm:text-[15px]">
                {product.description}
              </p>

              {/* Price */}
              <div className="mt-9 flex flex-wrap items-end gap-x-4 gap-y-2">
                <span className="text-3xl font-black tracking-tight">
                  {product.price.toLocaleString("ar-MA")}
                  <span className="mr-1 text-sm font-bold">
                    د.م
                  </span>
                </span>

                <span className="pb-1 text-sm text-neutral-400 line-through">
                  {product.oldPrice.toLocaleString("ar-MA")} د.م
                </span>

                <span className="pb-1 text-xs font-medium text-neutral-500">
                  وفر {saving.toLocaleString("ar-MA")} د.م
                </span>
              </div>

              <div className="my-9 h-px bg-neutral-200" />

              {/* =====================================================
                  COLOR
              ====================================================== */}

              <div>
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-bold text-neutral-950">
                    اللون
                  </span>

                  <span className="text-xs text-neutral-500">
                    {selectedColor.name}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => {
                    const selected = selectedColor.id === color.id;

                    return (
                      <button
                        key={color.id}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        aria-label={`اختيار اللون ${color.name}`}
                        aria-pressed={selected}
                        className="group flex cursor-pointer items-center gap-2.5"
                      >
                        <span
                          className={[
                            "flex h-8 w-8 items-center justify-center rounded-full border transition-all",
                            selected
                              ? "border-neutral-950 p-1"
                              : "border-transparent",
                          ].join(" ")}
                        >
                          <span
                            className="h-full w-full rounded-full border border-black/10"
                            style={{
                              backgroundColor: color.hex,
                            }}
                          />
                        </span>

                        <span
                          className={[
                            "text-xs transition-colors",
                            selected
                              ? "font-bold text-neutral-950"
                              : "text-neutral-500 group-hover:text-neutral-900",
                          ].join(" ")}
                        >
                          {color.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* =====================================================
                  QUANTITY
              ====================================================== */}

              <div className="mt-9">
                <span className="mb-3 block text-xs font-bold">
                  الكمية
                </span>

                <div className="flex w-fit items-center rounded-md border border-neutral-200">
                  <button
                    type="button"
                    aria-label="زيادة الكمية"
                    disabled={quantity >= product.stock}
                    onClick={() =>
                      setQuantity((value) =>
                        Math.min(product.stock, value + 1)
                      )
                    }
                    className="flex h-10 w-10 cursor-pointer items-center justify-center text-neutral-500 transition-colors hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <FiPlus className="h-3.5 w-3.5" />
                  </button>

                  <span className="w-10 text-center text-sm font-bold">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    aria-label="تقليل الكمية"
                    disabled={quantity <= 1}
                    onClick={() =>
                      setQuantity((value) =>
                        Math.max(1, value - 1)
                      )
                    }
                    className="flex h-10 w-10 cursor-pointer items-center justify-center text-neutral-500 transition-colors hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <FiMinus className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* =====================================================
                  ADD TO CART
              ====================================================== */}

              <button
                type="button"
                onClick={addToCart}
                className="mt-8 flex h-14 w-full cursor-pointer items-center justify-center gap-3 rounded-md bg-neutral-950 px-6 text-sm font-bold text-white transition-all hover:bg-neutral-800 active:scale-[0.99]"
              >
                {added ? (
                  <>
                    <FiCheck className="h-5 w-5" />
                    تمت الإضافة إلى السلة
                  </>
                ) : (
                  <>
                    <FiShoppingBag className="h-5 w-5" />

                    <span>
                      أضف إلى السلة
                    </span>

                    <span className="h-4 w-px bg-white/20" />

                    <span>
                      {total.toLocaleString("ar-MA")} د.م
                    </span>
                  </>
                )}
              </button>

              {/* =====================================================
                  SHIPPING / PAYMENT
              ====================================================== */}

              <div className="mt-8 grid grid-cols-2 divide-x divide-x-reverse divide-neutral-200 border-y border-neutral-200 py-6">

                <div className="flex items-center gap-3 px-1">
                  <FiTruck className="h-5 w-5 shrink-0 text-neutral-700" />

                  <div>
                    <p className="text-[11px] font-bold text-neutral-900">
                      {product.shipping}
                    </p>

                    <p className="mt-1 text-[10px] text-neutral-400">
                      توصيل سريع وآمن
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-4">
                  <FiShield className="h-5 w-5 shrink-0 text-neutral-700" />

                  <div>
                    <p className="text-[11px] font-bold text-neutral-900">
                      الدفع عند الاستلام
                    </p>

                    <p className="mt-1 text-[10px] text-neutral-400">
                      ادفع عند استلام طلبك
                    </p>
                  </div>
                </div>

              </div>

              {/* =====================================================
                  FEATURES
              ====================================================== */}

              <div className="mt-10">
                <h2 className="mb-4 text-sm font-bold">
                  مميزات المنتج
                </h2>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-xs text-neutral-600"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-100">
                        <FiCheck className="h-3 w-3 text-neutral-700" />
                      </span>

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        </div>

        {/* =====================================================
            MOBILE STICKY CART
        ====================================================== */}

        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/95 p-3 backdrop-blur-md lg:hidden">
          <div className="flex items-center gap-3">

            <div className="min-w-0 flex-1">
              <p className="truncate text-[10px] text-neutral-500">
                {product.name}
              </p>

              <p className="mt-0.5 text-base font-black">
                {total.toLocaleString("ar-MA")} د.م
              </p>
            </div>

            <button
              type="button"
              onClick={addToCart}
              className="flex h-12 flex-1 cursor-pointer items-center justify-center gap-2 rounded-md bg-neutral-950 text-xs font-bold text-white"
            >
              {added ? (
                <>
                  <FiCheck className="h-4 w-4" />
                  تمت الإضافة
                </>
              ) : (
                <>
                  <FiShoppingBag className="h-4 w-4" />
                  أضف إلى السلة
                </>
              )}
            </button>

          </div>
        </div>

      </div>
    </main>
  );
}