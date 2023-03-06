import React from 'react'
import { Container } from 'reactstrap';
import headshot from '../images/Tomilayo Benson Headshot.jpg'
const Hero = () => {
  return (
    <div className="jumbotron jumbotron-fluid m-0 text-center text-white" id='home'>
      <Container className='text-center'>
        <img src={headshot} alt="Tomilayo's headshot" class="img-thumbnail rounded-circle" width='250px' height='auto' />
        <p className="mt-3 lead">MY NAME IS</p>
        <h1 className='typewriter'>TOMILAYO AFOLABI</h1>
        <hr className="my-3" style={{ width: '60%', margin: '0 auto', border: '0 none', height: '2px', color: 'white', backgroundColor: 'white' }} />
        <h4 className=''>FULL STACK WEB DEVELOPER</h4>
        <a href="#bio">
          <div class="chevronContainer">
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
          </div>
        </a>
      </Container>

    </div>
  )
}

export default Hero