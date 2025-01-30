"use client"

import React, { useState, useEffect } from "react"
import { LandingOptionWrapper, LandingContentWrapper, SectionText, ProjectSection, ProjectBioArea, ProjectHeading, ProjectDescription, ProjectLink } from "../../globals"
import { landingData } from "@/app/data/landing"
import ProjectCard from "./projectCard"

export default function BrandBuilder() {
    const [cardSelected, setCardSelected] = useState(null);
    const [projectText, setProjectText] = useState(null);

    useEffect(() => {
        setProjectText(landingData.brandProjects[cardSelected])
    }, [cardSelected])

    const renderProjects = landingData.brandProjects.map((project, idx) => {
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
        <LandingOptionWrapper>
            <LandingContentWrapper onClick={() => setCardSelected(null)}>
            <SectionText>As a Software Engineer, I craft unforgettable user experiences for applications that captivate and engage thousands of users</SectionText>
            <ProjectSection id="twoItems">
                {renderProjects}
            </ProjectSection>
            <ProjectBioArea $cardselected={cardSelected}>
                <ProjectHeading $show={projectText}>{projectText ? projectText.name : ''}</ProjectHeading>
                <ProjectDescription $show={projectText}>{projectText ? projectText.description: ''}</ProjectDescription>
                <ProjectDescription $show={projectText}>{projectText ? projectText.tech: ''}</ProjectDescription>
                <ProjectLink  target="_blank" passHref={true} href={projectText ? projectText.link : '/'}  $show={projectText}>{projectText ? 'See this app live' : ''}</ProjectLink>
            </ProjectBioArea>
            </LandingContentWrapper>
        </LandingOptionWrapper>
    )
};