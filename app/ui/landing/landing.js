"use client"

import React, { useState,  } from "react"
import styled from "styled-components"
import Typewriter from "typewriter-effect"
import { ContentWrapper } from "../globals"
import AiExpert from "./landingOptions/aiExpert"
import BrandBuilder from "./landingOptions/brandBuilder"
import Engineer from "./landingOptions/engineer"

const LandingContentWrapper = styled.div`
    display: flex;
`;

const LandingHeaderWrapper = styled.div`
    display: flex;
    align-items: center;

`;
const LandingHeaderText = styled.h1`
    font-size: 2rem;
    color: black;
    padding-left: 3rem;
    padding-right: .6rem;
`;

const SelfDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${(props) => props.$active === "Brand Builder" ? '4.75rem' : '0'};
    margin-bottom: ${(props) => props.$active === "AI Expert" ? '4.5rem' : '0'}; 
    transition: all .25s ease;
`;

const SelfItem = styled.h1`
    color: ${(props) => props.$ego === props.$active ? 'rgba(0,0,0, 1)' : 'rgba(0,0,0, .3)'};
    cursor: pointer;
    width: max-content;
    transition: all .25s ease;
`;

const AssessmentContainer = styled.div`
    height: 100%;
    width: 65%;
    background-color: red;
`;


export default function Landing() {
    const selfItemArray = ["Brand Builder", "Frontend Engineer", "AI Expert"];
    const [activeOption, setActiveOption] = useState(selfItemArray[1]);

    const renderSelfItems = selfItemArray.map((item, idx) => {
        return (
            <SelfItem 
                onClick={() => setActiveOption(selfItemArray[idx])} 
                key={idx} 
                $ego={selfItemArray[idx]} 
                $active={activeOption}
            >{item}</SelfItem>
        )
    });

    const displayDictionary = {
        "Brand Builder": <BrandBuilder />,
        "Frontend Engineer": <Engineer />,
        "AI Expert": <AiExpert />
    };

    //Build user experiences, launch brands, and I blank

    return (
        <ContentWrapper>
            <LandingHeaderWrapper>
                <LandingHeaderText>Alex is a</LandingHeaderText>
                <SelfDiv $active={activeOption}>
                    {renderSelfItems}
                </SelfDiv>
            </LandingHeaderWrapper>
            <AssessmentContainer>
                {displayDictionary[activeOption]}
            </AssessmentContainer>
        </ContentWrapper>
    )
};