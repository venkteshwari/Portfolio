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
      className="bg-purple-600 py-20 px-4 sm:px-6 md:px-8 text-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-10 border-l-8 border-white pl-4">
          Education
        </h2>

        <div className="space-y-5 text-base sm:text-lg leading-relaxed">
          <div className="flex items-start gap-3">
            <GraduationCap className="w-6 h-6 mt-1" />
            <p><strong>Degree:</strong> Bachelor of Computer Applications (BCA)</p>
          </div>

          <div className="flex items-start gap-3">
            <Building2 className="w-6 h-6 mt-1" />
            <p><strong>University:</strong> Yashwantrao Chavan Maharashtra Open University</p>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 mt-1" />
            <p><strong>Location:</strong> Nashik, Maharashtra</p>
          </div>

          <div className="flex items-start gap-3">
            <CalendarDays className="w-6 h-6 mt-1" />
            <p><strong>Year:</strong> 2022 – 2025</p>
          </div>

          <div className="flex items-start gap-3">
            <BarChart3 className="w-6 h-6 mt-1" />
            <p><strong>CGPA:</strong> 7.06 (71%)</p>
          </div>

          {/* Certificate Link with animation */}
          <a
            href="./certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white underline font-medium mt-6 group hover:text-purple-200 transition-all duration-300"
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
