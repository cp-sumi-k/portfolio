const Header = () => {
  return (
    <header className="bg-gray-900 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">SK</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 