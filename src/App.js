import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { Button } from 'reactstrap';
import { useEffect, useState } from 'react';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [darkTheme, setDarkTheme] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timeout)
  },[])

if (isLoading) {
  return (
    <Loading />
  )
}
return (
  <div className="App" style={{ backgroundColor: darkTheme ? "var(--dark)" : "var(--plain)", color: darkTheme ? "var(--plain)" : "var(--dark)" }}>
    <Hero />
    <Header />
    <div className='mx-3'>
      <Bio />
      <Projects />
      <Experience darkTheme={darkTheme} />
      <Contact />
      <div style={{ position: "sticky", bottom: 0, left: 0 }}><Button onClick={() => setDarkTheme(!darkTheme)} className={darkTheme ? "btn-customLight rounded-pill px-4 py-3" : "btn-customDark rounded-pill px-4 py-3"} size="md" target='_blank'>{darkTheme ? "Light" : "Dark"}</Button></div>
    </div>
    <Footer />
  </div>
);
}

export default App;
