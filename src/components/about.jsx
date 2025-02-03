import { useState } from "react";
import Static from "/Static-assets-bro.svg";

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
      <div className="relative">
        <img src={Static} alt="Designer illustration" className="w-96 h-96 object-cover" />
      </div>

      <div className="max-w-lg">
        <h1 className="text-5xl font-bold mb-4">
          About <span className="text-teal-400">me</span>
        </h1>

        <p className="read-more-wrap">
          I am a recent graduate with a degree in IT Engineering, specializing in front-end development. Throughout my academic career, I have gained a solid foundation in various front-end languages and frameworks, including HTML, CSS, JavaScript, React, and Tailwind CSS.
          {isExpanded && (
            <span>
              My education has provided me with a robust understanding of IT principles and the practical application of front-end technologies. I am passionate about creating user-friendly and aesthetically pleasing web interfaces.
            </span>
          )}
        </p>

        <button onClick={() => setIsExpanded(!isExpanded)} className="text-teal-400 mt-2">
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </main>
  );
};

export default AboutSection;
