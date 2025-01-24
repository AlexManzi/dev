"use client"

import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavWrapper = styled.div`
    position: absolute;
    height: 64px;
    width: 100%;
`;

const NavItems = styled.div`
    display: flex;
    line-height: 64px;
    padding: 0rem 3rem;
    justify-content: end;
    gap: 2rem;

    @media (max-width: 980px) { 
        padding: 0rem 1.5rem;
    }

    @media (max-width: 430px) { 
        padding: 0rem 1rem;
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
    margin-left: 3rem;
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
        <NavWrapper>
            <NavItems>
                <NavLink href="/" className={linkActive === "Profile" ? "active" : ''}>Profile</NavLink>
                <NavLink href="/contact" className={linkActive === "Contact" ? "active" : ''}>Contact</NavLink>
            </NavItems>
        </NavWrapper>
    )
};