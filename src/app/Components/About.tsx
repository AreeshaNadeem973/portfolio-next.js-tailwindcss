

import React from 'react';

const About = () => {
  return (
    <div id="about" className="bg-black text-white py-12 px-6 md:px-12 min-h-screen">
      <div className="container mx-auto text-center">
        
        {/* About Box with white background, rounded corners, and shadow */}
        <div className="bg-white text-black p-6 md:p-8 rounded-lg shadow-xl max-w-full md:max-w-4xl mx-auto">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-4 sm:mb-6">
            About Me
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
            I&apos;m Areesha Nadeem, a passionate web developer from Karachi, currently studying
            BS Economics at Karachi University. I specialize in HTML, CSS, TypeScript, and
            Next.js, building responsive and engaging websites. My focus is on mastering
            Next.js to deliver high-quality solutions.
          </p>

          {/* View My Skills Button */}
          <div className="flex justify-center">
            <a
              href="#skills"
              className="inline-flex text-white bg-blue-600 border-0 py-3 px-6 sm:px-8 focus:outline-none hover:bg-blue-700 rounded-full text-lg transition duration-300"
            >
              View My Skills
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
