import { useContext } from "react";
import cvContext from "../context/general-context";

export default function Professional() {
  const context = useContext(cvContext);

  const handleChange = (e, id) => {
    const newExprience = context.exprience.map((data) =>
      data.id === id ? { ...data, [e.target.name]: e.target.value } : data
    );
    context.setExprience(newExprience);
  };

  const handleStacks = (e, id) => {
    const stackArray = e.target.value.split(',');
    const newExprience = context.exprience.map((data) =>
      data.id === id ? { ...data, [e.target.name]: stackArray } : data
    );
    context.setExprience(newExprience);
  };

  return context.exprience.map((data, index) => (
    <form key={index}>
      <label htmlFor="role">Role</label>
      <input
        type="text"
        name="role"
        id="role"
        value={data.role}
        onChange={(e) => handleChange(e, data.id)}
      />
      <label htmlFor="company">Company</label>
      <input
        type="text"
        name="company"
        id="company"
        value={data.company}
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
      <label htmlFor="details"></label>
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
    </form>
  ));
}
