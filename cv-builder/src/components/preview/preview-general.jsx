import { useContext } from "react";
import { cvContext } from "../../context/cv-context";

export default function PreviewGeneral() {
  const {cvData} = useContext(cvContext);
  let [first, last] = cvData.name.split(" ");
  return (
    <>
      <div className="personal">
        <div className="name">
          <div className="first">{first}</div>
          <div className="last theme">{last}</div>
        </div>
        <div className="info">
          {cvData.email && <div>Email:</div>}
          <div className="theme">{cvData.email}</div>
          {cvData.linkedin && <div>LinkedIn:</div>}
          <div className="theme">{cvData.linkedin}</div>
        </div>
      </div>
      {cvData.about && (
        <div className="head">
          Profile <hr />
        </div>
      )}
      <div className="about odd">{cvData.about}</div>
    </>
  );
}
