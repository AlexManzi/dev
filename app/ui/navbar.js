"use client"

import React from "react"
import styled from "styled-components"
import Link from "next/link";

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
    display: flex;
    align-items: center;
    gap: .5rem;
    color: black;
    font-size: 1.1rem;
    position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 19px;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: black;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }

  &:hover{
    &::after {
      opacity: 1;
      transform: translate3d(0, 0.2em, 0);
    }
  }

  &:focus {
    &::after {
      opacity: 1;
      transform: translate3d(0, 0.2em, 0);
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
`;

export default function Navbar() {

    return (
        <NavWrapper>
            <NavItems>
                <NavLink href="/">Profile</NavLink>
                <NavLink href="/contact">Contact</NavLink>
            </NavItems>
        </NavWrapper>
    )
};