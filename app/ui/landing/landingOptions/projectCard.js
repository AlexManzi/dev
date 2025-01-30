"use client"

import React from "react"
import { ProjectItemWrapper, ProjectImage, ProjectItemFilter, ProjectHeading, ProjectDescription, ProjectLink, ProjectBioAreaMobile } from "../../globals"

export default function ProjectCard({ project, cardSelected, setCardSelected, idx, oneCard }) {

    return (
        <ProjectItemWrapper onClick={(e) => e.stopPropagation()} $image={project.image.src} $isselected={cardSelected === idx ? true : false} className={cardSelected !== null ? 'smallIcon' : ''} id={oneCard ? 'oneCard' : ''}>
                <ProjectItemFilter onClick={() => setCardSelected(idx)} $isselected={cardSelected === idx ? true : false} className={cardSelected !== null ? 'smallIcon' : ''} />
                <ProjectImage onClick={() => setCardSelected(idx)} src={project.image} alt="project image"  $isselected={cardSelected === idx ? true : false} className={cardSelected !== null ? 'smallIcon' : ''}/>
            <ProjectBioAreaMobile $cardselected={cardSelected === idx ? true : false}>
                <ProjectHeading $show={project}>{project ? project.name : ''}</ProjectHeading>
                <ProjectDescription $show={project}>{project ? project.description: ''}</ProjectDescription>
                <ProjectDescription $show={project}>{project ? project.tech: ''}</ProjectDescription>
                <ProjectLink  passHref={true} href={project ? project.link : '/'}  $show={project}>{project? 'See this app live' : ''}</ProjectLink>
            </ProjectBioAreaMobile>
        </ProjectItemWrapper>
    )
};