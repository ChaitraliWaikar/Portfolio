import './App.css'
import Navbar from './components/Navbar';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useState } from 'react';

function App() {
 
  let [darkMode, setDarkMode] = useState(false);

  function change()
  {
    // func to simul change the boolean value to switch bet dark and bright modes
    setDarkMode((prev)=> {return !prev});
  }

  return (
    <>
      <div className="main">
        <section id="about-me" className="about-me">
          <div className="section-content">
          <Navbar darkMode={darkMode} change={change}/>
          <Aboutme darkMode={darkMode} change={change}/>
          </div>
        </section>

        <section id="projects" className="projects">
        <div className="section-content">
         <Projects darkMode={darkMode} change={change} />
          </div>
        </section>

        <section id="skills" className="skills">
        <div className="section-content">
          <Skills darkMode={darkMode} change={change}/>
          </div>
        </section>

        <section id="contact" className="contact">
        <div className="section-content">
          <Contact darkMode={darkMode} change={change}/>
          </div>
        </section>
      </div>
    </>
  )
}

export default App