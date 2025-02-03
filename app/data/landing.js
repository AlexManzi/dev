import CenSite from "../../public/cenSite.webp"
import impactReport from "../../public/impactReport.webp"
import districtProfiles from "../../public/districtProfiles.webp"
import energyHub from "../../public/energyHub.webp"
import mangiaAi from "../../public/mangiaAi.webp"
import floodHelp from "../../public/floodHelp.webp"
import bhp from "../../public/bhp.webp"


export const landingData = {
    quickBlurb: ["", "Project Lead", ""],
    engineerProjects: [
        {
            name: "CNYCN Site",
            image: CenSite,
            description: "Center for New York City Neighborhoods' main website",
            tech: "Fullstack Next.js app built with React, Javascript, styled-components, Google Maps + Places API, Wordpress API, and Salesforce",
            link: "https://cnycn.org/",
        },
        {
            name: "NYC District Profiles",
            image: districtProfiles,
            description: "Enter or select your address to get demographic and economic information about your neighborhood",
            tech: "Fullstack Microsite built with React, Javascript, styled-components, and Google Maps + Places API",
            link: "https://cnycn.org/district-profiles",
        },
        {
            name: "Impact Report",
            image: impactReport,
            description: "Impact Report of the reach of the Center New York City Neighborhoods' work in 2020-2021",
            tech: "Fullstack Next.js app built with React, Javascript, styled-components, and Google Maps + Places API",
            link: "https://cnycn.org/impact-report",
        },
    ],   
    brandProjects: [
        {
            name: "Bronx & Brooklyn Energy Hub",
            image: energyHub,
            description: "New York State led resource for connecting New Yorker to the green energy revolution",
            tech: "React app built with Javascipt, styled-components, Wordpress API, and Salesforce",
            link: "https://bxbkenergyhub.org/en-US/",
        },
        {
            name: "FloodHelpNY",
            image: floodHelp,
            description: "New York City led resource to help New Yorkers understand and respond to the growing flood risk",
            link: "https://www.floodhelpny.org/",
            tech: "Fullstack Ruby on Rails app built with Rails, React, Javascript, styled-components, and Google Maps + Places API"
        },
        {
            name: "Black Homeownership Project",
            image: bhp,
            description: "The Black Homeownership Project recognizes that generational wealth is under threat. We talked to Black homeowners across the City about how to change that.",
            link: "https://bhp.cnycn.org/",
            tech: "React app built with Javascript, styled-components, and Salesforce"
        }
    ],
    aiProjects: [
        {
            name: "Mangia.Ai",
            image: mangiaAi,
            description: "Meal planning and money saving AI companion.",
            link: "https://main.d3u77kxuh2gdz9.amplifyapp.com",
            tech: "Fullstack Next.js app connected to OpenAI built with React, Javascipt, Next-Auth, styled-components, AWS, and DynamoDB"
        }
    ],
}