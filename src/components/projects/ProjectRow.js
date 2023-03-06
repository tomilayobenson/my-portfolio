import React from 'react';
import { Row, Col } from 'reactstrap';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../../data/PROJECTS';

const ProjectRow = () => {
    return (
        <>
            <Row>
                {
                    PROJECTS.map((project, idx) => {
                        return (
                            <ProjectCard project={project} key={idx} />
                        )
                    })
                }
            </Row>
        </>
    )
}

export default ProjectRow