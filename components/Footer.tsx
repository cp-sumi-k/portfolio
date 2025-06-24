import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.linkedin.com/in/sumita-chotaliya/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer"><FiLinkedin size={24} /></a>
          <a href="https://medium.com/@cp-sumita-k" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">Blog</a>
          <a href="https://github.com/cp-sumi-k" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer"><FiGithub size={24} /></a>
        </div>
        <p>© {year} Sumita Kevat. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 