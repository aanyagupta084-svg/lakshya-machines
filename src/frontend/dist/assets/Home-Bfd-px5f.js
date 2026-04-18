import { c as createLucideIcon, j as jsxRuntimeExports, M as MapPin, L as Link, B as Button, a as MessageCircle, g as getWhatsAppLink, b as MACHINES, W as WHATSAPP_DISPLAY, P as Phone, D as DEFAULT_WHATSAPP_MESSAGE } from "./index-BY5p7aNM.js";
import { B as Badge } from "./badge-BYfTwxjz.js";
import { m as motion } from "./proxy-TnsQoU_u.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
function MachineCard({
  machine,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "bg-card border border-border rounded-2xl overflow-hidden shadow-subtle hover:shadow-elevated transition-smooth group flex flex-col",
      initial: { opacity: 0, y: 28 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.45, delay: index * 0.07 },
      "data-ocid": `machine.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-48 bg-muted overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: machine.imageUrl,
              alt: machine.name,
              className: "w-full h-full object-cover group-hover:scale-105 transition-smooth",
              onError: (e) => {
                e.currentTarget.src = "/assets/images/placeholder.svg";
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute top-3 left-3 bg-primary text-primary-foreground text-xs capitalize", children: machine.category })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col flex-1 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground leading-tight", children: machine.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed flex-1", children: machine.shortDescription }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: getWhatsAppLink(machine.whatsappMessage),
              target: "_blank",
              rel: "noopener noreferrer",
              "data-ocid": `machine.inquire_button.${index + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  className: "w-full bg-accent text-accent-foreground hover:bg-accent/90 gap-2 transition-smooth",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
                    "Inquire via WhatsApp"
                  ]
                }
              )
            }
          )
        ] })
      ]
    }
  );
}
const TRUST_ITEMS = [
  { icon: Award, stat: "6+", label: "Machine Models" },
  { icon: MapPin, stat: "Varanasi", label: "Based in UP" },
  { icon: Users, stat: "500+", label: "Happy Clients" },
  { icon: Star, stat: "Direct", label: "Manufacturer Contact" },
  { icon: Zap, stat: "Fast", label: "Prompt Service" },
  { icon: Shield, stat: "Quality", label: "Assured Machinery" }
];
const DIFFERENTIATORS = [
  {
    icon: Shield,
    title: "Quality Assured",
    desc: "Every machine is rigorously tested before delivery. We source from top-tier manufacturers so your production never stops."
  },
  {
    icon: Zap,
    title: "Prompt Service",
    desc: "Fast installation and after-sales support across Varanasi and Kashipur. We're just a WhatsApp message away."
  },
  {
    icon: Award,
    title: "Expert Guidance",
    desc: "With years of domain expertise, Lakshya Keshari personally helps you choose the right equipment for your scale."
  }
];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", "data-ocid": "home.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative min-h-[88vh] flex items-center overflow-hidden",
        "data-ocid": "home.hero.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/assets/generated/food-machines-hero.dim_1400x700.jpg",
                alt: "Food processing machinery",
                className: "w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/55 to-foreground/20" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rust-stripe opacity-30 pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: -12 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.4 },
                className: "flex items-center gap-2 mb-6",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-primary/90 text-primary-foreground border-0 px-3 py-1 text-xs font-body tracking-wide", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 mr-1" }),
                  "Varanasi · Kashipur, UP"
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.h1,
              {
                className: "font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight text-balance mb-5",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.1 },
                children: [
                  "Lakshya Keshari",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground/90", children: "Food Machines" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                className: "font-body text-lg text-white/85 leading-relaxed mb-8 max-w-xl",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.2 },
                children: "Premium food processing equipment for bakeries, restaurants, canteens & food courts. Quality machines. Reliable service. Direct from Varanasi."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "flex flex-wrap gap-4",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.3 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", "data-ocid": "hero.browse_products_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "lg",
                      className: "bg-primary text-primary-foreground hover:bg-primary/90 gap-2 shadow-rust transition-smooth font-display font-semibold px-7",
                      children: [
                        "Browse Machines",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE),
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "data-ocid": "hero.whatsapp_cta_button",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          size: "lg",
                          variant: "outline",
                          className: "border-white/60 text-white bg-white/10 hover:bg-white/20 gap-2 backdrop-blur-sm transition-smooth font-display font-semibold px-7",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5 text-accent" }),
                            "Chat on WhatsApp"
                          ]
                        }
                      )
                    }
                  )
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-primary py-5 px-4",
        "data-ocid": "home.trust_bar.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4", children: TRUST_ITEMS.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "flex flex-col items-center text-center gap-1",
            initial: { opacity: 0, scale: 0.9 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { duration: 0.3, delay: i * 0.05 },
            "data-ocid": `trust.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-5 w-5 text-primary-foreground/80 mb-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-primary-foreground text-base leading-tight", children: item.stat }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs text-primary-foreground/70", children: item.label })
            ]
          },
          item.stat
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 px-4 bg-background",
        id: "machines",
        "data-ocid": "home.machines.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "text-center mb-12",
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.4 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-primary/10 text-primary border-primary/20 font-body", children: "Our Equipment" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-extrabold text-foreground mb-3", children: "Featured Machines" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body max-w-xl mx-auto", children: "Industrial-grade food processing equipment for every commercial kitchen. Direct pricing, fast delivery across Uttar Pradesh." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: MACHINES.map((machine, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(MachineCard, { machine, index }, machine.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "mt-10 text-center",
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { duration: 0.4, delay: 0.3 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", "data-ocid": "home.view_all_products_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "lg",
                  className: "border-primary text-primary hover:bg-primary/5 gap-2 font-display font-semibold transition-smooth",
                  children: [
                    "View All Products",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" })
                  ]
                }
              ) })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 px-4 bg-muted/30",
        id: "about",
        "data-ocid": "home.about.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "flex justify-center lg:justify-start",
              initial: { opacity: 0, x: -30 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden shadow-elevated border-4 border-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "/assets/generated/owner-lakshya.dim_400x480.jpg",
                    alt: "Lakshya Keshari - Owner",
                    className: "w-full h-full object-cover"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-5 -right-5 bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-rust", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-sm leading-tight", children: "Lakshya Keshari" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-primary-foreground/80", children: "Founder & Owner" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-4 -left-4 w-16 h-16 bg-primary/15 rounded-xl rust-stripe" })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 30 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: 0.1 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 bg-primary/10 text-primary border-primary/20 font-body", children: "About Us" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl font-extrabold text-foreground mb-4 text-balance", children: [
                  "Trusted Food Processing",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Equipment in Varanasi"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-muted-foreground leading-relaxed mb-4", children: [
                  "Lakshya Keshari Food Machines has been serving the food industry across Varanasi and Kashipur, Uttar Pradesh with reliable, high-quality commercial equipment. Founded by",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Lakshya Keshari" }),
                  ", our business is built on trust, transparency, and a deep understanding of what food businesses need to thrive."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground leading-relaxed mb-6", children: "From bakeries and restaurants to large-scale canteens and cloud kitchens, we supply the right machinery — backed by genuine after-sales support and direct manufacturer partnerships. When you call us, you speak to the owner directly." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: DIFFERENTIATORS.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    className: "flex gap-4 items-start",
                    initial: { opacity: 0, x: 20 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.35, delay: 0.2 + i * 0.1 },
                    "data-ocid": `about.differentiator.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-5 w-5 text-primary" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-foreground text-sm mb-0.5", children: item.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground leading-relaxed", children: item.desc })
                      ] })
                    ]
                  },
                  item.title
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 shadow-subtle", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-sm text-muted-foreground", children: "Varanasi & Kashipur, Uttar Pradesh" })
                ] })
              ]
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "py-16 px-4 bg-accent relative overflow-hidden",
        "data-ocid": "home.whatsapp_banner.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-16 -right-16 w-64 h-64 rounded-full bg-accent-foreground/5 pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-accent-foreground/5 pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-3xl mx-auto text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.45 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-accent-foreground/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-8 w-8 text-accent-foreground" }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-extrabold text-accent-foreground mb-3 text-balance", children: "Ready to Equip Your Kitchen?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-accent-foreground/85 text-lg mb-2", children: "Talk directly to Lakshya Keshari for pricing, availability & advice." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold text-accent-foreground text-2xl mb-7 flex items-center justify-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }),
                  WHATSAPP_DISPLAY
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "data-ocid": "whatsapp_banner.chat_now_button",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "lg",
                        className: "bg-accent-foreground text-accent hover:bg-accent-foreground/90 gap-2 shadow-elevated font-display font-bold text-base px-10 transition-smooth",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5" }),
                          "Chat Now on WhatsApp"
                        ]
                      }
                    )
                  }
                )
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
export {
  Home as default
};
