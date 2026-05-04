"use client";

import React, { useMemo, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { landingData } from "@/app/data/landing";
import LandingHeader from "@/public/LandingHeader.webp";

const outfit = localFont({ src: "../../font/Outfit-VariableFont_wght.ttf" });

const PageShell = styled.main`
  width: 100%;
  padding: 7rem 2rem 4rem;
  color: var(--foreground);

  @media (max-width: 720px) {
    padding: 7rem 1.25rem 3rem;
  }
`;

const ContentGrid = styled.div`
  width: min(1120px, 100%);
  margin: 0 auto;
  display: grid;
  gap: 3.25rem;
`;

const Hero = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(280px, 0.9fr);
  gap: 2rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.75rem, 6vw, 5.4rem);
  line-height: 0.95;
  letter-spacing: -0.05em;
  max-width: 12ch;
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.15rem, 2vw, 1.6rem);
  line-height: 1.25;
  letter-spacing: -0.03em;
  max-width: 24ch;
  margin-top: 1rem;
`;

const HeroCopy = styled.p`
  font-size: 1.05rem;
  line-height: 1.75;
  max-width: 60ch;
  margin-top: 1.35rem;
  color: var(--muted-foreground);
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 2rem;
`;

const PrimaryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  padding: 0.85rem 1.2rem;
  border-radius: 4px;
  background: rgba(43, 47, 51, 0.92);
  color: #f8fafc;
  transition: 0.2s;

  &:hover {
    transform: translateY(-1px);
    background: rgba(24, 29, 34, 0.96);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  padding: 0.85rem 1.2rem;
  border-radius: 4px;
  border: 1px solid rgba(43, 47, 51, 0.12);
  background: rgba(255, 255, 255, 0.56);
  backdrop-filter: blur(10px);
  transition: 0.2s;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(43, 47, 51, 0.25);
  }
`;

const StatsCard = styled.div`
  position: relative;
  width: min(100%, 25rem);
  justify-self: end;
  padding: 1rem 0 0;

  @media (max-width: 900px) {
    width: min(100%, 27rem);
    max-height: 27rem;
    padding-top: 0;
    justify-self: center;
  }
`;

const PortraitWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3.85;
  overflow: hidden;
  border-radius: 18px;
  background: transparent;

  &::before {
    content: "";
    position: absolute;
    inset: 6% 4% -2% 8%;
    border-radius: 26px;
    background: linear-gradient(180deg, rgba(210, 224, 239, 0.95), rgba(231, 237, 243, 0.88));
    z-index: 0;
    transform: rotate(-3deg);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 2% 10% 10% 0;
    border-radius: 30px;
    background: rgba(185, 205, 226, 0.38);
    filter: blur(10px);
    z-index: 0;
  }
`;

const PortraitImage = styled(Image)`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 0%;
  border-radius: 18px;
  box-shadow: 0 18px 34px rgba(89, 112, 138, 0.12);
  transform: scale(0.84);
  transform-origin: center bottom;
`;

const InfoBanner = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  align-items: start;
  padding-top: 1rem;
  border-top: 1px solid rgba(43, 47, 51, 0.08);

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const BannerIntro = styled.div`
  display: grid;
  gap: 0.45rem;
  padding-right: 1rem;
`;

const StatsEyebrow = styled.p`
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--muted-foreground);
`;

const StatsTitle = styled.p`
  font-size: 1.05rem;
  line-height: 1.45;
`;

const StatRow = styled.div`
  display: grid;
  gap: 0.35rem;
`;

const StatLabel = styled.p`
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--muted-foreground);
`;

const StatValue = styled.p`
  margin-top: 0.35rem;
  font-size: 1rem;
  line-height: 1.5;
`;

const Section = styled.section`
  display: grid;
  gap: 1.15rem;
`;

const ProjectArchiveSection = styled(Section)`
  scroll-margin-top: 6rem;
`;

const SectionHeadingRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.65rem, 2vw, 2.2rem);
  letter-spacing: -0.04em;
`;

const SectionText = styled.p`
  max-width: 62ch;
  color: var(--muted-foreground);
  line-height: 1.7;
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.35rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 3rem 1.2rem;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ProjectCard = styled.article`
  display: grid;
  grid-template-rows: auto auto auto 1fr auto auto;
  gap: 0.8rem;
  align-content: start;
  height: 100%;
`;

const CardImageWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 8.8;
  overflow: hidden;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.7);
`;

const CardImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(0);
  transform: scale(1);
  transition: filter 0.35s ease, transform 0.35s ease, opacity 0.35s ease;
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 0.15rem;
`;

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const Badge = styled.span`
  display: inline-block;
  padding-bottom: 0.15rem;
  border-bottom: 1px solid rgba(43, 47, 51, 0.18);
  color: var(--muted-foreground);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const YearText = styled.span`
  color: var(--muted-foreground);
  font-size: 0.92rem;
`;

const CardTitle = styled.h3`
  font-size: 1.35rem;
  letter-spacing: -0.03em;
`;

const CardDescription = styled.p`
  line-height: 1.65;
  color: var(--muted-foreground);
`;

const CardImpact = styled.p`
  line-height: 1.65;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid rgba(43, 47, 51, 0.08);
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`;

const TechTag = styled.span`
  padding: 0.32rem 0.7rem;
  border-radius: 999px;
  background: rgba(43, 47, 51, 0.05);
  font-size: 0.82rem;
`;

const CardLink = styled.a`
  width: fit-content;
  margin-top: 0.5rem;
  font-weight: 600;
  color: var(--foreground);
  padding-bottom: 0.2rem;
  border-bottom: 1px solid rgba(43, 47, 51, 0.24);
  transition: border-color 180ms ease, color 180ms ease;
  align-self: end;

  &:hover {
    color: #35587c;
    border-color: #35587c;
  }
`;

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const FilterButton = styled.button`
  border: 1px solid
    ${(props) =>
      props.$active ? "rgba(43, 47, 51, 0.72)" : "rgba(43, 47, 51, 0.1)"};
  background: ${(props) =>
    props.$active ? "rgba(43, 47, 51, 0.92)" : "rgba(255, 255, 255, 0.4)"};
  color: ${(props) =>
    props.$active ? "rgba(255, 255, 255, 0.98)" : "var(--foreground)"};
  padding: 0.7rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(43, 47, 51, 0.22);
  }
`;

function PortfolioCard({ project, preloadImage = false }) {
  return (
    <ProjectCard>
      <CardImageWrap>
        <CardImage
          src={project.image}
          alt={project.name}
          priority={preloadImage}
          placeholder="blur"
        />
      </CardImageWrap>
      <CardMeta>
        <BadgeRow>
          {project.categories
            .filter((category) => category !== "Recent")
            .slice(0, 3)
            .map((category) => (
              <Badge key={`${project.name}-${category}`}>{category}</Badge>
            ))}
        </BadgeRow>
        <YearText>{project.year}</YearText>
      </CardMeta>
      <div>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </div>
      <CardImpact>{project.impact}</CardImpact>
      <TechList>
        {project.tech.map((item) => (
          <TechTag key={`${project.name}-${item}`}>{item}</TechTag>
        ))}
      </TechList>
      <CardLink href={project.link} target="_blank" rel="noreferrer">
        View project
      </CardLink>
    </ProjectCard>
  );
}

export default function Landing() {
  const { intro, filters, projects } = landingData;
  const [activeFilter, setActiveFilter] = useState("All");

  const featuredProjects = useMemo(
    () =>
      [...projects]
        .filter((project) => project.featured)
        .sort((a, b) => b.year - a.year),
    [projects]
  );

  const visibleProjects = useMemo(() => {
    const sortedProjects = [...projects].sort((a, b) => b.year - a.year);

    if (activeFilter === "All") {
      return sortedProjects;
    }

    return sortedProjects.filter((project) =>
      project.categories.includes(activeFilter)
    );
  }, [activeFilter, projects]);

  return (
    <PageShell className={outfit.className}>
      <ContentGrid>
        <Hero>
          <div>
            <HeroTitle>{intro.title}</HeroTitle>
            <HeroSubtitle>{intro.subtitle}</HeroSubtitle>
            <HeroCopy>{intro.summary}</HeroCopy>
            <HeroActions>
              <PrimaryLink href="/contact">Start a conversation</PrimaryLink>
              <SecondaryButton href="#projects">See my work</SecondaryButton>
            </HeroActions>
          </div>
          <StatsCard>
            <PortraitWrap>
              <PortraitImage
                src={LandingHeader}
                alt="Portrait of Alex Manzi"
                priority
              />
            </PortraitWrap>
          </StatsCard>
        </Hero>

        <InfoBanner>
          <BannerIntro>
            <StatsEyebrow>Based in product execution</StatsEyebrow>
            <StatsTitle>
              Strategy, interface design, and engineering in one build-minded
              workflow.
            </StatsTitle>
          </BannerIntro>
          {intro.stats.map((stat) => (
            <StatRow key={stat.label}>
              <StatLabel>{stat.label}</StatLabel>
              <StatValue>{stat.value}</StatValue>
            </StatRow>
          ))}
        </InfoBanner>

        <Section>
          <SectionHeadingRow>
            <div>
              <SectionTitle>Recent and representative work</SectionTitle>
              <SectionText>
                The first row highlights the projects that best represent where
                the work is headed now: product thinking, implementation depth,
                and practical AI.
              </SectionText>
            </div>
          </SectionHeadingRow>
          <FeaturedGrid>
            {featuredProjects.map((project, index) => (
              <PortfolioCard
                key={project.name}
                project={project}
                preloadImage={index < 2}
              />
            ))}
          </FeaturedGrid>
        </Section>

        <ProjectArchiveSection id="projects">
          <SectionHeadingRow>
            <div>
              <SectionTitle>Project archive</SectionTitle>
              <SectionText>
                Everything lives in one project list now, so adding new work is
                just adding another object in `app/data/landing.js`.
              </SectionText>
            </div>
            <FilterRow>
              {filters.map((filter) => (
                <FilterButton
                  key={filter}
                  type="button"
                  $active={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </FilterButton>
              ))}
            </FilterRow>
          </SectionHeadingRow>
          <ProjectGrid>
            {visibleProjects.map((project, index) => (
              <PortfolioCard
                key={`${activeFilter}-${project.name}`}
                project={project}
                preloadImage={activeFilter === "All" && index < 2}
              />
            ))}
          </ProjectGrid>
        </ProjectArchiveSection>
      </ContentGrid>
    </PageShell>
  );
}
