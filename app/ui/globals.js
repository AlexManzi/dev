import styled, { keyframes } from "styled-components";

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

export const LandingOptionWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: ${fadeIn} .2s ease-in;
`;