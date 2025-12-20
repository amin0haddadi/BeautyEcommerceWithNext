import {
  Banner,
  TrendingProducts,
  BrandLogos,
  DiscountSection,
  Advantages,
  TopCategories,
  NewArrivals,
  Subscribe,
  InstagramFeed,
} from "@/features/landing";

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

