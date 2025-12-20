import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";

export default function CategoriesPage() {
  return (
    <div className="py-8 lg:py-12">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-display text-lg italic mb-2">
            Browse
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Shop by Category
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of beauty products organized by
            category. Find exactly what you&apos;re looking for.
          </p>
        </div>

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
                  Shop Now →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

