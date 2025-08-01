import SideNavbar from './mycomponent/Sidebar';
import Home from './mycomponent/Home';
import About from './mycomponent/About';
import Projects from './mycomponent/Projects';
import Education from './mycomponent/Education';
import Skills from './mycomponent/Skills';
import Contact from './mycomponent/Contact';

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <SideNavbar />
      <div className="md:ml-16">
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
