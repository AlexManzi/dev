"use client";

import React, { useEffect, useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { landingData } from "@/app/data/landing";
import LandingHeader from "@/public/LandingHeader.webp";

const outfit = localFont({ src: "../../font/Outfit-VariableFont_wght.ttf" });

const overlayFadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const overlayFadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const modalFadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const modalFadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

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
  font-size: 0.94rem;
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
  gap: 1.65rem;

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
    gap: 3.25rem;
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
  border-radius: 10px;
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

const CardActionButton = styled.button`
  width: fit-content;
  margin-top: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  color: var(--foreground);
  padding-bottom: 0.2rem;
  background: transparent;
  border: 0;
  border-bottom: 1px solid rgba(43, 47, 51, 0.24);
  transition: border-color 180ms ease, color 180ms ease;
  align-self: end;
  cursor: pointer;

  &:hover {
    color: #35587c;
    border-color: #35587c;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: grid;
  place-items: center;
  padding: 1.5rem;
  background: rgba(20, 27, 35, 0.38);
  backdrop-filter: blur(1px);
  will-change: opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
  animation: ${(props) => (props.$closing ? overlayFadeOut : overlayFadeIn)}
    120ms ease-out forwards;

  @media (max-width: 720px) {
    align-items: end;
    padding: 0.75rem;
  }
`;

const ModalCard = styled.div`
  width: min(920px, 100%);
  max-height: min(88vh, 900px);
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(43, 47, 51, 0.28) transparent;
  border-radius: 8px;
  background: rgba(252, 253, 255, 0.96);
  border: 1px solid rgba(43, 47, 51, 0.08);
  box-shadow: 0 28px 70px rgba(15, 23, 31, 0.18);
  will-change: opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
  animation: ${(props) => (props.$closing ? modalFadeOut : modalFadeIn)} 140ms
    ease-out forwards;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(43, 47, 51, 0.22);
    border-radius: 999px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(43, 47, 51, 0.32);
  }

  @media (max-width: 720px) {
    max-height: 92vh;
    border-radius: 8px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 1rem;
  padding: 1.4rem 1.4rem 1rem;
`;

const ModalHeaderText = styled.div`
  display: grid;
  gap: 0.45rem;
`;

const ModalLabel = styled.p`
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted-foreground);
`;

const ModalTitle = styled.h3`
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  letter-spacing: -0.04em;
`;

const ModalCloseButton = styled.button`
  min-width: 2rem;
  min-height: 2rem;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--foreground);
  cursor: pointer;
  flex-shrink: 0;
  font-size: 1.9rem;
  line-height: 1;
  transition: color 180ms ease, transform 180ms ease, opacity 180ms ease;

  &:hover {
    color: #35587c;
    transform: scale(1.06);
    opacity: 0.9;
  }
`;

const ModalImageWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10.5;
  overflow: hidden;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.74);

  &:hover a,
  &:focus-within a {
    transform: translateY(0);
  }

  @media (max-width: 820px) {
    &:hover a,
    &:focus-within a {
      transform: translateY(100%);
    }
  }
`;

const ModalImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ModalBody = styled.div`
  display: grid;
  gap: 1.15rem;
  padding: 1.3rem 1.4rem 1.5rem;
`;

const ModalIntroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(260px, 0.92fr) minmax(0, 1.25fr);
  gap: 1.15rem;
  align-items: start;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const ModalIntroContent = styled.div`
  display: grid;
  gap: 1rem;
  align-content: start;
`;

const ModalText = styled.p`
  line-height: 1.72;
  color: var(--muted-foreground);
`;

const ModalList = styled.ul`
  display: grid;
  gap: 0.8rem;
  padding-left: 1.1rem;
  color: var(--foreground);
`;

const ModalListItem = styled.li`
  line-height: 1.68;
`;

const ModalFooter = styled.div`
  display: none;

  @media (max-width: 820px) {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    align-items: center;
    padding-top: 0.2rem;
    border-top: 0;
  }
`;

const ModalSiteLink = styled.a`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  min-height: 46px;
  padding: 0.75rem 1rem;
  background: rgba(41, 94, 151, 0.96);
  color: #f8fafc;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transform: translateY(100%);
  transition: transform 140ms ease-out, background 160ms ease;

  &:hover {
    background: rgba(33, 79, 128, 0.98);
  }

  @media (max-width: 820px) {
    display: none;
  }
`;

const ModalMobileSiteLink = styled.a`
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 46px;
  padding: 0.85rem 1rem;
  border-radius: 4px;
  background: rgba(43, 47, 51, 0.92);
  color: #f8fafc;
  transition: background 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(24, 29, 34, 0.96);
  }

  @media (max-width: 820px) {
    display: inline-flex;
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

function PortfolioCard({ project, preloadImage = false, onLearnMore }) {
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
      <CardActionButton type="button" onClick={() => onLearnMore(project)}>
        Learn more
      </CardActionButton>
    </ProjectCard>
  );
}

export default function Landing() {
  const { intro, filters, projects } = landingData;
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isClosingModal, setIsClosingModal] = useState(false);

  const openProjectModal = (project) => {
    setIsClosingModal(false);
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setIsClosingModal(true);
  };

  useEffect(() => {
    if (!selectedProject) {
      document.body.style.overflow = "";
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsClosingModal(true);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  useEffect(() => {
    if (!isClosingModal || !selectedProject) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setSelectedProject(null);
      setIsClosingModal(false);
    }, 140);

    return () => window.clearTimeout(timeoutId);
  }, [isClosingModal, selectedProject]);

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
              I bring strategy, design, and engineering together to move ideas from concept to working product.
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
              <SectionTitle>Recent work and direction</SectionTitle>
              <SectionText>
                The below highlights projects that reflect where my work is headed now: AI‑powered systems, scalable web platforms, and product‑driven execution with real implementation depth.
              </SectionText>
            </div>
          </SectionHeadingRow>
          <FeaturedGrid>
            {featuredProjects.map((project, index) => (
              <PortfolioCard
                key={project.name}
                project={project}
                preloadImage={index < 2}
                onLearnMore={openProjectModal}
              />
            ))}
          </FeaturedGrid>
        </Section>

        <ProjectArchiveSection id="projects">
          <SectionHeadingRow>
            <div>
              <SectionTitle>Project archive</SectionTitle>
              <SectionText>
                A chronological catalog of past product, engineering, and AI work.
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
                onLearnMore={openProjectModal}
              />
            ))}
          </ProjectGrid>
        </ProjectArchiveSection>
      </ContentGrid>
      {selectedProject ? (
        <ModalOverlay $closing={isClosingModal} onClick={closeProjectModal}>
          <ModalCard
            $closing={isClosingModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-details-title"
            onClick={(event) => event.stopPropagation()}
          >
            <ModalHeader>
              <ModalHeaderText>
                <ModalLabel>Project details</ModalLabel>
                <ModalTitle id="project-details-title">
                  {selectedProject.name}
                </ModalTitle>
              </ModalHeaderText>
              <ModalCloseButton
                type="button"
                aria-label="Close project details"
                onClick={closeProjectModal}
              >
                ×
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              <ModalIntroGrid>
                <ModalIntroContent>
                  <CardMeta>
                    <BadgeRow>
                      {selectedProject.categories
                        .filter((category) => category !== "Recent")
                        .slice(0, 4)
                        .map((category) => (
                          <Badge key={`${selectedProject.name}-${category}`}>
                            {category}
                          </Badge>
                        ))}
                    </BadgeRow>
                    <YearText>{selectedProject.year}</YearText>
                  </CardMeta>
                  <ModalText>{selectedProject.detailSummary}</ModalText>
                  <ModalText>{selectedProject.impact}</ModalText>
                </ModalIntroContent>
                <ModalImageWrap>
                  <ModalImage
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    placeholder="blur"
                  />
                  <ModalSiteLink
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit site
                  </ModalSiteLink>
                </ModalImageWrap>
              </ModalIntroGrid>
              <ModalList>
                {selectedProject.detailPoints.map((point) => (
                  <ModalListItem key={`${selectedProject.name}-${point}`}>
                    {point}
                  </ModalListItem>
                ))}
              </ModalList>
              <TechList>
                {selectedProject.tech.map((item) => (
                  <TechTag key={`${selectedProject.name}-modal-${item}`}>
                    {item}
                  </TechTag>
                ))}
              </TechList>
              <ModalFooter>
                <ModalMobileSiteLink
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit site
                </ModalMobileSiteLink>
              </ModalFooter>
            </ModalBody>
          </ModalCard>
        </ModalOverlay>
      ) : null}
    </PageShell>
  );
}
