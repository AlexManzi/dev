"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { ContactData } from "@/app/data/contact";

const outfit = localFont({ src: "../../font/Outfit-VariableFont_wght.ttf" });

const PageShell = styled.main`
  min-height: 100vh;
  padding: 8rem 2rem 3rem;

  @media (max-width: 720px) {
    padding: 6rem 1.25rem 2rem;
  }
`;

const Content = styled.section`
  width: min(920px, 100%);
  margin: 0 auto;
  display: grid;
  gap: 2rem;
`;

const IntroSection = styled.div`
  display: grid;
  gap: 1rem;
`;

const Eyebrow = styled.p`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--muted-foreground);
`;

const Heading = styled.h1`
  font-size: clamp(2.2rem, 5vw, 4rem);
  line-height: 0.98;
  letter-spacing: -0.05em;
  max-width: 12ch;
`;

const BodyText = styled.p`
  max-width: 58ch;
  line-height: 1.75;
  color: var(--muted-foreground);
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem 2rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const ContactItem = styled(Link)`
  display: grid;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(43, 47, 51, 0.1);
  transition: transform 180ms ease, color 180ms ease, border-color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(43, 47, 51, 0.22);
  }
`;

const ContactHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Avatar = styled(Image)`
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: 999px;
`;

const ContactName = styled.h2`
  font-size: 1.15rem;
`;

const ContactDescription = styled.p`
  line-height: 1.65;
  color: var(--muted-foreground);
`;

const CertificationLink = styled.a`
  width: fit-content;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid rgba(43, 47, 51, 0.22);
  font-weight: 600;

  &:hover {
    border-color: #35587c;
    color: #35587c;
  }
`;

export default function Contact() {
  return (
    <PageShell className={outfit.className}>
      <Content>
        <IntroSection>
          <Eyebrow>Contact</Eyebrow>
          <Heading>Let&apos;s talk about the next build.</Heading>
          <BodyText>
            If you need a product-minded engineer for a web platform, a
            front-end refresh, or a practical AI feature, these are the best
            places to reach me.
          </BodyText>
          <CertificationLink
            href="https://www.credly.com/badges/0b037bc8-dc64-420c-b80c-8311d256ee7c/public_url"
            target="_blank"
            rel="noreferrer"
          >
            AWS Certified
          </CertificationLink>
        </IntroSection>

        <ContactGrid>
          {ContactData.socials.map((social) => (
            <ContactItem
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              <ContactHeader>
                <Avatar src={social.avatar} alt={social.name} />
                <div>
                  <ContactName>{social.name}</ContactName>
                  <BodyText>{social.href.replace("https://", "")}</BodyText>
                </div>
              </ContactHeader>
              <ContactDescription>
                Open {social.name} to connect directly.
              </ContactDescription>
            </ContactItem>
          ))}
        </ContactGrid>
      </Content>
    </PageShell>
  );
}
