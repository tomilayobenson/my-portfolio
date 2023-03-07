import React from 'react'
import animatedlogo from '../images/animatedlogo.gif'

const Loading = () => {
  return (
    <div class="d-flex flex-column justify-content-center align-items-center" style={{height:'100vh', backgroundColor:'var(--dark)'}}>
        <img src={animatedlogo} alt="Animated logo" width="350px" height="auto" />
    </div>
  )
}

export default Loading