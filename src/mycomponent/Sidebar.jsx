import {
  Home,
  User,
  Folder,
  GraduationCap,
  Settings2,
  Mail,
  Menu,
  X,
  ArrowDown,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function SideNavbar() {
  const sections = ['#home', '#about', '#projects', '#education', '#skills', '#contact'];
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detect current section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      const index = sections.findIndex((id) => {
        const el = document.querySelector(id);
        return el && scrollY < el.offsetTop + el.offsetHeight;
      });
      setCurrentSectionIndex(index === -1 ? sections.length - 1 : index);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to next section
  const handleNextSection = () => {
    if (currentSectionIndex < sections.length - 1) {
      const next = document.querySelector(sections[currentSectionIndex + 1]);
      if (next) next.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menu = [
    { icon: <Home size={20} />, label: 'Home', href: '#home' },
    { icon: <User size={20} />, label: 'About', href: '#about' },
    { icon: <Folder size={20} />, label: 'Projects', href: '#projects' },
    { icon: <GraduationCap size={20} />, label: 'Education', href: '#education' },
    { icon: <Settings2 size={20} />, label: 'Skills', href: '#skills' },
    { icon: <Mail size={20} />, label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed top-0 left-0 h-full min-w-[4rem] max-w-[4rem] bg-[#19183B] flex-col items-center py-6 shadow-xl z-50 overflow-x-hidden">
        <div className="text-white text-xl font-semibold mb-10 bg-[#3A3A70] rounded-full w-10 h-10 flex items-center justify-center shadow-md">
          Va
        </div>

        <nav className="flex flex-col gap-6">
          {menu.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`text-white p-2 rounded transition-all duration-200 ${
                currentSectionIndex === index ? 'bg-[#3A3A70]' : 'hover:bg-[#5C5C9E]'
              }`}
              title={item.label}
            >
              {item.icon}
            </a>
          ))}
        </nav>

        <button
          onClick={handleNextSection}
          className="mt-auto text-white opacity-70 hover:opacity-100 p-2"
          title="Next Section"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-[#19183B] z-50 shadow flex items-center justify-between px-4 h-14 overflow-x-hidden">
        <div className="text-white font-bold text-lg">Va</div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white"
          title="Toggle Menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed top-14 left-0 w-full bg-[#19183B] z-40 flex flex-wrap items-center justify-center gap-4 py-4 px-3 overflow-x-hidden">
          {menu.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`text-white p-2 rounded transition-all duration-200 ${
                currentSectionIndex === index ? 'bg-[#3A3A70]' : 'hover:bg-[#5C5C9E]'
              }`}
              title={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
