import { useContext } from "react";
import { cvContext } from "../../context/cv-context";
import DeleteButton from "../delete-button";

export default function Skills() {
  const context = useContext(cvContext);

  const handleChange = (e, id) => {
    const newSkills = context.cvData.skills.map((data) =>
      data.id === id ? { ...data, [e.target.name]: e.target.value } : data
    );
    context.setSkills(newSkills);
  };

  return context.cvData.skills.map((data, index) => (
    <form key={index} className="skills">
      <input
        type="text"
        name="name"
        id="name"
        value={data.name}
        onChange={(e) => handleChange(e, data.id)}
      />
      <DeleteButton arrayName={"skills"} id={data.id} type="field" />
    </form>
  ));
}
