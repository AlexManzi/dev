"use client"

import React from "react"
import styled from "styled-components"
import { ContentWrapper } from "../globals"
import Image from "next/image"
import { Outfit } from '@next/font/google';
import { ContactData } from "@/app/data/contact"
import Link from "next/link"

const outfit = Outfit({
  subsets: ['latin'],
  weights: ['300', '400', '500', '600', '700', '800', '900'],
});

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
    justify-content: space-evenly;
`;

const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SocialName = styled.div`
    padding-top: .75rem;
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
                </ContentArea>
            </ContactPageContent>
        </ContentWrapper>
    )
};