"use client"

import React, { useState, useEffect } from "react"
import { LandingOptionWrapper, LandingContentWrapper, SectionText, ProjectSection, ProjectBioArea, ProjectHeading, ProjectDescription, ProjectLink } from "../../globals"
import { landingData } from "@/app/data/landing"
import ProjectCard from "./projectCard"

export default function Engineer() {
    const [cardSelected, setCardSelected] = useState(null);
    const [projectText, setProjectText] = useState(null);

    useEffect(() => {
        setProjectText(landingData.engineerProjects[cardSelected])
    }, [cardSelected])

    const renderProjects = landingData.engineerProjects.map((project, idx) => {
        return (
            <ProjectCard
                idx={idx}
                setCardSelected={setCardSelected}
                cardSelected={cardSelected}
                project={project}
                key={idx}
            />
        )
    });

    return (
        <LandingOptionWrapper onClick={() => setCardSelected(null)}>
            <LandingContentWrapper>
            <SectionText>Results-driven Software Engineer passionate about pushing the boundaries of technology to deliver innovative solutions that excite and delight users</SectionText>
            <ProjectSection>
                {renderProjects}
            </ProjectSection>
            <ProjectBioArea $cardselected={cardSelected}>
                <ProjectHeading $show={projectText}>{projectText ? projectText.name : ''}</ProjectHeading>
                <ProjectDescription $show={projectText}>{projectText ? projectText.description: ''}</ProjectDescription>
                <ProjectLink target="_blank" passHref={true} href={projectText ? projectText.link : '/'}  $show={projectText}>{projectText ? 'See this app live' : ''}</ProjectLink>
            </ProjectBioArea>
            </LandingContentWrapper>
        </LandingOptionWrapper>
    )
};