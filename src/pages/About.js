import React from "react";

const About = () => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen text-center">
      <h1 className="text-4xl font-bold text-blue-600">About Guidance Guru</h1>
      <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
        Guidance Guru is an AI-powered platform designed to help students and professionals 
        develop skills, build strong resumes, and find career opportunities. Our mission 
        is to empower learners with AI-driven insights and resources.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          To bridge the gap between education and industry by providing a 
          personalized, AI-driven learning experience.
        </p>
      </div>
    </div>
  );
};

export default About;
