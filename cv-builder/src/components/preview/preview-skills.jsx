import { useContext } from "react";
import cvContext from "../../context/general-context";

export default function PreviewSkills() {
  const context = useContext(cvContext);
  return (
    <>
      {context.skills.length > 0 && (
        <div className="head">
          Skills
          <hr />
        </div>
      )}
      {context.skills.length > 0 && (
        <div className="odd skill-preview">
          {context.skills.map((item) => (
            item.name&&
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      )}
    </>
  );
}
