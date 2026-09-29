export const site = {
  name: "Inkvary",
  legalName: "Inkvary Compliances",
  tagline: "From Inquiry to Final Government Ink",
  email: "hello@inkvary.com",
  location: "India",
  description:
    "Inkvary Compliances is a regulatory compliance consultancy for product approvals, regulatory clearances, and licensing in India.",
};

export const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "8", label: "Approval Tracks" },
  { value: "5", label: "Core Industries" },
  { value: "End-to-end", label: "From Inquiry to Ink" },
];

export const services = [
  {
    slug: "bis-crs",
    title: "BIS CRS",
    menu: "BIS CRS Registration",
    category: "Electronic & IT Products",
    icon: "bis",
    image: "/images/svc-bis.webp",
    blurb: "Registration support for notified electronic and IT products under the BIS Compulsory Registration Scheme.",
    summary:
      "BIS CRS is the Compulsory Registration Scheme for notified electronic and information technology products sold in India. Inkvary prepares the file, coordinates testing, and follows the application through to registration.",
    overview: [
      "Manufacturers and importers of notified electronics often cannot place product on the Indian market until CRS registration is in place. The scheme ties the product, the manufacturing location, and the test report to a BIS registration number.",
      "We start by confirming whether the model is notified, which Indian Standard applies, and whether the factory needs an authorised Indian representative. From there we assemble the technical file and keep the submission consistent with the test report.",
    ],
    applies: [
      "Brands selling notified IT and electronic goods in India",
      "Importers bringing finished electronics into the country",
      "Factories that need a registration number before shipment",
    ],
    deliverables: [
      "Product and standard mapping before any lab booking",
      "Document checklist aligned to the notified product",
      "Test coordination with a suitable laboratory",
      "Application filing and query handling until registration",
    ],
    documents: [
      "Brand and model details, including family variants",
      "Manufacturing location and authorisation papers",
      "Critical component list where the standard requires it",
      "Test report against the applicable Indian Standard",
    ],
  },
  {
    slug: "bis-isi-fmcs",
    title: "BIS ISI & FMCS",
    menu: "ISI Mark & FMCS",
    category: "Electrical & Industrial Products",
    icon: "isi",
    image: "/images/svc-isi.webp",
    blurb: "ISI Mark and Foreign Manufacturers Certification Scheme support for electrical and industrial products.",
    summary:
      "The ISI Mark covers products under a compulsory or voluntary Indian Standard licence. Foreign factories use the FMCS route when the manufacturing site is outside India.",
    overview: [
      "An ISI licence is tied to a specific product, standard, and factory. The process is heavier than a simple registration: it usually includes application scrutiny, testing, and a factory assessment before the mark can be used.",
      "For overseas plants, FMCS is the path BIS uses to license foreign manufacturers. We help map the standard, prepare the factory for assessment, and keep the paperwork consistent from the first form to the grant of licence.",
    ],
    applies: [
      "Indian factories seeking an ISI licence",
      "Foreign manufacturers selling notified goods into India",
      "Electrical and industrial products covered by an Indian Standard",
    ],
    deliverables: [
      "Standard and licence-scope check",
      "Application and factory document set",
      "Testing and inspection coordination",
      "Support through grant and initial surveillance planning",
    ],
    documents: [
      "Process flow and plant layout",
      "Test equipment and calibration records",
      "Raw material and component traceability",
      "Authorised signatory and brand ownership papers",
    ],
  },
  {
    slug: "wpc-approval",
    title: "WPC Approval",
    menu: "WPC Approval",
    category: "Wireless & RF Devices",
    icon: "wpc",
    image: "/images/svc-wpc.webp",
    blurb: "Wireless planning clearance for RF and wireless devices that transmit in India.",
    summary:
      "Wireless products need WPC clearance before they are imported, stocked, or sold, when the radio falls under India’s equipment-type rules. We align frequency, power, and paperwork before the application goes in.",
    overview: [
      "WPC looks at the radio: frequency band, output power, and whether the device is meant for a de-licensed band. A product that looks like a simple gadget can still need an ETA if it contains Wi-Fi, Bluetooth, or another transmitter.",
      "We read the radio specification against the relevant band plan, flag gaps in the RF test report, and prepare the application so the technical data and the product description tell the same story.",
    ],
    applies: [
      "Wi-Fi, Bluetooth, and other short-range radio products",
      "Modules and finished devices with an embedded transmitter",
      "Importers who need clearance before customs release",
    ],
    deliverables: [
      "Band and power review against the device specification",
      "RF report gap check",
      "ETA application preparation",
      "Follow-up until the approval is issued",
    ],
    documents: [
      "Radio frequency, power, and modulation details",
      "RF test report for the transmitter",
      "Product photos, model number, and brand authorisation",
      "Import or manufacturing entity papers",
    ],
  },
  {
    slug: "tec-approval",
    title: "TEC Approval",
    menu: "TEC Certification",
    category: "Telecom & Networking Equipment",
    icon: "tec",
    image: "/images/svc-tec.webp",
    blurb: "Mandatory testing certification for notified telecom and networking equipment.",
    summary:
      "TEC’s Mandatory Testing and Certification scheme covers notified telecom products. Inkvary lines up the essential requirements, the lab, and the certificate application.",
    overview: [
      "Notified telecom and networking equipment needs a TEC certificate before it is sold or imported. The exact essential requirements depend on the product family, so the first job is classification, not paperwork.",
      "We match the model to the notified category, coordinate testing against the relevant essential requirements, and file for the certificate with the documents TEC expects to see together.",
    ],
    applies: [
      "Routers, switches, and other notified network gear",
      "Telecom products listed under MTCTE",
      "Brands launching networking equipment in India",
    ],
    deliverables: [
      "Product classification under the notified list",
      "Essential-requirements checklist",
      "Lab coordination and report review",
      "Certificate application and query response",
    ],
    documents: [
      "Technical construction and interface details",
      "Test reports against the applicable ERs",
      "Brand authorisation and Indian applicant details",
      "Model list, including variants",
    ],
  },
  {
    slug: "cdsco-approval",
    title: "CDSCO Approval",
    menu: "CDSCO Approval",
    category: "Medical Devices & Healthcare",
    icon: "cdsco",
    image: "/images/svc-cdsco.webp",
    blurb: "Regulatory support for medical device registration, import, and market entry in India.",
    summary:
      "Medical devices are regulated by CDSCO according to risk class. We help manufacturers and importers identify the class and prepare the corresponding application.",
    overview: [
      "A device’s risk class decides the licence: some products need registration, others an import or manufacturing licence, and many need an authorised Indian agent when the manufacturer is overseas.",
      "We confirm classification, list the technical documents the class requires, and keep the device description, intended use, and labelling consistent across the file.",
    ],
    applies: [
      "Importers of notified medical devices",
      "Overseas manufacturers who need an Indian authorised agent",
      "Domestic brands preparing a manufacturing or registration file",
    ],
    deliverables: [
      "Risk-class and pathway check",
      "Technical file outline for the class",
      "Authorised-agent documentation where required",
      "Application support through queries",
    ],
    documents: [
      "Device description and intended use",
      "Labels, IFU, and quality certificates",
      "Predicate or classification rationale",
      "Manufacturing site and free-sale or ISO evidence as applicable",
    ],
  },
  {
    slug: "lmpc-registration",
    title: "LMPC Registration",
    menu: "LMPC Registration",
    category: "Imported Packaged Products",
    icon: "lmpc",
    image: "/images/svc-lmpc.webp",
    blurb: "Legal Metrology registration for importers of pre-packaged commodities.",
    summary:
      "Importers of pre-packaged goods need Legal Metrology Packaged Commodities registration before the goods are imported for sale. The label has to match the declarations the rules require.",
    overview: [
      "LMPC registration is an importer registration, and the pack label is part of the compliance, not an afterthought. Declarations such as MRP, net quantity, month and year of manufacture or import, and consumer-care details have to be printable and legible.",
      "We review the pack artwork against the packaged-commodities rules, prepare the registration file, and flag label lines that commonly get queried.",
    ],
    applies: [
      "Importers of pre-packaged consumer goods",
      "Brands shipping retail-ready packs into India",
      "Companies adding a new importer entity",
    ],
    deliverables: [
      "Label review against packaged-commodity declarations",
      "Registration application for the importer",
      "Artwork comments before print",
      "Support if the department raises a query",
    ],
    documents: [
      "Importer constitution and address proof",
      "Pack artwork for each size being imported",
      "Brand authorisation if the importer is not the brand owner",
      "Product list with net quantity",
    ],
  },
  {
    slug: "bee-registration",
    title: "BEE Registration",
    menu: "BEE Registration",
    category: "Energy-Consuming Appliances",
    icon: "bee",
    image: "/images/svc-bee.webp",
    blurb: "BEE registration and star-label support for notified energy-consuming appliances.",
    summary:
      "Notified appliances need Bureau of Energy Efficiency registration, and many carry a star label based on tested energy performance. We align the model, the test, and the label before market release.",
    overview: [
      "BEE’s schedule decides whether a product is under a mandatory or voluntary labelling programme. The model name on the label, the test report, and the portal application have to match.",
      "We check whether the appliance is notified, what performance standard applies, and how the star band is calculated, then coordinate the file through registration.",
    ],
    applies: [
      "Brands of notified appliances such as cooling, lighting, and other scheduled products",
      "Importers launching energy-consuming models in India",
      "Companies updating a model family or star rating",
    ],
    deliverables: [
      "Schedule and model-scope check",
      "Test-report review against the labelling scheme",
      "Registration filing",
      "Label text check before print",
    ],
    documents: [
      "Model list and rated specifications",
      "Energy-performance test report",
      "Brand and manufacturing or import authorisation",
      "Sample label artwork",
    ],
  },
  {
    slug: "waste-management",
    title: "Waste Management",
    menu: "Waste Management Compliance",
    category: "Electronics, Batteries & Plastic",
    icon: "waste",
    image: "/images/svc-waste.webp",
    blurb: "EPR and waste-compliance support for electronics, batteries, and plastic packaging.",
    summary:
      "Producers, importers, and brand owners of electronics, batteries, and plastic packaging have extended producer responsibility duties. We help register the right entity and set up the ongoing filing rhythm.",
    overview: [
      "Waste rules in India place responsibility on the business that places the product or packaging on the market, not only on the recycler. Electronics, batteries, and plastic packaging each have their own registration and return-filing pattern.",
      "We identify which rules apply to the SKU, who must be the registered entity, and what collection or recycling arrangement the filing needs to describe.",
    ],
    applies: [
      "Electronics producers and importers",
      "Battery brand owners and importers",
      "Companies placing plastic packaging on the Indian market",
    ],
    deliverables: [
      "Applicability check across e-waste, battery, and plastic rules",
      "Registration file for the obligated entity",
      "Recycler or producer-responsibility plan outline",
      "Support for the first return cycle",
    ],
    documents: [
      "Entity constitution and authorised signatory",
      "Product or packaging quantity estimates",
      "Brand and importer relationship papers",
      "Agreements with recyclers or PROs where the rule expects them",
    ],
  },
];

export const reasons = [
  {
    title: "Dedicated Resource & Direct Leadership Access",
    text: "Each project is managed by a dedicated resource with direct involvement from the leadership team.",
  },
  {
    title: "Technical Expert Support",
    text: "Access to experienced technical experts without strict time limitations, so regulatory questions get a clear answer.",
  },
  {
    title: "Extended Compliance Network",
    text: "For additional regulatory requirements, we collaborate with trusted compliance consultants and cover the full file.",
  },
  {
    title: "Flexible Payment Terms",
    text: "Client-friendly and negotiable payment structures based on the project, not a rigid fee card.",
  },
  {
    title: "Competitive Pricing",
    text: "Professional fees kept below typical market rates while the file quality stays high.",
  },
];

export const matters = [
  {
    title: "Legal Compliance",
    text: "Meet the mandatory government conditions that apply before a product is sold in India.",
  },
  {
    title: "Avoid Penalties",
    text: "Reduce holds, fines, and rejected shipments caused by a missing approval or a wrong label.",
  },
  {
    title: "Market Trust",
    text: "Give distributors, marketplaces, and buyers a clean approval trail they can rely on.",
  },
  {
    title: "Product Approval",
    text: "Move from a product question to a filed application and a granted permission.",
  },
  {
    title: "Business Growth",
    text: "Keep launches moving so compliance does not become the reason a quarter slips.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Consultation & Requirement Analysis",
    text: "We learn the product, the entity that will sell it, and which Indian approvals actually apply.",
  },
  {
    n: "02",
    title: "Documentation & Application Support",
    text: "We prepare, check, and manage the forms, authorisations, and technical papers the authority expects.",
  },
  {
    n: "03",
    title: "Testing & Regulatory Coordination",
    text: "We coordinate laboratories where a test is required and stay on the file while the authority reviews it.",
  },
  {
    n: "04",
    title: "Approval & Market Readiness",
    text: "You receive the registration, licence, or clearance, with the label and model details aligned to it.",
  },
];

export const posts = [
  {
    slug: "before-you-file-bis-crs",
    title: "What to settle before a BIS CRS file goes in",
    category: "BIS",
    date: "12 Sep 2026",
    image: "/images/blog-1.webp",
    excerpt:
      "Most CRS delays start before the portal login: the wrong standard, an unnamed factory, or a model family that the test report does not cover.",
    body: [
      "BIS Compulsory Registration is straightforward when the product, the factory, and the test report describe the same thing. It drags when those three drift apart. Before a lab is booked, confirm the product is actually notified and write down the Indian Standard that applies to that notification, not the standard a similar model used last year.",
      "Treat the model family as a list, not a sentence. If a brand wants one registration to cover colour or memory variants, those variants have to be visible in the critical-component and test plan. A report issued on a single SKU will not stretch to cover a cousin model just because the enclosure looks identical.",
      "Foreign manufacturers should decide the authorised Indian representative before samples move. The name on the authorisation, the name on the application, and the name the lab prints have to match. Changing that name mid-test is one of the slower corrections in the process.",
      "Inkvary’s CRS work starts with that mapping. Once the standard, the plant, and the model list agree, the application is mostly discipline: complete forms, a report that cites the right standard, and fast answers when BIS asks for a clarification.",
    ],
  },
  {
    slug: "waste-rules-electronics-batteries-plastic",
    title: "Waste compliance when a product brings electronics, a battery, and plastic",
    category: "Waste",
    date: "28 Aug 2026",
    excerpt:
      "One SKU can trigger three obligations. The entity that must register is not always the factory that built the product.",
    image: "/images/blog-2.webp",
    body: [
      "A wireless speaker in a plastic carton with a lithium battery can sit under e-waste rules, battery rules, and plastic packaging rules at the same time. Teams often register one and assume the others follow. They do not. Each rule names its own obligated entity, its own portal, and its own return.",
      "Start with who places the goods on the Indian market. A foreign brand selling through an importer may find the importer is the person who must register, or that both need a defined role. The brand authorisation should say that plainly, because the portal application will ask for it.",
      "Quantities should be estimated before the first filing, not reconstructed afterwards. Electronics, batteries, and packaging each want a weight or count. A rough marketing forecast is weaker than a shipment-based estimate, and the gap shows up when the annual return is due.",
      "Inkvary maps the SKU against all three regimes, then files for the entity that actually carries the duty. The goal is one clean registration set, not three half-finished logins.",
    ],
  },
  {
    slug: "wpc-starting-point-wireless-products",
    title: "A practical starting point for WPC clearance of wireless products",
    category: "WPC",
    date: "4 Aug 2026",
    excerpt:
      "If the product transmits, assume WPC has a question. Frequency and power decide the path long before the form is filled.",
    image: "/images/blog-3.webp",
    body: [
      "Customs and marketplaces both ask for wireless clearance when a product contains a transmitter. The question is not whether the device is “just Bluetooth”. The question is which band it uses, at what power, and whether that combination sits in a de-licensed category.",
      "Pull the radio specification before the RF report is trusted. Centre frequency, occupied bandwidth, and conducted or radiated power should be readable without guessing from a marketing sheet. If the module is pre-certified in another country, that certificate is context. It is not a substitute for the Indian approval.",
      "The product description in the application should name the same model the report names. A family approval needs every model that will be imported written down, including ones that differ only by enclosure or firmware where the radio stays the same.",
      "Inkvary reviews the band plan against the datasheet first. If the radio does not fit a routine ETA path, that is better discovered before samples are shipped and a report is paid for.",
    ],
  },
];

export const faqs = [
  {
    q: "What does Inkvary Compliances do?",
    a: "We support product approvals, regulatory clearances, and licensing in India. The work runs from the first inquiry through documentation, testing coordination, filing, and the final government approval.",
  },
  {
    q: "Which approvals do you handle?",
    a: "BIS CRS, BIS ISI and FMCS, WPC, TEC, CDSCO, LMPC, BEE, and waste-management compliance for electronics, batteries, and plastic products.",
  },
  {
    q: "Are you a government department?",
    a: "No. Inkvary is a private consultancy. Certificates and registrations are issued by the relevant authorities, such as BIS, WPC, TEC, CDSCO, BEE, Legal Metrology, and CPCB.",
  },
  {
    q: "How experienced is the team?",
    a: "The practice is led by professionals with more than eight years in Indian product compliance, working with manufacturers, importers, startups, and global brands.",
  },
  {
    q: "Which industries do you cover?",
    a: "Electronics, telecom, wireless, medical devices, and waste management, including the approvals those products typically need to operate in the Indian market.",
  },
  {
    q: "Can a foreign manufacturer work with you?",
    a: "Yes. Where the rules require an authorised Indian representative or importer, we help put that role and the paperwork in place before the application is filed.",
  },
  {
    q: "How does a project start?",
    a: "Share the product, the model list, and who will sell it in India. We confirm the applicable approvals, then move through documents, testing if needed, and filing.",
  },
  {
    q: "How are fees structured?",
    a: "Fees are scoped to the project and kept competitive. Payment terms are negotiable and agreed before work starts, so the commercial side is as clear as the technical plan.",
  },
];

export const quotes = [
  {
    quote:
      "The file was owned by one person, and leadership was actually on the calls. We stopped repeating the same product story to a new coordinator every week.",
    name: "Operations lead",
    role: "Electronics importer",
  },
  {
    quote:
      "They told us which approval we did not need before they told us which one we did. That saved a lab booking on a model that was outside the notification.",
    name: "Founder",
    role: "Wireless product startup",
  },
  {
    quote:
      "Payment was agreed around the project stages, and the label comments arrived before we printed. The registration and the artwork finally matched.",
    name: "Compliance manager",
    role: "Packaged goods brand",
  },
];

export const industries = [
  "Electronics",
  "Telecom",
  "Wireless",
  "Medical Devices",
  "Waste Management",
];

export function getService(slug) {
  return services.find((item) => item.slug === slug);
}

export function getPost(slug) {
  return posts.find((item) => item.slug === slug);
}
