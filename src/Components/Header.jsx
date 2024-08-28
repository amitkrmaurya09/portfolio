
export default function Header() {
  return (
    <header className="shadow-md px-28 py-6  flex justify-between items-center border-solid border-2 border-sky-500">
      {/* Logo or Name */}
      <div className="text-4xl font-bold text-gray-800">
        Amit kumar
      </div>

      {/* Navigation Links */}
      <nav className="space-x-6 text-2xl">
        <a href="#about" className="text-gray-600 hover:text-gray-900">
          About
        </a>
        <a href="#projects" className="text-gray-600 hover:text-gray-900">
          Skill
        </a>
        <a href="#contact" className="text-gray-600 hover:text-gray-900">
          Projects
        </a>
        <a href="#contact" className="text-gray-600 hover:text-gray-900">
          Contact
        </a>
      </nav>
    </header>
  );
};

