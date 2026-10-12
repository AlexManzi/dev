import CenSite from "../../public/cenSite.webp";
import impactReport from "../../public/impactReport.webp";
import districtProfiles from "../../public/districtProfiles.webp";
import energyHub from "../../public/energyHub.webp";
import mangiaAi from "../../public/mangiaAi.webp";
import cloudPlay from "../../public/cloudPlay.webp";
import floodHelp from "../../public/floodHelp.webp";
import bhp from "../../public/bhp.webp";
import downPaymentAssistanceNavigator from "../../public/downPaymentAssistanceNavigator.webp";

export const landingData = {
  intro: {
    leadership:
      "I lead products from architecture through launch, support them in production, and mentor junior engineers.",
    technologies: ["Next.js", "React", "TypeScript", "Claude Code", "Codex", "AWS"],
    title: "Turning complexity into momentum.",
    subtitle:
      "",
    summary:
      "I design and build digital products that move organizations forward by blending product thinking, full‑stack engineering, and applied AI into a process that turns complex ideas into working solutions.",
    stats: [
      { label: "Focus areas", value: "Product, Web, AI" },
      { label: "Primary stack", value: "Claude, Next.js, React, TypeScript, OpenAI, AWS, PostgreSQL" },
      { label: "What I optimize for", value: "Clarity, Speed, Reliability, Accessibility, Maintainability" },
    ],
  },
  filters: ["All", "Recent", "Engineering", "Product", "AI"],
  projects: [
    {
      slug: "down-payment-assistance-navigator",
      name: "Down Payment Assistance Navigator",
      image: downPaymentAssistanceNavigator,
      description:
        "Free tool helping NYC first-time homebuyers find down payment assistance programs.",
      impact:
        "Served over 40,000 NYC users in one year, helping homebuyers find and compare down payment assistance programs.",
      detailSummary:
        "I redesigned the down payment assistance platform, integrated an external API to match homebuyers with programs based on their criteria, and built a comparison tool to help them evaluate options. The platform served over 40,000 users in NYC in one year.",
      detailPoints: [
        "Redesigned the platform to help NYC first-time homebuyers find down payment assistance.",
        "Integrated an external API to match homebuyers with programs based on their criteria.",
        "Built a comparison tool to help homebuyers evaluate program options.",
      ],
      tech: [],
      categories: ["Recent", "Engineering", "Product"],
      year: 2026,
      featured: false,
    },
    {
      slug: "cloudplayplus",
      name: "CloudPlayPlus",
      image: cloudPlay,
      description:
        "CloudPlayPlus is a lightweight Android launcher for Xbox Cloud Gaming, offering sharper visuals via FidelityFX CAS, and a built‑in Discord overlay.",
      impact:
        "Turned cloud gaming into a native, handheld‑friendly experience by replacing the default Xbox Cloud Gaming flow with a fast, purpose‑built Android launcher.",
      detailSummary:
        "I led the product and full-stack build around a core constraint: make AI useful without forcing people into a chatbot-first experience. The work centered on turning meal planning into a structured workflow with recommendations, budget awareness, and personalization built directly into the product.",
      detailPoints: [
        "Integrated AMD FidelityFX CAS to improve stream sharpness without adding overhead or configuration complexity.",
        "Added an optional Discord overlay to keep social presence and voice chat accessible during gameplay.",
        "Designed and implemented the full Android app architecture — UI, input handling, permissions, native integrations, and performance constraints — with a focus on handheld devices.",
      ],
      tech: [
        "Kotlin",
        "Claude Code",
        "OpenAI Codex",
        "Javascript",
        "Gemini Pro",
        "Next.js",
        "React"
      ],
      categories: ["Recent", "AI", "Engineering", "Product"],
      year: 2026,
      featured: true,
      link: "https://alexmanzi.github.io/cloud-play-plus/",
    },
    {
      slug: "mangia-ai",
      name: "Mangia.AI",
      image: mangiaAi,
      description:
        "AI-assisted meal planning product focused on budget-conscious households.",
      impact:
        "Combined planning, personalization, and cost-awareness into a single user flow instead of treating AI as a disconnected chat feature.",
      detailSummary:
        "I led the product and full-stack build around a core constraint: make AI useful without forcing people into a chatbot-first experience. The work centered on turning meal planning into a structured workflow with recommendations, budget awareness, and personalization built directly into the product.",
      detailPoints: [
        "Designed the end-to-end planning flow so users could move from preferences and household needs into usable weekly meal recommendations.",
        "Integrated OpenAI into a controlled product experience rather than leaving users to prompt from scratch.",
        "Built the application architecture across frontend, auth, cloud infrastructure, and data storage to support iterative product development.",
      ],
      tech: [
        "Next.js",
        "React",
        "OpenAI",
        "NextAuth",
        "AWS",
        "DynamoDB",
      ],
      categories: ["Recent", "AI", "Engineering", "Product"],
      year: 2025,
      featured: false,
      link: "https://main.d3u77kxuh2gdz9.amplifyapp.com",
    },
    {
      slug: "bronx-brooklyn-energy-hub",
      name: "Bronx & Brooklyn Energy Hub",
      image: energyHub,
      description:
        "Public-facing energy resource platform helping New Yorkers navigate incentives and clean energy programs.",
      impact:
        "Translated policy-heavy information into a more accessible, action-oriented experience for residents.",
      detailSummary:
        "This work focused on making a complex public resource easier to use for residents who needed clear guidance rather than institutional language. The main challenge was simplifying program information without losing accuracy.",
      detailPoints: [
        "Converted dense policy and eligibility content into clearer user pathways that matched how people actually look for assistance.",
        "Connected the frontend experience to CMS and CRM systems so content operations and lead handling stayed workable for the organization.",
        "Helped shape a more action-oriented experience that reduced friction between information discovery and next steps.",
      ],
      tech: ["React", "JavaScript", "styled-components", "WordPress API", "Salesforce"],
      categories: ["Engineering", "Product"],
      year: 2024,
      featured: false,
      link: "https://bxbkenergyhub.org/en-US/",
    },
    {
      slug: "floodhelpny",
      name: "FloodHelpNY",
      image: floodHelp,
      description:
        "City resource designed to help residents understand flood risk and prepare for emergencies.",
      impact:
        "Rebuilt the flood information platform and modernized maps, reducing annual costs by $21,000.",
      detailSummary:
        "My recent work on FloodHelpNY spans the Next.js rebuild, geospatial infrastructure, and user management. I led the platform rebuild and launched authentication and access control to support a public-facing resource that helps residents understand flood risk and prepare for emergencies.",
      detailPoints: [
        "Migrated maps in two public-facing applications from Carto to Google Maps and deck.gl, serving geospatial assets through Amazon S3 and CloudFront and reducing annual costs by $21,000.",
        "Led the Next.js rebuild, established reusable UI patterns, and migrated the NYC Geoclient integration for address lookups.",
        "Built and launched a user management system, developed its API, and integrated Amazon Cognito and OAuth for authentication and access control.",
      ],
      tech: [
        "Next.js",
        "Claude Code",
        "React",
        "JavaScript",
        "styled-components",
        "Google Maps API",
        "deck.gl",
        "Amazon S3",
        "CloudFront",
        "NYC Geoclient",
        "Amazon Cognito",
        "OAuth"
      ],
      categories: ["Recent", "Engineering", "Product"],
      year: 2026,
      featured: true,
      link: "https://www.floodhelpny.org/",
    },
    {
      slug: "cnycn-main-site",
      name: "CNYCN Main Site",
      image: CenSite,
      description:
        "Main website for the Center for New York City Neighborhoods.",
      impact:
        "Supported a larger organizational web presence with integrated content, search, and service pathways.",
      detailSummary:
        "This project required balancing organizational breadth with usability. The site needed to present many programs, services, and content types while still helping people find the next relevant action quickly.",
      detailPoints: [
        "Helped structure a scalable web platform that could support multiple service pathways and editorial needs.",
        "Integrated content and service systems so the site was not just informative, but operationally useful to the organization.",
        "Focused on clearer search and navigation patterns to support a broad audience with different entry points and goals.",
      ],
      tech: [
        "Next.js",
        "React",
        "JavaScript",
        "styled-components",
        "WordPress API",
        "Salesforce",
      ],
      categories: ["Engineering", "Product"],
      year: 2024,
      featured: false,
      link: "https://cnycn.org/",
    },
    {
      slug: "nyc-district-profiles",
      name: "NYC District Profiles",
      image: districtProfiles,
      description:
        "Neighborhood lookup experience for demographic and economic context.",
      impact:
        "Made location-based data more approachable by pairing address search with clearer presentation of local insights.",
      detailSummary:
        "This work centered on making neighborhood data legible to non-specialist users. The challenge was not only surfacing the right information, but packaging demographic and economic context in a way that felt approachable and useful.",
      detailPoints: [
        "Built the address-driven lookup flow so users could move directly from a location search into district-level context.",
        "Worked on presenting data with stronger hierarchy and framing so the information felt interpretable rather than purely technical.",
        "Integrated mapping and geospatial tools to support a smoother connection between place, search, and local insight.",
      ],
      tech: [
        "Claude Code",
        "React",
        "JavaScript",
        "styled-components",
        "AWS",
        "Google Maps API",
      ],
      categories: ["Recent", "AI", "Engineering", "Product"],
      year: 2026,
      featured: true,
      link: "https://cnycn.org/district-profiles",
    },
    {
      slug: "impact-report",
      name: "Impact Report",
      image: impactReport,
      description:
        "Interactive report showcasing the reach of CNYCN's 2020-2021 work.",
      impact:
        "Presented a large amount of organizational data in a format that felt more compelling than a static report.",
      detailSummary:
        "The goal here was to turn a conventional report into a more engaging digital experience without losing informational depth. The work combined narrative pacing, data presentation, and interaction design.",
      detailPoints: [
        "Helped transform report content into a more interactive format that supported exploration instead of passive reading.",
        "Organized a large volume of information into clearer sections with stronger visual rhythm and structure.",
        "Built the experience to make organizational impact feel more tangible than it would in a static PDF-style presentation.",
      ],
      tech: [
        "Next.js",
        "React",
        "JavaScript",
        "styled-components",
        "Google Maps API",
      ],
      categories: ["Engineering", "Product"],
      year: 2023,
      featured: false,
      link: "https://cnycn.org/impact-report",
    },
    {
      slug: "black-homeownership-project",
      name: "Black Homeownership Project",
      image: bhp,
      description:
        "Story-driven digital experience focused on Black homeownership and generational wealth.",
      impact:
        "Used editorial presentation and product thinking together to support a sensitive, high-context topic.",
      detailSummary:
        "This project required a more editorial product approach. The experience needed to handle a sensitive subject with clarity and respect while still guiding users through substantial context and supporting material.",
      detailPoints: [
        "Worked on a story-forward digital structure that balanced narrative, research, and calls to further engagement.",
        "Used presentation and interaction patterns that supported a high-context topic without making the experience feel dense or inaccessible.",
        "Helped shape a digital experience where content strategy and product execution needed to work closely together.",
      ],
      tech: ["React", "JavaScript", "styled-components", "Salesforce"],
      categories: ["Product"],
      year: 2023,
      featured: false,
      link: "https://bhp.cnycn.org/",
    },
  ],
};
