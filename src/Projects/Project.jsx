import "./project.css";
import { projectDetails } from "../data.js";
const Project = () => {
  return (
    <div className="projects" id="projects">
      <h2 className="headings">Projects</h2>
      <div className="projectsWrapper">
        {projectDetails && projectDetails.map((project) => {
          return <article className="project" key={project.id}>
            <div className="projectName">
              <h3>{project.project_type}</h3>
            </div>
            <div className="projectImage">
              <a href={project.project_link} target="_blank">
                <img src={project.img} alt={project.project_link} loading="lazy" />
              </a>

            </div>
            <a href={project.project_link} target="_blank" rel="noopener noreferrer">
              <button>Visit</button>
            </a>
          </article>

        })
        }
      </div>
    </div>
  )
}

export default Project