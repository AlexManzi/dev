"use client"

import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { ProjectItemWrapper, ProjectImage } from "../../globals"

export default function ProjectCard({ project, cardSelected, setCardSelected, idx }) {

    return (
        <ProjectItemWrapper onClick={() => setCardSelected(idx)}>
            <ProjectImage src={project.image} alt="Project Image" $selected={cardSelected} $current={idx}/> 
        </ProjectItemWrapper>
    )
};