"use client"

import React, { useState, useEffect } from "react"
import styled from "styled-components"
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
            <SectionText>Results-driven software engineer with a proven track record of delivering engaging frontend user experiences</SectionText>
            <ProjectSection id="oneItem">
                {renderProjects}
            </ProjectSection>
            <ProjectBioArea>
                <ProjectHeading $show={projectText}>{projectText ? projectText.name : ''}</ProjectHeading>
                <ProjectDescription>{projectText ? projectText.description: ''}</ProjectDescription>
                <ProjectLink  passHref={true} href={projectText ? projectText.link : '/'}  $show={projectText}>{projectText ? 'See this app live' : ''}</ProjectLink>
            </ProjectBioArea>
            </LandingContentWrapper>
        </LandingOptionWrapper>
    )
};