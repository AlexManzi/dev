"use client";

import Link from "next/link";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const Shell = styled.main`width:min(760px,calc(100% - 2.5rem)); margin:auto; padding:5rem 0 6rem;`;
const Back = styled(Link)`color:var(--accent); font-weight:700;`;
const Kicker = styled.p`color:var(--accent); font-size:.78rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; margin-top:4rem;`;
const Title = styled.h1`font-size:clamp(3rem,8vw,6rem); line-height:.9; letter-spacing:-.08em; margin:.8rem 0 1rem;`;
const Meta = styled.p`color:var(--muted);`;
const Body = styled.article`display:grid; gap:1.4rem; margin-top:3rem; font-size:1.15rem; line-height:1.75; & p{margin:0;} & h2{margin:1.5rem 0 0;} & a{color:var(--accent); font-weight:700;} & ul,&ol{display:grid; gap:.6rem; padding-left:1.5rem;}`;

export default function BlogPost({ post }) { return <Shell><Back href="/blog">← Back to blog</Back><Kicker>{post.category}</Kicker><Title>{post.title}</Title><Meta>{post.date} · {post.readingTime}</Meta><Body><ReactMarkdown>{post.body}</ReactMarkdown></Body></Shell>; }
