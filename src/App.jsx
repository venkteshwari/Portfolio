// src/App.jsx
import SideNavbar from './mycomponent/Sidebar';
import Home from './mycomponent/Home';
import About from './mycomponent/About';
import Projects from './mycomponent/Projects';
import Education from './mycomponent/Education';
import Skills from './mycomponent/Skills';
import Contact from './mycomponent/Contact';
import ParticlesBg from './mycomponent/ParticlesBg';

function App() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Global Particles Background */}
      <ParticlesBg />

      {/* Sidebar */}
      <SideNavbar />

      {/* Main Content */}
      <div className="md:ml-16 relative z-10">
        <Home />
        <About />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
