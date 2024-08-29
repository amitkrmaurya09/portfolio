import projects from '../../assets/Project.json'
const VerticalTimeline = () => {
  return (
    <div id='projects' className='p-28'>
        <div>
            <h2 className='font-bold text-5xl text-center'>Projects</h2>
        </div>
<div className="timeline">
      {projects.map((project, index) => (
        <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
          <div className="content">
            <div className="image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="text-content">
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
              <ul className='flex gap-3'>
                {project.technology.map((tech, index)=>(<li  key={index}>{tech}</li>))}
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
