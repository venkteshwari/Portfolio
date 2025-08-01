import myPhoto from '../assets/myphoto.jpg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-purple-100 px-4 sm:px-8 md:px-16 py-16 flex items-center justify-center"
    >
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-3 border-l-8 border-purple-600 pl-4">
            About Me
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl pl-4">
            I'm a passionate <span className="text-purple-600 font-semibold">MERN Stack Developer</span> and <span className="text-purple-600 font-semibold">Data Analyst</span> who loves building dynamic web apps and drawing insights from data.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center md:justify-start" data-aos="zoom-in">
            <img
              src={myPhoto}
              alt="Profile"
              className="rounded-xl object-cover w-[280px] sm:w-[320px] md:w-[360px] h-[300px] sm:h-[350px] md:h-[400px] transition-transform duration-500 hover:scale-105 shadow-xl"
            />
          </div>

          {/* Info */}
          <div className="space-y-6" data-aos="fade-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
              MERN Stack Developer & Data Analyst
            </h3>
            <p className="text-gray-600 italic text-sm sm:text-base">
              I build web applications using MongoDB, Express.js, React, and Node.js. I also explore data using Python, SQL, Excel, Power BI, and Tableau.
            </p>

            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-10 text-gray-700 text-sm sm:text-base">
              <p><span className="font-semibold text-purple-700">Birthday:</span> 22 January 2003</p>
              <p><span className="font-semibold text-purple-700">Age:</span> 22</p>
              <p><span className="font-semibold text-purple-700">Degree:</span> BCA</p>
              <p><span className="font-semibold text-purple-700">Phone:</span> +91 95290 89892</p>
              <p><span className="font-semibold text-purple-700">Email:</span> venkteshvariambalakaran@gmail.com</p>
              <p><span className="font-semibold text-purple-700">City:</span> Mumbai, Maharashtra</p>
              <p><span className="font-semibold text-purple-700">Freelance:</span> Available</p>
            </div>

            <p className="text-gray-600 text-sm sm:text-base">
              I’ve created full-stack projects, built dashboards, and helped others through YouTube tutorials on development and analytics. My goal is to keep learning and build tools that make an impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
