import { Banner } from "@/features/landing/components/banner";
import { TrendingProducts } from "@/features/landing/components/trending-products";
import { BrandLogos } from "@/features/landing/components/brand-logos";
import { DiscountSection } from "@/features/landing/components/discount-section";
import { Advantages } from "@/features/landing/components/advantages";
import { TopCategories } from "@/features/landing/components/top-categories";
import { NewArrivals } from "@/features/landing/components/new-arrivals";
import { Subscribe } from "@/features/landing/components/subscribe";
import { InstagramFeed } from "@/features/landing/components/instagram-feed";

export default function HomePage() {
  return (
    <>
      <Banner />
      <TrendingProducts />
      <BrandLogos />
      <DiscountSection />
      <Advantages />
      <TopCategories />
      <NewArrivals />
      <Subscribe />
      <InstagramFeed />
    </>
  );
}

