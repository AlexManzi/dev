import CenSite from "../../public/cenSite.webp"
import impactReport from "../../public/impactReport.webp"
import districtProfiles from "../../public/districtProfiles.webp"
import energyHub from "../../public/energyHub.webp"
import mangiaAi from "../../public/mangiaAi.webp"

export const landingData = {
    quickBlurb: ["", "Project Lead", ""],
    engineerProjects: [
        {
            name: "CNYCN Site",
            image: CenSite,
            description: "Description of the center site here",
            link: "cnycn.org"
        },
        {
            name: "NYC District Profiles",
            image: districtProfiles,
            description: "Description of District Profiles here",
            link: "cnycn.org"
        },
        {
            name: "Impact Report",
            image: impactReport,
            description: "Description of the Impact Report here",
            link: "cnycn.org"
        },
    ],   
    brandProjects: [
        {
            name: "Bronx & Brooklyn Energy Hub",
            image: energyHub,
            description: "Description of the Energy Hub here",
            link: ""
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