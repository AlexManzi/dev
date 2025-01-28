"use client"

import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Typewriter from "typewriter-effect"
import { SelfItem, ContentWrapper, AssessmentContainer, SectionListWrapper, SectionListItem } from "../globals"
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
    align-items: start;
    justify-content: center;
    width: max-content;
    // background-color: red;
    padding: 0 2rem;
    height: 100vh;

    @media (max-width: 950px) {
        width: 100%;
        padding: 0;
    }
`;

const LandingHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    // background-color: blue;
    width: 110%;

    @media (max-width: 950px) {
        width: 100%;
        // height: 50vh;
        justify-content: center;
        align-items: center;
    }
`;

const LandingHeaderText = styled.h1`
    font-size: 2rem;
    color: black;
    padding-right: .5rem;

    @media (max-width: 1200px) {
        font-size: calc(100vw / 42);
    }

    @media (max-width: 950px) {
         font-size: 1.5rem;
    }
`;

const SelfDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${(props) => {
    if (props.$active === "Brand Builder") return '5.1rem';
    if (props.$active === "AI Expert") return '-5rem';
    return '0';
    }};
    transition: all .25s ease;
    // background-color: blue;
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

    return (
        <ContentWrapper className={outfit.className}>
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