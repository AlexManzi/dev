import styled, { keyframes, css } from "styled-components";
import Image from "next/image";
import Link from "next/link";

const fadeIn = keyframes` 
    from { opacity: 0; } 
    to { opacity: 1; } 
`;

const borderBottomAnimation = keyframes`
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
`;

const fadeInSlideDown = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    height: auto;
    min-height: 700px;
    width: 100%;
    background-color: white;

    @media (max-width: 950px) {
        flex-direction: column;
        min-height: 100vh;
    }
`;

export const SelfItem = styled.h1`
    display: ${(props) => !props.$displayAllOptions && props.$ego === "Brand Builder" || !props.$displayAllOptions && props.$ego === "AI Expert" ? 'none' : 'flex'};
    color: ${(props) => props.$ego === props.$active ? 'rgba(0,0,0, 1)' : 'rgba(0,0,0, .3)'};
    cursor: pointer;
    width: max-content;
    transition: ${(props) => !props.$displayAllOptions ? 'all .2s ease' : 'all .2s ease'};
    animation: ${(props) => props.$ego === "Fullstack Engineer" ? '' : css`${fadeIn} .3s ease-in`};

    &:hover {
        color: ${(props) => props.$ego === props.$active ? '' : 'rgb(26,135,251)'};
    }

    @media (max-width: 1200px) {
        font-size: calc(100vw / 42);
    }

    @media (max-width: 950px) {
         font-size: 2rem;
    }

    @media (max-width: 500px) {
         font-size: 1.65rem;
    }
`;

export const SectionListWrapper = styled.div`
    display: flex;
    padding-left: 1.5rem;
    margin-top: 3rem;
    display: flex;
    width: 100%;
    justify-content: center;
    color: black;

    @media (max-width: 950px) {
        width: 100%;
        padding-left: 0;
        justify-content: center;
    }
`;

export const SectionListItem = styled.h2`
    font-size: 1.1rem;
    color: ${(props) => props.$display ? "black" : "white"};
    transition: all .3s ease;
    user-select: ${(props) => props.$display ? 'auto' : 'none'};
    
    @media (max-width: 1200px) {
        font-size: calc(100vw / 60);
    }

    @media (max-width: 950px) {
        font-size: 1rem;
    }
`;

export const AssessmentContainer = styled.div`
    display: ${(props) => props.$displayPanel ? 'flex' : 'none'};
    height: 100%;
    width: 70%;
    animation: ${fadeIn} .5s ease-in;

    @media (max-width: 950px) {
        width: 100%;
        height: auto;
    }
`;

export const SectionText = styled.h2`
    padding: 0 2rem;
    font-size: 1.5rem;

    @media (max-width: 1200px) {
        font-size: calc(100vw / 46);
    }

    @media (max-width: 950px) { 
        font-size: 1.2rem;    
    }
`;

export const LandingOptionWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    color: black;
    min-height: 700px;

    @media (max-width: 950px) {
        //  padding-top: 5rem;
    }
`;

export const LandingContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    aling-items: center;
    position: absolute;
    top: 20%;
    height: auto;

    @media (max-width: 950px) {
        position: relative;
        top: 0;
        padding: 2rem 0;
    }
`;

export const ProjectSection = styled.div`
    width: 100%;
    display: flex;
    height: auto;
    padding: 1.5rem 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    justify-content: space-between;

    @media (max-width: 950px) {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
`;

export const ProjectItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.$isselected ? '85%' : '32.5%'};
    height: ${(props) => props.$isselected ? '100%' : 'auto'};
    position: relative;
    transition: ease .2s all;
    animation: ${fadeIn} .5s ease-in;

    &#oneCard {
        width: ${(props) => props.$isselected ? '58%' : '32.5%'};
    }

     @media (max-width: 950px) {
        width: 100%;
        height: auto;
    }
`;

export const ProjectItemFilter = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, 0);
    z-index: 20;
    width: 100%;
    min-height: 110px;
    height: 10%;
    cursor: pointer;
    transition: background-color .2s ease;

    &.smallIcon {
        height: ${(props) => props.$isselected ? '100%' : '15vh'};
    }
   
    &:hover {
        background-color: rgba(0,0,0, .2);
    }

    @media (max-width: 950px) {
        width: 100%;

        &.smallIcon {
            height: 100%;
        }

        &:hover {
            background-color: rgba(0,0,0, 0);
        }
    }

`;

export const ProjectBioArea = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    gap: .75rem;

    @media (max-width: 950px) {
        display: none;
    }
`;

export const ProjectBioAreaMobile = styled.div`
    display: none;

    @media (max-width: 950px) {
        display: ${(props) => props.$cardselected ? 'flex' : 'none'};
        flex-direction: column;
        padding: 2rem 0;
        color: black;
    }
`;

export const ProjectHeading = styled.h2`
    display: flex;
    margin: 0;
`;

export const ProjectDescription = styled.p`
`;

export const ProjectImage = styled(Image)`
    width: 100%;
    height: ${(props) => props.$isselected ? '100%' : 'auto'};
    min-height: 110px;
    // max-height: 240px;

    &.smallIcon {
        width: ${(props) => props.$isselected ? '100%' : ''};
        height: ${(props) => props.$isselected ? '100%' : '15vh'};
    }

    @media (max-width: 950px) {
        width: 100%;
        height: auto;

        &.smallIcon {
            width: 100%;
            height: 100%;
        }
    }
`;

export const ProjectLink = styled(Link)`
    font-size: 1.1rem;
    display: ${(props) => props.$show ? 'flex' : 'none'};
    justify-content: start;
    align-items: center;
    width: max-content;
    padding-bottom: .2rem;
    position: relative;
    color: black;
    font-weight: 700;
    cursor: pointer;
    z-index: 20;
    -webkit-transition: ease-out 0.3s;
    -moz-transition: ease-out 0.3s;
    transition: all 0.3s ease;
    ${props => props.$show && css` animation: ${fadeIn} .5s ease-in-out; `};

    &:hover {
        color: rgb(26,135,251);
    }

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        width: 100%;
        background-color: black;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        width: 0;
        background-color: rgb(26,135,251);
        transition: width 0.3s ease-out;
    }

    &:hover::after {
        width: 100%;
    }
`;


