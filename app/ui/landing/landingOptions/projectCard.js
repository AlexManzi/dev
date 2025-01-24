"use client"

import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { ProjectItemWrapper, ProjectImage, ProjectItemFilter } from "../../globals"

export default function ProjectCard({ project, cardSelected, setCardSelected, idx }) {

    return (
        <ProjectItemWrapper onClick={() => setCardSelected(idx)} $image={project.image.src}>
            <ProjectItemFilter></ProjectItemFilter>
        </ProjectItemWrapper>
    )
};