export const PROJECTS = [
  {
    title: "Nigeria Gas Vehicle Monitoring System (NGVMS)",
    slug: "picng-ngvms",
    category: "Government",
    industry: "Energy & Regulatory",
    short_description:
      "A mission-critical regulatory platform developed for the Presidential CNG Initiative to monitor and manage compressed natural gas vehicle conversions and the CNG ecosystem nationwide.",
    description:
      "A mission-critical regulatory platform developed for the Presidential CNG Initiative to monitor and manage compressed natural gas vehicle conversions and the CNG ecosystem nationwide.",
    challenge:
      "The Presidential CNG Initiative needed a secure, high-performance, and unified regulatory framework to track vehicle conversions, compliance standards, and cng safety parameters across multiple national stakeholders including NMDPRA, NADDC, FRSC, and SON with zero downtime.",
    solution:
      "We built a secure, centralized regulatory platform featuring real-time conversion tracking, compliance reporting, and secure inter-agency data integration. The platform supports instant verification workflows, status checks, and role-based access control.",
    results:
      "Successfully centralized conversion logging nationwide, achieved 100% compliance transparency among government stakeholders, and maintained zero system downtime since launching.",
    // tech_stack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "REST API"],
    image_url: "/ngvms.png",
    image: "/ngvms.png",
    featured: true,
    order: 1,
    url: "https://pci-ngvms.org.ng"
  },
  {
    title: "CNG Inspector & CO2 Emission Calculator",
    slug: "cng-inspector",
    category: "Mobile",
    industry: "Environmental Tech & Logistics",
    short_description:
      "An online-offline capable inspection tool with SMS, USSD, and WhatsApp-bot integration designed for field officers monitoring Nigeria's CNG fleet and tracking carbon offset metrics.",
    description:
      "An online-offline capable inspection tool with SMS, USSD, and WhatsApp-bot integration designed for field officers monitoring Nigeria's CNG fleet and tracking carbon offset metrics.",
    challenge:
      "Field officers needed to audit conversions, upload photo evidence, and calculate CO2 savings in remote areas with highly unstable internet connectivity, requiring robust offline syncing and cross-channel message options.",
    solution:
      "We engineered a modern, offline-first mobile app complete with an integrated CO2 emissions calculator, photo upload queueing, and alternative notification fallback layers via SMS, USSD, and a conversational WhatsApp bot.",
    results:
      "Enabled 100% field data collection accuracy even in zero-signal locations, digitized vehicle carbon offset estimations, and accelerated national safety certification timelines.",
    // tech_stack: ["React Native", "WhatsApp Business API", "USSD Gateway", "SQLite", "Node.js"],
    image_url: "/cnginspector.png",
    image: "/cnginspector.png",
    featured: true,
    order: 2,
    url: "https://pci-ngvms.org.ng"
  },
  {
    title: "ICSC 2026 Global Portal",
    slug: "icsc-2026",
    category: "Web",
    industry: "Public Sector & Events",
    short_description:
      "International Civil Service Conference registration portal built for the Office of the Head of Civil Service Nigeria, supporting secure global transactions and attendee management.",
    description:
      "International Civil Service Conference registration portal built for the Office of the Head of Civil Service Nigeria, supporting secure global transactions and attendee management.",
    challenge:
      "The host agency needed a highly scalable, globally accessible web infrastructure to register high-profile delegates across multiple timezones, publish schedule revisions dynamically, and handle high concurrent load safely.",
    solution:
      "We created a headless, globally distributed registration portal with serverless caching, agenda management dashboards, unified check-in databases, and automated transactional ticketing.",
    results:
      "Registered delegates smoothly from dozens of nations with 99.99% uptime, reduced physical conference line waiting by 75%, and modernized digital event logistics.",
    // tech_stack: ["Next.js", "Tailwind CSS", "Node.js", "Serverless", "Netlify", "PostgreSQL"],
    image_url: "/icsc.png",
    image: "/icsc.png",
    featured: true,
    order: 3,
    url: "https://icsc.ohcsf.gov.ng"
  },
  {
    title: "Nigerian Carbon Market Activation Platform",
    slug: "nigerian-carbon-market",
    category: "Government",
    industry: "Climate Tech & Finance",
    short_description:
      "A transparent, automated digital offset registry developed for FIRS and NCCC to facilitate issuance, verification, and trading of national carbon credits.",
    description:
      "A transparent, automated digital offset registry developed for FIRS and NCCC to facilitate issuance, verification, and trading of national carbon credits.",
    challenge:
      "Nigeria needed a secure and transparent national standard ledger to onboard sustainable offset projects, issue verified credits, and maintain strict tracking to meet key international climate pacts.",
    solution:
      "We developed a robust double-entry carbon asset ledger and compliance portal enabling automated validation checks, developer submissions, and real-time trading dashboards for transparency.",
    results:
      "Successfully onboarded hundreds of green projects with zero downtime, creating a highly audited digital foundation for Nigeria's green trade and environmental finance.",
    // tech_stack: ["React", "Express", "PostgreSQL", "Tailwind CSS", "Chart.js", "OAuth2"],
    image_url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    order: 4,
    url: "https://nigeriancarbonmarket.ng"
  },
  {
    title: "NSIA Grant & Innovation Prize Portal",
    slug: "nsia-grant-portal",
    category: "Enterprise",
    industry: "Finance & Venture Support",
    short_description:
      "An advanced grant allocation and structured evaluation engine built for the Nigeria Sovereign Investment Authority to manage multi-currency applications and judge collaboration.",
    description:
      "An advanced grant allocation and structured evaluation engine built for the Nigeria Sovereign Investment Authority to manage multi-currency applications and judge collaboration.",
    challenge:
      "The NSIA innovation awards required a unified portal to safely collect global applications, process multi-currency funding stages, and provide evaluators with objective, double-blind grading metrics.",
    solution:
      "We built a high-security grant workflow dashboard featuring interactive scoring matrices, applicant media uploads, multi-currency processing layers, and audited logging records.",
    results:
      "Reduced candidate screening timelines by 65%, eliminated scoring inconsistencies, and provided structured evaluation for thousands of tech startup entries.",
    // tech_stack: ["React", "Django", "Tailwind CSS", "PostgreSQL", "Stripe API", "AWS"],
    image_url: "/nsia.png",
    image: "/nsia.png",
    featured: true,
    order: 5,
    url: "http://nsia-ip.com"
  },
  {
    title: "AYuTe Africa Challenge Portal",
    slug: "ayute-africa",
    category: "Web",
    industry: "Agritech & Venture Funding",
    short_description:
      "A digital competition and venture funding engine designed to empower young African agritech innovators with streamlined submissions and judge dashboards.",
    description:
      "A digital competition and venture funding engine designed to empower young African agritech innovators with streamlined submissions and judge dashboards.",
    challenge:
      "The program organizers needed to securely scale application intakes, collect complex pitch files, and provide pan-African judges with a centralized workspace to grade agritech ideas.",
    solution:
      "We created a custom web engine with robust file upload integrations, dynamic application pipelines, and multi-tenant grading interfaces optimized for varying regional speeds.",
    results:
      "Enabled organizers to manage thousands of continent-wide agritech entries annually with zero downtime, improving selection efficiency and operational transparency.",
    // tech_stack: ["Next.js", "Node.js", "MongoDB", "S3 Storage", "Tailwind CSS"],
    image_url: "/ayute.png",
    image: "/ayute.png",
    featured: true,
    order: 6,
    url: "https://ayute.africa/nigeria"
  },
  {
    title: "DBN Innovation Hub",
    slug: "dbn-hub",
    category: "Enterprise",
    industry: "Start-up Development & Finance",
    short_description:
      "A comprehensive digital hub engineered for the Development Bank of Nigeria to track startup applications, organize mentorships, and manage resources.",
    description:
      "A comprehensive digital hub engineered for the Development Bank of Nigeria to track startup applications, organize mentorships, and manage resources.",
    challenge:
      "DBN required a single, unified ecosystem to digitize startup resource access, mentor pairings, application screenings, and funding milestone check-ins.",
    solution:
      "We built a robust start-up portal featuring user milestones tracking, interactive mentor matchmaking filters, secure data handling, and stakeholder progress dashboards.",
    results:
      "Accelerated resource matching and start-up onboarding, fostering operational excellence and clear visibility across funding and startup development paths.",
    // tech_stack: ["React", "Express", "Node.js", "MongoDB", "Tailwind CSS"],
    image_url: "/DBN.png",
    image: "/DBN.png",
    featured: true,
    order: 7,
    url: "https://dbninnovationhub.com"
  },
  {
    title: "LEGASI Website & Data Management System",
    slug: "legasi-dms",
    category: "Web",
    industry: "Non-Profit & Social Impact",
    short_description:
      "A secure, role-based platform comprising a public-facing website and dual dashboards to track ladies' empowerment metrics and program outcomes.",
    description:
      "A secure, role-based platform comprising a public-facing website and dual dashboards to track ladies' empowerment metrics and program outcomes.",
    challenge:
      "The NGO lacked a consolidated database to securely measure community program effectiveness, register project beneficiaries, and verify metrics for donor reporting.",
    solution:
      "We engineered a responsive web portal connected to dual dashboards (Super Admin & Project Manager) featuring encrypted database storage, automatic backups, and graphical impact reports.",
    results:
      "Streamlined target outcome logging, ensured 100% database privacy for beneficiaries, and automated high-integrity reporting for international donors.",
    // tech_stack: ["React", "PHP", "MySQL", "Tailwind CSS", "Chart.js"],
    image_url: "/legasi.png",
    image: "/legasi.png",
    featured: false,
    order: 8,
    url: "https://legasi.org"
  },
  {
    title: "Afrik Farm Agritech Portal",
    slug: "afrik-farm",
    category: "E-Commerce",
    industry: "Agriculture & Supply Chain",
    short_description:
      "An innovative agricultural supply chain and commerce hub connecting farmers directly to retail markets, investors, and logistics partners.",
    description:
      "An innovative agricultural supply chain and commerce hub connecting farmers directly to retail markets, investors, and logistics partners.",
    challenge:
      "Local farmers faced high post-harvest losses, lack of pricing transparency, and complex logistics coordination when trying to supply urban centers.",
    solution:
      "We developed a multi-tenant digital marketplace with embedded tracking coordinates, secure payment escrow contracts, and price trend indexing interfaces.",
    results:
      "Improved market access, increased margins for smallholder farmers, and established reliable supply chains for local food distributors.",
    // tech_stack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Stripe API"],
    image_url: "/afrikfarm.png",
    image: "/afrikfarm.png",
    featured: false,
    order: 9,
    url: "https://afrikfarm.com"
  },
  {
    title: "SweetRide Mobility App",
    slug: "sweetride",
    category: "Mobile",
    industry: "Transportation & Mobility",
    short_description:
      "A ride-hailing platform that connects passengers with drivers through a user-friendly mobile app featuring real-time GPS tracking.",
    description:
      "Sweetride is a ride-hailing platform that connects passengers with drivers through a user-friendly mobile app. It provides a reliable, cost-effective, and safe transportation option.",
    challenge:
      "Urban commuters needed a reliable, safe, and transparent transportation option, while drivers lacked an efficient way to connect with passengers, navigate routes, and receive secure payments.",
    solution:
      "We engineered a robust mobile application with real-time GPS tracking, transparent fare estimation, digital payment integration, and a dual-interface for both riders and drivers.",
    results:
      "Revolutionized local transportation by enhancing urban mobility, improving driver earnings through an efficient dispatch system, and ensuring passenger safety and satisfaction.",
    // tech_stack: ["React Native", "Node.js", "MongoDB", "Google Maps API"],
    image_url: "/sweetride.png",
    image: "/sweetride.png",
    featured: false,
    order: 10,
    url: "https://sweetride.ng"
  },
  {
    title: "InsureSweet Digital Platform",
    slug: "insuresweet",
    category: "Web",
    industry: "Insurance & FinTech",
    short_description:
      "A comprehensive digital platform designed to simplify and streamline insurance processes for both companies and customers.",
    description:
      "Insuresweet is a comprehensive digital platform designed to simplify and streamline insurance processes for both companies and customers. It allows policyholders to manage policies, file claims, and process renewals through an intuitive interface.",
    challenge:
      "The insurance industry faces challenges with manual policy updates, lengthy claims assessments, and a lack of real-time tracking for customers, leading to poor user experiences and high administrative overhead.",
    solution:
      "We developed an intuitive platform that integrates with insurers' databases, automating routine tasks, and providing policyholders with real-time tracking, instant notifications, and seamless claim filing.",
    results:
      "Modernized the insurance experience, significantly reducing administrative overhead for insurers while providing customers with a transparent, easy-to-use digital portal.",
    // tech_stack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image_url: "/insuresweet.png",
    image: "/insuresweet.png",
    featured: false,
    order: 11,
    url: "https://insuresweet.com"
  }
];
