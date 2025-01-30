"use client"

import React, { useState, useEffect } from "react"
import { LandingOptionWrapper, LandingContentWrapper, SectionText, ProjectSection, ProjectBioArea, ProjectHeading, ProjectDescription, ProjectLink } from "../../globals"
import { landingData } from "@/app/data/landing"
import ProjectCard from "./projectCard"

export default function AiExpert() {
    const [cardSelected, setCardSelected] = useState(null);
    const [projectText, setProjectText] = useState(null);
    const oneCard = true;

    useEffect(() => {
        setProjectText(landingData.aiProjects[cardSelected])
    }, [cardSelected])

    const renderProjects = landingData.aiProjects.map((project, idx) => {
        return (
            <ProjectCard
                idx={idx}
                setCardSelected={setCardSelected}
                cardSelected={cardSelected}
                project={project}
                key={idx}
                oneCard={oneCard}
            />
        )
    });

    return (
        <LandingOptionWrapper>
            <LandingContentWrapper onClick={() => setCardSelected(null)}>
            <SectionText>developer passionate about leveraging cutting-edge technology, I specialize in harnessing the power of AI to create innovative and impactful applications</SectionText>
            <ProjectSection id="oneItem">
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