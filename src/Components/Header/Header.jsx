import NavList from "./NavList";
import { useState } from "react";

export default function Header() {
  const [isSelected, setIsSelected] = useState();

  function handleClick(selectedBtn) {
    setIsSelected(selectedBtn);
  }
  return (
    <header className="fixed top-0 left-0 right-0 shadow-md shadow-white px-28 py-6  flex justify-between items-center z-10 ">
      {/* Logo or Name */}
      <div className="text-4xl font-bold ">Portfolio</div>

      {/* Navigation Links */}
      <nav className="space-x-6 text-2xl">
        <NavList
          id="about"
          onSelect={() => handleClick("about")}
          selected={isSelected === "about"}
        >
          About
        </NavList>
        <NavList
          id="skill"
          onSelect={() => handleClick("skill")}
          selected={isSelected === "skill"}
        >
          Skill
        </NavList>

        <NavList
          id="projects"
          onSelect={() => handleClick("projects")}
          selected={isSelected === "projects"}
        >
          Projects
        </NavList>

        <NavList
          id="contact"
          onSelect={() => handleClick("contact")}
          selected={isSelected === "contact"}
        >
          Contact
        </NavList>
      </nav>
    </header>
  );
}
