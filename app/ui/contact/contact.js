"use client"

import React from "react"
import styled from "styled-components"
import { ContentWrapper, ProjectLink } from "../globals"
import Image from "next/image"
import { ContactData } from "@/app/data/contact"
import Link from "next/link"
import localFont from 'next/font/local';

const outfit = localFont({ src: '../../font/Outfit-VariableFont_wght.ttf'})

const ContactPageContent = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentArea = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    text-align: center;
`;

const Heading = styled.h1`
    font-size: 2rem;
    padding: 0 2rem;

    @media (max-width: 580px) {
        font-size: 1.5rem;
    }

    @media (max-width: 450px) {
        font-size: 1.25rem;
    }

    @media (max-width: 385px) {
        font-size: 1rem;
    }

    @media (max-width: 321px) {
        font-size: .95rem;
    }

    @media (max-width: 310px) {
        font-size: .9rem;
    }
`;

const SocialWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 3rem;
`;

const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SocialName = styled.p`
    padding-top: .75rem;
    color: black;
`;

const AvatarIcon = styled(Image)`
    height: 100px;
    width: 100px;
    border-radius: 50px;
`;

const SocialLink = styled(Link)`
    display: flex;

`;

const DownloadLink = styled.p`
    font-size: 1.1rem;
    display: flex;
    margin-top: -2rem;
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

export default function Contact() {

    const renderSocials = ContactData.socials.map((social, idx) => {
        return (
            <SocialLink key={idx} href={social.href} alt="Social Link">
                <SocialContainer>
                    <AvatarIcon src={social.avatar} alt="Social Icon"/>
                    <SocialName>{social.name}</SocialName>
                </SocialContainer>
            </SocialLink>
        )
    });

        const handleDownload = () => {
          const link = document.createElement('a');
          link.href = 'AlexManziResume.pdf';
          link.download = 'Alex Manzi Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };
    
    return (
        <ContentWrapper className={outfit.className}>
            <ContactPageContent>
                <ContentArea>
                    <Heading>Lets Build Cool Stuff - Find Me Here</Heading>
                    <SocialWrapper>
                        {renderSocials}
                    </SocialWrapper>
                    <ProjectLink passHref={true} $show={true} href="https://www.credly.com/badges/0b037bc8-dc64-420c-b80c-8311d256ee7c/public_url">AWS Certified</ProjectLink>
                    <DownloadLink onClick={handleDownload}>Resume</DownloadLink>
                </ContentArea>
            </ContactPageContent>
        </ContentWrapper>
    )
};