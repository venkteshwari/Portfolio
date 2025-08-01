import { Linkedin, Github, Twitter } from 'lucide-react';
import myPhoto from '../assets/myphoto.jpg';
import { Typewriter } from 'react-simple-typewriter';
import ParticlesBg from './ParticlesBg';

export default function Home() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 md:pt-0 overflow-x-hidden"
    >
      {/* Background Particles */}
      <ParticlesBg />

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl w-full z-10">
        {/* Profile Image */}
        <div className="relative w-44 h-44 sm:w-60 sm:h-60 rounded-full shadow-xl bg-white flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-purple-200 opacity-30 blur-3xl z-0" />
          <img
            src={myPhoto}
            alt="Venkteshwari Ambalakaran"
            className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white"
          />
        </div>

        {/* Content */}
        <div className="text-center md:text-left max-w-xl w-full px-2">
          <p className="text-sm text-gray-500 uppercase mb-2">Hi there! I'm</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
            <span className="text-purple-600">VENKTESHWARI</span> AMBALAKARAN
          </h1>

          <p className="text-base sm:text-lg text-gray-600 mb-6">
            A{' '}
            <span className="text-purple-600 font-semibold">
              <Typewriter
                words={['MERN Stack Developer', 'Data Analyst']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </p>

          {/* Resume + Icons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a
              href="/DATA_Analyst.pdf"
              target="_blank"
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition shadow"
            >
              Resumé
            </a>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/venkteshwari-ambalakaran-072498356/"
                target="_blank"
                className="p-2 bg-white rounded-md shadow hover:bg-purple-100 transition"
              >
                <Linkedin className="w-5 h-5 text-purple-600" />
              </a>
              <a
                href="https://github.com/venkteshwari"
                target="_blank"
                className="p-2 bg-white rounded-md shadow hover:bg-purple-100 transition"
              >
                <Github className="w-5 h-5 text-purple-600" />
              </a>
              <a
                href="https://x.com/eshaAmbalakaran?t=U7YT9hg8HWfGFBquklAXjg&s=09"
                target="_blank"
                className="p-2 bg-white rounded-md shadow hover:bg-purple-100 transition"
              >
                <Twitter className="w-5 h-5 text-purple-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
