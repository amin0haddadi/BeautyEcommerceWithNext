import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";

export function TopCategories() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-display text-lg mb-2">
            برترین
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">دسته‌بندی‌ها</h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {categories.map((category) => (
            <Link
              key={category.categoryId}
              href={`/shop?category=${category.categoryId}`}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-end justify-center pb-6">
                <h3 className="text-white text-lg font-semibold group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

