import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    id: "1",
    slug: "skincare-routine-for-beginners",
    title: "The Ultimate Skincare Routine for Beginners",
    image: "/assets/img/blog-img1.jpg",
    date: "Dec 15, 2024",
    author: "Sarah Johnson",
    category: "Skincare",
    excerpt:
      "Starting a skincare routine can feel overwhelming. Here's our guide to building a simple, effective routine that works.",
  },
  {
    id: "2",
    slug: "makeup-trends-2024",
    title: "Top Makeup Trends to Watch in 2024",
    image: "/assets/img/blog-img2.jpg",
    date: "Dec 10, 2024",
    author: "Emily Chen",
    category: "Makeup",
    excerpt:
      "From glass skin to bold lips, discover the makeup trends that are defining beauty this year.",
  },
  {
    id: "3",
    slug: "natural-ingredients-guide",
    title: "A Guide to Natural Beauty Ingredients",
    image: "/assets/img/blog-img3.jpg",
    date: "Dec 5, 2024",
    author: "Michael Park",
    category: "Ingredients",
    excerpt:
      "Learn about the natural ingredients that can transform your beauty routine and why they work.",
  },
  {
    id: "4",
    slug: "hair-care-winter-tips",
    title: "Winter Hair Care: Keep Your Locks Healthy",
    image: "/assets/img/blog-img4.jpg",
    date: "Nov 28, 2024",
    author: "Lisa Wang",
    category: "Hair Care",
    excerpt:
      "Cold weather can be tough on your hair. Here are our top tips for maintaining healthy hair all winter long.",
  },
  {
    id: "5",
    slug: "self-care-sunday-routine",
    title: "Create Your Perfect Self-Care Sunday Routine",
    image: "/assets/img/blog-img5.jpg",
    date: "Nov 20, 2024",
    author: "Sarah Johnson",
    category: "Wellness",
    excerpt:
      "Transform your Sundays into a rejuvenating self-care ritual with our step-by-step guide.",
  },
  {
    id: "6",
    slug: "fragrance-layering-tips",
    title: "The Art of Fragrance Layering",
    image: "/assets/img/blog-img6.jpg",
    date: "Nov 15, 2024",
    author: "Emily Chen",
    category: "Fragrance",
    excerpt:
      "Discover how to create your signature scent by mastering the art of fragrance layering.",
  },
];

export default function BlogPage() {
  return (
    <div className="py-8 lg:py-12">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-display text-lg italic mb-2">
            Latest
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Beauty Blog
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tips, trends, and insights from our beauty experts to help you look
            and feel your best.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <Link
            href={`/blog/${blogPosts[0].slug}`}
            className="group grid md:grid-cols-2 gap-6 bg-card rounded-2xl overflow-hidden border"
          >
            <div className="relative aspect-[4/3] md:aspect-auto">
              <Image
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                <span className="text-primary font-medium">
                  {blogPosts[0].category}
                </span>
                <span>•</span>
                <span>{blogPosts[0].date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                {blogPosts[0].title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {blogPosts[0].excerpt}
              </p>
              <p className="text-sm text-muted-foreground">
                By {blogPosts[0].author}
              </p>
            </div>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-card rounded-xl overflow-hidden border"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <span className="text-primary font-medium">
                    {post.category}
                  </span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

