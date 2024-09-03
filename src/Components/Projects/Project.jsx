import { ProjectImage } from "../../assets/Project";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const VerticalTimeline = () => {
  const cssforElement =
    "leading-none text-black mx-3 border rounded-md px-3 shadow-white shadow-sm hover:bg-gray-200 italic";
  return (
    <div id="projects" className="p-28">
      <div>
        <h2 className="font-bold text-5xl text-center">Projects</h2>
      </div>
      <div className="timeline">
        {ProjectImage.map((project, index) => (
          <div
            className={`timeline-item hover: ${
              index % 2 === 0 ? "left" : "right"
            }`}
            key={index}
          >
            <div className="content">
              <div className="image-container">
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  className="project-image w-60 h-48"
                />
              </div>
              <div className="text-content">
                <h3 className="font-bold text-black text-2xl mb-1">
                  {project.name}
                </h3>
                <p>
                  <strong className="text-black">Live Link</strong>
                  <a
                    href={project.Live}
                    target="_black"
                    className={cssforElement}
                  >
                    <ArrowForwardIcon /> here{" "}
                  </a>
                </p>
                <p>
                  <strong className="text-black">Repo Link</strong>
                  <a
                    href={project["Repo link"]}
                    target="_black"
                    className={cssforElement}
                  >
                    <ArrowForwardIcon /> here
                  </a>
                </p>
                <p className="text-xl font-bold text-black mt-2 p-0">
                  Technology use
                </p>
                <ul className="flex gap-2 flex-wrap leading-tight font-bold">
                  {project.Technology.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalTimeline;
