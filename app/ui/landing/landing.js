"use client"

import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Typewriter from "typewriter-effect"
import { SelfDiv, SelfItem, ContentWrapper, AssessmentContainer, SectionListWrapper, SectionListItem } from "../globals"
import AiExpert from "./landingOptions/aiExpert"
import BrandBuilder from "./landingOptions/brandBuilder"
import Engineer from "./landingOptions/engineer"
import { Outfit } from '@next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

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
        height: 45vh;
        padding: 0;
        justify-content: center;
    }
`;

const LandingHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 110%;

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

    @media (max-width: 1200px) {
        font-size: 1.75rem;
    }

    @media (max-width: 1020px) {
        font-size: 1.65rem;
    }

    @media (max-width: 965px) {
        font-size: 1.6rem;
    }

    @media (max-width: 950px) {
         font-size: 2rem;
    }

    @media (max-width: 500px) {
         font-size: 1.65rem;
         padding-right: .45rem;
    }

    @media (max-width: 395px) {
         font-size: 1.5rem;
         padding-right: .4rem;
    }

    @media (max-width: 366px) {
         font-size: 1.25rem;
         padding-right: .37rem;

    }
`;



export default function Landing() {
    const selfItemArray = ["Brand Builder", "Fullstack Engineer", "AI Expert"];
    const [activeOption, setActiveOption] = useState(selfItemArray[1]);
    const [displayPanel, setDisplayPanel] = useState(false);
    const [displayAllOptions, setDisplayAllOptions] = useState(false);

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
        "Fullstack Engineer": <Engineer />,
        "AI Expert": <AiExpert />
    };

    //Build user experiences, launch brands, and I blank

    console.log(activeOption)

    return (
        <ContentWrapper className={outfit.className}>
            <LandingContentWrapper>
            <LandingHeaderWrapper>
                <LandingHeaderText>Alex is a</LandingHeaderText>
                <SelfDiv $active={activeOption}>
                    {renderSelfItems}
                </SelfDiv>
            </LandingHeaderWrapper>
            <SectionListWrapper $active={activeOption} $display={displayAllOptions}>
                    <SectionListItem $display={displayAllOptions}>React - Next.js - JavaScript - CSS -  OpenAI</SectionListItem>
            </SectionListWrapper>
            </LandingContentWrapper>
            <AssessmentContainer $displayPanel={displayPanel}>
                {displayDictionary[activeOption]}
            </AssessmentContainer>
        </ContentWrapper>
    )
};