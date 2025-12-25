import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata-helpers";
import { categories } from "@/data/categories";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = generatePageMetadata({
  title: "دسته‌بندی‌ها",
  description:
    "مرور دسته‌بندی‌های مختلف محصولات زیبایی: آرایش، مراقبت پوست، مو، عطر، اسپا و ناخن. پیدا کردن محصولات مورد علاقه خود را آسان کنید.",
  image: "/assets/img/top-categories-img1.jpg",
  url: "/categories",
  keywords: [
    "دسته‌بندی محصولات",
    "آرایش",
    "مراقبت پوست",
    "مو",
    "عطر",
    "اسپا",
    "ناخن",
  ],
});

export default function CategoriesPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="دسته‌بندی‌ها"
        breadcrumbs={[
          { label: "خانه", href: "/" },
          { label: "دسته‌بندی‌ها" },
        ]}
      />

      <div className="py-8 lg:py-12">
        <div className="container-custom">
          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.categoryId}
                href={`/shop?category=${category.categoryId}`}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                  <h2 className="text-white text-2xl font-bold mb-2">
                    {category.name}
                  </h2>
                  <span className="text-white/80 text-sm group-hover:text-primary transition-colors">
                    خرید کنید ←
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

