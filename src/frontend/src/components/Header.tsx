import { Button } from "@/components/ui/button";
import { DEFAULT_WHATSAPP_MESSAGE, getWhatsAppLink } from "@/lib/whatsapp";
import { NAV_LINKS } from "@/types";
import { Link, useRouter } from "@tanstack/react-router";
import { MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional — close menu whenever route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        router.navigate({ to: "/" });
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-card border-b border-border transition-smooth ${
        scrolled ? "shadow-elevated" : "shadow-subtle"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group min-w-0"
            data-ocid="header.home_link"
          >
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 transition-smooth group-hover:bg-primary/90">
              <span className="text-primary-foreground font-display font-bold text-lg leading-none">
                LK
              </span>
            </div>
            <div className="min-w-0">
              <p className="font-display font-bold text-foreground text-base lg:text-lg leading-tight truncate">
                Lakshya Keshari
              </p>
              <p className="text-muted-foreground text-[11px] leading-tight truncate hidden sm:block">
                Food Machines
              </p>
            </div>
          </Link>

          {/* Location badge — desktop */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs font-body">
            <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span>Varanasi, Kashipur UP</span>
          </div>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? currentPath === "/"
                  : currentPath.startsWith(link.href.replace("/#", "/"));
              const isAnchor = link.href.startsWith("/#");

              return isAnchor ? (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 text-sm font-body font-medium rounded-md transition-smooth relative ${
                    isActive
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
                  data-ocid={`header.nav_${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-4 right-4 h-0.5 bg-primary rounded-full" />
                  )}
                </button>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 text-sm font-body font-medium rounded-md transition-smooth relative ${
                    isActive
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
                  data-ocid={`header.nav_${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-4 right-4 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* WhatsApp CTA + hamburger */}
          <div className="flex items-center gap-2">
            <a
              href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="header.whatsapp_button"
            >
              <Button
                size="sm"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-medium gap-2 shadow-sm transition-smooth hidden sm:flex"
              >
                <Phone className="w-3.5 h-3.5" />
                WhatsApp
              </Button>
            </a>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-muted transition-smooth"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              data-ocid="header.menu_toggle"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-border bg-card animate-slide-down"
          data-ocid="header.mobile_menu"
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {/* Location */}
            <div className="flex items-center gap-1.5 px-3 py-2 text-muted-foreground text-xs">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>Varanasi, Kashipur, Uttar Pradesh</span>
            </div>
            <div className="h-px bg-border my-1" />
            {NAV_LINKS.map((link) => {
              const isAnchor = link.href.startsWith("/#");
              return isAnchor ? (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-3 py-2.5 text-sm font-body font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-smooth"
                  data-ocid={`header.mobile_nav_${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-3 py-2.5 text-sm font-body font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-smooth"
                  data-ocid={`header.mobile_nav_${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="h-px bg-border my-1" />
            <a
              href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
              data-ocid="header.mobile_whatsapp_button"
            >
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 font-body">
                <Phone className="w-4 h-4" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
