import CenSite from "../../public/cenSite.webp";
import impactReport from "../../public/impactReport.webp";
import districtProfiles from "../../public/districtProfiles.webp";
import energyHub from "../../public/energyHub.webp";
import mangiaAi from "../../public/mangiaAi.webp";
import floodHelp from "../../public/floodHelp.webp";
import bhp from "../../public/bhp.webp";

export const landingData = {
  intro: {
    title: "Turning complexity into momentum.",
    subtitle:
      "I design and build digital products that move your business forward.",
    summary:
      "I work across product thinking, fullstack engineering, and applied AI. This site now centers the work itself, surfaces newer projects first, and keeps the project model simple to maintain.",
    stats: [
      { label: "Focus areas", value: "Product, Web, AI" },
      { label: "Primary stack", value: "Next.js, React, OpenAI, AWS" },
      { label: "What I optimize for", value: "Clarity, speed, usability" },
    ],
  },
  filters: ["All", "Recent", "Engineering", "Product", "AI"],
  projects: [
    {
      name: "Mangia.AI",
      image: mangiaAi,
      description:
        "AI-assisted meal planning product focused on budget-conscious households.",
      impact:
        "Combined planning, personalization, and cost-awareness into a single user flow instead of treating AI as a disconnected chat feature.",
      tech: [
        "Next.js",
        "React",
        "OpenAI",
        "NextAuth",
        "AWS",
        "DynamoDB",
      ],
      categories: ["Recent", "Engineering", "Product", "AI"],
      year: 2025,
      featured: true,
      link: "https://main.d3u77kxuh2gdz9.amplifyapp.com",
    },
    {
      name: "Bronx & Brooklyn Energy Hub",
      image: energyHub,
      description:
        "Public-facing energy resource platform helping New Yorkers navigate incentives and clean energy programs.",
      impact:
        "Translated policy-heavy information into a more accessible, action-oriented experience for residents.",
      tech: ["React", "JavaScript", "styled-components", "WordPress API", "Salesforce"],
      categories: ["Recent", "Engineering", "Product"],
      year: 2024,
      featured: true,
      link: "https://bxbkenergyhub.org/en-US/",
    },
    {
      name: "FloodHelpNY",
      image: floodHelp,
      description:
        "City resource designed to help residents understand flood risk and prepare for emergencies.",
      impact:
        "Turned fragmented guidance into a usable digital tool with location-aware information and clearer calls to action.",
      tech: [
        "Ruby on Rails",
        "React",
        "JavaScript",
        "styled-components",
        "Google Maps API",
      ],
      categories: ["Recent", "Engineering", "Product"],
      year: 2024,
      featured: true,
      link: "https://www.floodhelpny.org/",
    },
    {
      name: "CNYCN Main Site",
      image: CenSite,
      description:
        "Main website for the Center for New York City Neighborhoods.",
      impact:
        "Supported a larger organizational web presence with integrated content, search, and service pathways.",
      tech: [
        "Next.js",
        "React",
        "JavaScript",
        "styled-components",
        "WordPress API",
        "Salesforce",
      ],
      categories: ["Engineering", "Product"],
      year: 2023,
      featured: false,
      link: "https://cnycn.org/",
    },
    {
      name: "NYC District Profiles",
      image: districtProfiles,
      description:
        "Neighborhood lookup experience for demographic and economic context.",
      impact:
        "Made location-based data more approachable by pairing address search with clearer presentation of local insights.",
      tech: [
        "React",
        "JavaScript",
        "styled-components",
        "CARTO",
        "Google Maps API",
      ],
      categories: ["Engineering", "Product"],
      year: 2022,
      featured: false,
      link: "https://cnycn.org/district-profiles",
    },
    {
      name: "Impact Report",
      image: impactReport,
      description:
        "Interactive report showcasing the reach of CNYCN's 2020-2021 work.",
      impact:
        "Presented a large amount of organizational data in a format that felt more compelling than a static report.",
      tech: [
        "Next.js",
        "React",
        "JavaScript",
        "styled-components",
        "Google Maps API",
      ],
      categories: ["Engineering", "Product"],
      year: 2022,
      featured: false,
      link: "https://cnycn.org/impact-report",
    },
    {
      name: "Black Homeownership Project",
      image: bhp,
      description:
        "Story-driven digital experience focused on Black homeownership and generational wealth.",
      impact:
        "Used editorial presentation and product thinking together to support a sensitive, high-context topic.",
      tech: ["React", "JavaScript", "styled-components", "Salesforce"],
      categories: ["Product"],
      year: 2021,
      featured: false,
      link: "https://bhp.cnycn.org/",
    },
  ],
};
