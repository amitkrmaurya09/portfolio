import NavList from "./NavList";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 shadow-md shadow-white px-28 py-6  flex justify-between items-center z-10 ">
      {/* Logo or Name */}
      <div className="text-4xl font-bold ">Portfolio</div>

      {/* Navigation Links */}
      <nav className="space-x-6 text-2xl">
        <NavList id="about">About</NavList>
        <NavList id="skill">Skill</NavList>
        <NavList id="projects">Projects</NavList>
        <NavList id="contact">Contact</NavList>
      </nav>
    </header>
  );
}
