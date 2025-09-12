import {
  GraduationCap,
  Building2,
  MapPin,
  CalendarDays,
  BarChart3,
  FileText,
} from 'lucide-react';

export default function Education() {
  return (
    <section
      id="education"
      className="bg-[#19183B] py-20 px-4 sm:px-6 md:px-8 text-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 border-l-8 border-white pl-4">
          Education
        </h2>

        <div className="space-y-5 text-base sm:text-lg leading-relaxed">
          <div className="flex items-start gap-3">
            <GraduationCap className="w-6 h-6 mt-1 text-[#FFD166]" />
            <p>
              <span className="font-extrabold">Degree:</span> Bachelor of Computer Applications (BCA)
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Building2 className="w-6 h-6 mt-1 text-[#FFD166]" />
            <p>
              <span className="font-extrabold">University:</span> Yashwantrao Chavan Maharashtra Open University
            </p>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 mt-1 text-[#FFD166]" />
            <p>
              <span className="font-extrabold">Location:</span> Nashik, Maharashtra
            </p>
          </div>

          <div className="flex items-start gap-3">
            <CalendarDays className="w-6 h-6 mt-1 text-[#FFD166]" />
            <p>
              <span className="font-extrabold">Year:</span> 2022 – 2025
            </p>
          </div>

          <div className="flex items-start gap-3">
            <BarChart3 className="w-6 h-6 mt-1 text-[#FFD166]" />
            <p>
              <span className="font-extrabold">CGPA:</span> 7.06 (71%)
            </p>
          </div>

          {/* Certificate Link with animation */}
          <a
            href="./certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#FFD166] underline font-extrabold mt-6 group hover:text-white transition-all duration-300"
          >
            <FileText className="w-6 h-6 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              View Certificate
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
