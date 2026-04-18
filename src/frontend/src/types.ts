// Machine catalog type
export interface Machine {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  category: MachineCategory;
  imageUrl: string;
  features: string[];
  whatsappMessage: string;
}

export type MachineCategory =
  | "baking"
  | "mixing"
  | "dough"
  | "juice"
  | "processing";

// Inquiry types (mirrors backend)
export interface Inquiry {
  id: bigint;
  name: string;
  phone: string;
  email: string;
  machineInterest: string;
  message: string;
  timestamp: bigint;
}

export interface InquiryInput {
  name: string;
  phone: string;
  email: string;
  machineInterest: string;
  message: string;
}

// Navigation
export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

// Machine catalog data
export const MACHINES: Machine[] = [
  {
    id: "pizza-oven",
    name: "Industrial Pizza Oven",
    shortDescription:
      "High-capacity deck ovens for commercial bakeries and restaurants.",
    description:
      "Heavy-duty stainless steel pizza oven with precise temperature control up to 500°C. Ideal for restaurants, bakeries, and cloud kitchens. Uniform heat distribution ensures perfect baking every time.",
    category: "baking",
    imageUrl: "/assets/images/pizza-oven.jpg",
    features: [
      "Temperature range: 100–500°C",
      "Stainless steel interior",
      "Digital temperature control",
      "Multiple deck options",
    ],
    whatsappMessage:
      "Hi, I'm interested in the Industrial Pizza Oven. Please share details and pricing.",
  },
  {
    id: "spiral-mixer",
    name: "Spiral Mixer",
    shortDescription:
      "Professional dough mixers for high-volume bread and pizza production.",
    description:
      "Industrial spiral mixer with variable speed control and robust stainless steel bowl. Designed for continuous heavy-duty use in bakeries, hotels, and food production units.",
    category: "mixing",
    imageUrl: "/assets/images/spiral-mixer.jpg",
    features: [
      "Bowl capacity: 20–200 kg",
      "Variable speed control",
      "Heavy-duty motor",
      "Safety guard included",
    ],
    whatsappMessage:
      "Hi, I'm interested in the Spiral Mixer. Please share details and pricing.",
  },
  {
    id: "planetary-mixer",
    name: "Planetary Mixer",
    shortDescription:
      "Multi-purpose mixer for bakeries, hotels, and catering services.",
    description:
      "Versatile planetary mixer with multiple attachments for whipping, beating, and mixing. Suitable for cream, batter, dough, and more. Built for commercial kitchens and food production.",
    category: "mixing",
    imageUrl: "/assets/images/planetary-mixer.jpg",
    features: [
      "Capacity: 5–60 liters",
      "3 attachments included",
      "Variable speed settings",
      "Overload protection",
    ],
    whatsappMessage:
      "Hi, I'm interested in the Planetary Mixer Machine. Please share details and pricing.",
  },
  {
    id: "roti-machine",
    name: "Automatic Roti Machine",
    shortDescription:
      "Fully automatic roti maker for high-volume production with consistent quality.",
    description:
      "Automated chapati/roti production machine producing 500–2000 rotis per hour. Perfect for canteens, cloud kitchens, and catering units requiring consistent quality at scale.",
    category: "dough",
    imageUrl: "/assets/images/roti-machine.jpg",
    features: [
      "Output: 500–2000 rotis/hour",
      "Adjustable thickness",
      "Uniform roasting",
      "Easy cleaning design",
    ],
    whatsappMessage:
      "Hi, I'm interested in the Automatic Roti Machine. Please share details and pricing.",
  },
  {
    id: "dough-kneader",
    name: "Dough Kneading Machine",
    shortDescription:
      "Heavy-duty kneaders for consistent dough preparation at industrial scale.",
    description:
      "Industrial dough kneading machine with powerful motor for tough doughs. Reduces manual labor and ensures uniform gluten development for consistent bakery output.",
    category: "dough",
    imageUrl: "/assets/images/dough-kneader.jpg",
    features: [
      "Capacity: 10–100 kg",
      "Stainless steel bowl",
      "Timer control",
      "Anti-vibration base",
    ],
    whatsappMessage:
      "Hi, I'm interested in the Dough Kneading Machine. Please share details and pricing.",
  },
  {
    id: "sugarcane-juicer",
    name: "Sugarcane Juice Machine",
    shortDescription:
      "Stainless steel sugarcane extractors for juice stalls and food courts.",
    description:
      "Heavy-duty stainless steel sugarcane juice extractor with high extraction efficiency. Designed for juice stalls, restaurants, and food courts. Low noise, easy to clean.",
    category: "juice",
    imageUrl: "/assets/images/sugarcane-juicer.jpg",
    features: [
      "Stainless steel rollers",
      "High extraction efficiency",
      "Low noise operation",
      "Easy maintenance",
    ],
    whatsappMessage:
      "Hi, I'm interested in the Sugarcane Juice Machine. Please share details and pricing.",
  },
];
