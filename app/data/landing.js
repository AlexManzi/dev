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
            link: "https://cnycn.org/",
            tech: ""
        },
        {
            name: "NYC District Profiles",
            image: districtProfiles,
            description: "Description of District Profiles here",
            link: "https://cnycn.org/district-profiles",
            tech: ""
        },
        {
            name: "Impact Report",
            image: impactReport,
            description: "Description of the Impact Report here",
            link: "https://cnycn.org/impact-report",
            tech: ""
        },
    ],   
    brandProjects: [
        {
            name: "Bronx & Brooklyn Energy Hub",
            image: energyHub,
            description: "Description of the Energy Hub here",
            link: "https://bxbkenergyhub.org/en-US/",
            tech: ""
        },
        {
            name: "FloodHelpNY",
            image: floodHelp,
            description: "Description of Floodhelp here",
            link: "https://www.floodhelpny.org/",
            tech: ""
        },
        {
            name: "Black Homeownership Project",
            image: bhp,
            description: "Description of the Black Homeownership Project",
            link: "https://bhp.cnycn.org/",
            tech: ""
        }
    ],
    aiProjects: [
        {
            name: "Mangia.Ai",
            image: mangiaAi,
            description: "Description of the Energy Hub here",
            link: "",
            tech: ""
        }
    ],
}