"use client"

import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { LandingOptionWrapper, LandingContentWrapper, ProjectSection, ProjectBioArea, ProjectHeading, ProjectDescription, ProjectLink } from "../../globals"
import { landingData } from "@/app/data/landing"
import ProjectCard from "./projectCard"

const SectionText = styled.h2`
    padding: 0 2rem;
`;

const SectionListWrapper = styled.div`
      padding: 0 2rem;
      position: absolute;
      width: 40%;
      bottom: 2rem;
`;

const SectionListHeading = styled.p`
    padding-top: 1rem;
    font-size: 1.25rem;
    padding-bottom: 2px;
    border-bottom: 2px solid black;
    width: max-content;
`;

const SectionListItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 70px;
    overflow-y: auto; 
    max-height: 100%; 
    padding: .5rem 0;
`;

const SectionListItem = styled.p`
    font-size: 1.1rem;
    width: 100px;
`;

export default function Engineer() {
    const [cardSelected, setCardSelected] = useState(null);
    const [projectText, setProjectText] = useState(null);

    const skills = ["React", "Next.js", "JavaScript", "CSS", "i18n", "DynamoDB", "Ruby on Rails", "HTML", "Restful APIs"];

    const renderSkills = skills.map((skill, idx) => {
        return (
            <SectionListItem key={idx}>{skill}</SectionListItem>
        )
    });

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

    useEffect(() => {
        setProjectText(landingData.engineerProjects[cardSelected])
    }, [cardSelected])

    return (
        <LandingOptionWrapper>
            <LandingContentWrapper>
            <SectionText>I'm a results-driven software engineer with a proven track record of delivering engaging frontend user experiences</SectionText>
            <ProjectSection>
                {renderProjects}
            </ProjectSection>
            <ProjectBioArea>
                <ProjectHeading>{projectText ? projectText.name : ''}</ProjectHeading>
                <ProjectDescription>{projectText ? projectText.description: ''}</ProjectDescription>
                <ProjectLink href="google.com">{projectText ? 'See this app live here' : ''}</ProjectLink>
            </ProjectBioArea>
            <SectionListWrapper>
                <SectionListHeading></SectionListHeading>
                <SectionListItemWrapper>
                    {renderSkills}
                </SectionListItemWrapper>
            </SectionListWrapper>
            </LandingContentWrapper>
        </LandingOptionWrapper>
    )
};