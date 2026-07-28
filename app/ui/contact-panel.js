"use client";

import { createContext, useContext, useState } from "react";
import styled from "styled-components";
import { ContactData } from "@/app/data/contact";

const ContactPanelContext = createContext(null);

const Backdrop = styled.div`position:fixed; inset:0; z-index:39; background:transparent;`;
const Band = styled.aside`position:fixed; right:0; bottom:0; left:0; z-index:40; padding:1.5rem; color:var(--foreground); background:var(--surface); border-top:1px solid var(--accent); box-shadow:0 -14px 38px color-mix(in srgb,var(--foreground) 15%,transparent); transform:translateY(${p=>p.$open?"0":"105%"}); transition:transform .3s ease;`;
const Content = styled.div`display:flex; align-items:flex-start; justify-content:space-between; gap:2rem; width:min(1180px,100%); margin:auto; @media(max-width:700px){flex-direction:column; gap:1rem;}`;
const Kicker = styled.p`color:var(--accent); font-family:monospace; font-size:.72rem; letter-spacing:.1em; text-transform:uppercase;`;
const Heading = styled.h2`margin-top:.4rem; font-size:clamp(1.5rem,3vw,2.3rem); letter-spacing:-.06em;`;
const Copy = styled.p`max-width:48ch; margin-top:.45rem; color:var(--muted); line-height:1.5;`;
const SocialSection = styled.div`display:grid; gap:.65rem; width:max-content; max-width:100%; margin-top:1.4rem; margin-left:auto; padding-top:1.2rem; border-top:1px solid var(--line); @media(max-width:700px){width:100%; margin-left:0;}`;
const SocialHeading = styled.p`font-size:.78rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase;`;
const Links = styled.div`display:flex; flex-wrap:wrap; gap:1rem;`;
const SocialLink = styled.a`position:relative; color:var(--accent); font-size:.9rem; font-weight:700; text-decoration:none; &::after{content:""; position:absolute; right:0; bottom:-.2rem; left:0; height:2px; background:currentColor; transform:scaleX(0); transform-origin:left; transition:transform .2s ease;} &:hover::after{transform:scaleX(1);}`;
const Newsletter = styled.div`display:grid; gap:.65rem; width:min(100%,420px); margin-top:1.4rem; padding-top:1.2rem; border-top:1px solid var(--line); @media(max-width:700px){width:100%;}`;
const NewsletterLabel = styled.p`font-size:.78rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase;`;
const NewsletterForm = styled.form`display:flex; gap:.5rem; width:min(100%,420px); @media(max-width:520px){flex-direction:column;}`;
const EmailInput = styled.input`min-width:0; flex:1; border:1px solid var(--line); border-radius:4px; padding:.75rem .8rem; color:var(--foreground); background:var(--background); outline:none; &:focus{border-color:var(--accent);}`;
const SubscribeButton = styled.button`border:1px solid var(--accent); border-radius:4px; padding:.75rem .9rem; color:var(--accent-contrast); background:var(--accent); cursor:pointer; font-family:monospace; font-size:.76rem; text-transform:uppercase; transition:transform .2s ease, background .2s ease, box-shadow .2s ease; &:hover{transform:translateY(-2px); box-shadow:0 6px 14px color-mix(in srgb,var(--foreground) 16%,transparent);}`;
const Success = styled.p`color:var(--accent); font-size:.85rem;`;
const CloseButton = styled.button`position:absolute; top:1rem; right:1.5rem; border:0; background:transparent; color:var(--muted); cursor:pointer; font-size:1.2rem; transition:color .2s ease, transform .2s ease; &:hover{color:var(--foreground); transform:rotate(90deg);}`;

export function ContactPanelProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterJoined, setNewsletterJoined] = useState(false);
  const handleNewsletterSubmit = (event) => { event.preventDefault(); setNewsletterJoined(true); };
  return <ContactPanelContext.Provider value={{ open, setOpen }}>{children}{open && <Backdrop onClick={()=>setOpen(false)} aria-hidden="true" />}<Band $open={open} aria-hidden={!open}><CloseButton type="button" aria-label="Close contact panel" onClick={()=>setOpen(false)}>×</CloseButton><Content><div><Kicker>Open to good problems</Kicker><Heading>Let&apos;s make something useful.</Heading><Copy>Product-minded engineering, thoughtful interfaces, and practical AI for complicated work.</Copy></div><SocialSection><SocialHeading>Connect with me</SocialHeading><Links>{ContactData.socials.map(social=><SocialLink key={social.name} href={social.href} target="_blank" rel="noreferrer">{social.name}</SocialLink>)}</Links></SocialSection><Newsletter><NewsletterLabel>Join the newsletter</NewsletterLabel>{newsletterJoined ? <Success>You&apos;re on the list. Thanks for joining.</Success> : <NewsletterForm onSubmit={handleNewsletterSubmit}><EmailInput type="email" required value={newsletterEmail} onChange={(event)=>setNewsletterEmail(event.target.value)} placeholder="you@example.com" aria-label="Email address" /><SubscribeButton type="submit">Subscribe</SubscribeButton></NewsletterForm>}</Newsletter></Content></Band></ContactPanelContext.Provider>;
}

export function useContactPanel() {
  return useContext(ContactPanelContext);
}
