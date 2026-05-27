export type BarrowsService = {
  n: string;
  slug: string;
  title: string;
  eyebrow: string;
  blurb: string;
  image: string;
  span: string;
  sourceUrl: string;
  headline: string;
  intro: string;
  capabilities: string[];
  detail: string[];
  proofPoints: string[];
  galleryImages: string[];
};

export const BARROWS_SERVICES: BarrowsService[] = [
  {
    n: "01",
    slug: "natural-gas",
    title: "Natural Gas",
    eyebrow: "Gas systems",
    blurb: "Distribution and transmission line installation built for regulated utility work.",
    image: "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/published/steel-gas-pipe-installed-in-road2.jpg?1730494127",
    span: "md:col-span-2 md:row-span-2",
    sourceUrl: "https://www.barrowsexcavation.com/natural-gas-services.html",
    headline: "Natural gas installation, replacement, and system upgrades across Arkansas and Missouri.",
    intro: "Barrows handles gas-focused excavation with the safety controls, equipment, and field experience required for commercial, industrial, distribution, and service work.",
    capabilities: [
      "New natural gas line systems",
      "New natural gas services",
      "Natural gas line replacement",
      "Natural gas system upgrades",
      "Emergency natural gas services",
      "Steel and polyethylene gas system installation and maintenance",
    ],
    detail: [
      "The current Barrows site emphasizes safety, precision, and expertise for natural gas projects. This page keeps that positioning while making the scope easier to scan for proposal review.",
      "Crews are positioned for gas-related excavation that must meet strict utility standards, from new services to replacement and upgrade work.",
    ],
    proofPoints: ["Safety-first field protocols", "Steel and PE gas system capability", "Commercial and industrial utility experience"],
    galleryImages: [
      "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/published/gas-line-lowering-into-ditch-1.jpeg?1714987654",
      "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/published/steel-gas-install-tie-in.jpeg?1749574252",
      "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/img-2608.jpg",
      "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/gas-line-right-of-way.jpeg",
      "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/img-0556.jpg",
    ],
  },
  {
    n: "02",
    slug: "hydro-excavation",
    title: "Hydro Excavation",
    eyebrow: "Vacuum excavation",
    blurb: "Non-destructive digging with vac-truck crews for tight utility corridors.",
    image: "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/editor/vac-truck1.jpg?1717566605",
    span: "",
    sourceUrl: "https://www.barrowsexcavation.com/hydro-excavation-services.html",
    headline: "Precise hydro excavation for utility verification, trenching, and sensitive underground work.",
    intro: "Hydro excavation uses pressurized water and vacuum recovery to expose utilities and remove soil with less risk than traditional digging in congested corridors.",
    capabilities: [
      "Utility location and verification",
      "Potholing and slot trenching",
      "Environmental excavation",
      "Pipeline and electric installation support",
      "Hydro excavation and vacuum services",
    ],
    detail: [
      "Barrows presents hydro excavation as a safer and more precise alternative for projects where crews need control around existing underground infrastructure.",
      "The process reduces manual digging, limits soil disturbance, and helps crews work efficiently in tight or high-risk areas.",
    ],
    proofPoints: ["Non-destructive digging", "Reduced utility-strike risk", "Vacuum recovery for controlled excavation"],
    galleryImages: [
      "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/published/vac-truck-pic.jpg?1713298541",
    ],
  },
  {
    n: "03",
    slug: "electric",
    title: "Electric",
    eyebrow: "Electric infrastructure",
    blurb: "Substation pads, underground electric, trenching, and utility infrastructure.",
    image: "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/published/substation.jpg?1717566676",
    span: "",
    sourceUrl: "https://www.barrowsexcavation.com/electric-services.html",
    headline: "Electrical excavation and infrastructure support for commercial and industrial projects.",
    intro: "Barrows supports electrical infrastructure work with trenching, conduit installation, utility pole work, transformer pad excavation, and substation erection.",
    capabilities: [
      "Trenching for electrical lines",
      "Wire and conduit installation and replacement",
      "Utility pole installation and removal",
      "Electrical system upgrades",
      "Transformer pad excavation",
      "Emergency electrical excavation services",
      "Substation erection",
    ],
    detail: [
      "The existing electric services page stresses reliable execution backed by safety, precision, and the equipment needed for critical electrical projects.",
      "The scope spans underground electric installation through larger infrastructure and substation-related work.",
    ],
    proofPoints: ["Substation experience", "Emergency excavation support", "Underground electric infrastructure"],
    galleryImages: [
      "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/published/electric-pole-install-augering-hole1.png?1714988367",
      "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/published/electric-conduit-install.png?1714988430",
      "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/published/installing-electrical-lake-crossing.png?1714988394",
      "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/published/install-large-junction-can-electric.png?1730494342",
    ],
  },
  {
    n: "04",
    slug: "directional-boring",
    title: "Directional Boring",
    eyebrow: "Trenchless installs",
    blurb: "Trenchless installs that keep roads, creeks, and finished sites intact.",
    image: "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/published/img-1443.jpg?1730494279",
    span: "md:col-span-2",
    sourceUrl: "https://www.barrowsexcavation.com/directional-boring-services.html",
    headline: "Directional boring for underground utility crossings and low-disruption infrastructure installs.",
    intro: "Barrows uses directional boring for underground infrastructure where open-cut excavation would create unnecessary disruption or site impact.",
    capabilities: [
      "Underground utility installation",
      "Gas and oil pipeline installation",
      "Electrical conduit installation",
      "Water and sewer line installation",
      "Road and highway crossings",
    ],
    detail: [
      "The current site frames boring work around reliability, quality, safety, and environmental responsibility.",
      "The service is suited to municipalities, utility companies, contractors, and property owners that need infrastructure installed below roads, drives, and finished areas.",
    ],
    proofPoints: ["Road and highway crossing capability", "Utility and pipeline boring", "Lower surface disruption"],
    galleryImages: [
      "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/img-0439.jpg",
      "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/img-1030.jpg",
      "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/published/resized-snapchat-854917125-1730490922153.jpg?1730495924",
    ],
  },
  {
    n: "05",
    slug: "excavation",
    title: "Excavation",
    eyebrow: "Site and utility excavation",
    blurb: "Trenching, grading, site work, and pad prep from one accountable crew.",
    image: "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/editor/barrows-equipment-with-sunset.jpg?1717566742",
    span: "",
    sourceUrl: "https://www.barrowsexcavation.com/excavation-services.html",
    headline: "General excavation services for site preparation, trenching, utilities, and remediation work.",
    intro: "Barrows provides excavation support for a wide range of project types, with a focus on safe work, precise execution, and dependable project delivery.",
    capabilities: [
      "Site preparation",
      "Utility excavation",
      "Trenching",
      "Environmental remediation",
      "Rock and debris removal",
      "Excavation for septic systems",
    ],
    detail: [
      "The existing site positions excavation as a core service for homeowners, contractors, developers, and utility-driven work.",
      "Crews pair heavy equipment with safety protocols to manage risk and keep excavation work controlled.",
    ],
    proofPoints: ["Site preparation", "Utility trenching", "Rock and debris removal"],
    galleryImages: [],
  },
  {
    n: "06",
    slug: "fabrication",
    title: "Fabrication",
    eyebrow: "Custom fabrication",
    blurb: "In-house fabrication support for utility and infrastructure installs.",
    image: "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/published/gas-fabrication.jpg?1717566788",
    span: "",
    sourceUrl: "https://www.barrowsexcavation.com/fabrication.html",
    headline: "Fabrication services for welding, pipe work, and custom infrastructure needs.",
    intro: "Barrows supports utility and construction projects with fabrication capability focused on reliable, custom work and quality execution.",
    capabilities: [
      "Welding services",
      "Pipe fabrication and installation",
      "Custom fabrication support",
      "Utility infrastructure fabrication",
    ],
    detail: [
      "The current site describes fabrication as a craftsmanship-driven service for clients that need dependable custom solutions.",
      "This detail page keeps the message focused on practical utility and infrastructure support rather than broad marketing language.",
    ],
    proofPoints: ["Welding capability", "Pipe fabrication", "Custom utility support"],
    galleryImages: [],
  },
  {
    n: "07",
    slug: "demolition",
    title: "Demolition",
    eyebrow: "Controlled removal",
    blurb: "Controlled tear-downs, cleanup, and site clearing before the next phase.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=70",
    span: "",
    sourceUrl: "https://www.barrowsexcavation.com/demolition-services.html",
    headline: "Demolition, dismantling, salvage, and site clearing for the next phase of work.",
    intro: "Barrows provides demolition support for owners, contractors, and developers that need removal work handled with control and accountability.",
    capabilities: [
      "Demolition work",
      "Structural dismantling",
      "Custom deconstruction solutions",
      "Material salvage and recycling",
      "Site clearing and preparation",
    ],
    detail: [
      "The current demolition page focuses on reliable and cost-effective service for clearing sites and preparing projects to move forward.",
      "The scope includes both removal and the supporting cleanup work that makes a site ready for the next contractor or phase.",
    ],
    proofPoints: ["Structural dismantling", "Site clearing", "Material salvage and recycling"],
    galleryImages: [],
  },
  {
    n: "08",
    slug: "water-sewer",
    title: "Water & Sewer",
    eyebrow: "Water and sewer systems",
    blurb: "Municipal and rural mainline, taps, services, and repair support.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=70",
    span: "",
    sourceUrl: "https://www.barrowsexcavation.com/water-and-sewer-services.html",
    headline: "Water and sewer service installation, repair, drainage, and system upgrade support.",
    intro: "Barrows supports residential, commercial, and municipal water and sewer projects with installation, repair, and excavation capability.",
    capabilities: [
      "Water line installation and repair",
      "Sewer line excavation",
      "Drainage system installation",
      "Culvert installation and repair",
      "Water main break repairs",
      "Hydrant installation",
      "Sewer system upgrades",
      "Water meter installation",
    ],
    detail: [
      "The existing water and sewer page presents Barrows as a partner for practical system work, from line repair to broader drainage and upgrade needs.",
      "The page now organizes that scope for easier scanning by municipalities, commercial clients, and project teams.",
    ],
    proofPoints: ["Water and sewer installation", "Drainage and culvert work", "Main break and hydrant support"],
    galleryImages: [],
  },
];

export function getBarrowsService(slug: string) {
  return BARROWS_SERVICES.find((service) => service.slug === slug);
}
