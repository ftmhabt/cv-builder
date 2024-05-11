import { useContext } from "react";
import cvContext from "../../context/general-context";

export default function Educational() {
  const context = useContext(cvContext);

  const handleChange = (e, id) => {
    const newEducation = context.education.map((data) =>
      data.id === id ? { ...data, [e.target.name]: e.target.value } : data
    );
    context.setEducation(newEducation);
  };

  return context.education.map((data, index) => (
    <form key={index}>
      <label htmlFor="field">Field</label>
      <input
        type="text"
        name="field"
        id="field"
        value={data.field}
        onChange={(e) => handleChange(e, data.id)}
      />
      <label htmlFor="univercity">Univercity</label>
      <input
        type="text"
        name="univercity"
        id="univercity"
        value={data.univercity}
        onChange={(e) => handleChange(e, data.id)}
      />
      <label htmlFor="from">from</label>
      <input
        type="text"
        name="from"
        id="from"
        value={data.from}
        onChange={(e) => handleChange(e, data.id)}
      />
      <label htmlFor="to">to</label>
      <input
        type="text"
        name="to"
        id="to"
        value={data.to}
        onChange={(e) => handleChange(e, data.id)}
      />
      <label htmlFor="location">location</label>
      <input
        type="text"
        name="location"
        id="location"
        value={data.location}
        onChange={(e) => handleChange(e, data.id)}
      />
      <hr />
    </form>
  ));
}
