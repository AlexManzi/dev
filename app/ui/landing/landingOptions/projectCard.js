"use client"

import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { ProjectItemWrapper, ProjectImage, ProjectItemFilter } from "../../globals"

export default function ProjectCard({ project, cardSelected, setCardSelected, idx }) {

    console.log("card selected", cardSelected);
    console.log("current", idx);

    return (
        <ProjectItemWrapper onClick={(e) => e.stopPropagation()}  $image={project.image.src} $isselected={cardSelected === idx ? true : false} className={cardSelected !== null ? 'smallIcon' : ''}>
            <ProjectItemFilter onClick={() => setCardSelected(idx)} $isselected={cardSelected === idx ? true : false} className={cardSelected !== null ? 'smallIcon' : ''} />
            <ProjectImage onClick={() => setCardSelected(idx)} src={project.image} alt="project image"  $isselected={cardSelected === idx ? true : false} className={cardSelected !== null ? 'smallIcon' : ''}/>
        </ProjectItemWrapper>
    )
};