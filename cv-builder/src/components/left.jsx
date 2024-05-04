import { useState } from "react";
import "./../styles/left.css";
import rightIcon from "./../assets/right.svg";
import General from "./general";
import Educational from "./educational";
import Professional from "./professional";


export default function Left() {
  const [selected, setSelected] = useState(0);
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
      {selected === 1 ? <Educational/> : ""}{" "}
      {selected === 2 ? <Professional/> : ""}{" "}
      </div>
    </div>
  );
}
