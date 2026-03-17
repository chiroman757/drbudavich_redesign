/*
 * Layout Component — Organic Modernism Design
 * - Warm sand background, forest green accents
 * - Playfair Display headings, DM Sans body
 * - Organic shapes, gentle transitions
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-forest text-cream text-sm py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:7577555565" className="flex items-center gap-1.5 hover:text-clay transition-colors">
              <Phone size={14} />
              <span>(757) 755-5565</span>
            </a>
            <a href="mailto:contactus@drbudavich.com" className="flex items-center gap-1.5 hover:text-clay transition-colors">
              <Mail size={14} />
              <span>contactus@drbudavich.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={14} />
            <span>10210 Prosperity Park Dr STE 400, Charlotte, NC 28269</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-sm"
            : "bg-cream"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <span className="font-serif text-2xl lg:text-3xl font-semibold text-charcoal tracking-tight">
              Dr. Budavich <span className="text-forest">DC</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                    location === link.href
                      ? "text-forest"
                      : "text-charcoal/70 hover:text-forest"
                  }`}
                >
                  {link.label}
                  {location === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-terracotta rounded-full"
                    />
                  )}
                </span>
              </Link>
            ))}
            <a
              href="https://drbudavich.janeapp.com/#staff_member/1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-forest text-cream px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-forest-light transition-all duration-300 hover:shadow-lg hover:shadow-forest/20"
            >
              Book Online
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-charcoal p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-cream border-t border-sand-dark overflow-hidden"
            >
              <nav className="container py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <span
                      className={`block text-lg font-medium py-2 transition-colors ${
                        location === link.href
                          ? "text-forest"
                          : "text-charcoal/70"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                ))}
                <a
                  href="https://drbudavich.janeapp.com/#staff_member/1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-forest text-cream px-6 py-3 rounded-full text-center font-semibold tracking-wide mt-2"
                >
                  Book Online
                </a>
                <div className="mt-4 pt-4 border-t border-sand-dark flex flex-col gap-3 text-sm text-charcoal/70">
                  <a href="tel:7577555565" className="flex items-center gap-2">
                    <Phone size={14} />
                    (757) 755-5565
                  </a>
                  <a href="mailto:contactus@drbudavich.com" className="flex items-center gap-2">
                    <Mail size={14} />
                    contactus@drbudavich.com
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-charcoal text-cream/80">
        {/* Organic wave divider */}
        <div className="w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="oklch(0.97 0.01 80)"
              opacity=".5"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              fill="oklch(0.97 0.01 80)"
              opacity=".3"
            />
          </svg>
        </div>

        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <h3 className="font-serif text-2xl text-cream mb-4">
                Dr. Budavich <span className="text-clay">DC</span>
              </h3>
              <p className="text-cream/60 leading-relaxed mb-6">
                Holistic health care specializing in chiropractic, acupuncture,
                applied kinesiology, and nutrition in Charlotte, NC.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg text-cream mb-4">Quick Links</h4>
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <span className="text-cream/60 hover:text-clay transition-colors">
                      {link.label}
                    </span>
                  </Link>
                ))}
                <a
                  href="https://drbudavich.janeapp.com/#staff_member/1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/60 hover:text-clay transition-colors"
                >
                  Book Online
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif text-lg text-cream mb-4">Contact</h4>
              <div className="flex flex-col gap-3 text-cream/60">
                <a href="tel:7577555565" className="flex items-center gap-2 hover:text-clay transition-colors">
                  <Phone size={16} />
                  (757) 755-5565
                </a>
                <a href="mailto:contactus@drbudavich.com" className="flex items-center gap-2 hover:text-clay transition-colors">
                  <Mail size={16} />
                  contactus@drbudavich.com
                </a>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <span>
                    10210 Prosperity Park Dr STE 400
                    <br />
                    Charlotte, NC 28269
                  </span>
                </div>
                <p className="mt-2">
                  <span className="text-cream font-medium">Hours:</span> Saturday 7:00a - 3:00p
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-cream/10 mt-12 pt-8 text-center text-cream/40 text-sm">
            <p>&copy; {new Date().getFullYear()} Dr. Matthew Budavich DC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
