


// src/components/Portfolio.js
import React from 'react';

const projects = [
  {
    name: 'Shopapp',
    description: 'A comprehensive e-commerce application built with modern web technologies.',
    url: 'https://github.com/Yash16p/Shopapp'
  },
  {
    name: 'Randome-GIF',
    description: 'A fun project to fetch and display random GIFs using a public API.',
    url: 'https://github.com/Yash16p/Randome-GIF'
  },
  {
    name: 'Currency-Convertor',
    description: 'A tool to convert currencies in real-time with updated exchange rates.',
    url: 'https://github.com/Yash16p/Currency-Convertor'
  }
];

const Portfolio = () => {
  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-4xl font-bold text-center mb-8 text">Portfolio</h1>
      <p className="text-lg text-center mb-8">
        Hello! I'm Yash Pandey, a web developer and a 3rd-year student at ADGITM, pursuing a B.Tech in Artificial Intelligence and Data Science (AIDS). I'm currently exploring various programming languages and doing an internship as a web developer at Kapilash SSS Pvt. Ltd., an edtech platform.
      </p> */}
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.name} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
