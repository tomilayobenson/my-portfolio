import React from 'react'
import { Container } from 'reactstrap'
import ProjectRow from './projects/ProjectRow'

const Projects = () => {
  return (
    <Container>
      <h3 className='text-center' id="projects" style={{paddingTop:'4rem', paddingBottom:'3rem'}}>RECENT PROJECTS</h3>
      <ProjectRow/>
    </Container>
   
  )
}

export default Projects