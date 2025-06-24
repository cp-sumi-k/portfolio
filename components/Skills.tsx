import { FaTools } from 'react-icons/fa';

const skills = [
  {
    category: 'Cloud',
    items: ['AWS', 'GCP', 'Firebase', 'Cloudflare']
  },
  {
    category: 'DevOps',
    items: ['Docker', 'CI/CD', 'Linux']
  },
  {
    category: 'Security',
    items: ['IAM', 'AWS Config', 'Web Application Security']
  },
  {
    category: 'Full-Stack',
    items: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Golang', 'Vue', 'Angular', 'Python', 'Database']
  },
  {
    category: 'Emerging',
    items: ['AI', 'LLMs', 'Generative AI', 'Chatbots']
  }
];

const Skills = () => (
  <section id="skills" className="py-20 px-4 bg-gray-900">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">My Tech Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, idx) => (
          <div key={idx} className="border border-gray-700 rounded-xl p-6 bg-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map(item => (
                <span key={item} className="px-3 py-1 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 text-sm text-purple-200 border border-gray-600">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills; 