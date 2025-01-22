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
`;

export default function Navbar() {

    return (
        <NavWrapper>
            <NavItems>
                <NavLink href="/">Profile</NavLink>
                <NavLink href="/work">Work</NavLink>
            </NavItems>
        </NavWrapper>
    )
};