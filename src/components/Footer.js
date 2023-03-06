import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Footer = () => {
    return (
        <div  className="text-center mt-5 py-5" style={{backgroundColor:"var(--dark)"}}>
            <Row>
                <Col>
                    <div>
                        <a href="https://www.linkedin.com/in/tomilayoafolabi/" style={{color:'var(--orange)', padding:"0 10px"}}><i class="fa fa-linkedin fa-2x"></i></a>{" "}
                        <a href="https://github.com/tomilayobenson/" style={{color:'var(--orange)', padding:"0 10px"}}><i class="fa fa-github fa-2x"></i></a>
                    </div>
                    <div>
                        <a role="button" href="tel:+14034736994" style={{color:'var(--orange)'}}><i class="fa fa-phone"></i>+1-403-473-6994</a><br/>
                        <a role="button" href="mailto:tomilayoafolabi@gmail.com" style={{color:'var(--orange)'}}><i class="fa fa-envelope-o"></i> tomilayoafolabi@gmail.com</a>
                    </div>
                    <p className='text-white'>Designed by Tomilayo Afolabi</p>
                </Col>
            </Row>

        </div>
    )
}

export default Footer