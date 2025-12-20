"use client";

import Link from "next/link";
import { getNewProducts } from "@/data/products";
import { ProductCard } from "@/features/products/components/product-card";

export function NewArrivals() {
  const products = getNewProducts();

  return (
    <section className="py-16 lg:py-24">
      <div className="container-custom">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-primary font-display text-lg mb-2">
              تازه رسیده
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">جدیدترین محصولات</h2>
          </div>
          <Link
            href="/shop?filter=new"
            className="text-primary font-medium hover:underline"
          >
            مشاهده همه جدیدها ←
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

