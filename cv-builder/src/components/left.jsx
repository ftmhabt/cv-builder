import { useState } from "react";
import rightIcon from "./../assets/right.svg";
import General from "./general";
import Educational from "./educational";
import Professional from "./professional";


export default function Left({ data, onChange }) {
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
      {selected === 0 ? <General data={data} onChange={onChange} /> : ""}{" "}
      {selected === 1 ? <Educational data={data} onChange={onChange}/> : ""}{" "}
      {selected === 2 ? <Professional data={data} onChange={onChange}/> : ""}{" "}
      </div>
    </div>
  );
}
