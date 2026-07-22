import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PROJECTS } from "@/lib/projectData";
import { contactInfo, services, socialLinks } from "@/lib/lyt24Data";

const SITE_URL = "https://lyt24tech.com";
const SITE_NAME = "LYT24 Technologies";
const DEFAULT_DESCRIPTION =
  "LYT24 Technologies is a leading software company based in Abuja, Nigeria. We build enterprise software, cloud systems, mobile apps, and digital transformation platforms across Africa.";
const DEFAULT_IMAGE = `${SITE_URL}/LOGO.png`;

const ROUTE_META = {
  "/": {
    title: "LYT24 Technologies | Software Company in Abuja, Nigeria",
    description: DEFAULT_DESCRIPTION,
  },
  "/about": {
    title: "About LYT24 Technologies | Software Company in Abuja, Nigeria",
    description:
      "LYT24 Technologies is a leading software company based in Abuja, Nigeria. We build enterprise software, cloud systems, mobile apps, and digital transformation platforms across Africa.",
  },
  "/portfolio": {
    title: "Portfolio | Enterprise Software Projects by LYT24 Technologies",
    description:
      "Explore LYT24 Technologies projects across government, finance, energy, mobility, grants, and enterprise digital transformation.",
  },
  "/team": {
    title: "Team | LYT24 Technologies",
    description:
      "Meet the LYT24 Technologies team delivering software engineering, product design, cybersecurity, data, and digital transformation work.",
  },
  "/contact": {
    title: "Contact LYT24 Technologies | Start a Software Project",
    description:
      "Contact LYT24 Technologies in Abuja, Nigeria for enterprise software development, mobile apps, cloud solutions, and digital transformation support.",
  },
};

const serviceNames = services.map((service) => service.title);
const sameAs = socialLinks.map((link) => link.href);

function getBaseSchema() {
  return [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: "LYT24 Technologies",
      alternateName: ["LYT24", "LYT24 Tech"],
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/LOGO.png`,
      image: `${SITE_URL}/LOGO.png`,
      description: DEFAULT_DESCRIPTION,
      email: contactInfo.email,
      telephone: contactInfo.phoneHref.replace("tel:", ""),
      address: {
        "@type": "PostalAddress",
        streetAddress: "24 I.T. Igbani, Utako",
        addressLocality: "Abuja",
        addressRegion: "Federal Capital Territory",
        postalCode: "900001",
        addressCountry: "NG",
      },
      areaServed: ["Nigeria", "Africa"],
      knowsAbout: serviceNames,
      sameAs,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: contactInfo.email,
          telephone: contactInfo.phoneHref.replace("tel:", ""),
          areaServed: ["NG", "Africa"],
          availableLanguage: ["en"],
        },
      ],
    },
  ];
}

function getPageSchema(pathname, meta) {
  const canonical = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
  const pageType =
    pathname === "/about"
      ? "AboutPage"
      : pathname === "/contact"
        ? "ContactPage"
        : pathname === "/portfolio"
          ? "CollectionPage"
          : "WebPage";

  const pageSchema = {
    "@type": pageType,
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: meta.title,
    description: meta.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
  };

  if (pathname.startsWith("/portfolio/")) {
    pageSchema["@type"] = "Article";
    pageSchema.headline = meta.title;
    pageSchema.image = meta.image || DEFAULT_IMAGE;
    pageSchema.publisher = { "@id": `${SITE_URL}/#organization` };
  }

  const crumbs = pathname
    .split("/")
    .filter(Boolean)
    .map((part, index, parts) => ({
      "@type": "ListItem",
      position: index + 2,
      name: part
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      item: `${SITE_URL}/${parts.slice(0, index + 1).join("/")}`,
    }));

  return [
    pageSchema,
    {
      "@type": "BreadcrumbList",
      "@id": `${canonical}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        ...crumbs,
      ],
    },
  ];
}

function setMeta(selector, attr, value) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    const nameMatch = selector.match(/meta\[name="([^"]+)"\]/);
    const propertyMatch = selector.match(/meta\[property="([^"]+)"\]/);

    if (nameMatch) element.setAttribute("name", nameMatch[1]);
    if (propertyMatch) element.setAttribute("property", propertyMatch[1]);
    document.head.appendChild(element);
  }

  element.setAttribute(attr, value);
}

function setLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function setStructuredData(pathname, meta) {
  const id = "lyt24-structured-data";
  let element = document.getElementById(id);

  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [...getBaseSchema(), ...getPageSchema(pathname, meta)],
  });
}

function getMeta(pathname) {
  if (pathname.startsWith("/portfolio/")) {
    const slug = pathname.split("/").filter(Boolean).at(-1);
    const project = PROJECTS.find((item) => item.slug === slug);

    if (project) {
      return {
        title: `${project.title} Case Study | LYT24 Technologies`,
        description:
          project.short_description || project.description || DEFAULT_DESCRIPTION,
        image: project.image_url?.startsWith("http")
          ? project.image_url
          : `${SITE_URL}${project.image_url || "/LOGO.png"}`,
      };
    }
  }

  return ROUTE_META[pathname] || ROUTE_META["/"];
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getMeta(pathname);
    const title = meta.title;
    const description = meta.description;
    const canonical = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
    const image = meta.image || DEFAULT_IMAGE;

    document.title = title;
    setLink("canonical", canonical);
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:image"]', "content", image);
    setMeta('meta[property="og:site_name"]', "content", SITE_NAME);
    setMeta('meta[property="og:type"]', "content", "website");
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", image);
    setStructuredData(pathname, meta);
  }, [pathname]);

  return null;
}
