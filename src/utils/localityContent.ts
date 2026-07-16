export interface LocalityContent {
  title: string;
  metaDescription: string;
  h1: string;
  contentHtml: string;
}

const categoryDetails: Record<string, { name: string; keyConcerns: string; benefits: string; process: string; pageTitle: string }> = {
  "safety-nets": {
    name: "Safety Nets",
    pageTitle: "Safety Nets Installation",
    keyConcerns: "protecting balconies, windows, and open utility ducts from accidental falls and pigeon nesting. Modern apartments often feature large open balconies with low railings, which present a high risk for curious kids and active household pets.",
    benefits: "heavy-duty UV-stabilized copolymer nylon and high-density polyethylene (HDPE) netting. These nets are custom-tensioned to absorb impacts of up to 150kg, making them an excellent safety barrier for balconies, window grills, and open shafts without blocking views or air circulation.",
    process: "installing premium stainless steel anchor fasteners into the concrete beams, mounting a high-strength perimeter cable, and hand-lacing the UV-treated safety net to ensure optimal tension and zero sagging."
  },
  "invisible-grills": {
    name: "Invisible Grills",
    pageTitle: "Invisible Grills Installation",
    keyConcerns: "maintaining modern building aesthetics while ensuring balcony and window safety. Traditional iron safety cages block scenic views, limit ventilation, and feel claustrophobic, while also being susceptible to rust.",
    benefits: "marine-grade SS316 stainless steel wires wrapped in a clear nylon protective casing. With a slim 2mm to 3mm profile, these cables are virtually invisible from a distance, completely rustproof, and strong enough to withstand high loads, keeping families safe without compromising the view.",
    process: "anchoring structural-grade structural aluminium track profiles to the concrete frame, running the SS316 cables horizontally or vertically at precise 2-inch or 3-inch intervals, and securing them with heavy-duty tension pins."
  },
  "cloth-hangers": {
    name: "Ceiling Cloth Hangers",
    pageTitle: "Ceiling Cloth Hangers",
    keyConcerns: "optimizing tight balcony floor spaces. Traditional folding clothes dryers clutter balconies, block walking paths, and rust quickly when exposed to humid weather conditions.",
    benefits: "pulley-operated, ceiling-mounted drying systems. Made of rustproof anodized aluminium pipes, these space-savers allow you to lower individual lines using a smooth nylon cord pulley, hang clothes easily, and hoist them up out of the way, keeping balcony floors completely clean.",
    process: "mounting heavy-duty pulley brackets directly into the concrete ceiling slab, threading high-durability cords, and suspending the independent aluminium drying pipes at custom heights."
  },
  "sports-nets": {
    name: "Sports Nets",
    pageTitle: "Sports Nets Installation",
    keyConcerns: "containing high-impact sports balls in playing zones such as rooftop courts, school grounds, corporate turf blocks, and villa backyards. Unsecured sports grounds often result in property damage, broken windows, or bystander injuries.",
    benefits: "reinforced heavy-impact boundary netting woven from thick, UV-stabilized HDPE twines. These nets are designed to absorb repeated high-velocity ball strikes from footballs or cricket balls, withstand severe weathering, and maintain high structural tension under sun and rain.",
    process: "setting up rigid structural MS pillars or steel posts, constructing a tensioned steel wire rope frame, and securely suspending the thick boundary mesh with heavy-duty turnbuckles."
  },
  "cricket-nets": {
    name: "Cricket Practice Nets",
    pageTitle: "Cricket Practice Nets",
    keyConcerns: "building secure practice zones for cricket batting and bowling on terraced roofs, residential backyards, or sports clubs. Stray leather cricket balls hit at high speeds present serious safety hazards for surrounding properties and residents.",
    benefits: "heavy-impact cricket cage enclosures. We use premium braided nylon twine nets that are UV-resistant and weather-hardened. These specialized nets absorb ball impact immediately, preventing rebounds and keeping the ball confined to the practice lane.",
    process: "erecting a freestanding or wall-tensioned structural frame, hanging the heavy-duty impact netting, and weighting or anchoring the base borders to ensure no ball slips past."
  }
};

const localityDetails: Record<string, { name: string; type: string; localizedDetail: string; weatherDetail: string }> = {
  "adyar": {
    name: "Adyar",
    type: "affluent coastal neighborhood in South Chennai",
    localizedDetail: "With its combination of upscale high-density apartment blocks (such as near Gandhi Nagar and Besant Avenue) and active family residents, child safety is a critical priority.",
    weatherDetail: "its close proximity to the coast, meaning fixtures face severe exposure to salty, moisture-laden sea winds that accelerate metal corrosion."
  },
  "velachery": {
    name: "Velachery",
    type: "bustling residential and commercial hub in South Chennai",
    localizedDetail: "Dense housing developments and proximity to lakes have created vast nesting grounds for urban pigeons, making bird exclusion and balcony hygiene a primary concern for residents.",
    weatherDetail: "the local microclimate of high heat and high humidity, which makes durable, non-fading UV-treated netting materials essential."
  },
  "omr": {
    name: "OMR",
    type: "rapidly expanding IT corridor of Chennai",
    localizedDetail: "The landscape is characterized by massive high-rise gated community townships going up to 30 stories. Active families and high-floor apartments require robust fall protection systems.",
    weatherDetail: "the high wind velocities and extreme wind pressures encountered at higher altitudes, demanding reinforced anchor points and heavy-duty meshes."
  },
  "ecr": {
    name: "ECR",
    type: "coastal residential and luxury villa belt of Chennai",
    localizedDetail: "This area features sea-view apartments and premium beachside villas. Residents here emphasize sleek, rustproof installations that preserve panoramic sea views.",
    weatherDetail: "extreme exposure to salty coastal winds and moisture, which causes standard steel or iron fittings to degrade and rust within months."
  },
  "anna-nagar": {
    name: "Anna Nagar",
    type: "planned, premium residential zone in West Chennai",
    localizedDetail: "Known for its spacious layouts, active family parks, and upscale apartment developments, residents prioritize child safety and neat, aesthetic home improvement solutions.",
    weatherDetail: "intense inland heat and direct sunlight, which makes high-grade, UV-treated netting materials necessary to prevent premature cracking or fading."
  },
  "t-nagar": {
    name: "T. Nagar",
    type: "congested commercial heart and residential hub of Chennai",
    localizedDetail: "Close-quartered apartment blocks and busy streets increase pigeon nesting on open window ledges, balcony rails, and open ducts, creating severe sanitation issues.",
    weatherDetail: "dense urban smog, heat, and humidity, which require durable, easy-to-clean netting solutions that don't trap dust or moisture."
  },
  "porur": {
    name: "Porur",
    type: "thriving residential area near IT parks and manufacturing nodes",
    localizedDetail: "High-rise apartments populated by corporate professionals see high demands for child safety nets and bite-resistant cat/dog safety netting to protect active pets.",
    weatherDetail: "inland weathering patterns, meaning installations must survive high tropical heat and heavy monsoons year after year."
  },
  "tambaram": {
    name: "Tambaram",
    type: "major residential suburb and southern transit gate of Chennai",
    localizedDetail: "Newly constructed mid-rise and high-rise gated complexes see high move-in rates from families with young children, creating immediate safety and balcony protection needs.",
    weatherDetail: "seasonal monsoon winds and heavy rains, which require professional anchoring to prevent loosening under heavy downpours."
  },
  "perambur": {
    name: "Perambur",
    type: "historic railway and residential hub in North Chennai",
    localizedDetail: "With its older residential quarters, busy schools, and new high-rise residential layouts, keeping open window frames and balconies child-safe is a growing concern.",
    weatherDetail: "intense summer heat and high dust levels, requiring thick, weather-shielded netting that is easy to wash and dry."
  },
  "ambattur": {
    name: "Ambattur",
    type: "major industrial estate and residential zone in Northwest Chennai",
    localizedDetail: "Massive manufacturing units, IT parks, and surrounding employee apartments face pigeon infestations on duct ledges and warehouse rafters, requiring large-scale exclusion nets.",
    weatherDetail: "dry interior heat and heavy dust pollution, requiring heavy-gauge materials that resist chemical degradation and wear."
  },
  "chromepet": {
    name: "Chromepet",
    type: "dense residential and commercial suburb along GST Road",
    localizedDetail: "Highly popular with students and working professionals, the multi-story buildings and hostels here face heavy pigeon roosting on open balconies and utility shafts.",
    weatherDetail: "heavy seasonal rains and storm wind gusts, which make strong metal fasteners and tight mesh border ropes crucial."
  },
  "guindy": {
    name: "Guindy",
    type: "major commercial hub and transit junction of Chennai",
    localizedDetail: "Busy offices, tech hubs, and surrounding premium high-rises see active demands for sleek invisible grills on balcony rails and staircase borders.",
    weatherDetail: "urban heat island effects and heavy pollution, demanding high-durability SS316 steel wires with protective nylon sheaths."
  },
  "thiruvanmiyur": {
    name: "Thiruvanmiyur",
    type: "premium coastal and residential neighborhood in South Chennai",
    localizedDetail: "Sea-view apartment towers and beachside properties require neat safety barriers that don't block the ocean breeze or view.",
    weatherDetail: "constant exposure to salty sea spray and high humidity, which causes standard metal hooks or wires to rust rapidly."
  },
  "vadapalani": {
    name: "Vadapalani",
    type: "highly populated residential and retail hub in West Chennai",
    localizedDetail: "Densely packed apartment layouts near cinema studios and metro lines see high pigeon nesting in open shafts and AC ledges.",
    weatherDetail: "high humidity and city heat, requiring UV-stabilized copolymer netting that won't crack under sun exposure."
  },
  "sholinganallur": {
    name: "Sholinganallur",
    type: "major IT suburb and residential junction along the OMR corridor",
    localizedDetail: "Enormous multi-story high-rise communities require industrial-strength fall protection nets and tensioned invisible grills for children and pet safety.",
    weatherDetail: "extreme wind speeds and wind gusts at high altitudes, which require heavy-tensioned anchoring hooks."
  },
  "pallavaram": {
    name: "Pallavaram",
    type: "growing residential suburb near the Chennai Airport",
    localizedDetail: "New apartment developments see a steady influx of families with kids and pets, necessitating secure balcony nets and ceiling cloth hangers.",
    weatherDetail: "intense monsoonal downpours and wind shear, making strong structural fixings and border cords essential."
  },
  "kolathur": {
    name: "Kolathur",
    type: "rapidly growing residential neighborhood in North Chennai",
    localizedDetail: "With its narrow streets, busy schools, and expanding flat developments, pigeon control and child safety on balconies are major local needs.",
    weatherDetail: "damp soil humidity and seasonal high temperatures, requiring weather-hardened netting and rust-resistant ceiling hanger tubes."
  },
  "royapettah": {
    name: "Royapettah",
    type: "historic commercial and high-density residential zone in Central Chennai",
    localizedDetail: "Traditional buildings and compact residential flats face massive pigeon issues in open air shafts, inner courts, and balconies.",
    weatherDetail: "intense urban heat and humidity, which require durable, low-maintenance protective meshes that do not block airflow."
  }
};

export function getLocalityContent(categorySlug: string, localitySlug: string): LocalityContent {
  const category = categoryDetails[categorySlug];
  const locality = localityDetails[localitySlug];

  if (!category || !locality) {
    throw new Error(`Invalid category (${categorySlug}) or locality (${localitySlug}) requested.`);
  }

  const h1 = `Professional ${category.name} in ${locality.name}, Chennai`;
  const title = `${category.pageTitle} in ${locality.name} | Optima Safety Solutions`;
  const metaDescription = `Looking for ${category.name} in ${locality.name}, Chennai? Optima Safety Solutions offers premium custom-fit installations, free site visits, and heavy-duty materials.`;

  // Construct unique content block to satisfy 300+ word non-duplicate requirement
  const paragraph1 = `${h1} is one of the most requested home improvement services for apartment owners in this active region. As a ${locality.type}, ${locality.name} has seen substantial real estate growth, shifting the local landscape toward modern multi-story apartments and high-density gated townships. Living in these developments offers convenience, but open balconies, windows, and duct shafts present real hazards. ${locality.localizedDetail} Optima Safety Solutions specializes in addressing these issues with professional installations tailored specifically for ${locality.name} homes.`;

  const paragraph2 = `When choosing ${category.name} in ${locality.name}, material quality and installation techniques are critical due to ${locality.weatherDetail} To address this, we utilize ${category.benefits} This setup directly solves the problem of ${category.keyConcerns} Our technicians are trained in high-rise safety protocols and utilize specialized anchoring systems to install the nets or grills securely, guaranteeing long-lasting protection.`;

  const paragraph3 = `At Optima Safety Solutions, our installation process for ${category.name} in ${locality.name} is designed to be seamless. The process begins with ${category.process} We are committed to using only marine-grade, rustproof, and UV-stabilized materials to ensure your home remains safe for years to come. We offer a 100% free on-site measurement and consultation visit in ${locality.name} with no booking obligations. Contact Optima Safety Solutions today at +91 78937 60933 or email us at optimasafetysolutions77@gmail.com to schedule your free inspection and get a customized quotation.`;

  const contentHtml = `<p class="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">${paragraph1}</p>
<p class="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">${paragraph2}</p>
<p class="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">${paragraph3}</p>`;

  return {
    title,
    metaDescription,
    h1,
    contentHtml
  };
}

export const localitiesList = Object.keys(localityDetails);
export const categoriesList = Object.keys(categoryDetails);
