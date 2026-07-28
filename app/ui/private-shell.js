"use client";

import styled from "styled-components";

const Shell = styled.main`width:min(620px,calc(100% - 2.5rem)); margin:auto; padding:7rem 0;`;
const Panel = styled.section`padding:2rem; border:1px solid var(--line); border-radius:20px; background:var(--surface); box-shadow:0 18px 50px color-mix(in srgb,var(--foreground) 8%,transparent);`;
const Kicker = styled.p`color:var(--accent); font-size:.78rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase;`;
const Heading = styled.h1`font-size:clamp(2.5rem,7vw,5rem); line-height:.9; letter-spacing:-.08em; margin:1rem 0;`;
const Copy = styled.p`color:var(--muted); line-height:1.6;`;
const Button = styled.button`margin-top:1.5rem; border:0; border-radius:999px; padding:.8rem 1rem; color:var(--accent-contrast); background:var(--accent); cursor:pointer; font-weight:700;`;

export default function PrivateShell() { return <Shell><Panel><Kicker>Private area</Kicker><Heading>Coming soon.</Heading><Copy>This route is reserved for future private notes and tools. The authentication boundary is ready for a Cognito or Google OAuth integration.</Copy><Button type="button" disabled>Sign in will be connected later</Button></Panel></Shell>; }
