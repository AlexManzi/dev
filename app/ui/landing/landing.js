"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import LandingHeader from "@/public/LandingHeader.webp";
import { landingData } from "@/app/data/landing";

const Shell = styled.main`width:min(1180px,calc(100% - 2.5rem)); margin:auto; padding:0 0 6rem;`;
const Hero = styled.section`display:grid; grid-template-columns:1.15fr .85fr; gap:4rem; align-items:center; min-height:calc(100vh - 72px); min-height:calc(100svh - 72px); padding:2rem 0 5rem; @media(max-width:800px){grid-template-columns:1fr; gap:2rem;}`;
const Kicker = styled.p`color:var(--accent); font-size:.78rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; margin-bottom:1rem;`;
const HeroTitle = styled.h1`font-size:clamp(2.5rem,6vw,5.5rem); line-height:.9; letter-spacing:-.08em; max-width:14ch;`;
const HeroCopy = styled.p`font-size:clamp(1.1rem,2vw,1.35rem); color:var(--muted); line-height:1.5; max-width:44ch; margin-top:1.5rem;`;
const Actions = styled.div`display:flex; flex-wrap:wrap; gap:.7rem; margin-top:2rem;`;
const Button = styled(Link)`display:inline-flex; padding:.8rem 1rem; border-radius:999px; background:${p=>p.$primary?"var(--accent)":"var(--surface)"}; color:${p=>p.$primary?"var(--accent-contrast)":"var(--foreground)"}; border:1px solid ${p=>p.$primary?"var(--accent)":"var(--line)"}; font-weight:700;`;
const Portrait = styled.div`position:relative; aspect-ratio:1/1.05; max-width:430px; margin-left:auto; border:1px solid var(--line); border-radius:32px 32px 32px 10px; overflow:hidden; background:var(--soft); box-shadow:18px 20px 0 color-mix(in srgb,var(--accent) 12%,transparent); @media(max-width:800px){margin:0; max-width:360px;}`;
const PortraitImage = styled(Image)`width:100%; height:100%; object-fit:cover; object-position:center top; transform:scale(1);`;
const Section = styled.section`padding-top:2.5rem;`;
const HeadingRow = styled.div`display:flex; justify-content:space-between; align-items:end; gap:1rem; margin-bottom:1.25rem; flex-wrap:wrap;`;
const SectionTitle = styled.h2`font-size:clamp(1.8rem,4vw,3rem); letter-spacing:-.06em;`;
const SectionNote = styled.p`color:var(--muted); max-width:60ch; line-height:1.5;`;
const Filters = styled.div`display:flex; gap:.4rem; flex-wrap:wrap;`;
const Filter = styled.button`border:1px solid var(--line); background:${p=>p.$active?"var(--accent)":"var(--surface)"}; color:${p=>p.$active?"var(--accent-contrast)":"var(--muted)"}; border-radius:999px; padding:.55rem .8rem; cursor:pointer;`;
const FeatureGrid = styled.div`display:grid; grid-template-columns:1.35fr .65fr; grid-template-rows:repeat(2,auto); gap:1rem; @media(max-width:800px){grid-template-columns:1fr; grid-template-rows:auto;}`;
const CardGrid = styled.div`display:grid; grid-template-columns:repeat(3,1fr); gap:1rem; @media(max-width:900px){grid-template-columns:repeat(2,1fr);} @media(max-width:600px){grid-template-columns:1fr;}`;
const Card = styled(Link)`display:block; min-width:0; border-radius:14px; opacity:${p=>p.$revealed?1:0}; transform:${p=>p.$revealed?"translateY(0)":"translateY(20px)"}; transition:opacity .5s ease ${p=>p.$index*.14}s, transform .5s ease ${p=>p.$index*.14}s; &:focus-visible{outline:2px solid var(--accent); outline-offset:4px;} &:hover img,&:focus-visible img{transform:scale(1.04);} @media(prefers-reduced-motion:reduce){opacity:1; transform:none; transition:none;}`;
const ImageWrap = styled.div`position:relative; aspect-ratio:16/9; overflow:hidden; border-radius:4px; background:var(--soft);`;
const CardImage = styled(Image)`width:100%; height:100%; object-fit:cover; transition:transform .3s ease;`;
const Overlay = styled.div`position:absolute; inset:0; display:grid; align-content:end; gap:.55rem; padding:1.25rem; color:var(--accent-contrast); background:color-mix(in srgb,var(--accent) 94%,transparent); -webkit-backdrop-filter:blur(8px); backdrop-filter:blur(8px); opacity:0; transform:translateY(.5rem); transition:opacity .3s ease, transform .3s ease; ${Card}:hover & , ${Card}:focus-visible &{opacity:1; transform:translateY(0);} @media (hover:none){opacity:1; transform:none; background:linear-gradient(transparent 15%,color-mix(in srgb,var(--accent) 94%,transparent));}`;
const Meta = styled.div`display:flex; justify-content:space-between; gap:.5rem; font-size:.72rem; text-transform:uppercase; letter-spacing:.08em; opacity:.86;`;
const CardTitle = styled.h3`font-size:clamp(1.35rem,3vw,2.35rem); line-height:1; letter-spacing:-.05em;`;
const CardText = styled.p`font-size:.92rem; line-height:1.4; max-width:38ch; opacity:.9;`;
const FeaturedCard = styled(Card)`&:first-child{grid-row:span 2; @media(max-width:800px){grid-row:auto;}}`;
const FeaturedImage = styled(ImageWrap)`aspect-ratio:16/9;`;
const FeaturedTitle = styled(CardTitle)``;
const Arrow = styled.span`color:var(--accent); font-weight:700;`;

function ProjectCard({ project, featured = false, index = 0, revealed = true }) {
  const Component = featured ? FeaturedCard : Card;
  const Wrap = featured ? FeaturedImage : ImageWrap;
  return <Component href={`/projects/${project.slug}`} $index={index} $revealed={revealed}>
    <Wrap><CardImage src={project.image} alt={project.name} placeholder="blur" /><Overlay><Meta><span>{project.categories.filter(item=>item!=="Recent").slice(0,2).join(" · ")}</span><span>{project.year}</span></Meta><CardTitle>{project.name}</CardTitle><CardText>{project.impact}</CardText><Arrow>View project →</Arrow></Overlay></Wrap>
  </Component>;
}

export default function Landing() {
  const { projects, filters } = landingData;
  const [filter, setFilter] = useState("All");
  const [featuredRevealed, setFeaturedRevealed] = useState(false);
  const [projectsRevealed, setProjectsRevealed] = useState(false);
  const featuredRef = useRef(null);
  const projectsRef = useRef(null);
  const sorted = useMemo(() => [...projects].sort((a,b)=>b.year-a.year), [projects]);
  const featured = sorted.filter(project=>project.featured);
  const visible = filter === "All" ? sorted : sorted.filter(project=>project.categories.includes(filter));
  useEffect(() => {
    const section = featuredRef.current;
    if (!section) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setFeaturedRevealed(true);
        observer.disconnect();
      }
    }, { threshold:0.18 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const section = projectsRef.current;
    if (!section) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setProjectsRevealed(true);
        observer.disconnect();
      }
    }, { threshold:0.12 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  return <Shell>
    <Hero><div><Kicker>Product / Engineering / AI</Kicker><HeroTitle>Useful things, made with care.</HeroTitle><HeroCopy>I build clear digital products for complicated problems.</HeroCopy><Actions><Button href="#projects" $primary>See the work</Button><Button href="/blog">Read the blog</Button></Actions></div><Portrait><PortraitImage src={LandingHeader} alt="Portrait of Alex Manzi" priority /></Portrait></Hero>
    <Section><HeadingRow><div><Kicker>Featured builds</Kicker><SectionTitle>Selected work</SectionTitle><SectionNote>A few recent builds across product, web, and applied AI.</SectionNote></div></HeadingRow><FeatureGrid ref={featuredRef}>{featured.map((project,index)=><ProjectCard key={project.slug} project={project} featured index={index} revealed={featuredRevealed} />)}</FeatureGrid></Section>
    <Section id="projects"><HeadingRow><div><Kicker>Archive</Kicker><SectionTitle>Projects</SectionTitle></div><Filters>{filters.map(item=><Filter key={item} type="button" $active={filter===item} onClick={()=>setFilter(item)}>{item}</Filter>)}</Filters></HeadingRow><CardGrid ref={projectsRef}>{visible.map((project,index)=><ProjectCard key={project.slug} project={project} index={index} revealed={projectsRevealed} />)}</CardGrid></Section>
  </Shell>;
}
