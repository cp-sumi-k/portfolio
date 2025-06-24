import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hi! I'm <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-semibold">Sumita Kevat</span>, a passionate <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-semibold">Full Stack Software Engineer</span> with 5+ years of experience building robust, scalable, and user-centric web applications.
          <br /><br />
          I thrive at the intersection of <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-semibold">Web, DevOps, Cloud, and AI</span>—turning complex problems into elegant solutions. My toolkit spans <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-semibold">TypeScript, Golang, Node.js, React, Vue, Angular, Python</span> and more.
          <br /><br />
          I love collaborating with cross-functional teams, mentoring engineers, and driving projects from idea to production. Whether it's architecting cloud-native systems, automating workflows, or integrating the latest in <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-semibold">AI & LLMs</span>, I'm always eager to learn and share.
          <br /><br />
          Let's build something impactful together!
        </p>
      </div>
    </section>
  );
};

export default About;