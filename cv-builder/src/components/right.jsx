import { useContext } from "react";
import cvContext from "../context/general-context";
import "./../styles/right.css";

export default function Right() {
  const context = useContext(cvContext);
  let [first, last] = context.name.split(" ");
  return (
    <div className="cv">
      <div className="paper">
        <div className="header">
          <div className="name">
            <div className="first">{first}</div>
            <div className="last">{last}</div>
          </div>
          <div className="info">
            <div className="email">{context.email}</div>
          </div>
          <div className="info">
            <div className="address">{context.address}</div>
          </div>
        </div>
        <div className="education">
          <h3>Education</h3>
          {context.education.map((item) => (
            <div key={item.id}>
              <div>{item.field}</div>
              <div>{item.univercity}</div>
            </div>
          ))}
        </div>
        <div className="profession">
          <h3>Work Exprience</h3>
          {context.exprience?.map((exprience) => (
            <div key={exprience.id}>
              <div>{exprience.exname}</div>
              <div>{exprience.exyear}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
