"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";

const outfit = localFont({ src: "../font/Outfit-VariableFont_wght.ttf" });

const NavShell = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 40;
  padding: 0;
`;

const NavBar = styled.nav`
  position: relative;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.72);
  border-bottom: 1px solid rgba(43, 47, 51, 0.08);
  box-shadow: 0 10px 35px rgba(104, 133, 166, 0.08);
  backdrop-filter: blur(14px);
  z-index: 2;

  @media (max-width: 720px) {
    padding: 1rem 1.25rem;
  }
`;

const Brand = styled(Link)`
  position: relative;
  z-index: 3;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const DesktopNavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media (max-width: 470px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  padding: 0.6rem 0.9rem;
  border-radius: 4px;
  color: ${(props) =>
    props.$active ? "rgba(255, 255, 255, 0.98)" : "var(--foreground)"};
  background: ${(props) =>
    props.$active ? "rgba(43, 47, 51, 0.92)" : "transparent"};
  transition: background 180ms ease, color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${(props) =>
      props.$active ? "rgba(43, 47, 51, 0.92)" : "rgba(43, 47, 51, 0.06)"};
  }
`;

const MenuButton = styled.button`
  display: none;
  position: relative;
  z-index: 3;
  width: 44px;
  height: 44px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  @media (max-width: 470px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

const MenuIcon = styled.span`
  position: relative;
  width: 22px;
  height: 16px;
`;

const MenuLine = styled.span`
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--foreground);
  transition: transform 0.2s ease, opacity 0.2s ease, top 0.2s ease;

  &:nth-child(1) {
    top: ${(props) => (props.$open ? "7px" : "0")};
    transform: ${(props) => (props.$open ? "rotate(45deg)" : "none")};
  }

  &:nth-child(2) {
    top: 7px;
    opacity: ${(props) => (props.$open ? "0" : "1")};
  }

  &:nth-child(3) {
    top: ${(props) => (props.$open ? "7px" : "14px")};
    transform: ${(props) => (props.$open ? "rotate(-45deg)" : "none")};
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 470px) {
    display: flex;
    position: fixed;
    inset: 0;
    z-index: 1;
    background:
      radial-gradient(circle at top left, rgba(193, 221, 249, 0.45), transparent 34%),
      radial-gradient(circle at 85% 10%, rgba(205, 226, 221, 0.4), transparent 28%),
      linear-gradient(180deg, rgba(248, 250, 252, 0.96) 0%, rgba(244, 246, 248, 0.98) 100%);
    backdrop-filter: blur(18px);
    transform: translateY(${(props) => (props.$open ? "0" : "-100%")});
    opacity: ${(props) => (props.$open ? "1" : "0")};
    pointer-events: ${(props) => (props.$open ? "auto" : "none")};
    transition: transform 0.28s ease, opacity 0.28s ease;
    align-items: center;
    justify-content: center;
    padding: 5.5rem 1.5rem 2rem;
  }
`;

const MobileMenuItems = styled.div`
  display: grid;
  justify-items: center;
  gap: 1.25rem;
`;

const MobileNavLink = styled(Link)`
  font-size: clamp(1.6rem, 7vw, 2.4rem);
  letter-spacing: -0.04em;
  color: ${(props) =>
    props.$active ? "rgba(43, 47, 51, 0.98)" : "rgba(43, 47, 51, 0.68)"};
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: rgba(43, 47, 51, 0.98);
    transform: translateY(-1px);
  }
`;

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const activeItem = pathname === "/contact" ? "contact" : "work";

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <NavShell className={outfit.className}>
      <NavBar>
        <Brand href="/">Alex Manzi</Brand>
        <DesktopNavItems>
          <NavLink href="/" $active={activeItem === "work"}>
            Work
          </NavLink>
          <NavLink href="/#projects" $active={false}>
            Projects
          </NavLink>
          <NavLink href="/contact" $active={activeItem === "contact"}>
            Contact
          </NavLink>
        </DesktopNavItems>
        <MenuButton
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <MenuIcon>
            <MenuLine $open={menuOpen} />
            <MenuLine $open={menuOpen} />
            <MenuLine $open={menuOpen} />
          </MenuIcon>
        </MenuButton>
      </NavBar>
      <MobileMenu $open={menuOpen}>
        <MobileMenuItems>
          <MobileNavLink href="/" $active={activeItem === "work"} onClick={() => setMenuOpen(false)}>
            Work
          </MobileNavLink>
          <MobileNavLink href="/#projects" $active={false} onClick={() => setMenuOpen(false)}>
            Projects
          </MobileNavLink>
          <MobileNavLink
            href="/contact"
            $active={activeItem === "contact"}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </MobileNavLink>
        </MobileMenuItems>
      </MobileMenu>
    </NavShell>
  );
}
