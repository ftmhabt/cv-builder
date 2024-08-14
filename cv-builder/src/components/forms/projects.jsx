import { useContext } from "react";
import { cvContext } from "../../context/cv-context";
import DeleteButton from "../delete-button";

export default function Projects() {
  const context = useContext(cvContext);

  const handleChange = (e, id) => {
    const newProjects = context.cvData.projects.map((data) =>
      data.id === id ? { ...data, [e.target.name]: e.target.value } : data
    );
    context.setProjects(newProjects);
  };

  const handleStacks = (e, id) => {
    const stackArray = e.target.value.split(',');
    const newprojects = context.cvData.projects.map((data) =>
      data.id === id ? { ...data, [e.target.name]: stackArray } : data
    );
    context.setProjects(newprojects);
  };

  return context.cvData.projects.map((data, index) => (
    <form key={index}>
      <label htmlFor="name">name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={data.name}
        onChange={(e) => handleChange(e, data.id)}
      />
      <label htmlFor="demo">demo</label>
      <input
        type="text"
        name="demo"
        id="demo"
        value={data.demo}
        onChange={(e) => handleChange(e, data.id)}
      />
      <label htmlFor="github">github</label>
      <input
        type="text"
        name="github"
        id="github"
        value={data.github}
        onChange={(e) => handleChange(e, data.id)}
      />
      <label htmlFor="details">details</label>
      <textarea
        name="details"
        id="details"
        value={data.details}
        onChange={(e) => handleChange(e, data.id)}
      ></textarea>
      <label htmlFor="stack">stack</label>
      <input
        type="text"
        name="stack"
        id="stack"
        value={data.stack.toString()}
        onChange={(e) => handleStacks(e, data.id)}
      />
      <DeleteButton arrayName={'projects'} id={data.id}/>
      <hr />
    </form>
  ));
}
