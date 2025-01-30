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
    })
    
    return (
        <ContentWrapper className={outfit.className}>
            <ContactPageContent>
                <ContentArea>
                    <Heading>Lets Build Cool Stuff - Find Me Here</Heading>
                    <SocialWrapper>
                        {renderSocials}
                    </SocialWrapper>
                    <ProjectLink passHref={true} $show={true} href="https://www.credly.com/badges/0b037bc8-dc64-420c-b80c-8311d256ee7c/public_url">AWS Certified</ProjectLink>
                </ContentArea>
            </ContactPageContent>
        </ContentWrapper>
    )
};