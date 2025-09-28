import React, { useState, useEffect } from "react";

const certifications = [
  { title: "SQL Fundamentals", image: "/1.jpg" },
  { title: "Python Programming", image: "/2.jpg" },
  { title: "Basics of Microsoft Power BI", image: "/3.jpg" },
  { title: "MERN Stack Introduction", image: "/4.jpg" },
  { title: "SQL Quiz Achievement", image: "/5.jpg" },
];

const CertificationSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
<section className="bg-transparent py-12" id="certifications">
  <div className="container mx-auto px-4 sm:px-6 md:px-8">
    {/* Heading with left border */}
    <div className="flex items-center mb-10">
      <div className="border-l-4 border-[#19183B] pl-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Certifications
        </h2>
      </div>
    </div>

    {/* Show only one image at a time */}
    <div className="max-w-3xl mx-auto rounded-lg shadow-lg overflow-hidden">
      <img
        src={certifications[currentIndex].image}
        alt={certifications[currentIndex].title}
        className="w-full h-64 sm:h-80 md:h-[500px] object-contain rounded-lg transition-opacity duration-1000"
      />
    </div>

    {/* Dots Indicator */}
    <div className="flex justify-center mt-6 space-x-2">
      {certifications.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentIndex ? "bg-[#19183B] scale-125" : "bg-gray-300"
          }`}
        ></button>
      ))}
    </div>
  </div>
</section>

  );
};

export default CertificationSection;
