import { useContext } from "react";
import { cvContext } from "../../context/cv-context";

export default function PreviewSkills() {
  const context = useContext(cvContext);
  return (
    <>
      {context.cvData.skills.length > 0 && (
        <div className="head">
          Skills
          <hr />
        </div>
      )}
      {context.cvData.skills.length > 0 && (
        <div className="odd skill-preview">
          {context.cvData.skills.map((item) => (
            item.name&&
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      )}
    </>
  );
}
