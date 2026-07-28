"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";
import { useTheme } from "./theme-provider";

const Header = styled.header`
  position: sticky; top: 0; z-index: 20; border-bottom: 1px solid var(--line);
  background: color-mix(in srgb, var(--background) 88%, transparent); backdrop-filter: blur(14px);
`;
const Bar = styled.nav`
  width: min(1180px, calc(100% - 2.5rem)); margin: auto; min-height: 72px; display: flex;
  align-items: center; justify-content: space-between; gap: 1rem;
`;
const Brand = styled(Link)`font-weight: 800; letter-spacing: -0.04em; font-size: 1.2rem;`;
const Links = styled.div`display: flex; align-items: center; gap: .4rem; margin-left:auto; @media(max-width:650px){display:${p=>p.$open?"grid":"none"}; position:absolute; top:72px; left:0; right:0; padding:1rem 1.25rem; background:var(--background); border-bottom:1px solid var(--line);}`;
const NavLink = styled(Link)`position:relative; padding:.55rem .5rem; color:${p=>p.$active?"var(--foreground)":"var(--muted)"}; transition:color .2s ease; &::after{content:""; position:absolute; bottom:.25rem; left:.5rem; width:calc(100% - 1rem); max-width:100%; height:2px; background:var(--accent); transform:scaleX(${p=>p.$active?1:0}); transform-origin:left; transition:transform .2s ease;} &:hover{color:var(--foreground);} &:hover::after{transform:scaleX(1);} @media(max-width:650px){justify-self:start;}`;
const Controls = styled.div`display:flex; align-items:center; gap:.5rem;`;
const ThemePicker = styled.div`position:relative;`;
const ThemeButton = styled.button`display:flex; align-items:center; gap:.45rem; border:0; border-radius:0; padding:.55rem .25rem; color:var(--muted); background:transparent; cursor:pointer; font-size:.8rem; transition:color .2s ease; &:hover{color:var(--foreground);}`;
const ThemeDot = styled.span`width:.55rem; height:.55rem; border-radius:50%; background:var(--accent); box-shadow:0 0 0 3px var(--soft);`;
const MenuButton = styled.div`display:none; width:1.5rem; height:1.5rem; align-items:center; justify-content:center; color:var(--foreground); cursor:pointer; @media(max-width:650px){display:flex;}`;
const MenuIcon = styled.span`display:grid; gap:5px; width:1.1rem;`;
const MenuLine = styled.span`
  display:block; width:100%; height:2px; border-radius:999px; background:currentColor;
  transform-origin:center; transition:transform .25s ease, opacity .2s ease;
  &:nth-child(1){transform:${p=>p.$open?"translateY(7px) rotate(45deg)":"none"};}
  &:nth-child(2){opacity:${p=>p.$open?0:1}; transform:${p=>p.$open?"scaleX(0)":"none"};}
  &:nth-child(3){transform:${p=>p.$open?"translateY(-7px) rotate(-45deg)":"none"};}
`;

const themeOptions = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "xp", label: "Windows XP" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const isActive = (path) => path === "/" ? pathname === "/" : pathname.startsWith(path);
  const selectedTheme = themeOptions.find((option) => option.value === theme) || themeOptions[0];
  const cycleTheme = () => {
    const currentIndex = themeOptions.findIndex((option) => option.value === theme);
    const nextTheme = themeOptions[(currentIndex + 1) % themeOptions.length];
    setTheme(nextTheme.value);
  };

  return <Header><Bar>
    <Brand href="/">Alex Manzi</Brand>
    <Links id="primary-navigation" $open={open}>
      <NavLink href="/" $active={isActive("/")} onClick={()=>setOpen(false)}>Work</NavLink>
      <NavLink href="/agents" $active={isActive("/agents")} onClick={()=>setOpen(false)}>Agents</NavLink>
      <NavLink href="/blog" $active={isActive("/blog")} onClick={()=>setOpen(false)}>Blog</NavLink>
    </Links>
    <Controls>
      <ThemePicker>
        <ThemeButton type="button" aria-label={`Switch theme. Current theme: ${selectedTheme.label}`} onClick={cycleTheme}>
          <ThemeDot />{selectedTheme.label}
        </ThemeButton>
      </ThemePicker>
      <MenuButton role="button" tabIndex="0" aria-label={open ? "Close navigation" : "Open navigation"} aria-controls="primary-navigation" aria-expanded={open} onClick={()=>setOpen(value=>!value)} onKeyDown={(event)=>{if(event.key === "Enter" || event.key === " "){event.preventDefault(); setOpen(value=>!value);}}}>
        <MenuIcon aria-hidden="true"><MenuLine $open={open} /><MenuLine $open={open} /><MenuLine $open={open} /></MenuIcon>
      </MenuButton>
    </Controls>
  </Bar></Header>;
}
