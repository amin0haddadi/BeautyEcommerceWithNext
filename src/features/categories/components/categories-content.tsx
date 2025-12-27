"use client";

import Link from "next/link";
import Image from "next/image";
import { useCategoriesWithProducts } from "@/hooks/queries/categories";
import { Loading } from "@/components/ui/loading";
import { ErrorMessage } from "@/components/ui/error-message";
import { ProductGrid } from "@/features/products/components/product-grid";

export function CategoriesContent() {
  const { data: categoriesWithProducts, isLoading, error } = useCategoriesWithProducts();

  if (isLoading) {
    return <Loading message="در حال بارگذاری دسته‌بندی‌ها..." withContainer />;
  }

  if (error) {
    return (
      <ErrorMessage
        message="خطا در بارگذاری دسته‌بندی‌ها. لطفاً دوباره تلاش کنید."
        onRetry={() => window.location.reload()}
        withContainer
      />
    );
  }

  if (!categoriesWithProducts || categoriesWithProducts.length === 0) {
    return (
      <div className="py-8 lg:py-12">
        <div className="container-custom">
          <p className="text-center text-muted-foreground">
            دسته‌بندی‌ای یافت نشد.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 lg:py-12">
      <div className="container-custom space-y-16">
        {categoriesWithProducts.map((category) => (
          <section key={category.categoryId} className="space-y-6">
            {/* Category Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {category.name}
                </h2>
                <p className="text-muted-foreground">
                  {category.productsCount} محصول
                </p>
              </div>
              <Link
                href={`/shop?filter[category.slug]=${category.categoryId}`}
                className="text-primary font-medium hover:underline"
              >
                مشاهده همه ←
              </Link>
            </div>

            {/* Top Products Grid */}
            {category.products && category.products.length > 0 ? (
              <ProductGrid products={category.products} />
            ) : (
              <p className="text-center text-muted-foreground py-8">
                محصولی در این دسته‌بندی یافت نشد.
              </p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

