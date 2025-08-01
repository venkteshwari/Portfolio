import { useState, useEffect } from 'react';
import {
  BarChart4,
  Code2,
  LayoutDashboard,
  Database,
  FileText,
  PieChart,
  FolderCog,
  Settings,
  Users,
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {
  const [animatedLevels, setAnimatedLevels] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const timeout = setTimeout(() => {
      setAnimatedLevels(skills.map((skill) => skill.level));
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  const skills = [
    {
      name: 'Python, Pandas, NumPy, Matplotlib',
      level: 85,
      description: 'Experienced in data manipulation, analysis, and visualization using Python libraries.',
      icon: <Code2 size={20} className="text-purple-600" />,
    },
    {
      name: 'SQL, MySQL',
      level: 80,
      description: 'Proficient in writing queries, joins, and managing relational databases.',
      icon: <Database size={20} className="text-purple-600" />,
    },
    {
      name: 'Excel, Jupyter Notebook, VS Code',
      level: 90,
      description: 'Comfortable with spreadsheets, notebooks for analysis, and coding in VS Code.',
      icon: <FileText size={20} className="text-purple-600" />,
    },
    {
      name: 'Power BI, Tableau (basic)',
      level: 78,
      description: 'Creating dashboards and reports using Power BI and basic knowledge of Tableau.',
      icon: <BarChart4 size={20} className="text-purple-600" />,
    },
    {
      name: 'Data Cleaning, Transformation, EDA',
      level: 88,
      description: 'Strong ability to clean, preprocess, and explore datasets for insights.',
      icon: <FolderCog size={20} className="text-purple-600" />,
    },
    {
      name: 'HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind CSS',
      level: 85,
      description: 'Frontend development with modern frameworks and responsive design.',
      icon: <LayoutDashboard size={20} className="text-purple-600" />,
    },
    {
      name: 'Node.js, Express.js',
      level: 75,
      description: 'Developing backend RESTful APIs and handling middleware and routes.',
      icon: <Settings size={20} className="text-purple-600" />,
    },
    {
      name: 'MongoDB',
      level: 80,
      description: 'Working with document-oriented databases and CRUD operations.',
      icon: <Database size={20} className="text-purple-600" />,
    },
    {
      name: 'Git, GitHub, Postman',
      level: 88,
      description: 'Version control, collaboration, and API testing tools proficiency.',
      icon: <PieChart size={20} className="text-purple-600" />,
    },
    {
      name: 'Problem-solving, Critical Thinking, Collaboration',
      level: 90,
      description: 'Strong soft skills including fast learning and team adaptability.',
      icon: <Users size={20} className="text-purple-600" />,
    },
  ];

  return (
    <section id="skills" className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-6" data-aos="fade-right">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 border-l-4 border-purple-500 pl-4 inline-block">
            Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center gap-3 mb-1">
                {skill.icon}
                <h4 className="text-lg font-semibold text-gray-800">{skill.name}</h4>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-2">
                {skill.description}
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-purple-600 h-3 rounded-full transition-all duration-1000 ease-in-out"
                  style={{ width: `${animatedLevels[index] || 0}%` }}
                />
              </div>
              <p className="text-right text-xs text-gray-500 mt-1">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
