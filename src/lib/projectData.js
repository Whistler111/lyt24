export const PROJECTS = [
  {
    title: "NGVMS Platform",
    slug: "ngvms-platform",
    category: "Web",
    industry: "Logistics & Transport",
    short_description:
      "A modern responsive web platform for a transport company with real-time fleet tracking and online booking.",
    challenge:
      "A leading transport company in Abuja needed a centralized platform to manage fleet operations, track vehicles in real-time, and provide customers with up-to-date schedules and online booking capabilities. Their legacy system was slow, unreliable, and unable to scale with growing operations.",
    solution:
      "We built a custom web platform using React and Node.js with real-time WebSocket integration for live fleet tracking. The system includes an admin dashboard for fleet management, a customer-facing portal for schedules and bookings, and a mobile-responsive design that works seamlessly across all devices.",
    results:
      "40% reduction in operational costs through optimized routing. 60% improvement in customer satisfaction with real-time updates. 99.9% uptime since launch. 3x increase in online bookings within the first quarter.",
    tech_stack: ["React", "Node.js", "AWS", "WebSocket", "PostgreSQL"],
    image_url:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    order: 1,
  },
  {
    title: "Mobile Banking App",
    slug: "mobile-banking-app",
    category: "Mobile",
    industry: "Banking & Fintech",
    short_description:
      "Secure mobile banking application with biometric authentication, instant transfers, and bill payments.",
    challenge:
      "A financial institution needed a secure, user-friendly mobile banking app that could handle thousands of concurrent transactions while maintaining bank-grade security and complying with CBN regulations.",
    solution:
      "We developed a cross-platform mobile application using Flutter with a Python/Django backend. The app features biometric authentication, real-time transaction processing, instant transfers, bill payments, and an intuitive dashboard. Security measures include end-to-end encryption, multi-factor authentication, and fraud detection algorithms.",
    results:
      "100K+ downloads within 3 months. 4.8-star rating on app stores. 50% reduction in branch visits. Zero security incidents since launch. Average transaction time reduced to under 3 seconds.",
    tech_stack: ["Flutter", "Python", "Azure", "Redis", "JWT"],
    image_url:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    order: 2,
  },
  {
    title: "E-Learning Platform",
    slug: "e-learning-platform",
    category: "Web",
    industry: "Education",
    short_description:
      "Interactive online learning platform with video courses, assessments, and progress tracking.",
    challenge:
      "An educational institution wanted to digitize their curriculum and reach students across Nigeria. They needed a platform that could deliver video content, conduct assessments, track progress, and issue certificates — all with reliable performance in low-bandwidth areas.",
    solution:
      "We built a comprehensive e-learning platform using Next.js and Laravel with adaptive video streaming that adjusts quality based on bandwidth. The platform includes course management, interactive assessments, gamified progress tracking, discussion forums, and automated certificate generation.",
    results:
      "25K+ active students. 90% course completion rate. 70% improvement in assessment scores. Successful deployment across 15 institutions. 40% reduction in administrative overhead.",
    tech_stack: ["Next.js", "Laravel", "AWS", "PostgreSQL", "FFmpeg"],
    image_url:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    order: 3,
  },
  {
    title: "Government Portal",
    slug: "government-portal",
    category: "Government",
    industry: "Government & Public Sector",
    short_description:
      "Comprehensive portal for government services, information, and citizen engagement.",
    challenge:
      "A government agency needed a centralized digital portal to provide citizens with access to public services, information, and online applications. The existing process was entirely paper-based, leading to long queues, delays, and inefficiencies.",
    solution:
      "We developed a secure, scalable portal using Vue.js and Node.js with role-based access control. The platform enables citizens to apply for services, track applications, make payments, and access information. An admin dashboard provides real-time analytics and workflow management for government staff.",
    results:
      "200K+ citizens registered. 80% reduction in processing time. 65% of applications now submitted online. ISO 27001 security compliance achieved. Citizen satisfaction score increased by 55%.",
    tech_stack: ["Vue.js", "Node.js", "Google Cloud", "MongoDB", "OAuth2"],
    image_url:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    order: 4,
  },
  {
    title: "Healthcare Solutions",
    slug: "healthcare-solutions",
    category: "Healthcare",
    industry: "Healthcare",
    short_description:
      "End-to-end hospital management system for patient records, appointments, and billing.",
    challenge:
      "A network of hospitals was struggling with fragmented patient records, inefficient appointment scheduling, and billing errors. They needed a unified system that could securely manage patient data while complying with healthcare data protection regulations.",
    solution:
      "We built a comprehensive hospital management system using React and Python with a microservices architecture. The platform includes electronic health records, appointment scheduling, pharmacy management, billing and insurance processing, and a patient portal. All data is encrypted and access is controlled through role-based permissions.",
    results:
      "500K+ patient records digitized. 45% reduction in patient wait times. 90% billing accuracy improvement. HIPAA-compliant data security. Deployed across 8 hospital facilities.",
    tech_stack: ["React", "Python", "AWS", "PostgreSQL", "Docker"],
    image_url:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    order: 5,
  },
  {
    title: "Enterprise Management System",
    slug: "enterprise-management-system",
    category: "Enterprise",
    industry: "Enterprise",
    short_description:
      "Custom inventory and supply chain management system with real-time analytics.",
    challenge:
      "A large enterprise with multiple warehouses and distribution centers needed a unified system to manage inventory, track supply chains, and generate real-time analytics. Their existing system was manual, error-prone, and lacked visibility across locations.",
    solution:
      "We developed a custom enterprise management system using React and Laravel with real-time data synchronization across all locations. The platform includes inventory management, supply chain tracking, automated reorder alerts, vendor management, and a comprehensive analytics dashboard with custom reporting.",
    results:
      "35% reduction in inventory holding costs. 50% faster order fulfillment. 99.5% inventory accuracy. Real-time visibility across 12 locations. ROI achieved within 8 months of deployment.",
    tech_stack: ["React", "Laravel", "Azure", "MySQL", "Redis"],
    image_url:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    order: 6,
  },
];
