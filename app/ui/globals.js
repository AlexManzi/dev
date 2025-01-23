import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes` 
    from { opacity: 0; } 
    to { opacity: 1; } 
`;

export const ContentWrapper = styled.div`
    display: flex;
    height: 100vh;
    min-height: 700px;
    width: 100%;
    background-color: white;
    justify-content: space-between;
`;

export const SelfItem = styled.h1`
    display: ${(props) => !props.$displayAllOptions && props.$ego === "Brand Builder" || !props.$displayAllOptions && props.$ego === "AI Expert" ? 'none' : 'flex'};
    color: ${(props) => props.$ego === props.$active ? 'rgba(0,0,0, 1)' : 'rgba(0,0,0, .3)'};
    cursor: pointer;
    width: max-content;
    transition: ${(props) => !props.$displayAllOptions ? 'all .2s ease' : ''};
    animation: ${(props) => props.$ego === "Frontend Engineer" ? '' : css`${fadeIn} .3s ease-in`};
`;

export const AssessmentContainer = styled.div`
    display: ${(props) => props.$displayPanel ? 'flex' : 'none'};
    height: 100%;
    width: 65%;
    animation: ${fadeIn} .5s ease-in;
`;

export const LandingOptionWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: black;
    animation: ${fadeIn} .2s ease-in;
`;