import { useContext } from "react";
import cvContext from "../context/general-context";
import "./../styles/right.css";

export default function PreviewGeneral() {
  const context = useContext(cvContext);
  let [first, last] = context.name.split(" ");
  return (
    <div>
      <div className="personal">
        <div className="name">
          <div className="first">{first}</div>
          <div className="last theme">{last}</div>
        </div>
        <div className="info">
          {context.email && <div>Email:</div>}
          <div className="theme">{context.email}</div>
          {context.linkedin && <div>LinkedIn:</div>}
          <div className="theme">{context.linkedin}</div>
        </div>
      </div>
      {context.about && (
        <div className="head">
          Profile <hr />
        </div>
      )}
      <div className="about odd">{context.about}</div>
    </div>
  );
}
