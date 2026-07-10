// LYT24 Technologies — Static site data module

export const VIDEO_URL =
  "https://videos.pexels.com/video-files/29718189/12778062_2560_1440_30fps.mp4";

export const contactInfo = {
  address: "24 I.T Igbani Street, Jabi Abuja, Nigeria",
  email: "contact@lyt24tech.com",
  phone: "+234 7030103743",
  phoneHref: "tel:+2347030103743",
  whatsapp: "https://wa.me/2347030103743",
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=7.4687%2C9.0665%2C7.4887%2C9.0865&layer=mapnik&marker=9.0765%2C7.4787",
  mapLink:
    "https://www.openstreetmap.org/?mlat=9.0765&mlon=7.4787#map=15/9.0765/7.4787",
};

export const stats = [
  { label: "Projects Delivered", value: 150, suffix: "+" },
  { label: "Years of Experience", value: 8, suffix: "+" },
  { label: "Clients Served", value: 80, suffix: "+" },
  { label: "Team Members", value: 25, suffix: "+" },
];

export const clientLogos = [
  "NGVMS",
  "FinTech NG",
  "MediCare",
  "EduLearn",
  "GovPortal",
  "ShopSmart",
  "AgriTech",
  "PropNest",
];

export const sectors = [
  "Finance",
  "Healthcare",
  "Government",
  "Education",
  "Transportation",
  "Retail",
  "Real Estate",
  "Agriculture",
];

export const PARTNERS = clientLogos;

export const INDUSTRIES = [
  { name: "Finance", icon: "CreditCard" },
  { name: "Healthcare", icon: "HeartPulse" },
  { name: "Government", icon: "Landmark" },
  { name: "Education", icon: "GraduationCap" },
  { name: "Transportation", icon: "Truck" },
  { name: "Retail", icon: "ShoppingBag" },
  { name: "Real Estate", icon: "Landmark" },
  { name: "Agriculture", icon: "Landmark" },
];

export const services = [
  {
    icon: "Code2",
    title: "Custom Software Development",
    description:
      "Bespoke software solutions engineered for your unique business workflows, built to scale with enterprise-grade architecture.",
    specs: [
      "Enterprise Architecture",
      "API Integration",
      "Microservices",
      "Legacy Modernization",
    ],
    span: "wide",
  },
  {
    icon: "Globe",
    title: "Website Design & Development",
    description:
      "Modern, high-performance websites and web applications with uncompromising UX.",
    specs: [
      "React & Next.js",
      "Headless CMS",
      "SEO Optimized",
      "Core Web Vitals",
    ],
    span: "normal",
  },
  {
    icon: "Smartphone",
    title: "Mobile App Development",
    description: "Native and cross-platform applications for Android and iOS.",
    specs: [
      "Flutter",
      "React Native",
      "App Store Deploy",
      "Push Notifications",
    ],
    span: "normal",
  },
  {
    icon: "ShoppingCart",
    title: "E-Commerce Solutions",
    description:
      "Secure, scalable online store systems with integrated payments, inventory management, and analytics dashboards.",
    specs: ["Payment Gateways", "Inventory Sync", "Multi-vendor", "Analytics"],
    span: "wide",
  },
  {
    icon: "Cloud",
    title: "Cloud Solutions",
    description:
      "Cloud migration, infrastructure setup, and DevOps for reliability at scale.",
    specs: ["AWS", "Azure", "CI/CD", "Kubernetes"],
    span: "normal",
  },
  {
    icon: "Workflow",
    title: "Digital Transformation",
    description:
      "End-to-end strategy and implementation to modernize your operations and unlock new efficiencies.",
    specs: [
      "Process Automation",
      "Data Migration",
      "Change Management",
      "ROI Optimization",
    ],
    span: "wide",
  },
];

export const projects = [
  {
    slug: "ngvms-platform",
    title: "NGVMS Platform",
    category: "Web",
    industry: "Transportation",
    description:
      "A modern, responsive web platform and booking system for a leading transport company in Abuja.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
    techStack: ["React", "Node.js", "PostgreSQL", "AWS"],
    client: "NGVMS Transport",
    timeline: "4 months",
    year: "2024",
    challenge:
      "NGVMS needed a unified digital platform to manage fleet operations, handle online bookings, and streamline customer communications. Their legacy system was slow, unreliable, and unable to scale with their growing operations across multiple states.",
    solution:
      "We built a comprehensive web platform featuring real-time fleet tracking, an intuitive online booking system, automated customer notifications, and a powerful admin dashboard. The system integrates seamlessly with payment gateways and provides detailed analytics for operational decision-making.",
    results: [
      { metric: "40%", label: "Increase in online bookings" },
      { metric: "60%", label: "Reduction in manual operations" },
      { metric: "99.9%", label: "Uptime since launch" },
    ],
    featured: true,
  },
  {
    slug: "mobile-banking-app",
    title: "Mobile Banking App",
    category: "Mobile",
    industry: "Finance",
    description:
      "A secure, feature-rich mobile banking application with modern UX and multi-factor authentication.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=80",
    techStack: ["Flutter", "Laravel", "MySQL", "AWS"],
    client: "FinTech NG",
    timeline: "6 months",
    year: "2024",
    challenge:
      "A growing financial institution needed a mobile banking app that could handle thousands of concurrent transactions securely while providing a seamless user experience that builds trust with digitally-skeptical customers.",
    solution:
      "We delivered a cross-platform mobile banking app with biometric authentication, real-time transaction processing, instant transfers, bill payments, and an intuitive dashboard. The app includes robust fraud detection and complies with CBN regulatory standards.",
    results: [
      { metric: "100K+", label: "Active users in 3 months" },
      { metric: "4.8★", label: "App store rating" },
      { metric: "0", label: "Security breaches" },
    ],
    featured: true,
  },
  {
    slug: "e-learning-platform",
    title: "E-Learning Platform",
    category: "Web",
    industry: "Education",
    description:
      "An interactive online learning platform with video courses, assessments, and progress tracking.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1600&q=80",
    techStack: ["Next.js", "Python", "PostgreSQL", "Google Cloud"],
    client: "EduLearn",
    timeline: "5 months",
    year: "2023",
    challenge:
      "An educational institution needed a digital platform to deliver courses online, manage student enrollment, conduct assessments, and track learning progress across thousands of students.",
    solution:
      "We built a comprehensive e-learning platform with live video streaming, interactive course content, automated grading, certification generation, and detailed analytics for both students and instructors. The platform supports offline learning and low-bandwidth optimization.",
    results: [
      { metric: "50K+", label: "Students enrolled" },
      { metric: "92%", label: "Course completion rate" },
      { metric: "3x", label: "Faster grading process" },
    ],
    featured: true,
  },
  {
    slug: "government-portal",
    title: "Government Portal",
    category: "Government",
    industry: "Public Sector",
    description:
      "A comprehensive portal for government services, information, and citizen engagement.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    techStack: ["React", "Node.js", "MongoDB", "Azure"],
    client: "Federal Government Agency",
    timeline: "8 months",
    year: "2023",
    challenge:
      "A government agency needed a centralized digital portal to deliver services to citizens, provide information, and handle online applications. The existing system was fragmented across multiple departments with no unified interface.",
    solution:
      "We developed a secure, scalable government portal with role-based access control, online service applications, payment integration, document verification, and a citizen feedback system. The portal meets international security standards and accessibility guidelines.",
    results: [
      { metric: "200K+", label: "Citizens served" },
      { metric: "70%", label: "Faster service delivery" },
      { metric: "15+", label: "Services digitized" },
    ],
    featured: true,
  },
  {
    slug: "hospital-management-system",
    title: "Hospital Management System",
    category: "Enterprise",
    industry: "Healthcare",
    description:
      "An end-to-end hospital management solution for patient records, appointments, and billing.",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=80",
    techStack: ["Vue.js", "Laravel", "MySQL", "AWS"],
    client: "Healthcare Group",
    timeline: "7 months",
    year: "2024",
    challenge:
      "A multi-location healthcare provider needed a unified system to manage patient records, appointments, billing, pharmacy, and laboratory operations across all their facilities.",
    solution:
      "We built a comprehensive hospital management system with electronic health records, appointment scheduling, billing and insurance processing, pharmacy management, lab integration, and a patient portal. The system is HIPAA-compliant and supports multi-branch operations.",
    results: [
      { metric: "60%", label: "Improvement in efficiency" },
      { metric: "80%", label: "Faster patient check-in" },
      { metric: "100%", label: "Records digitized" },
    ],
    featured: true,
  },
  {
    slug: "ngvms-management-system",
    title: "NGVMS Management System",
    category: "Enterprise",
    industry: "Transportation",
    description:
      "A custom inventory and supply chain management system for fleet operations.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    techStack: ["React", "Python", "PostgreSQL", "Google Cloud"],
    client: "NGVMS Transport",
    timeline: "5 months",
    year: "2023",
    challenge:
      "NGVMS needed a centralized system to manage their fleet inventory, spare parts, maintenance schedules, and supply chain operations across multiple depots.",
    solution:
      "We delivered a custom enterprise management system with real-time inventory tracking, automated maintenance scheduling, supplier management, procurement workflows, and comprehensive reporting dashboards.",
    results: [
      { metric: "35%", label: "Reduction in inventory costs" },
      { metric: "50%", label: "Faster maintenance turnaround" },
      { metric: "100%", label: "Real-time visibility" },
    ],
    featured: true,
  },
  {
    slug: "health-wellness-app",
    title: "Health & Wellness App",
    category: "Mobile",
    industry: "Healthcare",
    description:
      "A cross-platform mobile application for fitness tracking and nutrition management.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2187d80a1b52?auto=format&fit=crop&w=1600&q=80",
    techStack: ["React Native", "Node.js", "MongoDB", "AWS"],
    client: "MediCare",
    timeline: "4 months",
    year: "2023",
    challenge:
      "A healthcare startup wanted to build a mobile app that helps users track their fitness goals, monitor nutrition, and connect with wellness professionals.",
    solution:
      "We created a beautiful, intuitive mobile app with activity tracking, meal planning, progress analytics, wearable device integration, and a marketplace for wellness professionals. The app includes social features for community motivation.",
    results: [
      { metric: "25K+", label: "Active users" },
      { metric: "4.7★", label: "App store rating" },
      { metric: "68%", label: "User retention rate" },
    ],
    featured: false,
  },
  {
    slug: "fashion-ecommerce",
    title: "Fashion E-Commerce",
    category: "E-Commerce",
    industry: "Retail",
    description:
      "A complete online store with payment integration for a premium fashion brand.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    techStack: ["Next.js", "Laravel", "MySQL", "AWS"],
    client: "ShopSmart",
    timeline: "3 months",
    year: "2024",
    challenge:
      "A fashion brand needed a premium e-commerce platform that could handle high traffic during sales events, manage inventory across multiple channels, and provide a luxurious shopping experience.",
    solution:
      "We built a high-performance e-commerce platform with a stunning visual interface, fast checkout, multiple payment options, inventory sync, size guides, and a customer loyalty program. The platform handles 10,000+ concurrent users during peak sales.",
    results: [
      { metric: "3x", label: "Increase in online sales" },
      { metric: "45%", label: "Improvement in conversion" },
      { metric: "1.2s", label: "Average page load time" },
    ],
    featured: false,
  },
];

export const teamMembers = [
  {
    name: "Ishola Yusuf Bolaji",
    role: "Chairman",
    department: "Leadership",
    leadership: true,
  },
  {
    name: "Usman Gunu",
    role: "CEO & Managing Director",
    department: "Leadership",
    leadership: true,
  },
  {
    name: "Emmanuel Nwabuodafi",
    role: "Chief Technology Officer",
    department: "Leadership",
    leadership: true,
  },
  {
    name: "John Obi",
    role: "Backend / Full Stack Developer",
    department: "Engineering",
  },
  {
    name: "Yashim Kelvin Jacob",
    role: "Web & Mobile App Developer",
    department: "Engineering",
  },
  {
    name: "Margret Edeh",
    role: "Frontend Developer",
    department: "Engineering",
  },
  { name: "Faith Adama", role: "Product Designer", department: "Product" },
  { name: "Joy Eneotse Ogbu", role: "Product Manager", department: "Product" },
  {
    name: "Jeffrey E. Umogbai",
    role: "Project Manager",
    department: "Operations",
  },
  {
    name: "Vanessa Tawal",
    role: "Junior Project Manager",
    department: "Operations",
  },
  {
    name: "Stephen Amos",
    role: "Virtual Assistant / Data Analyst",
    department: "Operations",
  },
  {
    name: "Felicia Adeleke",
    role: "Marketing Manager",
    department: "Marketing",
  },
  { name: "Noah Bako", role: "Public Relations", department: "Marketing" },
];

export const departments = [
  "Leadership",
  "Engineering",
  "Product",
  "Operations",
  "Marketing",
];

export const techStack = [
  {
    category: "Frontend",
    icon: "Monitor",
    items: ["Vue.js", "React", "Next.js"],
  },
  {
    category: "Backend",
    icon: "Server",
    items: ["Laravel", "Node.js", "Python"],
  },
  {
    category: "Mobile",
    icon: "Smartphone",
    items: ["Flutter", "React Native"],
  },
  { category: "Cloud", icon: "Cloud", items: ["AWS", "Azure", "Google Cloud"] },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into your business, goals, and challenges to understand exactly what you need.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We craft a comprehensive roadmap with clear milestones, technology choices, and timelines.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Our designers create intuitive, beautiful interfaces that users love and stakeholders approve.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Our engineers build robust, scalable solutions using best practices and modern frameworks.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Rigorous QA ensures every feature works flawlessly across devices, browsers, and edge cases.",
  },
  {
    number: "06",
    title: "Deployment",
    description:
      "We deploy with zero downtime, configure infrastructure, and ensure smooth go-live.",
  },
  {
    number: "07",
    title: "Support",
    description:
      "Ongoing maintenance, updates, and optimization keep your solution running at peak performance.",
  },
];

export const whyChooseUs = [
  {
    icon: "Shield",
    title: "Enterprise-Grade Development",
    description:
      "We build to enterprise standards with code that scales to millions of users without breaking a sweat.",
  },
  {
    icon: "Zap",
    title: "Agile Delivery",
    description:
      "Rapid iterations with transparent communication and weekly progress demos keep you in the loop.",
  },
  {
    icon: "Layers",
    title: "Scalable Architecture",
    description:
      "Future-proof systems designed to grow seamlessly alongside your business ambitions.",
  },
  {
    icon: "Lock",
    title: "Security-First Approach",
    description:
      "Security baked into every layer, compliant with international standards and best practices.",
  },
  {
    icon: "MapPin",
    title: "Local Expertise, Global Standards",
    description:
      "Deep understanding of the African market paired with international engineering practices.",
  },
  {
    icon: "Headset",
    title: "Dedicated Support",
    description:
      "A committed team available around the clock to ensure your solution never skips a beat.",
  },
];

export const testimonials = [
  {
    quote:
      "LYT24 Technologies transformed our entire operations. Their team delivered a platform that exceeded our expectations, on time and on budget. They didn't just build software — they understood our vision and made it real.",
    author: "Director of Operations",
    company: "Federal Government Agency",
    rating: 5,
  },
  {
    quote:
      "The level of professionalism and technical expertise at LYT24 is outstanding. They took our fintech idea from concept to a fully functional banking app in record time. The attention to security and UX was exceptional.",
    author: "CEO",
    company: "FinTech Startup",
    rating: 5,
  },
  {
    quote:
      "Working with LYT24 was a game-changer for our hospital network. The management system they built has improved our efficiency by over 60%. Their team understood healthcare workflows better than vendors we'd worked with before.",
    author: "Medical Director",
    company: "Healthcare Group",
    rating: 5,
  },
];

export const companyTimeline = [
  {
    year: "2018",
    title: "Founded",
    description:
      "LYT24 Technologies was founded in Abuja with a vision to transform African businesses through technology.",
  },
  {
    year: "2020",
    title: "Expansion",
    description:
      "Expanded our team and took on enterprise clients across finance, healthcare, and government sectors.",
  },
  {
    year: "2022",
    title: "Growth",
    description:
      "Crossed 100+ delivered projects and established partnerships with leading technology providers.",
  },
  {
    year: "2024",
    title: "Innovation",
    description:
      "Leading digital transformation initiatives across Nigeria with a team of 25+ professionals.",
  },
];

export const mission =
  "To empower African businesses with world-class software solutions that drive growth, efficiency, and innovation.";
export const vision =
  "To be Africa's most trusted technology partner, bridging the gap between local expertise and global engineering standards.";

export const coreValues = [
  {
    title: "Excellence",
    description:
      "We pursue perfection in every line of code and every pixel we ship.",
  },
  {
    title: "Integrity",
    description:
      "We build trust through transparency, honesty, and delivering on our promises.",
  },
  {
    title: "Innovation",
    description:
      "We stay ahead of the curve, embracing emerging technologies to solve complex problems.",
  },
  {
    title: "Impact",
    description:
      "We measure our success by the tangible impact we create for our clients and communities.",
  },
];

export const footerLinks = {
  company: [
    { label: "About Us", to: "/#about" },
    { label: "Our Team", to: "/team" },
    { label: "Careers", to: "/contact" },
    { label: "Contact", to: "/contact" },
  ],
  services: [
    { label: "Custom Software", to: "/#services" },
    { label: "Web Development", to: "/#services" },
    { label: "Mobile Apps", to: "/#services" },
    { label: "Cloud Solutions", to: "/#services" },
  ],
  portfolio: [
    { label: "All Projects", to: "/portfolio" },
    { label: "Case Studies", to: "/portfolio" },
    { label: "NGVMS Platform", to: "/portfolio/ngvms-platform" },
    { label: "Banking App", to: "/portfolio/mobile-banking-app" },
  ],
};

export const socialLinks = [
  { icon: "Linkedin", href: "https://www.linkedin.com/", label: "LinkedIn" },
  { icon: "Twitter", href: "https://twitter.com/", label: "Twitter" },
  { icon: "Github", href: "https://github.com/", label: "GitHub" },
  { icon: "Instagram", href: "https://www.instagram.com/", label: "Instagram" },
];

// Uppercase aliases consumed by the section components
export const COMPANY = {
  name: "LYT24 Technologies",
  address: contactInfo.address,
  email: contactInfo.email,
  phone: contactInfo.phone,
  phoneRaw: "+2347030103743",
  whatsapp: "2347030103743",
};

export const SERVICES = services;
export const ABOUT_TIMELINE = companyTimeline;
export const CORE_VALUES = coreValues;
export const MISSION = mission;
export const VISION = vision;
export const TEAM_MEMBERS = teamMembers;
export const PROCESS_STEPS = processSteps;

// Components read group.group (data uses group.category)
export const TECH_STACK = techStack.map(({ category, ...rest }) => ({
  ...rest,
  group: category,
}));

// Components read testimonial.role (data uses testimonial.company)
export const TESTIMONIALS = testimonials.map(({ company, ...rest }) => ({
  ...rest,
  role: company,
}));

// Align icon names with the icon map in WhyChooseUs.jsx
export const WHY_CHOOSE_US = whyChooseUs.map((item) => ({
  ...item,
  icon:
    item.icon === "Shield"
      ? "ShieldCheck"
      : item.icon === "Headset"
        ? "Headphones"
        : item.icon,
}));
