import { useState, useEffect } from 'react';
import { Code2, BarChart3, Github, ExternalLink } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import toast, { Toaster } from 'react-hot-toast';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const projects = [
    {
      title: 'Medicine Reminder App',
      tech: 'MERN Stack (MongoDB, Express, React, Node)',
      type: 'dev',
      image: './project1.PNG',
      github: 'https://github.com/venkteshwari/MedicineReminder',
      live: 'https://medicinereminder-eiba.onrender.com',
    },
    {
      title: 'Expense Tracker',
      tech: 'React, Node.js, MongoDB',
      type: 'dev',
      image: './project4.PNG',
      github: 'https://github.com/yourusername/expense-tracker',
      live: '#',
    },
    {
      title: 'Sales Data Analysis',
      tech: 'SQL, Walmart Sales Dataset',
      type: 'data',
      image:
        'https://static.tildacdn.one/tild6262-6661-4034-b164-383063636462/What_is_SQL_Database.png',
      github: 'https://github.com/venkteshwari/Sales-Data-Analysis',
      live: '#',
    },
    {
      title: 'Customer Segmentation',
      tech: 'SQL, E-commerce Dataset',
      type: 'data',
      image:
        'https://cdn.vectorstock.com/i/1000v/25/67/sql-database-technology-concepts-vector-8212567.jpg',
      github: 'https://github.com/venkteshwari/Customer-Segmentation',
      live: '#',
    },
    {
      title: 'Website Traffic Analysis',
      tech: 'Power BI, Google Analytics Dataset',
      type: 'data',
      image: './project2.PNG',
      github: 'https://github.com/venkteshwari/websiteTrafficAnaytics',
      live: '#',
    },
    {
      title: 'Employee Performance Metrics',
      tech: 'Power BI, HR Analytics Dataset',
      type: 'data',
      image: './project3.PNG',
      github: 'https://github.com/venkteshwari/Employee-Performance-Metrics',
      live: '#',
    },
    {
      title: 'Customer Analysis Report',
      tech: 'Tableau, E-commerce Dataset',
      type: 'Tableaudata',
      image: './project5.png',
      github: 'https://github.com/venkteshwari/Customer-Analysis-Report',
      live: '#',
    },
    {
      title: 'Bike Sales Dashboard',
      tech: 'Excel, Pivot Tables, Charts, Slicers',
      type: 'excel',
      image: './project6.png',
      github: 'https://github.com/venkteshwari/Bike-Sales-Dashboard',
      live: '#',
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="min-h-screen bg-transparent py-16 px-4 sm:px-6 md:px-8"
    >
      <Toaster />
      <div className="mb-12 text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 uppercase border-l-4 border-[#19183B] pl-4">
          Projects
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-3xl">
          Here are some of the projects I’ve worked on, covering full-stack
          development and data analytics using SQL, Power BI, Tableau, and
          Excel.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.map((proj, i) => (
          <div
            key={i}
            data-aos="fade-up"
            className="flex flex-col overflow-hidden   transition-all duration-300"
          >
            {/* Card Header */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-extrabold uppercase text-gray-800">{proj.title}</h3>
              <p className="text-sm font-extrabold  text-gray-600 mt-1">{proj.tech}</p>
            </div>

            {/* Image */}
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-64 object-cover"
            />

            {/* Card Footer / Buttons */}
            <div className="p-4 flex flex-wrap gap-3 justify-center">
              {proj.type === 'dev' && (
                <button
                  onClick={() => window.open(proj.live, '_blank')}
                  className="flex items-center gap-1 text-sm bg-white text-[#19183B] border border-[#19183B] px-3 py-1 rounded hover:bg-[#3A3A70] hover:text-white transition"
                >
                  <ExternalLink size={14} /> Live Demo
                </button>
              )}
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm bg-white text-[#19183B] border border-[#19183B] px-3 py-1 rounded hover:bg-[#3A3A70] hover:text-white transition"
              >
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#19183B] hover:bg-[#3A3A70] text-white px-6 py-2 rounded text-sm transition"
        >
          {showAll ? 'Show Less Projects' : 'View More Projects'}
        </button>
      </div>
    </section>
  );
}
