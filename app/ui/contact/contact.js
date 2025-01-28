"use client"

import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { SelfItem, ContentWrapper, AssessmentContainer, SectionListWrapper } from "../globals"
import { Octokit } from "octokit"

export default function Contact() {
    const [test, setTest] = useState(null);

const octokit = new Octokit({
  auth: process.env.GHSECRET, 
});

useEffect(() => {
    const getUserData = async () => {
        try {
          const { data } = await octokit.rest.users.getAuthenticated();
          setTest(data);
        } catch (error) {
          console.error('Error fetching user data:', error);
          throw error;
        }
      };

      getUserData()
}, [])

console.log(test)

    return (
        <ContentWrapper>
        </ContentWrapper>
    )
};