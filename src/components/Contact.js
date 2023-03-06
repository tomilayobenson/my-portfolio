import React from 'react'
import { Button, Container, Row, Col } from 'reactstrap'

const Contact = () => {
  return (
    <Container>
      <div id="contact" className='mb-5'>
        <Row>
          <Col sm={{ offset: 3, size: 6 }} className="text-center">
            <h3 id="experience" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>GET IN TOUCH</h3>
            <p>I am currently looking for an opportunity to express my web design and development skills in creating meaningful digital experiences</p>
            <Button href="mailto:tomilayoafolabi@gmail.com" tag="a" className="btn-custom rounded-pill px-4 py-3" size="md" target='_blank'><i class="fa fa-envelope-o"></i> Contact Me</Button>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Contact