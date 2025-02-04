import styled, { keyframes, css } from "styled-components";
import Image from "next/image";
import Link from "next/link";

const fadeIn = keyframes` 
    from { opacity: 0; } 
    to { opacity: 1; } 
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

export const SelfDiv = styled.div`
    display: grid;
    transition: all .25s ease;
`;

export const SelfItemsWrapper = styled.div`
        height: ${(props) => {
        if (props.$active === "Brand Builder") return '14%';
        if (props.$active === "AI Expert") return '95%';
        return !props.$display && props.$active === "Fullstack Engineer" ? '14%' : '55%';
        }};

    transition: ${(props) => {
        if (props.$active === "Brand Builder") return 'all .25s ease';
        if (props.$active === "AI Expert") return 'all .25s ease';
        return props.$allowCssEffect && props.$active === "Fullstack Engineer" ? 'all .25s ease' : '';
        }};

        @media (max-width: 1200px) {
            height: ${(props) => {
            if (props.$active === "Brand Builder") return '21%';
            if (props.$active === "AI Expert") return '89%';
            return !props.$display && props.$active === "Fullstack Engineer" ? '20.5%' : '55%';
            }};
        }

        @media (max-width: 1030px) {
            height: ${(props) => {
            if (props.$active === "Brand Builder") return '23%';
            if (props.$active === "AI Expert") return '87%';
            return !props.$display && props.$active === "Fullstack Engineer" ? '23%' : '55%';
            }};
        }
        
        @media (max-width: 975px) {
            height: ${(props) => {
            if (props.$active === "Brand Builder") return '24%';
            if (props.$active === "AI Expert") return '86%';
            return !props.$display && props.$active === "Fullstack Engineer" ? '24%' : '55%';
            }};
        }

        @media (max-width: 950px) {
            height: ${(props) => {
            if (props.$active === "Brand Builder") return '7%';
            if (props.$active === "AI Expert") return '103%';
            return !props.$display && props.$active === "Fullstack Engineer" ? '7%' : '55%';
            }};
        }

        @media (max-width: 600px) {
         height: ${(props) => {
        if (props.$active === "Brand Builder") return '14%';
        if (props.$active === "AI Expert") return '95.5%';
        return !props.$display && props.$active === "Fullstack Engineer" ? '14.5%' : '55%';
        }};
        }

     @media (max-width: 500px) {
        height: ${(props) => {
        if (props.$active === "Brand Builder") return '18%';
        if (props.$active === "AI Expert") return '92%';
        return !props.$display && props.$active === "Fullstack Engineer" ? '18%' : '55%';
        }};
    }

    @media (max-width: 395px) {
        height: ${(props) => {
            if (props.$active === "Brand Builder") return '18%';
            if (props.$active === "AI Expert") return '92%';
            return !props.$display && props.$active === "Fullstack Engineer" ? '18%' : '55%';
        }};
    }

    @media (max-width: 366px) {
        height: ${(props) => {
            if (props.$active === "Brand Builder") return '25.5%';
            if (props.$active === "AI Expert") return '85%';
            return !props.$display && props.$active === "Fullstack Engineer" ? '25.5%' : '55%';
        }};
    }
`;

export const SelfItem = styled.h1`
    display: ${(props) => !props.$displayAllOptions && props.$ego === "Brand Builder" || !props.$displayAllOptions && props.$ego === "AI Expert" ? 'none' : 'flex'};
    color: ${(props) => props.$ego === props.$active ? 'rgba(0,0,0, 1)' : '#B2B2B2'};
    cursor: pointer;
    width: max-content;
    transition: ${(props) => !props.$displayAllOptions ? 'all .2s ease' : 'all .2s ease'};
    animation: ${(props) => props.$ego === "Fullstack Engineer" ? '' : css`${fadeIn} .3s ease-in`};

    &:hover {
        color: ${(props) => props.$ego === props.$active ? '' : 'rgb(26,135,251)'};
    }

    @media (max-width: 1200px) {
        font-size: 1.7rem;
    }

    @media (max-width: 1030px) {
        font-size: 1.6rem;
    }
    
    @media (max-width: 975px) {
        font-size: 1.54rem;
    }

    @media (max-width: 950px) {
         font-size: 2rem;
    }

    @media (max-width: 600px) {
         font-size: 1.7rem;
    }

    @media (max-width: 500px) {
         font-size: 1.5rem;
    }

    @media (max-width: 395px) {
         font-size: 1.45rem;
    }
    
    @media (max-width: 366px) {
         font-size: 1.25rem;
    }
`;

export const SectionListWrapper = styled.div`
    display: flex;
    margin-top: 18rem;
    display: flex;
    width: 100%;
    left: 2%;
    justify-content: center;
    color: black;
    position: absolute;

    @media (max-width: 950px) {
        width: 100%;
        padding-left: 0;
        left: 2rem;
        justify-content: start;
    }
`;

export const SectionListItem = styled.h2`
    font-size: 1.1rem;
    color: ${(props) => props.$display ? "black" : "white"};
    transition: all .3s ease;
    text-align: center;
    padding: 0 3rem;
    user-select: ${(props) => props.$display ? 'auto' : 'none'};
    
    @media (max-width: 1200px) {
        font-size: calc(100vw / 66);
    }

    @media (max-width: 950px) {
        font-size: 1rem;
        padding: 0;
        text-align: start;
    }

    @media (max-width: 500px) {
        font-size: .9rem;
         width: 80%;
    }

    @media (max-width: 400px) {
        font-size: .85rem;
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
        margin-top: -3rem;
    }
`;

export const LandingContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    aling-items: center;
    position: absolute;
    top: 18%;
    height: auto;

    @media (max-width: 950px) {
        position: relative;
        top: 0;
        padding-top: 4rem;
        padding-bottom: 3rem;
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

        @media (max-width: 950px) {
        width: 100%;
        height: auto;
    }
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
    height: 100%;
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
    transition: all .2s ease;

    @media (max-width: 950px) {
        display: ${(props) => props.$cardselected ? 'flex' : 'none'};
        flex-direction: column;
        padding-top: 1rem;
        padding-bottom: 1rem;

        color: black;
        gap: .5rem;
    }
`;

export const ProjectHeading = styled.h2`
    display: ${(props) => props.$show ? 'flex' : 'none'};
    animation: ${fadeIn} .5s ease-in-out;
    margin: 0;
`;

export const ProjectDescription = styled.p`
    display: ${(props) => props.$show ? 'flex' : 'none'};
    animation: ${fadeIn} .5s ease-in-out; 
`;

export const ProjectImage = styled(Image)`
    width: 100%;
    height: 100%;
    min-height: 110px;

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


