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
            description: "Description of the center site here",
            link: "https://cnycn.org/"
        },
        {
            name: "NYC District Profiles",
            image: districtProfiles,
            description: "Description of District Profiles here",
            link: "https://cnycn.org/district-profiles"
        },
        {
            name: "Impact Report",
            image: impactReport,
            description: "Description of the Impact Report here",
            link: "https://cnycn.org/impact-report"
        },
    ],   
    brandProjects: [
        {
            name: "Bronx & Brooklyn Energy Hub",
            image: energyHub,
            description: "Description of the Energy Hub here",
            link: "https://bxbkenergyhub.org/en-US/"
        },
        {
            name: "FloodHelpNY",
            image: floodHelp,
            description: "Description of Floodhelp here",
            link: "https://www.floodhelpny.org/"
        },
        {
            name: "Black Homeownership Project",
            image: bhp,
            description: "Description of the Black Homeownership Project",
            link: "https://bhp.cnycn.org/"
        }
    ],
    aiProjects: [
        {
            name: "Mangia.Ai",
            image: mangiaAi,
            description: "Description of the Energy Hub here",
            link: ""
        }
    ],
}