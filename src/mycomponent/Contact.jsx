import {
  Mail,
  Phone,
  MapPin,
  Youtube,
  Instagram,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 md:px-8"
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-purple-100 p-3 rounded-full text-purple-600 shadow"
            >
              <Mail size={28} />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Contact Me
            </h2>
          </div>
          <div className="w-15 h-1 bg-purple-500 rounded mb-10" />

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="flex flex-wrap gap-x-10 gap-y-6">
              {[
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
                  value: 'https://www.youtube.com/@ProjectCodeLab-o1y',
                  link: 'https://www.youtube.com/@ProjectCodeLab-o1y',
                },
                {
                  icon: Instagram,
                  title: 'Instagram',
                  value:
                    'https://www.instagram.com/projectcodelab?igsh=MXV5NzViY2VvcjI0eA%3D%3D',
                  link:
                    'https://www.instagram.com/projectcodelab?igsh=MXV5NzViY2VvcjI0eA%3D%3D',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 min-w-[200px]"
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
                    className="mt-1 text-purple-600"
                  >
                    <item.icon size={24} />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 text-sm hover:underline break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 text-sm break-all">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <div className="flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8753478060985!2d72.84588889999999!3d19.417791100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a929bfbb80e5%3A0x46f9804cc0f5758b!2sGaonraipada%20Rd%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1754080646604!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded shadow-md w-full md:w-[90%]"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-600 text-white text-center py-4">
        <p>
          &copy; {new Date().getFullYear()} Venkteshwari Ambalakaran. All
          rights reserved.
        </p>
      </footer>
    </>
  );
}
