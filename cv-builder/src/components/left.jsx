import { useState, useContext } from "react";
import "./../styles/left.css";
import rightIcon from "./../assets/right.svg";
import General from "./forms/general";
import Educational from "./forms/educational";
import Professional from "./forms/professional";
import { cvContext } from "../context/cv-context";
import { v4 as uuid } from "uuid";
import Projects from "./forms/projects";
import Skills from "./forms/skills";

export default function Left() {
  const [selected, setSelected] = useState(0);
  const context = useContext(cvContext);

  const AddEducation = () => {
    const newArray = [
      ...context.cvData.education,
      {
        id: uuid(),
        field: "",
        univercity: "",
        from: "",
        to: "",
        location: "",
      },
    ];
    context.setEducation(newArray);
  };

  const AddExprience = () => {
    const newArray = [
      ...context.cvData.exprience,
      {
        id: uuid(),
        role: "",
        company: "",
        from: "",
        to: "",
        location: "",
        details: "",
        stack: [],
      },
    ];
    context.setExprience(newArray);
  };

  const AddProject = () => {
    const newArray = [
      ...context.cvData.projects,
      {
        id: uuid(),
        name: "",
        demo: "",
        github: "",
        details: "",
        stack: "",
      },
    ];
    context.setProjects(newArray);
  };

  const AddSkills = () => {
    const newArray = [...context.cvData.skills, { id: uuid(), name: "" }];
    context.setSkills(newArray);
  };

  return (
    <div className="forms">
      <div className="form-type">
        <div onClick={() => setSelected(0)}>
          general
          {selected === 0 ? <img src={rightIcon} alt="" /> : ""}
        </div>
        <div onClick={() => setSelected(1)}>
          experiences
          {selected === 1 ? <img src={rightIcon} alt="" /> : ""}
        </div>
        <div onClick={() => setSelected(2)}>
          projects
          {selected === 2 ? <img src={rightIcon} alt="" /> : ""}
        </div>
        <div onClick={() => setSelected(3)}>
          educations
          {selected === 3 ? <img src={rightIcon} alt="" /> : ""}
        </div>
        <div onClick={() => setSelected(4)}>
          skills
          {selected === 4 ? <img src={rightIcon} alt="" /> : ""}
        </div>
      </div>
      <div className="form">
        {selected === 0 ? <General /> : ""}
        {selected === 1 ? (
          <div>
            <Professional />
            <button className="form-btn" onClick={AddExprience}>
              +
            </button>
          </div>
        ) : (
          ""
        )}
        {selected === 3 ? (
          <div>
            <Educational />
            <button className="form-btn" onClick={AddEducation}>
              +
            </button>
          </div>
        ) : (
          ""
        )}
        {selected === 2 ? (
          <div>
            <Projects />
            <button className="form-btn" onClick={AddProject}>
              +
            </button>
          </div>
        ) : (
          ""
        )}
        {selected === 4 ? (
          <div>
            <Skills />
            <button className="form-btn" onClick={AddSkills}>
              +
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
