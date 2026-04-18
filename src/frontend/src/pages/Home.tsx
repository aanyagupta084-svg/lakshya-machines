import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DEFAULT_WHATSAPP_MESSAGE,
  WHATSAPP_DISPLAY,
  getWhatsAppLink,
} from "@/lib/whatsapp";
import { MACHINES } from "@/types";
import { Link } from "@tanstack/react-router";
import {
  Award,
  ChevronRight,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

// ── Machine card ───────────────────────────────────────────────────────────

function MachineCard({
  machine,
  index,
}: { machine: (typeof MACHINES)[0]; index: number }) {
  return (
    <motion.div
      className="bg-card border border-border rounded-2xl overflow-hidden shadow-subtle hover:shadow-elevated transition-smooth group flex flex-col"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      data-ocid={`machine.item.${index + 1}`}
    >
      {/* Image area */}
      <div className="relative h-48 bg-muted overflow-hidden">
        <img
          src={machine.imageUrl}
          alt={machine.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "/assets/images/placeholder.svg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs capitalize">
          {machine.category}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="font-display font-bold text-lg text-foreground leading-tight">
          {machine.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {machine.shortDescription}
        </p>
        <a
          href={getWhatsAppLink(machine.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid={`machine.inquire_button.${index + 1}`}
        >
          <Button
            size="sm"
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 gap-2 transition-smooth"
          >
            <MessageCircle className="h-4 w-4" />
            Inquire via WhatsApp
          </Button>
        </a>
      </div>
    </motion.div>
  );
}

// ── Trust badges ───────────────────────────────────────────────────────────

const TRUST_ITEMS = [
  { icon: Award, stat: "6+", label: "Machine Models" },
  { icon: MapPin, stat: "Varanasi", label: "Based in UP" },
  { icon: Users, stat: "500+", label: "Happy Clients" },
  { icon: Star, stat: "Direct", label: "Manufacturer Contact" },
  { icon: Zap, stat: "Fast", label: "Prompt Service" },
  { icon: Shield, stat: "Quality", label: "Assured Machinery" },
];

// ── Differentiators ────────────────────────────────────────────────────────

const DIFFERENTIATORS = [
  {
    icon: Shield,
    title: "Quality Assured",
    desc: "Every machine is rigorously tested before delivery. We source from top-tier manufacturers so your production never stops.",
  },
  {
    icon: Zap,
    title: "Prompt Service",
    desc: "Fast installation and after-sales support across Varanasi and Kashipur. We're just a WhatsApp message away.",
  },
  {
    icon: Award,
    title: "Expert Guidance",
    desc: "With years of domain expertise, Lakshya Keshari personally helps you choose the right equipment for your scale.",
  },
];

// ── Page ───────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="flex flex-col" data-ocid="home.page">
      {/* ── HERO ── */}
      <section
        className="relative min-h-[88vh] flex items-center overflow-hidden"
        data-ocid="home.hero.section"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/assets/generated/food-machines-hero.dim_1400x700.jpg"
            alt="Food processing machinery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/55 to-foreground/20" />
        </div>

        {/* Rust stripe decorative element */}
        <div className="absolute inset-0 rust-stripe opacity-30 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 mb-6"
            >
              <Badge className="bg-primary/90 text-primary-foreground border-0 px-3 py-1 text-xs font-body tracking-wide">
                <MapPin className="h-3 w-3 mr-1" />
                Varanasi · Kashipur, UP
              </Badge>
            </motion.div>

            <motion.h1
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight text-balance mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Lakshya Keshari
              <br />
              <span className="text-primary-foreground/90">Food Machines</span>
            </motion.h1>

            <motion.p
              className="font-body text-lg text-white/85 leading-relaxed mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Premium food processing equipment for bakeries, restaurants,
              canteens &amp; food courts. Quality machines. Reliable service.
              Direct from Varanasi.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/products" data-ocid="hero.browse_products_button">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 shadow-rust transition-smooth font-display font-semibold px-7"
                >
                  Browse Machines
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </Link>
              <a
                href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.whatsapp_cta_button"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/60 text-white bg-white/10 hover:bg-white/20 gap-2 backdrop-blur-sm transition-smooth font-display font-semibold px-7"
                >
                  <MessageCircle className="h-5 w-5 text-accent" />
                  Chat on WhatsApp
                </Button>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ── TRUST BAR ── */}
      <section
        className="bg-primary py-5 px-4"
        data-ocid="home.trust_bar.section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {TRUST_ITEMS.map((item, i) => (
              <motion.div
                key={item.stat}
                className="flex flex-col items-center text-center gap-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                data-ocid={`trust.item.${i + 1}`}
              >
                <item.icon className="h-5 w-5 text-primary-foreground/80 mb-0.5" />
                <span className="font-display font-bold text-primary-foreground text-base leading-tight">
                  {item.stat}
                </span>
                <span className="font-body text-xs text-primary-foreground/70">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED MACHINES ── */}
      <section
        className="py-20 px-4 bg-background"
        id="machines"
        data-ocid="home.machines.section"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 font-body">
              Our Equipment
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
              Featured Machines
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Industrial-grade food processing equipment for every commercial
              kitchen. Direct pricing, fast delivery across Uttar Pradesh.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MACHINES.map((machine, index) => (
              <MachineCard key={machine.id} machine={machine} index={index} />
            ))}
          </div>

          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link to="/products" data-ocid="home.view_all_products_button">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/5 gap-2 font-display font-semibold transition-smooth"
              >
                View All Products
                <ChevronRight className="h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        className="py-20 px-4 bg-muted/30"
        id="about"
        data-ocid="home.about.section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Owner photo */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden shadow-elevated border-4 border-card">
                  <img
                    src="/assets/generated/owner-lakshya.dim_400x480.jpg"
                    alt="Lakshya Keshari - Owner"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-5 bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-rust">
                  <p className="font-display font-bold text-sm leading-tight">
                    Lakshya Keshari
                  </p>
                  <p className="font-body text-xs text-primary-foreground/80">
                    Founder &amp; Owner
                  </p>
                </div>
                {/* Rust accent strip */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/15 rounded-xl rust-stripe" />
              </div>
            </motion.div>

            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 font-body">
                About Us
              </Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mb-4 text-balance">
                Trusted Food Processing
                <br />
                Equipment in Varanasi
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Lakshya Keshari Food Machines has been serving the food industry
                across Varanasi and Kashipur, Uttar Pradesh with reliable,
                high-quality commercial equipment. Founded by{" "}
                <strong className="text-foreground">Lakshya Keshari</strong>,
                our business is built on trust, transparency, and a deep
                understanding of what food businesses need to thrive.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                From bakeries and restaurants to large-scale canteens and cloud
                kitchens, we supply the right machinery — backed by genuine
                after-sales support and direct manufacturer partnerships. When
                you call us, you speak to the owner directly.
              </p>

              {/* Differentiators */}
              <div className="space-y-4">
                {DIFFERENTIATORS.map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="flex gap-4 items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.2 + i * 0.1 }}
                    data-ocid={`about.differentiator.${i + 1}`}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground text-sm mb-0.5">
                        {item.title}
                      </h4>
                      <p className="font-body text-xs text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Location pill */}
              <div className="mt-6 inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 shadow-subtle">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-body text-sm text-muted-foreground">
                  Varanasi &amp; Kashipur, Uttar Pradesh
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHATSAPP CTA BANNER ── */}
      <section
        className="py-16 px-4 bg-accent relative overflow-hidden"
        data-ocid="home.whatsapp_banner.section"
      >
        {/* Decorative circles */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-accent-foreground/5 pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-accent-foreground/5 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            {/* WhatsApp icon */}
            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 rounded-2xl bg-accent-foreground/15 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-accent-foreground" />
              </div>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-accent-foreground mb-3 text-balance">
              Ready to Equip Your Kitchen?
            </h2>
            <p className="font-body text-accent-foreground/85 text-lg mb-2">
              Talk directly to Lakshya Keshari for pricing, availability &amp;
              advice.
            </p>
            <p className="font-display font-bold text-accent-foreground text-2xl mb-7 flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              {WHATSAPP_DISPLAY}
            </p>

            <a
              href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="whatsapp_banner.chat_now_button"
            >
              <Button
                size="lg"
                className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 gap-2 shadow-elevated font-display font-bold text-base px-10 transition-smooth"
              >
                <MessageCircle className="h-5 w-5" />
                Chat Now on WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
