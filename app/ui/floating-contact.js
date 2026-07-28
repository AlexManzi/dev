"use client";

import styled from "styled-components";
import { useContactPanel } from "./contact-panel";

const FloatingContact = styled.button`position:fixed; right:1.5rem; bottom:1.5rem; z-index:30; display:inline-flex; align-items:center; padding:.7rem .85rem; border:1px solid var(--accent); border-radius:4px; color:var(--accent-contrast); background:var(--accent); box-shadow:0 8px 22px color-mix(in srgb,var(--foreground) 18%,transparent); font-family:monospace; font-size:.76rem; letter-spacing:.06em; text-transform:uppercase; white-space:nowrap; cursor:pointer; transition:transform .2s ease, box-shadow .2s ease; &:hover{transform:translateY(-3px); box-shadow:0 12px 26px color-mix(in srgb,var(--foreground) 24%,transparent);} @media(max-width:650px){right:1rem; bottom:1rem;}`;
const ContactArrow = styled.span`display:inline-block; margin-left:.3rem; font-size:1rem; line-height:1; vertical-align:middle; transform:translateY(-.02em) scaleY(1.3); transform-origin:center;`;

export default function FloatingContactButton() {
  const { setOpen } = useContactPanel();
  return <FloatingContact type="button" onClick={()=>setOpen(true)}>Contact <ContactArrow>↗</ContactArrow></FloatingContact>;
}
