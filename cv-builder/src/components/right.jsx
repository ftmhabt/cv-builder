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
              <div>{item.from}</div>
              <div>{item.to}</div>
              <div>{item.location}</div>
            </div>
          ))}
        </div>
        <div className="profession">
          <h3>Work Exprience</h3>
          {context.exprience.map((item) => (
            <div key={item.id}>
              <div>{item.role}</div>
              <div>{item.company}</div>
              <div>{item.from}</div>
              <div>{item.to}</div>
              <div>{item.location}</div>
              <div>{item.details}</div>
              <div>{item.stack.map((item,index)=>(
                <div key={index}>{item}</div>
              ))}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
