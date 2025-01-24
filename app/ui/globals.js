import styled, { keyframes, css } from "styled-components";
import Image from "next/image";
import Link from "next/link";

const fadeIn = keyframes` 
    from { opacity: 0; } 
    to { opacity: 1; } 
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
    color: black;
    animation: ${fadeIn} .2s ease-in;
`;

export const LandingContentWrapper = styled.div`
    padding-top: 8rem;
`;

export const ProjectSection = styled.div`
    width: 100%;
    display: flex;
    padding: 1.5rem 2rem;
    padding-right: 3rem;
    justify-content: space-between;
`;

export const ProjectItemWrapper = styled.div`
    display: flex;
    width: 32.3%;
    height: 130px;
    background-image: url(${(props) => props.$image});
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    cursor: pointer;
    position: relative;
    animation: ${fadeIn} .5s ease-in;
`;

export const ProjectItemFilter = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, 0);
    z-index: 20;
    height: 100%;
    width: 100%;
    transition: all .2s ease;

    &:hover {
        background-color: rgba(0,0,0, .2);
    }
`;

export const ProjectImage = styled(Image)`
    width: 100%;
    height: 105%;
    z-index: 1;
    cursor: pointer;
`;

export const ProjectBioArea = styled.div`
    padding: 0 2rem;
`;

export const ProjectHeading = styled.h2`
    display: ${(props) => props.$show ? 'flex' : 'none'};
    animation: ${fadeIn} .5s ease-in;
`;

export const ProjectDescription = styled.p`

`;

export const ProjectLink = styled(Link)`
    font-size: 1rem;
`;