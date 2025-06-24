import React from 'react';
import Image from 'next/image';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center mb-8">
          <Image
            src="/sumita.jpg"
            alt="Sumita Kevat"
            width={160}
            height={160}
            className="rounded-lg border-4 border-blue-600 shadow-lg object-cover"
            priority
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Sumita Kevat</span>
        </h1>
        <p className="text-xl md:text-2xl my-4">
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-semibold">
            Full Stack Software Engineer | Web | DevOps | Cloud | AI
          </span>
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
            My Projects
          </a>
          <a href="#contact" className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded">
            Get In Touch
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/sumita-chotaliya/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer"><FiLinkedin size={24} /></a>
          <a href="https://github.com/cp-sumi-k" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer"><FiGithub size={24} /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 