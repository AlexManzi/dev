"use client";

import styled from "styled-components";

const Shell = styled.main`width:min(760px,calc(100% - 2.5rem)); margin:auto; padding:7rem 0 6rem;`;
const Kicker = styled.p`color:var(--accent); font-size:.78rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase;`;
const Heading = styled.h1`font-size:clamp(3rem,8vw,6rem); line-height:.9; letter-spacing:-.08em; margin:1rem 0;`;
const Copy = styled.p`color:var(--muted); font-size:1.2rem; line-height:1.6; max-width:42ch;`;

export default function AgentsPage() {
  return <Shell><Kicker>Agents</Kicker><Heading>More useful collaborators, coming soon.</Heading><Copy>This space is reserved for experiments with focused AI agents, workflows, and tools.</Copy></Shell>;
}
