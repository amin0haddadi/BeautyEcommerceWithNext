"use client";

import Link from "next/link";
import { getTrendingProducts } from "@/data/products";
import { ProductCard } from "@/features/products/components/product-card";

export function TrendingProducts() {
  const products = getTrendingProducts();

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container-custom">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-primary font-display text-lg mb-2">
              این فصل
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">پرفروش‌ترین‌ها</h2>
          </div>
          <Link
            href="/shop"
            className="text-primary font-medium hover:underline"
          >
            مشاهده همه محصولات ←
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

