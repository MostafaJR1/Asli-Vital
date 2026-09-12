import Link from "next/link";
import { Header } from "../components/Header";
import { FiArrowLeft, FiTag, FiShoppingBag, FiGrid, FiCompass, FiStar, FiChevronLeft } from "react-icons/fi";
import { ProductsData } from "@/data/Products";
import Image from "next/image";

const categories = [
  { name: "العروض", icon: FiTag, href: "/discounts", bg: "bg-amber-50 text-amber-600" },
  { name: "ملابس", icon: FiGrid, href: "/category/clothing", bg: "bg-neutral-100 text-neutral-800" },
  { name: "هوديس", icon: FiCompass, href: "/category/hoodies", bg: "bg-neutral-100 text-neutral-800" },
  { name: "إكسسوارات", icon: FiShoppingBag, href: "/category/accessories", bg: "bg-neutral-100 text-neutral-800" },
];

export default function Home() {
  return (
    <div className="text-neutral-900 selection:bg-neutral-900 selection:text-white">
      <Header />

      <main dir="rtl" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 space-y-8">
        
        {/* ================= 1. PROMO BANNER (Pack Ad Copy) ================= */}
        <section className="relative rounded-2xl bg-[#eceff1] overflow-hidden shadow-sm border border-neutral-200/60 p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between">
          
          {/* Text Content */}
          <div className="z-10 space-y-3 max-w-lg text-right mb-8 lg:mb-0">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-neutral-600 text-white text-[11px] font-bold tracking-wide">
              عرض الباقات الحصرية
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.35]">
              اشتري باقة،
              <span className="text-neutral-700"> ووفر أكثر</span>
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              باقات متكاملة تجمع أفضل منتجاتنا بقيمة مضاعفة وتوفير حقيقي.
            </p>
            <div className="pt-2">
              <Link
                href="/bundles"
                className="inline-flex items-center gap-2 bg-black hover:bg-black/90 text-white px-7 py-3.5 rounded-lg text-xs font-bold"
              >
                <span>تصفح الباقات</span>
                <FiArrowLeft className="w-4 h-4 transition-transform hover:-translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Product Stack Visual */}
          <div className="relative z-10 flex items-center justify-center space-x-reverse space-x-[-2.5rem] sm:space-x-[-3.5rem] py-4">
            <div className="w-24 sm:w-36 aspect-[3/4] rounded-lg bg-white shadow-xl rotate-[6deg] overflow-hidden border border-neutral-200 flex items-center justify-center text-xs text-neutral-500 font-bold z-10">
              باقة 1
            </div>
            <div className="w-28 sm:w-40 aspect-[3/4] rounded-lg bg-[#fef3c7] shadow-2xl z-20 overflow-hidden border border-neutral-200 flex items-center justify-center text-xs text-neutral-700 font-bold">
              باقة مميزة
            </div>
            <div className="w-24 sm:w-36 aspect-[3/4] rounded-lg bg-neutral-900 shadow-xl rotate-[-6deg] overflow-hidden border border-neutral-800 flex items-center justify-center text-xs text-neutral-300 font-bold z-10">
              باقة 2
            </div>
          </div>

        </section>


        {/* ================= 2. CATEGORY QUICK-FILTERS ================= */}
        <section>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={idx}
                  href={cat.href}
                  className="group bg-white hover:bg-neutral-900 hover:text-white transition-all duration-300 p-4 rounded-lg border border-neutral-200/80 shadow-2xs flex flex-col items-center text-center gap-3"
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${cat.bg} group-hover:bg-neutral-800 group-hover:text-white`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-neutral-800 group-hover:text-white transition-colors">
                    {cat.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>


        {/* ================= 3. NEW ARRIVALS (Product Cards with Rating & Sales + Dynamic Single Route) ================= */}
        <section className="pt-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg sm:text-xl font-extrabold text-neutral-900">وصلو حديثاً</h2>
            <Link href="/products" className="flex items-center gap-2 text-xs font-bold text-black hover:underline w-max">
             عرض الكل <FiChevronLeft size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {ProductsData.slice(0, 4).map((product) => (
              <Link 
                key={product.id} 
                href={`/products/${product.id}`}
                className="bg-white rounded-lg p-3 border border-neutral-200/80 shadow-2xs space-y-3 group cursor-pointer hover:shadow-md transition-shadow block"
              >
                <div className="relative w-full aspect-[4/5] rounded-lg bg-neutral-100 overflow-hidden flex items-center justify-center">
                  <Image
                    src={product.image ||""}
                    alt={product.name}
                    fill
                    className="rounded-lg border-2 border-neutral-100 w-full h-full object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-neutral-900 text-white text-[9px] font-bold px-2 py-0.5 rounded-md">
                    جديد
                  </span>
                </div>
                
                <div className="text-right space-y-1.5 px-1">
                  <p className="text-xs font-bold text-neutral-900 line-clamp-1 group-hover:underline">
                    {product.name}
                  </p>
                  
                  {/* Rating and Reviews Info */}
                  <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-1">
                    <div className="flex items-center gap-1 font-semibold text-neutral-800">
                      <FiStar className="w-3.5 h-3.5 fill-neutral-900 text-neutral-900" />
                      <span>{product.rating}</span>
                    </div>
                    {/* <span className="bg-neutral-100 px-2 py-0.5 rounded-md font-medium text-neutral-600">
                      {product.reviews} تقييم
                    </span> */}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}