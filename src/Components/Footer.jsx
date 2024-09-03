import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  const year = new Date().getFullYear();
  const css = "hover:text-white hover:text-2xl";
  return (
    <div>
      <div
      id="contact"
      className="h-36 px-24 flex justify-around items-center border-t-2 border-white m-0"
    >
      <h1 className="font-bold text-5xl ">Contact</h1>
      <ul>
        <li>
          <a
            className={css}
            target="_blank"
            href="https://www.linkedin.com/in/amitkrmaurya09/"
            alt="linkedin profile link"
          >
            <LinkedInIcon fontSize="large" /> Linkedin
          </a>
        </li>
        <li>
          <a
            className={css}
            target="_blank"
            href="https://github.com/amitkrmaurya09"
            alt="github profile link"
          >
            <GitHubIcon fontSize="large" /> Github
          </a>
        </li>
      </ul>
    </div>
      <p className="text-center text-2xl pb-10 m-0 ">© {year} Amit kumar. All rights reserved.</p>
      </div>
    
    
  );
}
