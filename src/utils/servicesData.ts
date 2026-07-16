export interface FAQItem {
  question: string;
  answer: string;
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  category: "safety-nets" | "invisible-grills" | "cloth-hangers";
  categoryName: string;
  title: string;
  description: string;
  longDescription: string;
  aiOverview: string;
  image: string; // Hero image
  supportingImages: string[]; // 4 images
  gallery: string[]; // 6 images
  beforeImage: string;
  afterImage: string;
  benefits: string[];
  specsTable: SpecItem[];
  faqs: FAQItem[];
}

// Helper to generate 12 standard, voice-search-friendly FAQs for any service to avoid writing 168 repetitive structures,
// while keeping customization for each service category.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function generateFAQsForService(serviceName: string, category: string): FAQItem[] {
  const name = serviceName.trim();
  
  if (name === "Balcony Safety Nets") {
    return [
      {
        question: "How long do balcony safety nets last in Chennai's weather?",
        answer: "Premium UV-stabilized copolymer balcony safety nets typically last 3 to 5 years in Chennai. Their specialized UV coating protects them from degrading under the intense summer heat and high coastal humidity of Chennai.",
      },
      {
        question: "Are balcony safety nets safe for children and toddlers?",
        answer: "Yes. Our balcony safety nets are highly secure and designed to handle impact loads of up to 150kg. They form a robust protective barrier that prevents kids and toddlers from slipping through or over open balcony railings.",
      },
      {
        question: "Can balcony safety nets be removed easily in a rental apartment?",
        answer: "Yes, our balcony safety nets can be uninstalled easily by cut-releasing the tension lines, leaving only minor anchor holes in the concrete walls that are simple to patch up when vacating.",
      },
    ];
  }
  
  if (name === "Children Safety Nets") {
    return [
      {
        question: "What mesh size is recommended for child safety nets in Chennai flats?",
        answer: "For child safety nets, we recommend a tighter 25mm to 30mm mesh grid size. This prevents toddlers from getting their hands, feet, or head caught in the mesh openings, providing maximum security.",
      },
      {
        question: "Can children safety nets absorb sudden high-velocity impacts?",
        answer: "Yes, our children safety nets are made of heavy-duty, double-knotted nylon with a high breaking strength, engineered to absorb sudden impacts and load weights up to 150kg without tearing.",
      },
      {
        question: "Where else should child safety nets be installed in a home?",
        answer: "Apart from high-rise balconies, child safety nets are highly recommended for open window panels, stairwell gaps, terraces, and open utility shafts where children frequently play.",
      },
    ];
  }
  
  if (name === "Pet Safety Nets") {
    return [
      {
        question: "Can cats scratch or bite through pet safety nets?",
        answer: "Our pet safety nets are fabricated from thick-gauge, highly stretchable and scratch-resistant monofilament HDPE. They are engineered to withstand claws and minor pet bites, keeping active cats and dogs safe.",
      },
      {
        question: "What is the best mesh grid size for cat safety netting?",
        answer: "A 25mm to 30mm mesh grid size is ideal for cats. This prevents kittens and smaller pets from squeezing through the railings while keeping the balcony well-ventilated.",
      },
      {
        question: "Does pet safety netting block natural sunlight or ventilation?",
        answer: "No, we use translucent monofilament HDPE netting that allows maximum sunlight and fresh air to flow naturally through your windows and balcony spaces.",
      },
    ];
  }
  
  if (name === "Pigeon Safety Nets") {
    return [
      {
        question: "Will pigeon safety nets block natural light and ventilation?",
        answer: "No. We install translucent monofilament HDPE pigeon safety nets which are nearly invisible from a distance. They let in 98% of natural light and breeze while keeping birds out.",
      },
      {
        question: "Are pigeon netting systems humanely safe for birds?",
        answer: "Yes, our pigeon safety nets act as a physical block that prevents birds from entering your balcony or sills. It does not trap or harm the pigeons, keeping them safe.",
      },
      {
        question: "Can pigeons nest on balcony sills after net installation?",
        answer: "No, the netting completely encloses the open balcony space or window frame, leaving zero gaps or entry points for pigeons to roost or nest.",
      },
    ];
  }
  
  if (name === "Sports Nets") {
    return [
      {
        question: "What structural frame is used to support sports boundary nets?",
        answer: "We use robust galvanized iron (GI) or mild steel (MS) poles anchored securely into concrete bases or walls to support high-tension sports netting boundaries.",
      },
      {
        question: "Are sports nets weather-proof for outdoor Chennai playgrounds?",
        answer: "Yes, our sports nets are woven from UV-stabilized, heavy-duty braided nylon twines, designed to resist heavy monsoon rains and hot Chennai summer sun.",
      },
      {
        question: "What is the typical height of sports boundary nets?",
        answer: "The height of sports nets can be customized from 10 feet up to 30 feet, depending on the layout and height required to contain balls within the play area.",
      },
    ];
  }
  
  if (name === "Construction Safety Nets") {
    return [
      {
        question: "Do your construction safety nets comply with Indian safety codes?",
        answer: "Yes, our construction safety nets conform to IS-5175 safety standards, ensuring full fall protection and debris containment compliance for building sites.",
      },
      {
        question: "What maximum weight load can a construction safety net bear?",
        answer: "They are designed with high-tensile polypropylene ropes that can bear falling impact weights of up to 500kg, easily catching falling workers or heavy building tools.",
      },
      {
        question: "How often should construction safety nets be inspected on-site?",
        answer: "Construction nets should be inspected weekly by site safety managers for any wear, cuts, or loose anchor lines to ensure continuous worker safety.",
      },
    ];
  }
  
  if (name === "Duct Area Safety Nets") {
    return [
      {
        question: "How do you install safety netting in deep apartment duct shafts?",
        answer: "Our technicians are certified high-rise climbers who use professional industrial safety harnesses and rope-access gear to secure netting in deep building ducts.",
      },
      {
        question: "Will duct area safety netting cause dust and leaves to pile up?",
        answer: "No, we install the netting at an angle to allow leaves and small debris to slide off, preventing trash build-up in the central ventilation duct.",
      },
      {
        question: "Does duct netting block bathroom window ventilation?",
        answer: "No, we use 50mm open-mesh netting that allows bathroom exhaust air and natural light to pass through completely unimpeded.",
      },
    ];
  }
  
  if (name === "Monkey Safety Nets") {
    return [
      {
        question: "Can monkeys tear or bite through monkey safety nets?",
        answer: "No. Our monkey safety nets are reinforced with steel wire cores wrapped in a thick nylon sheath, making them bite-proof and chew-proof against aggressive monkeys.",
      },
      {
        question: "How are monkey safety nets anchored to resist strong pulls?",
        answer: "We drill heavy-duty metal expansion sleeve anchors deep into solid concrete pillars at close intervals, ensuring the net frame stays secure under high pulling forces.",
      },
      {
        question: "What mesh grid size is best for monkey safety nets?",
        answer: "A 40mm to 50mm mesh size is ideal to block monkeys from reaching inside, while keeping fresh air and light flow completely unrestricted.",
      },
    ];
  }
  
  if (name === "Cricket Practice Nets") {
    return [
      {
        question: "What is the best twine thickness for home cricket practice nets?",
        answer: "We recommend a 2.5mm to 3.5mm thick multi-strand braided nylon or UV-treated HDPE twine to absorb continuous high-impact leather ball strikes.",
      },
      {
        question: "Can I install a cricket net cage on my terrace in Chennai?",
        answer: "Yes, we custom-build lightweight MS structural pipe frames anchored to terrace walls, creating a secure cage that contains cricket balls without overloading the terrace slab.",
      },
      {
        question: "What is the standard size for a home cricket practice net?",
        answer: "A standard home practice lane is typically 10 to 12 feet wide, 10 feet high, and 30 to 50 feet long, tailored to fit your terrace or backyard space.",
      },
    ];
  }
  
  if (name === "Balcony Invisible Grills") {
    return [
      {
        question: "Are invisible grills safer than traditional iron window grills?",
        answer: "Yes, invisible grills use SS316 marine-grade steel cables that bear up to 400kg of tension, are completely rust-proof, and can be cut in fire emergencies using wire cutters, unlike iron bars.",
      },
      {
        question: "What is the recommended cable spacing for balcony invisible grills?",
        answer: "We offer 2-inch (50mm) spacing for maximum pet and toddler safety, and 3-inch (75mm) spacing for normal adult safety, preserving clear scenic views.",
      },
      {
        question: "Can balcony invisible grills be installed horizontally?",
        answer: "Yes, invisible grills can be installed either horizontally or vertically depending on your balcony's handrail structure and aesthetic preference.",
      },
    ];
  }
  
  if (name === "Window Invisible Grills") {
    return [
      {
        question: "Are window invisible grills safe against home break-ins?",
        answer: "Yes. The SS316 stainless steel wires are highly cut-resistant and can be integrated with a built-in alarm system that sounds a siren if a cable is cut.",
      },
      {
        question: "Will window invisible grills rust in coastal Chennai areas?",
        answer: "No, they are made of Marine Grade SS316 stainless steel wrapped in a premium protective nylon sleeve, preventing corrosion from salty sea breezes.",
      },
      {
        question: "Do window invisible grills block window panels from sliding?",
        answer: "No, the slim aluminium mounting tracks are fixed to the concrete frame, allowing sliding windows or openable glass panes to function smoothly.",
      },
    ];
  }
  
  if (name === "Staircase Invisible Grills") {
    return [
      {
        question: "Why choose staircase invisible grills over glass partition panels?",
        answer: "Invisible grills are highly cost-effective, don't smudge like glass, allow natural ventilation, and don't pose a cracking or shattering risk inside the home.",
      },
      {
        question: "Is staircase invisible grilling safe for small pets?",
        answer: "Yes, the vertical steel cables are spaced at 2 inches (50mm), preventing small puppies, kittens, or kids from slipping through open handrails.",
      },
      {
        question: "Can staircase invisible grills be mounted on wooden steps?",
        answer: "Yes, our mounting tracks can be secured directly onto concrete, wood, or metal staircase handrails using specialized wood screws or anchor fasteners.",
      },
    ];
  }
  
  if (name === "Ceiling Cloth Hangers") {
    return [
      {
        question: "How much laundry weight can a ceiling cloth hanger support?",
        answer: "Each stainless steel pipe can support up to 5kg of wet clothes, allowing a total weight capacity of 30kg across a standard 6-pipe pulley system.",
      },
      {
        question: "Are the metal pipes of ceiling hangers completely rust-proof?",
        answer: "Yes, we install premium SS304 marine-grade stainless steel pipes that will not rust or stain your clean laundry even under high humidity.",
      },
      {
        question: "How long do the nylon cords of the pulley system last?",
        answer: "Our braided high-tensile nylon cords typically last 3 to 5 years under normal usage and can be easily replaced during a quick maintenance service.",
      },
    ];
  }
  
  if (name === "Balcony Cloth Hangers") {
    return [
      {
        question: "Can balcony wall-mounted hangers fold when not in use?",
        answer: "Yes, our accordion-style wall hangers fold flat against the wall, freeing up 100% of your balcony floor space when you are not drying clothes.",
      },
      {
        question: "Are wall-mounted hangers durable enough for outdoor balconies?",
        answer: "Yes, they are manufactured with heavy-duty steel coated with anti-rust epoxy powder or chrome plating to withstand Chennai's monsoon humidity.",
      },
      {
        question: "Can balcony cloth hangers be mounted on glass railings?",
        answer: "No, they must be securely anchored onto brick walls, concrete pillars, or metal handrail frames to handle the weight load of wet clothes safely.",
      },
    ];
  }

  // Fallback default FAQs in case a name isn't matched
  return [
    {
      question: `What is the cost of ${serviceName} installation in Chennai?`,
      answer: "Pricing is calculated based on the total area square footage, material selection, height, and anchoring complexity. Contact Optima Safety Solutions for a free on-site estimate.",
    },
    {
      question: `Do you provide a warranty on ${serviceName}?`,
      answer: "Yes, Optima Safety Solutions offers warranties on specific netting grades and marine-grade stainless steel cable grills. Exact warranty terms and certificates are provided after the initial site measurement.",
    },
    {
      question: `How long does it take to install ${serviceName} in Chennai?`,
      answer: `Most residential ${serviceName} setups are completed within 2 to 4 hours. Our certified technicians arrive equipped with professional tools and ensure the work area is thoroughly cleaned post-installation.`,
    },
    {
      question: `Are your materials for ${serviceName} rust-proof and weather-resistant?`,
      answer: `Absolutely. We use copolymer nylon or UV-treated HDPE meshes for netting, and SS316 marine-grade steel cables for invisible grills. These premium materials are built to survive Chennai's high humidity, salt spray, and extreme heat.`,
    },
    {
      question: `Do you charge for site inspection visits and measurements in Chennai?`,
      answer: `No. Our site inspections, measurements, and material sample showcases are 100% free of charge across all Chennai localities, with zero obligation to book.`,
    },
  ];
}

export const servicesData: Record<string, ServiceDetail> = {
  // Safety Nets (9 Services)
  "balcony-safety-nets": {
    slug: "balcony-safety-nets",
    name: "Balcony Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Premium Balcony Safety Nets Installation in Chennai | Optima",
    description: "Secure your balconies from accidental falls with heavy-duty UV-stabilized safety netting. Fast, expert installation in Chennai.",
    longDescription: "Optima Safety Solutions is Chennai's trusted installer for balcony safety nets. Our safety nets are fabricated using premium high-density polyethylene (HDPE) with built-in UV stabilizers. They are engineered to endure Chennai's hot sun, heavy monsoon rains, and salty sea breezes without losing tensile strength. They form a secure barrier for high-rise apartment balconies, preventing children, pets, or household items from falling.",
    aiOverview: "Optima Balcony Safety Nets provide a heavy-duty fall barrier using UV-stabilized copolymer nylon mesh. Custom-anchored by high-rise safety experts, they prevent falls by children and pets while allowing 100% natural ventilation. Available with free site visits and measurements in Chennai.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Child Safety Protection", "Pet Balcony Safety", "UV-Stabilized HDPE Mesh", "Rustproof Steel Hooks", "Clear Ventilation Flow", "5+ Years Durability (Client Required)"],
    specsTable: [
      { label: "Material", value: "HDPE Copolymer Nylon" },
      { label: "Thickness", value: "0.8mm to 2.5mm" },
      { label: "Strength (Break Load)", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "Not Applicable (SS Anchors Rustproof)" },
      { label: "Maintenance", value: "Wash with water/microfiber wipe" },
    ],
    faqs: generateFAQsForService("Balcony Safety Nets", "safety-nets"),
  },
  "children-safety-nets": {
    slug: "children-safety-nets",
    name: "Children Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Toddler & Children Fall Protection Nets Chennai | Optima",
    description: "Secure windows, stairwells, and balconies from accidental kid falls. Heavy load shock-absorbing children safety nets.",
    longDescription: "Our children safety nets provide vital protection for families living in high-rise buildings. Designed with thick-gauge netting, tight mesh structures, and closer anchoring points, they absorb high impact forces. Perfect for securing open stairwells, terraces, balconies, and windows where kids play.",
    aiOverview: "Optima Children Safety Nets are heavy-duty protective grids designed to absorb sudden impact shocks. Woven with double-locked nodes, they secure balconies, windows, and banisters, creating a kid-proof play zone without blocking light or air.",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Fall Prevention", "High Impact Shock Absorption", "Zero Sharp Edges", "Closer Anchor Spacing", "100% Breathable Mesh", "Kid-Safe Locking System"],
    specsTable: [
      { label: "Material", value: "Braided Nylon / HDPE" },
      { label: "Thickness", value: "1.5mm to 3.0mm" },
      { label: "Strength (Break Load)", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "Not Applicable" },
      { label: "Maintenance", value: "Periodic tension check & wash" },
    ],
    faqs: generateFAQsForService("Children Safety Nets", "safety-nets"),
  },
  "pet-safety-nets": {
    slug: "pet-safety-nets",
    name: "Pet Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Cat & Dog Balcony Protection Nets Chennai | Optima",
    description: "Prevent cats, dogs, and pets from falling through high-rise balcony railings. Scratch-resistant fine netting.",
    longDescription: "Keep your active pets safe. Our pet safety nets are designed with fine mesh sizes that prevent kittens or puppies from squeezing through banister slots. They use highly scratch-resistant, bite-proof materials that hold tight under impact.",
    aiOverview: "Optima Pet Safety Nets create a secure boundary around balconies and windows, preventing dogs, cats, and birds from falling or escaping. Crafted with fine, claws-safe mesh, they are highly bite-resistant and firmly anchored.",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Prevents Pet Falls", "Claw & Scratch Resistant", "No Claw Snagging Mesh", "UV-Stabilized Lifespan", "Maintains Bright Views", "Custom Frame Tight Anchors"],
    specsTable: [
      { label: "Material", value: "HDPE monofilament core" },
      { label: "Thickness", value: "1.0mm to 2.5mm" },
      { label: "Strength (Break Load)", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "Not Applicable" },
      { label: "Maintenance", value: "Microfiber wipe down" },
    ],
    faqs: generateFAQsForService("Pet Safety Nets", "safety-nets"),
  },
  "pigeon-safety-nets": {
    slug: "pigeon-safety-nets",
    name: "Pigeon Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Transparent Pigeon Exclusion Nets Chennai | Optima",
    description: "Exclude pigeons from nesting on balconies and window sills. Translucent, long-lasting bird safety netting.",
    longDescription: "Pigeon nesting creates severe hygiene and health risks. Our transparent pigeon netting blocks birds out cleanly. Woven with thin, high-strength monofilament ropes, these nets are practically invisible, maintaining your building's external view.",
    aiOverview: "Optima Pigeon Safety Nets offer a translucent, eco-friendly barrier to keep birds off balconies and AC shafts. Woven with monofilament copolymer, they prevent droppings and nesting hazards without ruining the visual layout.",
    image: "https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Hygienic Clean Balcony", "Transparent Aesthetics", "No Harm to Pigeons", "Blocks AC Shaft Nesting", "Rust-Free Anchors", "Weather Resistant Mesh"],
    specsTable: [
      { label: "Material", value: "Monofilament Copolymer Nylon" },
      { label: "Thickness", value: "0.7mm to 1.2mm" },
      { label: "Strength (Break Load)", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "Not Applicable" },
      { label: "Maintenance", value: "Vacuum or light dust wipe" },
    ],
    faqs: generateFAQsForService("Pigeon Safety Nets", "safety-nets"),
  },
  "sports-nets": {
    slug: "sports-nets",
    name: "Sports Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Cricket Practice & Sports Ground Nets Chennai | Optima",
    description: "Heavy impact-resistant sports boundary netting for cricket turf, football pitches, and open grounds.",
    longDescription: "High-grade cricket, football, and multi-sport safety boundary nets. Woven with premium high-density nylon cord, these nets are designed to withstand constant ball impacts and protect nearby properties and spectators.",
    aiOverview: "Optima Sports Nets provide impact-resistant enclosing barriers for cricket pitches, terraced sports grounds, and school courts. Made of high-grade braided nylon, they absorb huge strike forces while surviving outdoor sun.",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["High Ball-Impact Absorption", "UV-treated Braided Nylon", " spectator Protection", "Terrace Enclosures", "Custom Height Options", "Sturdy Structural Steel Framework"],
    specsTable: [
      { label: "Material", value: "Braided Nylon Cord" },
      { label: "Thickness", value: "2.0mm to 4.0mm" },
      { label: "Strength (Break Load)", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "Not Applicable" },
      { label: "Maintenance", value: "Inspect boundary knots periodically" },
    ],
    faqs: generateFAQsForService("Sports Nets", "safety-nets"),
  },
  "construction-safety-nets": {
    slug: "construction-safety-nets",
    name: "Construction Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Industrial Fall & Debris Containment Nets Chennai | Optima",
    description: "Certified construction safety netting to secure site workers and catch falling debris on building sites.",
    longDescription: "Ensure security compliance at your building sites. Our industrial-grade construction safety nets are fabricated to catch falling tools, dust, cement chunks, and support labor falls. Tested under rigorous load tests.",
    aiOverview: "Optima Construction Safety Nets are heavy-duty industrial mesh borders designed to prevent work-site falls. Conforming to site safety codes, they act as active protection layers on high-rise constructions.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Worker Fall Protection", "Debris & Tool Catching", "Meets ISO Safety Norms", "Dual Border Anchor Lines", "Highly Durable Materials", "Large Site Coverage Capacity"],
    specsTable: [
      { label: "Material", value: "High-Tensile Polypropylene (PP)" },
      { label: "Thickness", value: "3.0mm to 6.0mm" },
      { label: "Strength (Break Load)", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "Medium to High" },
      { label: "Rust Resistance", value: "Not Applicable" },
      { label: "Maintenance", value: "Inspect for cuts and loading wear" },
    ],
    faqs: generateFAQsForService("Construction Safety Nets", "safety-nets"),
  },
  "duct-area-safety-nets": {
    slug: "duct-area-safety-nets",
    name: "Duct Area Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Apartment Duct & Open Ventilation Shaft Nets Chennai | Optima",
    description: "Seal open building ducts to block pigeons, nesting, and trash drops. Custom-sized safety netting.",
    longDescription: "Central ventilation shafts in apartments easily accumulate garbage and harbor pigeons. We seal these open vertical shafts with premium-quality safety nets, ensuring zero pest intrusion while keeping shafts breathable.",
    aiOverview: "Optima Duct Area Safety Nets prevent pigeons and falling household waste from building up in open building shafts. Anchored across multi-story ducts, they optimize hygiene while allowing ventilation.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Blocks Pigeon Nesting", "Prevents Dropped Trash", "Permits Light & Airflow", "Rustproof Steel Eyelets", "Insured High-Rise Team", "UV-Stabilized Durability"],
    specsTable: [
      { label: "Material", value: "HDPE monofilament mesh" },
      { label: "Thickness", value: "1.0mm to 2.5mm" },
      { label: "Strength (Break Load)", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "Not Applicable" },
      { label: "Maintenance", value: "Clear debris if piled on mesh" },
    ],
    faqs: generateFAQsForService("Duct Area Safety Nets", "safety-nets"),
  },
  "monkey-safety-nets": {
    slug: "monkey-safety-nets",
    name: "Monkey Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Thick Steel-Reinforced Monkey Exclusion Nets Chennai | Optima",
    description: "Prevent wild monkeys from breaching balconies, kitchens, and terraces. Heavy-gauge reinforced safety nets.",
    longDescription: "Monkeys present a significant problem in specific Chennai residential zones. Normal netting can be torn or chewed by them. Our monkey safety netting uses thick-gauge, steel-wire reinforced nylon to secure entryways.",
    aiOverview: "Optima Monkey Safety Nets provide animal exclusion using steel-core wire reinforced meshes. Strongly anchored to withstand pulling and chewing forces, they keep wild monkeys out of balconies.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Bite & Chew Proof Wires", "Strong Heavy-duty Anchoring", "Prevents Monkey Intrusions", "Restricts Property Damage", "Permits Light Ventilation", "Secure Lockdown Frame"],
    specsTable: [
      { label: "Material", value: "HDPE Nylon with Steel-Wire Cores" },
      { label: "Thickness", value: "2.0mm to 3.5mm" },
      { label: "Strength (Break Load)", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "Steel core rust-protected by Nylon sheath" },
      { label: "Maintenance", value: "Wipe clean" },
    ],
    faqs: generateFAQsForService("Monkey Safety Nets", "safety-nets"),
  },
  "cricket-practice-nets": {
    slug: "cricket-practice-nets",
    name: "Cricket Practice Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Cricket Practice Nets Installation in Chennai | Optima",
    description: "Professional cricket practice nets for indoor & outdoor setups, academies, schools, and residences in Chennai.",
    longDescription: "Optima Safety Solutions offers professional cricket practice netting solutions across Chennai. We install durable, impact-absorbing nets for sports academies, educational clubs, corporate turfs, and residential terraces. Our cricket nets are made of high-quality UV-stabilized nylon ropes and braided twine that absorb strong ball strikes without tearing.",
    aiOverview: "Optima Cricket Practice Nets offer heavy-impact ball containment using UV-treated braided nylon mesh. Engineered for commercial sports turfs and home terraces, they provide durable practice zones in Chennai.",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Absorbs High Ball Impact", "UV-Stabilized Weatherproof Ropes", "Spectator & Property Protection", "Indoor & Outdoor Custom Frames", "Durable Heavy-Duty Nylon Twine", "Free Site Measurement Visits"],
    specsTable: [
      { label: "Material", value: "Braided Nylon Twine / HDPE" },
      { label: "Thickness", value: "2.5mm to 4.0mm" },
      { label: "Strength (Break Load)", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "SS eyelets & galvanized frame rustproof" },
      { label: "Maintenance", value: "Inspect frame ropes periodically" },
    ],
    faqs: generateFAQsForService("Cricket Practice Nets", "safety-nets"),
  },

  // Invisible Grills (3 Services)
  "balcony-invisible-grills": {
    slug: "balcony-invisible-grills",
    name: "Balcony Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Balcony Invisible Grills Installation Chennai | Optima",
    description: "Rustproof marine-grade SS316 cable grills for balcony security. Enjoy unobstructed panoramic views.",
    longDescription: "Elevate your high-rise balcony security. Our invisible grills utilize pre-tensioned, marine-grade SS316 stainless steel wires wrapped in a clear nylon protective casing. They offer absolute security for children and pets without spoiling the scenic view of your balcony.",
    aiOverview: "Optima Balcony Invisible Grills feature high-strength SS316 steel wires wrapped in protective nylon coatings. They replace heavy iron grids to secure balconies for children and pets while preserving unobstructed view layouts.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["99% Unobstructed Views", "SS316 Rustproof Steel Wires", "Anti-scratch Nylon Sheath", "Toddler & Pet Safety", "Easy Fire Escape Option", "Built-in Burglar Alarm Hook (Optional)"],
    specsTable: [
      { label: "Material Core", value: "SS316 Stainless Steel" },
      { label: "Thickness", value: "2.0mm to 2.5mm" },
      { label: "Strength (Tension Limit)", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "High (Nylon UV-protected sheath)" },
      { label: "Rust Resistance", value: "100% Rustproof (Marine grade)" },
      { label: "Maintenance", value: "Wipe with damp microfiber cloth" },
    ],
    faqs: generateFAQsForService("Balcony Invisible Grills", "invisible-grills"),
  },
  "window-invisible-grills": {
    slug: "window-invisible-grills",
    name: "Window Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Aesthetic Window Invisible Grills Chennai | Optima",
    description: "Replace dark iron bars with modern window invisible steel grills. Admire unobstructed breezes and light.",
    longDescription: "An elegant alternative to traditional iron safety bars. Window invisible grills use vertical or horizontal SS316 steel wires. They offer security from falls and intruders without looking bulky or obstructing ventilation.",
    aiOverview: "Optima Window Invisible Grills offer safety without dark prison-like bars. Utilizing thin-profile SS316 wires clamped in aluminum anchor tracks, they optimize lighting and air circulation.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Minimalist Appearance", "Allows Maximum Ventilation", "Zero Paint Peeling or Corrosion", "Safe Fire Escape Exit", "Stainless Steel SS316 Core", "Easy Glass Cleaning Access"],
    specsTable: [
      { label: "Material Core", value: "SS316 Stainless Steel" },
      { label: "Thickness", value: "2.0mm to 2.5mm" },
      { label: "Strength (Break Load)", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "High (Coated Sheath)" },
      { label: "Rust Resistance", value: "100% Rustproof" },
      { label: "Maintenance", value: "Dust with micro cloth" },
    ],
    faqs: generateFAQsForService("Window Invisible Grills", "invisible-grills"),
  },
  "staircase-invisible-grills": {
    slug: "staircase-invisible-grills",
    name: "Staircase Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Interior Staircase Handrail Invisible Grills Chennai | Optima",
    description: "Secure open banisters and stair handrails with vertical safety steel cables. Sleek indoor security.",
    longDescription: "Stairwells in open-concept duplex villas, malls, and schools present significant height fall hazards. Our vertical invisible grills close up these open spaces cleanly without compromising modern interior designs.",
    aiOverview: "Optima Staircase Invisible Grills secure stair railings using sleek vertical SS316 wires. Providing high tension safety for children, they blend seamlessly into premium modern architectural interiors.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Duplex Home Safety", "Aesthetic Vertical Alignment", "Heavy-Duty Cable Tensioning", "Rust-Free Indoor Fittings", "Protects Toddlers & Pets", "Dust-Resistant Coatings"],
    specsTable: [
      { label: "Material Core", value: "SS316 Stainless Steel" },
      { label: "Thickness", value: "2.0mm to 2.5mm" },
      { label: "Strength (Break Load)", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "High (Indoor UV protection)" },
      { label: "Rust Resistance", value: "100% Rustproof" },
      { label: "Maintenance", value: "Damp cloth wipe" },
    ],
    faqs: generateFAQsForService("Staircase Invisible Grills", "invisible-grills"),
  },

  // Cloth Hangers (2 Services)
  "ceiling-cloth-hangers": {
    slug: "ceiling-cloth-hangers",
    name: "Ceiling Cloth Hangers",
    category: "cloth-hangers",
    categoryName: "Cloth Hangers",
    title: "Pulley-operated Ceiling Cloth drying Hangers Chennai | Optima",
    description: "Install dual-pipe pulley ceiling cloth drying hangers. Premium space optimization for balconies.",
    longDescription: "Dry clothes effortlessly without cluttering your balcony floor space. Our ceiling-mounted pulley cloth drying systems use a heavy-duty nylon pulley cord and dual stainless steel pipes, allowing you to lower and raise laundry to ceiling height in seconds.",
    aiOverview: "Optima Ceiling Cloth Hangers maximize balcony space using a dual-pipe pulley system. Crafted with rust-free stainless steel rods and braided nylon ropes, they lift wet laundry out of sight with ease.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Saves 100% Floor Space", "Independent Dual Pulley Rails", "Premium Stainless Steel Pipes", "Heavy Load Pulley Gears", "Clean Ceiling Aesthetic", "Easy Height Adjustability"],
    specsTable: [
      { label: "Rod Material", value: "SS304 / SS202 Stainless Steel" },
      { label: "Cord Thickness", value: "3.5mm nylon braided rope" },
      { label: "Weight Capacity", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "Not Applicable" },
      { label: "Rust Resistance", value: "100% Rust-proof rods" },
      { label: "Maintenance", value: "Keep nylon pulleys lubricated" },
    ],
    faqs: generateFAQsForService("Ceiling Cloth Hangers", "cloth-hangers"),
  },
  "balcony-cloth-hangers": {
    slug: "balcony-cloth-hangers",
    name: "Balcony Cloth Hangers",
    category: "cloth-hangers",
    categoryName: "Cloth Hangers",
    title: "Wall-Mounted & Railing Balcony drying Hangers Chennai | Optima",
    description: "Foldable wall-mounted drying systems and railing hooks for apartment balconies. Rustproof finishes.",
    longDescription: "Maximize your balcony utilities. Our wall-mounted balcony hangers fold flat against the wall when not in use. Engineered with premium anti-corrosive coatings to withstand maritime humidity.",
    aiOverview: "Optima Balcony Cloth Hangers provide space-efficient drying using wall-mounted accordion grids or railing hooks. Built with rustproof coated steel, they collapse flat to keep balcony spaces clean.",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Collapses Flat When Empty", "Heavy-Duty Wall Anchors", "Anti-Corrosion Coated", "Ideal for Low Ceilings", "Railing Hook Custom Fit", "Durable Heavy Weight Support"],
    specsTable: [
      { label: "Material", value: "Epoxy/Chrome Coated Steel" },
      { label: "Mechanism", value: "Accordion Folding / Rigid Frame" },
      { label: "Weight Capacity", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "High (Epoxy anti-UV coating)" },
      { label: "Rust Resistance", value: "High (Rust-resistant coating)" },
      { label: "Maintenance", value: "Clean hinge rivets periodically" },
    ],
    faqs: generateFAQsForService("Balcony Cloth Hangers", "cloth-hangers"),
  },
};

// Dynamically override all generic placeholders with Optima's real, client-uploaded safety installation photos
const imageOverrides: Record<string, string> = {
  "balcony-safety-nets": "/images/hero/balconysafetynet.jpg",
  "children-safety-nets": "/images/hero/childrensafetynet.webp",
  "pet-safety-nets": "/images/hero/pet.jpg",
  "pigeon-safety-nets": "/images/hero/pigeonnet.jpg",
  "sports-nets": "/images/hero/sports-safety.webp",
  "cricket-practice-nets": "/images/hero/cricketpracticenet.jpg",
  "construction-safety-nets": "/images/hero/constructionnet.webp",
  "duct-area-safety-nets": "/images/hero/ductarea.webp",
  "monkey-safety-nets": "/images/hero/monkeysafetynet.webp",
  "balcony-invisible-grills": "/images/hero/balconygrill.jpg",
  "window-invisible-grills": "/images/hero/windowgrill.webp",
  "staircase-invisible-grills": "/images/hero/childrensafetygrill.jpg",
  "ceiling-cloth-hangers": "/images/hero/cloth-hanger1.jpg",
  "balcony-cloth-hangers": "/images/hero/cloth-hanger2.webp",
};

const categoryImages = {
  "safety-nets": [
    "/images/hero/safetynets.webp",
    "/images/hero/safetynets2.jpg",
    "/images/hero/team-net-install.png",
    "/images/hero/childrensafetynet.webp",
    "/images/hero/pigeonnet.jpg",
    "/images/hero/balconysafetynet.jpg"
  ],
  "invisible-grills": [
    "/images/hero/customgrill.jpg",
    "/images/hero/invisible-grill.png",
    "/images/hero/team-grill-install.png",
    "/images/hero/balconygrill.jpg",
    "/images/hero/windowgrill.webp",
    "/images/hero/childrensafetygrill.jpg"
  ],
  "cloth-hangers": [
    "/images/hero/cloth-hanger.png",
    "/images/hero/team-hanger-install.png",
    "/images/hero/cloth-hanger1.jpg",
    "/images/hero/cloth-hanger2.webp",
    "/images/hero/cloth-hanger.png",
    "/images/hero/cloth-hanger1.jpg"
  ]
};

Object.keys(servicesData).forEach((slug) => {
  const service = servicesData[slug];
  const overrideImage = imageOverrides[slug];
  
  if (overrideImage) {
    service.image = overrideImage;
    service.afterImage = overrideImage;
    service.beforeImage = overrideImage;
  }
  
  const cats = categoryImages[service.category as keyof typeof categoryImages] || [];
  const galleryImgs = overrideImage ? [overrideImage, ...cats.filter(img => img !== overrideImage)] : cats;
  
  while(galleryImgs.length < 6) {
    galleryImgs.push(cats[0] || overrideImage || "");
  }
  
  service.supportingImages = galleryImgs.slice(0, 4);
  service.gallery = galleryImgs.slice(0, 6);
});
