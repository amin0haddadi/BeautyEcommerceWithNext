import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { footerNavItems, paymentMethods } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Top Section */}
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/70">ما را دنبال کنید:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/img/footer-logo.svg"
              alt="BeShop"
              width={120}
              height={40}
            />
          </Link>

          {/* Payment Methods */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/70">روش‌های پرداخت:</span>
            <div className="flex items-center gap-2">
              {paymentMethods.map((method) => (
                <Image
                  key={method.name}
                  src={method.icon}
                  alt={method.name}
                  width={40}
                  height={25}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {footerNavItems.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-sm text-white/70 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">تماس با ما</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">
                  تهران، خیابان ولیعصر، پلاک ۲۷
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+982112345678"
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    ۰۲۱-۱۲۳۴۵۶۷۸
                  </a>
                  <a
                    href="tel:+989121234567"
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    ۰۹۱۲-۱۲۳۴۵۶۷
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@beshop.ir"
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                >
                  info@beshop.ir
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <p className="text-center text-sm text-white/50">
            © کلیه حقوق محفوظ است. بی‌شاپ {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}


