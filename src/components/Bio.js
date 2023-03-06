import React from 'react'
import { Col, Container, Row, Button } from 'reactstrap'
import SkillsList from './skills/SkillsList'
import myResume  from '../data/Tomilayo_Afolabi_Resume_V1.0.pdf'

const Bio = () => {
  return (
    <Container>
      <h3 className="text-center" id="bio" style={{paddingTop:'4rem', paddingBottom:'3rem'}}>ABOUT ME</h3>
      <Row className="">
        <Col md={{ offset: 2, size: 4 }} style={{ borderRight: '1px solid #C6C6C6' }}>
          <p class="text-left">An enthusiastic and motivated web developer with a strong background in SharePoint/Web administration, design and development. Has an excellent understanding of the MERN stack and has completed several personal projects demonstrating mastery of web design. Also familiar with other popular front-end frameworks such as Bootstrap. Overall, a passionate programmer who having expanded her skill set in full stack web development, seeks an opportunity to scale the career ladder.</p>
        </Col>
        <Col md={{ size: 4 }} className="mx-2">
          <p id="skills">Here are a few technologies I’ve been working with recently:</p>
          <SkillsList />
        </Col>
      </Row>
      <div className="text-center"><Button href={myResume} tag="a" className="btn-custom rounded-pill px-4 py-3 mt-5" size="md" target='_blank'><i class="fa fa-download" aria-hidden="true"></i> My Resume</Button></div>
    </Container>

  )
}

export default Bio