import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Container } from 'reactstrap';
import Experience from './components/Experience';
import Footer from './components/Footer';
import {Button} from 'reactstrap';
import { useState } from 'react';

function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div className="App" style={{backgroundColor: darkTheme?"var(--dark)":"var(--plain)", color:darkTheme?"var(--plain)":"var(--dark)"}}>
      <Hero />
      <Header />
      <div className='mx-3'>
        <Bio />
        <Projects />
        <Experience darkTheme={darkTheme}/>
        <Contact />
        <div style={{position:"sticky", bottom:0, left:0}}><Button onClick={()=>setDarkTheme(!darkTheme)} className={darkTheme?"btn-customLight rounded-pill px-4 py-3":"btn-customDark rounded-pill px-4 py-3"} size="md" target='_blank'>{darkTheme?"Light":"Dark"}</Button></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
