import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-6">
      {/* Hero Section */}
      <h1 className="text-4xl font-bold text-gray-800">Welcome to Guidance Guru</h1>
      <p className="text-lg text-gray-600 mt-4 max-w-2xl">
        Your AI-powered skill development platform for students and professionals.
      </p>

      {/* CTA Button */}
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded-full shadow-lg hover:bg-blue-700 transition">
        Get Started
      </button>

      {/* Testimonials Section */}
      <div className="mt-16 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-700">What Our Users Say</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial Cards */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700">"Guidance Guru helped me build my resume and land my dream job!"</p>
            <p className="mt-2 text-gray-500">- Rohan Mehta</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700">"The AI-powered learning paths are so helpful! Best platform for students."</p>
            <p className="mt-2 text-gray-500">- Sanya Sharma</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700">"I found my first internship through Guidance Guru. Highly recommend!"</p>
            <p className="mt-2 text-gray-500">- Amit Verma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
