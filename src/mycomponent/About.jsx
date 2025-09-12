import myPhoto from '../assets/myphoto.jpg';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Calendar,
  MapPin,
  Home,
  Phone,
  Mail, 
  Languages,
  User,
  Rocket,
  Code,
  BarChart,
  ClipboardList,
  Users,
  GitBranch,
  X,
  Heart,
  Star,
  UserCircle,
  BookOpen,
  Flag,
} from 'lucide-react';

export default function About() {
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-[#F5F5F5] px-6 sm:px-10 md:px-20 py-16 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full space-y-12">
        {/* Heading */}
        <div className="text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold border-l-4 border-[#FEA405] pl-3 text-[#19183B] uppercase mb-2">
            About Me
          </h2>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center md:justify-start" data-aos="fade-right">
            <img
              src={myPhoto}
              alt="Profile"
              className="rounded-2xl object-cover w-[280px] sm:w-[320px] md:w-[360px] h-[320px] sm:h-[380px] md:h-[420px] shadow-lg border-4 border-[#19183B]/10"
            />
          </div>

          {/* Info */}
          <div className="space-y-6" data-aos="fade-left">
            {/* Intro */}
            <h3 className="text-2xl sm:text-3xl font-bold text-[#19183B]">
              Hi, I’m <span className="text-[#FEA405]">Venkteshwari</span>
            </h3>
            <p className="text-[#19183B] text-base sm:text-lg leading-relaxed">
              A passionate <span className="font-bold">MERN Stack Developer</span> and
              <span className="font-bold"> Data Analyst</span> with a love for turning
              ideas into impactful web apps and transforming raw data into meaningful insights.
            </p>

            {/* What I Can Do */}
            <div>
              <h4 className="text-lg font-semibold text-[#19183B] mb-3 flex items-center gap-2">
                What I Can Do <Rocket className="w-5 h-5 text-[#FEA405]" />
              </h4>
              <ul className="space-y-2 text-[#19183B] text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-[#FEA405]" /> Build responsive full-stack web applications (MERN).
                </li>
                <li className="flex items-center gap-2">
                  <BarChart className="w-4 h-4 text-[#FEA405]" /> Analyze & visualize data using SQL, Excel, Power BI, Tableau.
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardList className="w-4 h-4 text-[#FEA405]" /> Write clean, scalable, and maintainable code.
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#FEA405]" /> Turn business requirements into dashboards & reports.
                </li>
                <li className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-[#FEA405]" /> Collaborate in team projects and contribute on GitHub.
                </li>
              </ul>
            </div>

            {/* Button */}
            <div>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="px-5 py-2 rounded-lg bg-[#FEA405] text-white font-semibold shadow hover:bg-[#e59505] transition"
              >
                {showDetails ? 'Hide Personal Details' : 'View Personal Details'}
              </button>
            </div>
          </div>
        </div>

        {/* Sliding Personal Details */}
        <div
          className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-white px-6 py-8 transition-transform duration-500 ease-in-out shadow-lg z-50 ${
            showDetails ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close Button */}
                <button
          onClick={() => setShowDetails(false)}
          className="absolute top-15 sm:top-6 md:top-8 right-4 text-[#19183B] font-bold z-50"
        >
          <X className="w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5" />
        </button>


          <h4 className="text-xl font-bold text-[#19183B] mb-6">Personal Details</h4>
          <div className="space-y-3 text-[#19183B] text-sm sm:text-base">
            <p className="flex items-center gap-2 font-semibold">
              <Calendar className="w-4 h-4 text-[#FEA405]" /> Birthday: 22 Jan 2003
            </p>
            <p className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#FEA405]" /> Age: 22
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FEA405]" /> Birthplace: Mumbai, Maharashtra ,India
            </p>
            <p className="flex items-center gap-2">
              <Home className="w-4 h-4 text-[#FEA405]" /> Hometown: Tamil Nadu , India
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#FEA405]" /> Phone: +91 95290 89892
            </p>
            <p className="flex items-center gap-2 text-[14px]">
              <Mail className="w-3 h-4 text-[#FEA405]" /> Email: venkteshvariambalakaran@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Languages className="w-4 h-4 text-[#FEA405]" /> Languages: English, Hindi, Tamil, Marathi
            </p>

            {/* Hobbies */}
            <p className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#FEA405]" /> Hobbies: Traveling, Coding, Painting,Music
            </p>

            {/* Interests */}
            <p className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#FEA405]" /> Interests: AI, Data Analytics, Web Development
            </p>

            {/* Parents */}
            <p className="flex items-center gap-2">
              <UserCircle className="w-4 h-4 text-[#FEA405]" /> Parents: Mr. Ambalakaran Raman & Mrs. Ambalakaran Sushila
            </p>

            {/* Religion */}
            <p className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#FEA405]" /> Religion: Hindu
            </p>

            {/* Nationality */}
            <p className="flex items-center gap-2">
              <Flag className="w-4 h-4 text-[#FEA405]" /> Nationality: Indian
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
