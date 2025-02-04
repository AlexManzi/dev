"use client"

import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { SelfDiv, SelfItem, ContentWrapper,  SelfItemsWrapper, AssessmentContainer, SectionListWrapper, SectionListItem } from "../globals"
import AiExpert from "./landingOptions/aiExpert"
import BrandBuilder from "./landingOptions/brandBuilder"
import Engineer from "./landingOptions/engineer"
import localFont from 'next/font/local';

const outfit = localFont({ src: '../../font/Outfit-VariableFont_wght.ttf'})

const LandingContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: start;
    justify-content: center;
    width: max-content;
    padding: 0 2rem;
    height: 100vh;
    min-height: 300px;

    @media (max-width: 950px) {
        width: 100%;
        height: 50vh;
        padding: 0;
        justify-content: center;
    }
`;

const LandingHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 110%;
    height: 200px;
    position: relative;

    @media (max-width: 950px) {
        width: 100%;
        padding: 0 2rem;
        padding-top: 2rem;
    }
`;

const LandingHeaderText = styled.h1`
    font-size: 2rem;
    color: black;
    padding-right: .5rem;

    &.hidden {
        opacity: 0;
    }

    @media (max-width: 1200px) {
        font-size: 1.7rem;
    }

    @media (max-width: 1030px) {
        font-size: 1.6rem;
        padding-right: .45rem;
    }

    @media (max-width: 975px) {
        font-size: 1.54rem;
    }

    @media (max-width: 950px) {
         font-size: 2rem;
    }

    @media (max-width: 600px) {
         font-size: 1.7rem;
        padding-right: .425rem;
    }

    @media (max-width: 500px) {
         font-size: 1.5rem;
         padding-right: .4rem;
    }

    @media (max-width: 395px) {
         font-size: 1.45rem;
         padding-right: .375rem;
    }

    @media (max-width: 366px) {
         font-size: 1.25rem;
         padding-right: .37rem;

    }
`;

const HeaderTextWrapper = styled.div`
      height: 55%;
`;

export default function Landing() {
    const selfItemArray = ["Brand Builder", "Fullstack Engineer", "AI Expert"];
    const [activeOption, setActiveOption] = useState(selfItemArray[1]);
    const [displayPanel, setDisplayPanel] = useState(false);
    const [displayAllOptions, setDisplayAllOptions] = useState(false);
    const [allowCssEffect, setAllowCssEffect] = useState(false);

    useEffect(() => {
        const timerOne = setTimeout(() => {
            setDisplayPanel(true)
        }, 1600)

        const timerTwo = setTimeout(() => {
            setDisplayAllOptions(true)
        }, 3400)

        const timerTwoPartTwo = setTimeout(() => {
            setAllowCssEffect(true)
        }, 3405)

        return () => {
            clearTimeout(timerOne)
            clearTimeout(timerTwo)
            clearTimeout(timerTwoPartTwo)

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
        "Fullstack Engineer": <Engineer />,
        "AI Expert": <AiExpert />
    };

    //Build user experiences, launch brands, and I blank

    return (
        <ContentWrapper className={outfit.className}>
            <LandingContentWrapper>
            <LandingHeaderWrapper>
                <HeaderTextWrapper>
                <LandingHeaderText className="hidden">Alex is a</LandingHeaderText>
                <LandingHeaderText>Alex is a</LandingHeaderText>
                <LandingHeaderText className="hidden">Alex is a</LandingHeaderText>
                </HeaderTextWrapper>
                <SelfItemsWrapper $active={activeOption} $display={displayAllOptions} $allowCssEffect={allowCssEffect}>
                <SelfDiv>
                    {renderSelfItems}
                </SelfDiv>
                </SelfItemsWrapper>
            </LandingHeaderWrapper>
            <SectionListWrapper $active={activeOption} $display={displayAllOptions}>
                    <SectionListItem $display={displayAllOptions}>React - Next.js - JavaScript - CSS -  OpenAI - Carto - AWS</SectionListItem>
            </SectionListWrapper>
            </LandingContentWrapper>
            <AssessmentContainer $displayPanel={displayPanel}>
                {displayDictionary[activeOption]}
            </AssessmentContainer>
        </ContentWrapper>
    )
};