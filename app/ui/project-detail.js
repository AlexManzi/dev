"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import XpTitleBar from "./xp-title-bar";

const Shell = styled.main`width:min(1000px,calc(100% - 2.5rem)); margin:auto; padding:4.5rem 0 6rem;`;
const Back = styled(Link)`color:var(--accent); font-weight:700;`;
const Header = styled.header`display:grid; gap:1rem; padding:3rem 0 2rem;`;
const Kicker = styled.p`color:var(--accent); font-size:.78rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase;`;
const Title = styled.h1`font-size:clamp(2.6rem,7vw,6rem); line-height:.9; letter-spacing:-.08em; max-width:10ch;`;
const Summary = styled.p`font-size:clamp(1.15rem,2.2vw,1.5rem); color:var(--muted); line-height:1.5; max-width:90%;`;
const HeroImage = styled.div`position:relative; aspect-ratio:2/1; overflow:hidden; border-radius:20px; background:var(--soft); @media(max-width:600px){aspect-ratio:1.25;}`;
const ImageStyled = styled(Image)`width:100%; height:100%; object-fit:cover;`;
const Meta = styled.div`display:grid; grid-template-columns:1fr 1.7fr .6fr; gap:1rem; padding:1.3rem 0; border-bottom:1px solid var(--line); &>div:last-child{text-align:right;} @media(max-width:600px){grid-template-columns:1fr 1fr;}`;
const Label = styled.span`display:block; color:var(--muted); font-size:.72rem; text-transform:uppercase; letter-spacing:.1em; margin-bottom:.35rem;`;
const Value = styled.span`line-height:1.4;`;
const Body = styled.div`display:grid; grid-template-columns:.8fr 1.2fr; gap:4rem; padding-top:3rem; @media(max-width:750px){grid-template-columns:1fr; gap:2rem;}`;
const Heading = styled.h2`font-size:2rem; letter-spacing:-.05em;`;
const Copy = styled.p`color:var(--muted); line-height:1.7; margin-top:.9rem;`;
const List = styled.ul`display:grid; gap:.6rem; margin:.9rem 0 0; padding-left:1.2rem; color:var(--muted); line-height:1.7;`;
const Visit = styled.a`display:inline-flex; margin-top:2rem; padding:.8rem 1rem; border-radius:999px; background:var(--accent); color:var(--accent-contrast); font-weight:700;`;

export default function ProjectDetail({ project }) {
  return <Shell data-xp-window="page"><XpTitleBar>My Portfolio — Project details</XpTitleBar><Back href="/#projects">← Back to projects</Back><Header><Kicker>{project.categories.filter(item=>item!=="Recent").join(" / ")}</Kicker><Title>{project.name}</Title><Summary>{project.impact}</Summary></Header><HeroImage><ImageStyled src={project.image} alt={project.name} placeholder="blur" priority /></HeroImage><Meta><div><Label>Focus</Label><Value>{project.categories.filter(item=>item!=="Recent").join(" / ")}</Value></div><div><Label>Stack</Label><Value>{project.tech.join(", ")}</Value></div><div><Label>Year</Label><Value>{project.year}</Value></div></Meta><Body><div><Heading>The work</Heading><Copy>{project.detailSummary}</Copy><Visit href={project.link} target="_blank" rel="noreferrer">Visit the live project</Visit></div><div><Heading>Highlights</Heading><List>{project.detailPoints.map(point=><li key={point}>{point}</li>)}</List></div></Body></Shell>;
}
