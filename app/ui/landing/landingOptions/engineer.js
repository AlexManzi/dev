"use client"

import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { LandingOptionWrapper, LandingContentWrapper, SectionText, ProjectSection, ProjectBioArea, ProjectHeading, ProjectDescription, ProjectLink } from "../../globals"
import { landingData } from "@/app/data/landing"
import ProjectCard from "./projectCard"

const SectionListWrapper = styled.div`
      padding: 0 2rem;
      position: absolute;
      width: 60%;
      bottom: 2rem;
`;

const SectionListHeading = styled.h2`
    padding-top: 1rem;
    font-size: 1.25rem;
    padding-bottom: 2px;
    border-bottom: 2px solid black;
    width: max-content;
`;

const SectionListItemWrapper = styled.div`
    display: flex;
    height: 70px;
    overflow-y: auto; 
    max-height: 100%; 
    padding: .5rem 0;
`;

const SectionListItem = styled.p`
    font-size: 1.1rem;
    width: max-content;
`;

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
        <LandingOptionWrapper>
            <LandingContentWrapper onClick={() => setCardSelected(null)}>
            <SectionText>Results-driven software engineer with a proven track record of delivering engaging frontend user experiences</SectionText>
            <ProjectSection>
                {renderProjects}
            </ProjectSection>
            <ProjectBioArea>
                <ProjectHeading $show={projectText}>{projectText ? projectText.name : ''}</ProjectHeading>
                <ProjectDescription>{projectText ? projectText.description: ''}</ProjectDescription>
                <ProjectLink  target="_blank" passHref={true} href={projectText ? projectText.link : '/'}  $show={projectText}>{projectText ? 'See this app live' : ''}</ProjectLink>
            </ProjectBioArea>
            <SectionListWrapper>
                <SectionListHeading>My Tech Stack</SectionListHeading>
                <SectionListItemWrapper>
                <SectionListItem>React, Next.js, JavaScript, CSS, AWS, OpenAi, i18n, DynamoDB, GoogleCloud, Rails, HTML, Restful APIs</SectionListItem>
                </SectionListItemWrapper>
            </SectionListWrapper>
            </LandingContentWrapper>
        </LandingOptionWrapper>
    )
};