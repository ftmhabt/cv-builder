import { useContext } from "react";
import cvContext from "../context/general-context";
import "./../styles/right.css";

export default function Right() {
  const context = useContext(cvContext);
  let [first, last] = context.name.split(" ");
  return (
    <div className="cv">
      <div className="paper">
        <div className="personal">
          <div className="name">
            <div className="first">{first}</div>
            <div className="last theme">{last}</div>
          </div>
          <div className="info">
            <div>Email:</div>
            <div className="theme">{context.email}</div>
            <div>LinkedIn:</div>
            <div className="theme">{context.linkedin}</div>
          </div>
        </div>
        <div className="head">
          Profile <hr />{" "}
        </div>
        <div className="detail odd">{context.details}</div>
        <div className="head">
          Education <hr />
        </div>
        <div className="education odd">
          {context.education.map((item) => (
            <div key={item.id}>
              <div>{item.field}</div>
              <div>{item.univercity}</div>
              <div>{item.from}</div>
              <div>{item.to}</div>
              <div>{item.location}</div>
            </div>
          ))}
        </div>
        <div className="head">
          Work Exprience
          <hr />
        </div>
        <div className="profession odd">
          {context.exprience.map((item) => (
            <div key={item.id}>
              <div>{item.role}</div>
              <div>{item.company}</div>
              <div>{item.from}</div>
              <div>{item.to}</div>
              <div>{item.location}</div>
              <div>{item.details}</div>
              <div>
                {item.stack.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
