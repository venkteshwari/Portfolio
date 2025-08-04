import { useState, useEffect } from 'react';
import { Code2, BarChart3, Github, ExternalLink, Info } from 'lucide-react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
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
      title: 'Air Quality Analysis',
      tech: 'Tableau, Air Quality Dataset',
      type: 'Tableaudata',
      image: 'https://png.pngtree.com/png-vector/20220913/ourmid/pngtree-work-in-progress-png-image_6173846.png',
      github: '#',
      live: '#',
    },
  ];

  const handleLiveClick = (live, title, type) => {
    if (live === '#' || !live) {
      const isTableau = type === 'Tableaudata';

      toast(
        () => (
          <span className="flex items-center gap-2 text-sm text-gray-800">
            <AiOutlineLoading3Quarters className="text-orange-500 animate-spin" size={18} />
            {isTableau
              ? ' Tableau project is still in progress. Please check GitHub for the full code.'
              : 'Live demo not available. See code on GitHub instead.'}
          </span>
        ),
        {
          duration: 4000,
          position: 'bottom-center',
          style: {
            background: '#fff',
            border: '1px solid #ccc',
            padding: '12px 16px',
          },
        }
      );
    } else {
      window.open(live, '_blank');
    }
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="min-h-screen bg-white py-16 px-4 sm:px-6 md:px-8"
    >
      <Toaster />
      <div className="mb-12 text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 border-l-4 border-blue-500 pl-4">
          Projects
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-3xl">
          Here are some of the projects I’ve worked on, covering full-stack development and data analytics using SQL, Power BI, and Tableau.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.map((proj, i) => (
          <div
            key={i}
            data-aos="fade-up"
            className="relative rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 group"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300 bg-gray-300"
            />
            <div className="absolute inset-0 bg-black/50 text-white p-5 flex flex-col justify-between transition duration-300 ease-in-out">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-white bg-opacity-20 rounded-full text-black">
                    {proj.type === 'dev' ? <Code2 size={18} /> : <BarChart3 size={18} />}
                  </div>
                  <h3 className="text-lg font-semibold">{proj.title}</h3>
                </div>
                <p className="text-sm mb-4">{proj.tech}</p>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                <button
                  onClick={() => handleLiveClick(proj.live, proj.title, proj.type)}
                  className="flex items-center gap-1 text-sm bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded transition"
                >
                  <ExternalLink size={14} /> Live Demo
                </button>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm border border-white text-white px-3 py-1 rounded hover:bg-white hover:text-purple-700 transition"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm transition"
        >
          {showAll ? 'Show Less Projects' : 'View More Projects'}
        </button>
      </div>
    </section>
  );
}
