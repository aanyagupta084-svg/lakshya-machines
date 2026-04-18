import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MACHINES, type MachineCategory } from "@/types";
import {
  ChevronDown,
  ChevronUp,
  Filter,
  MessageCircle,
  Search,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

const CATEGORY_LABELS: Record<MachineCategory | "all", string> = {
  all: "All Machines",
  baking: "Baking",
  mixing: "Mixing",
  dough: "Dough",
  juice: "Juice",
  processing: "Processing",
};

const MACHINE_IMAGES: Record<string, string> = {
  "pizza-oven":
    "https://images.unsplash.com/photo-1571066811602-716837d681de?w=600&q=80",
  "spiral-mixer":
    "https://images.unsplash.com/photo-1612532169729-a04107c3e9ee?w=600&q=80",
  "planetary-mixer":
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
  "roti-machine":
    "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
  "dough-kneader":
    "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80",
  "sugarcane-juicer":
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
};

type Machine = (typeof MACHINES)[0];

function MachineCard({ machine, index }: { machine: Machine; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const imgSrc = MACHINE_IMAGES[machine.id] || "/assets/images/placeholder.svg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      data-ocid={`machine.item.${index + 1}`}
      className="bg-card border border-border rounded-2xl overflow-hidden shadow-subtle flex flex-col transition-smooth hover:shadow-elevated group"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48 bg-muted">
        <img
          src={imgSrc}
          alt={machine.name}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "/assets/images/placeholder.svg";
          }}
        />
        <div className="absolute top-3 left-3">
          <Badge className="text-xs font-body capitalize bg-primary/90 text-primary-foreground border-none">
            {CATEGORY_LABELS[machine.category]}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="font-display font-bold text-lg text-foreground leading-tight">
            {machine.name}
          </h3>
          <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
            {machine.shortDescription}
          </p>
        </div>

        {/* Expandable details */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="text-sm text-foreground/80 leading-relaxed mb-3">
                {machine.description}
              </p>
              <div className="space-y-1.5">
                <p className="text-xs font-display font-semibold text-primary uppercase tracking-wide">
                  Key Features
                </p>
                <ul className="space-y-1.5">
                  {machine.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-sm text-foreground/75"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle details */}
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          data-ocid={`machine.expand_button.${index + 1}`}
          className="flex items-center gap-1 text-xs text-primary font-body font-medium hover:underline self-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          aria-expanded={expanded}
        >
          {expanded ? (
            <>
              <ChevronUp className="w-3.5 h-3.5" /> Show less
            </>
          ) : (
            <>
              <ChevronDown className="w-3.5 h-3.5" /> View details &amp; specs
            </>
          )}
        </button>

        <div className="flex-1" />

        {/* WhatsApp CTA */}
        <a
          href={getWhatsAppLink(machine.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid={`machine.whatsapp_button.${index + 1}`}
          className="flex items-center justify-center gap-2 w-full rounded-xl py-2.5 px-4 font-body font-semibold text-sm bg-accent text-accent-foreground transition-smooth hover:opacity-90 active:scale-95 shadow-sm"
          aria-label={`Inquire about ${machine.name} on WhatsApp`}
        >
          <MessageCircle className="w-4 h-4" />
          Inquire on WhatsApp
        </a>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<MachineCategory | "all">(
    "all",
  );

  const categories = useMemo(() => {
    const cats = Array.from(new Set(MACHINES.map((m) => m.category)));
    return ["all" as const, ...cats];
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return MACHINES.filter((m) => {
      const matchesSearch =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q) ||
        m.shortDescription.toLowerCase().includes(q);
      const matchesCat =
        activeCategory === "all" || m.category === activeCategory;
      return matchesSearch && matchesCat;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-card border-b border-border py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-1 rounded-full bg-primary inline-block" />
              <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">
                Our Machines
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground leading-tight text-balance">
              Food Processing Equipment Catalog
            </h1>
            <p className="mt-3 text-muted-foreground text-lg leading-relaxed">
              Industrial-grade machinery for bakeries, restaurants, and cloud
              kitchens — sourced and serviced in Varanasi &amp; Kashipur, UP.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Filters */}
      <section className="bg-muted/50 border-b border-border py-4 px-4 sticky top-0 z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          {/* Search */}
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <Input
              data-ocid="products.search_input"
              type="search"
              placeholder="Search machines…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-8 bg-card border-border h-9 text-sm font-body"
              aria-label="Search machines"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus-visible:outline-none"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category filter pills */}
          <fieldset
            className="flex items-center gap-1.5 flex-wrap border-0 p-0 m-0"
            aria-label="Filter by category"
          >
            <Filter
              className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0"
              aria-hidden
            />
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-ocid={`products.filter.${cat}`}
                aria-pressed={activeCategory === cat}
                className={`rounded-full px-3 py-1 text-xs font-body font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-rust"
                    : "bg-card text-muted-foreground border border-border hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {CATEGORY_LABELS[cat]}
              </button>
            ))}
          </fieldset>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground mb-6 font-body">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filtered.length}
            </span>{" "}
            of {MACHINES.length} machines
            {search && (
              <>
                {" "}
                for &ldquo;
                <span className="text-primary">{search}</span>&rdquo;
              </>
            )}
          </p>

          {filtered.length > 0 ? (
            <div
              data-ocid="products.list"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((machine, i) => (
                <MachineCard key={machine.id} machine={machine} index={i} />
              ))}
            </div>
          ) : (
            <div
              data-ocid="products.empty_state"
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
                <Search className="w-7 h-7 text-muted-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                No machines found
              </h3>
              <p className="text-muted-foreground text-sm max-w-xs">
                Try adjusting your search or filter. All 6 machines are
                available on request.
              </p>
              <Button
                variant="outline"
                className="mt-5"
                data-ocid="products.clear_filters_button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("all");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* WhatsApp Banner */}
      <section className="bg-accent/10 border-t border-accent/20 py-10 px-4">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0 shadow-md">
            <MessageCircle className="w-7 h-7 text-accent-foreground" />
          </div>
          <div className="flex-1">
            <h2 className="font-display font-bold text-xl text-foreground">
              Can't find what you're looking for?
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              Contact Lakshya Keshari directly on WhatsApp for custom
              requirements, bulk pricing, or machines not listed here.
            </p>
          </div>
          <a
            href={getWhatsAppLink(
              "Hi Lakshya Keshari, I need help finding the right food processing machine for my business.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="products.whatsapp_banner_button"
            className="flex-shrink-0 flex items-center gap-2 bg-accent text-accent-foreground rounded-xl px-5 py-2.5 font-body font-semibold text-sm transition-smooth hover:opacity-90 active:scale-95 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
