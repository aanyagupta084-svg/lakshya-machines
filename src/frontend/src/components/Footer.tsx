import {
  DEFAULT_WHATSAPP_MESSAGE,
  WHATSAPP_DISPLAY,
  getWhatsAppLink,
} from "@/lib/whatsapp";
import { NAV_LINKS } from "@/types";
import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const year = new Date().getFullYear();
const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

export function Footer() {
  return (
    <footer
      className="bg-foreground text-primary-foreground"
      data-ocid="footer.section"
    >
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-display font-bold text-lg">
                  LK
                </span>
              </div>
              <div>
                <p className="font-display font-bold text-lg leading-tight">
                  Lakshya Keshari
                </p>
                <p className="text-primary-foreground/60 text-xs">
                  Food Processing Machines
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-sm mb-5">
              Your trusted partner for industrial food processing machinery in
              Varanasi. Quality machines, expert support, and direct
              manufacturer pricing.
            </p>
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-primary-foreground/70 text-sm">
                Varanasi, Kashipur, Uttar Pradesh
              </span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Phone className="w-4 h-4 text-accent flex-shrink-0" />
              <a
                href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-sm font-medium hover:text-accent/80 transition-smooth"
                data-ocid="footer.whatsapp_link"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary-foreground/40 flex-shrink-0" />
              <a
                href="mailto:lakshyakeshari.machines@gmail.com"
                className="text-primary-foreground/50 text-sm hover:text-primary-foreground/80 transition-smooth"
                data-ocid="footer.email_link"
              >
                lakshyakeshari.machines@gmail.com
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://wa.me/917905633007"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-accent/20 hover:bg-accent/40 flex items-center justify-center transition-smooth"
                aria-label="WhatsApp"
                data-ocid="footer.social_whatsapp"
              >
                <SiWhatsapp className="w-4 h-4 text-accent" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-primary-foreground/50 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-smooth"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-smooth"
                      data-ocid={`footer.nav_${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-primary-foreground/50 mb-4">
              Get a Quote
            </h3>
            <p className="text-primary-foreground/70 text-sm mb-4 leading-relaxed">
              Contact us directly on WhatsApp for instant quotes and product
              inquiries.
            </p>
            <a
              href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2.5 rounded-lg text-sm font-medium font-body transition-smooth"
              data-ocid="footer.whatsapp_cta"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-primary-foreground/40 text-xs">
            © {year} Lakshya Keshari Food Machines. All rights reserved.
          </p>
          <p className="text-primary-foreground/30 text-xs">
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground/60 transition-smooth underline-offset-2 underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
