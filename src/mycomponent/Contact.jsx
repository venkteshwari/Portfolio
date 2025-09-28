import {
  Mail,
  Phone,
  MapPin,
  Youtube,
  Instagram,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const contactItems = [
    {
      icon: Mail,
      title: 'Email',
      value: 'venkteshvariambalakaran@gmail.com',
      link: 'mailto:venkteshvariambalakaran@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9529089892',
      link: 'tel:+919529089892',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Maharashtra, India',
    },
    {
      icon: Youtube,
      title: 'YouTube',
      value: 'ProjectCodeLab',
      link: 'https://www.youtube.com/@ProjectCodeLab-o1y',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@projectCodeLab',
      link:
        'https://www.instagram.com/projectcodelab?igsh=MXV5NzViY2VvcjI0eA%3D%3D',
    },
  ];

  return (
    <>
      <section id="contact" className="py-16 bg-gray-50 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-[#19183B]/10 p-3 rounded-full text-[#FEA405] shadow"
            >
              <Mail size={28} color="#FEA405" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#19183B]">
              Contact Me
            </h2>
          </div>
          <div className="w-15 h-1 bg-[#19183B] rounded mb-10" />

          {/* Contact Info Inline */}
          <div className="flex flex-wrap justify-center md:justify-between gap-6">
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start md:items-center gap-3 min-w-[200px] flex-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                  }}
                  className="mt-1 text-[#FEA405]"
                >
                  <item.icon size={24} color="#FEA405" />
                </motion.div>
                <div>
                  <h4 className="text-lg font-semibold text-[#19183B]">
                    {item.title}
                  </h4>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#19183B] text-sm hover:underline break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-sm break-all">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#19183B] text-white text-center py-4">
        <p>
          &copy; {new Date().getFullYear()} Venkteshwari Ambalakaran. All
          rights reserved.
        </p>
      </footer>
    </>
  );
}
