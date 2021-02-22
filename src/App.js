import React from 'react';
import MyNavbar from './components/Nav/Navbar'
import About from './components/About/Aboutme'
import Skills from './components/Skills/skills'
import Projects from './components/Projects/project'
import Contactme from './components/contact/contactme'
import './App.css'
function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Contactme/>
    </div>
  );
}

export default App;