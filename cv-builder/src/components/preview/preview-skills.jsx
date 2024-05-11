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
        <div className="odd">
          {context.skills.map((item) => (
            <div key={item.id} className="skill-preview">
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
