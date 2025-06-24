const blogs = [
  {
    title: 'Advanced (Sub)Types in TypeScript You Need to Know',
    description: 'Simplifying Complex Type Scenarios with TypeScript’s Advanced Features',
    url: 'https://medium.com/canopas/advanced-sub-types-in-typescript-you-need-to-know-9e1ba0ee4ba4',
  },
  {
    title: 'Approach to avoid accessing variables globally in Golang',
    description: 'Why using global variables in Golang is a bad idea and here’s how you can avoid it?',
    url: 'https://medium.com/canopas/approach-to-avoid-accessing-variables-globally-in-golang-2019b234762',
  },
  {
    title: 'Golang — 1 Minute guide to Useful Tips and Libraries in 2022',
    description: 'In this article, we’ll have a quick look at a few most essential libraries and tips that make your day-to-day development effective and easy.',
    url: 'https://medium.com/canopas/1-min-guide-to-golang-development-best-practices-in-2022-b50d846fd6c',
  },
];

const Blogs = () => (
  <section id="blogs" className="py-20 px-4 bg-gray-900">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog, idx) => (
          <div key={idx} className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
              <p className="text-gray-400 mb-4">{blog.description}</p>
            </div>
            <a href={blog.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-400 hover:underline font-semibold">Read More →</a>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="https://medium.com/@cp-sumita-k"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded shadow"
        >
          Read More Blogs
        </a>
      </div>
    </div>
  </section>
);

export default Blogs; 