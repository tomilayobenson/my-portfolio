import React from 'react';
import { Card, CardBody, CardText, Col } from 'reactstrap';

const ProjectCard = ({ project }) => {
    return (
        <Col sm={4} className="mb-4">
            <Card className="mb-4 mb-sm-0 projectCard">
                <img
                    alt={project.title}
                    src={project.image}
                    width="100%"
                    class="rounded-top"
                />
                <CardBody>
                    <h5 className="card-title tx-orange">{project.title}</h5>
                    <CardText>{project.description}</CardText>
                    {project.github && (<a href={project.github} target="_blank"><i class="fa fa-github fa-2x iconCol" aria-hidden="true"></i></a>)}
                    {project.link && (<a href={project.link} target="_blank"><i class="fa fa-external-link fa-2x iconCol" aria-hidden="true"></i></a>)}
                </CardBody>
            </Card>
        </Col>
    )
}

export default ProjectCard;