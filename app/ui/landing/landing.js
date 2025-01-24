"use client"

import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Typewriter from "typewriter-effect"
import { SelfItem, ContentWrapper, AssessmentContainer, SectionListWrapper, SectionListItem } from "../globals"
import AiExpert from "./landingOptions/aiExpert"
import BrandBuilder from "./landingOptions/brandBuilder"
import Engineer from "./landingOptions/engineer"

const LandingContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

export default function Landing() {
    const selfItemArray = ["Brand Builder", "FullStack Engineer", "AI Expert"];
    const [activeOption, setActiveOption] = useState(selfItemArray[1]);
    const [displayPanel, setDisplayPanel] = useState(false);
    const [displayAllOptions, setDisplayAllOptions] = useState(false);

    const [showImgOne, setShowImgOne] = useState(false);
    const [showImgTwo, setShowImgTwo] = useState(false);
    const [showImgThree, setShowImgThree] = useState(false);

    useEffect(() => {
        const timerOne = setTimeout(() => {
            setDisplayPanel(true)
        }, 1600)

        const timerTwo = setTimeout(() => {
            setDisplayAllOptions(true)
        }, 3400)

        return () => {
            clearTimeout(timerOne)
            clearTimeout(timerTwo)
        }
    }, []);

    const renderSelfItems = selfItemArray.map((item, idx) => {
        return (
            <SelfItem 
                onClick={() => setActiveOption(selfItemArray[idx])} 
                key={idx} 
                $ego={selfItemArray[idx]} 
                $active={activeOption}
                $displayAllOptions={displayAllOptions}
            >{item}</SelfItem>
        )
    });

    const displayDictionary = {
        "Brand Builder": <BrandBuilder />,
        "FullStack Engineer": <Engineer />,
        "AI Expert": <AiExpert />
    };

    //Build user experiences, launch brands, and I blank

    console.log(displayAllOptions)

    return (
        <ContentWrapper>
            <LandingContentWrapper>
            <LandingHeaderWrapper>
                <LandingHeaderText>Alex is a</LandingHeaderText>
                <SelfDiv $active={activeOption}>
                    {renderSelfItems}
                </SelfDiv>
            </LandingHeaderWrapper>
            <SectionListWrapper $display={displayAllOptions}>
                    <SectionListItem $display={displayAllOptions}>React - Next.js - JavaScript - CSS -  OpenAI</SectionListItem>
            </SectionListWrapper>
            </LandingContentWrapper>
            <AssessmentContainer $displayPanel={displayPanel}>
                {displayDictionary[activeOption]}
            </AssessmentContainer>
            
        </ContentWrapper>
    )
};