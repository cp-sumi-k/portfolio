import React from 'react';
import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'LuxeRadio - Music streaming App',
      description: 'Developed a full-stack web app and backend for streaming radio, music and podcasts, handling large-scale, real-time data management.',
      image: '/project1.jpg',
      liveUrl: 'https://canopas.com/portfolio/luxeradio',
      githubUrl: '#',
      tags: ['Golang', 'Node.js', 'Python', 'Mysql', 'Redis', 'MongoDB', 'Laravel', 'Electron.js', 'Vue']
    },
    {
      title: 'Nami - No code paywall SDK',
      description: 'Developed a web SDK for paywall integration, enabling easy setup and customization of paywalls from a centralized control center.',
      image: '/project2.jpg',
      liveUrl: 'https://github.com/namiml/nami-web-sdk',
      githubUrl: '#',
      tags: ['Typescript', 'Node.js', 'Lit web components', 'React', 'Cloudflare']
    },
    {
      title: 'Justly - AI life coach',
      description: 'Worked on setting up AI models to personalize user experience based on their habits, activities and long term vision and goals.',
      image: '/project4.jpg',
      liveUrl: 'https://apps.apple.com/us/app/justly-ai-life-coach/id1570951174',
      githubUrl: '#',
      tags: ['Golang', 'Mysql', 'Firebase', 'Livekit', 'FastAPI']
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            {/* <Image src={project.image} alt={project.title} width={500} height={300} className="w-full h-48 object-cover" /> */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => <span key={tag} className="bg-gray-700 text-sm px-2 py-1 rounded-full">{tag}</span>)}
              </div>
              <div className="flex justify-between items-center">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-400 hover:underline">
                  <FiExternalLink />
                  <span>View Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 