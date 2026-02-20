import "./skill.css";
import { skills } from "../data";
const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h2 className="headings">
        Skills
      </h2>
      <div className="skillsWrapper">
        {skills && skills.map((skill) => {
          return <article className="skill" key={skill.id}>
            <div className="skillName">
              {skill.skillName}
            </div>
            <div className="skillLogo">
              <img src={skill.skillLogo} alt={skill.skillName} loading="lazy" />
            </div>
          </article>
        })}
      </div>
    </div>
  )
}

export default Skills