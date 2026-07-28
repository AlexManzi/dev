"use client";

import Link from "next/link";
import styled from "styled-components";

const Shell = styled.main`width:min(1000px,calc(100% - 2.5rem)); margin:auto; padding:5rem 0 6rem;`;
const Kicker = styled.p`color:var(--accent); font-size:.78rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase;`;
const Title = styled.h1`font-size:clamp(3rem,8vw,6rem); line-height:.9; letter-spacing:-.08em; margin:.8rem 0 1rem;`;
const Intro = styled.p`color:var(--muted); font-size:1.2rem; max-width:42ch; line-height:1.5;`;
const List = styled.div`display:grid; margin-top:4rem;`;
const Card = styled(Link)`display:grid; grid-template-columns:1fr auto; gap:1rem; padding:1.5rem 0; border-top:1px solid var(--line); &:hover h2{color:var(--accent);}`;
const Meta = styled.p`color:var(--muted); font-size:.78rem; text-transform:uppercase; letter-spacing:.08em;`;
const Heading = styled.h2`font-size:clamp(1.5rem,3vw,2.4rem); letter-spacing:-.05em; margin:.45rem 0; transition:color .2s;`;
const Excerpt = styled.p`color:var(--muted); line-height:1.5; max-width:55ch;`;
const Arrow = styled.span`color:var(--accent); font-size:.8rem; font-family:monospace; text-transform:uppercase;`;

export default function BlogIndex({ posts }) { return <Shell><Kicker>Notes from the dev</Kicker><Title>Blog</Title><Intro>Notes on building products, writing software, and turning AI into something practical.</Intro><List>{posts.map(post=><Card key={post.slug} href={`/blog/${post.slug}`}><div><Meta>{post.category} · {post.readingTime} · {post.date}</Meta><Heading>{post.title}</Heading><Excerpt>{post.excerpt}</Excerpt></div><Arrow>Read</Arrow></Card>)}</List></Shell>; }
