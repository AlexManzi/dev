"use client"

import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Outfit } from '@next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const NavWrapper = styled.div`
    position: relative;
    // height: 64px;
    // width: 100%;
`;

const NavItems = styled.div`
    display: flex;
    position: absolute;
    line-height: 64px;
    // padding: 0rem 2rem;
    right: 2rem;
    gap: 2rem;

    @media (max-width: 950px) { 
            gap: 1rem;
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  color: black;
  text-decoration: none;
  display: block;
  position: relative;
  padding: 0.1em 0;
  height: 50px;
  z-index: 5;

  @media (max-width: 1110px) {
    margin-left: 1rem;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.15em;
    background-color: white;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }

  &:hover {
    &::after {
      opacity: 1;
      transform: translate3d(0, 0.2em, 0);
    }
  }

  &::focus {
    &::after {
      opacity: 1;
      transform: translate3d(0, 0em, 0);
    }
  }

  &.active {
    &::after {
      opacity: 1;
      transform: scale(1);
    }
  }

  &::after { 
    opacity 1;
    transform: scale(0);
    transform-origin: center;
  }

  &:hover {
    &::after {
      transform: scale(1);
    }
  }

  &:focus {
    &::after {
      transform: scale(1);
    }
  }

  &::after {
    background-color: ${(props) => (props.$isIntersecting ? "white" : "black")};
    background-color: ${(props) => props.$notLandingNav && "black"};
  }
`;

export default function Navbar() {
    const[linkActive, setLinkActive] = useState(null);
    const path = usePathname();

    console.log(path)

    useEffect(() => {
        if (path === "/") {
            setLinkActive("Profile")
        }
        if (path === "/contact") {
            setLinkActive("Contact")
        }
    }, [path]);


    return (
        <NavWrapper className={outfit.className}>
            <NavItems>
                <NavLink href="/" className={linkActive === "Profile" ? "active" : ''}>Profile</NavLink>
                <NavLink href="/contact" className={linkActive === "Contact" ? "active" : ''}>Contact</NavLink>
            </NavItems>
        </NavWrapper>
    )
};