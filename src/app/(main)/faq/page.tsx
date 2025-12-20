import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "Orders & Shipping",
    faqs: [
      {
        question: "How long does shipping take?",
        answer:
          "Standard shipping typically takes 3-5 business days within the US. Express shipping is available for 1-2 business day delivery. International shipping times vary by destination.",
      },
      {
        question: "Do you offer free shipping?",
        answer:
          "Yes! We offer free standard shipping on all orders over $99. Orders under $99 have a flat shipping rate of $10.",
      },
      {
        question: "Can I track my order?",
        answer:
          "Absolutely! Once your order ships, you'll receive an email with tracking information. You can also track your order by logging into your account.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by destination. You can see the shipping cost at checkout.",
      },
    ],
  },
  {
    title: "Returns & Refunds",
    faqs: [
      {
        question: "What is your return policy?",
        answer:
          "We offer a 30-day return policy for unused and unopened products. Items must be in their original packaging. Some items like opened cosmetics may not be eligible for return due to hygiene reasons.",
      },
      {
        question: "How do I initiate a return?",
        answer:
          "To start a return, log into your account, go to your order history, and select the item you'd like to return. You'll receive a prepaid shipping label via email.",
      },
      {
        question: "When will I receive my refund?",
        answer:
          "Once we receive and inspect your return, refunds are processed within 5-7 business days. The refund will be credited to your original payment method.",
      },
    ],
  },
  {
    title: "Products & Ingredients",
    faqs: [
      {
        question: "Are your products cruelty-free?",
        answer:
          "Yes! We are committed to cruelty-free beauty. None of our products or ingredients are tested on animals, and we don't sell in markets that require animal testing.",
      },
      {
        question: "Are your products suitable for sensitive skin?",
        answer:
          "Many of our products are formulated for sensitive skin. Look for products labeled 'gentle' or 'for sensitive skin.' We recommend doing a patch test before first use.",
      },
      {
        question: "Do you have vegan products?",
        answer:
          "Yes! We offer a wide range of vegan products. You can filter by 'vegan' on our shop page or look for the vegan label on product pages.",
      },
      {
        question: "How should I store my products?",
        answer:
          "Most products should be stored in a cool, dry place away from direct sunlight. Some products like vitamin C serums benefit from refrigeration. Check the product label for specific storage instructions.",
      },
    ],
  },
  {
    title: "Account & Payment",
    faqs: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. All transactions are securely encrypted.",
      },
      {
        question: "Is it safe to shop on your website?",
        answer:
          "Absolutely! We use industry-standard SSL encryption to protect your personal and payment information. We never store your full credit card details.",
      },
      {
        question: "How do I reset my password?",
        answer:
          "Click 'Forgot Password' on the login page and enter your email address. You'll receive a link to reset your password. If you don't see the email, check your spam folder.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="py-8 lg:py-12">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-display text-lg italic mb-2">
            Help Center
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about orders, shipping, returns,
            and more. Can&apos;t find what you&apos;re looking for? Contact us!
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-3xl mx-auto space-y-8">
          {faqCategories.map((category) => (
            <div key={category.title}>
              <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
              <Accordion type="single" collapsible className="bg-card rounded-xl border">
                {category.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${category.title}-${index}`}
                    className="px-6"
                  >
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 p-8 bg-muted/50 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            Our support team is here to help you with any questions or concerns.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}

