import { useState, useContext } from "react";
import "./../styles/left.css";
import rightIcon from "./../assets/right.svg";
import General from "./general";
import Educational from "./educational";
import Professional from "./professional";
import cvContext from "../context/general-context";
import { v4 as uuid } from "uuid";

export default function Left() {
  const [selected, setSelected] = useState(0);
  const context = useContext(cvContext);

  const AddEducation = () => {
    const newArray = [
      ...context.education,
      {
        id: uuid(),
        field: "",
        univercity: "",
        from: "",
        to: "",
        location: "",
      },
    ];
    context.setEducation(newArray);
  };

  const AddExprience = () => {
    const newArray = [
      ...context.exprience,
      {
        id: uuid(),
        role: "",
        company: "",
        from: "",
        to: "",
        location: "",
        details: "",
        stack: [],
      },
    ];
    context.setExprience(newArray);
  };
  return (
    <div className="forms">
      <div className="form-type">
        <div className="general-btn" onClick={() => setSelected(0)}>
          general information{" "}
          {selected === 0 ? <img src={rightIcon} alt="" /> : ""}{" "}
        </div>
        <div className="educational-btn" onClick={() => setSelected(1)}>
          educational experience{" "}
          {selected === 1 ? <img src={rightIcon} alt="" /> : ""}
        </div>
        <div className="practical-btn" onClick={() => setSelected(2)}>
          practical experience{" "}
          {selected === 2 ? <img src={rightIcon} alt="" /> : ""}
        </div>
      </div>
      <div className="form">
        {selected === 0 ? <General /> : ""}{" "}
        {selected === 1 ? (
          <div>
            <Educational />
            <button onClick={AddEducation}>+</button>
          </div>
        ) : (
          ""
        )}{" "}
        {selected === 2 ? (
          <div>
            <Professional />
            <button onClick={AddExprience}>+</button>
          </div>
        ) : (
          ""
        )}{" "}
      </div>
    </div>
  );
}
