"use client"

import React from "react"
import styled from "styled-components"
import { LandingOptionWrapper } from "../../globals"

const SectionText = styled.h2`
    padding: 0 2rem;
`;

const SectionListWrapper = styled.div`
      padding: 0 2rem;
`;

const SectionListHeading = styled.h2`
`;

const SectionListItemWrapper = styled.div`
`;

const SectionListItem = styled.p`
`;


export default function Engineer() {

    const skills = ["React", "Next.js", "JavaScript", "CSS", "i18n", "DynamoDB", "Ruby on Rails", "HTML", "Restful APIs"];

    const renderSkills = skills.map((skill, idx) => {
        return (
            <SectionListItem key={idx}>{skill}</SectionListItem>
        )
    });

    return (
        <LandingOptionWrapper>
            <SectionText>I'm a dynamic and results-driven software engineer with a proven track record of delivering engaging frontend user experiences.</SectionText>
            <SectionListWrapper>
                <SectionListHeading>Skills</SectionListHeading>
                <SectionListItemWrapper>
                    {renderSkills}
                </SectionListItemWrapper>
            </SectionListWrapper>
        </LandingOptionWrapper>
    )
};