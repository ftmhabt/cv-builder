import { useContext, useState } from "react";
import cvContext from "../context/general-context";

export default function Educational() {
  const context = useContext(cvContext);
  const [key, setKey] = useState(context.education.length - 1);

  return (
    <form>
      <label htmlFor="name">School Name</label>
      <input
        type="text"
        id="name"
        value={context.education.schoolName}
        onChange={(e) =>{
          const newEducation=[
            ...context.education.map((data, index) =>
              index === key ? { schoolName: e.target.value, ...data } : data
            ),
          ];
          context.setEducation(newEducation);
        }}
      />
      <label htmlFor="year">Name of School</label>
      <input
        type="text"
        id="year"
        value={context.education.schoolYear}
        onChange={(e) => {
          const newEducation = [
            ...context.education.map((data, index) =>
              index === key ? { schoolYear: e.target.value, ...data } : data
            ),
          ];
          context.setEducation(newEducation);
          console.log(context.education);
        }}
      />
      <button onClick={() => setKey(key + 1)}>Apply</button>
    </form>
  );
}
