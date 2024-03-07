import { useState } from "react";
import "./../styles/left.css";
import rightIcon from "./../assets/right.svg";
import General from "./general";
import Educational from "./educational";
import Professional from "./professional";
import Handler from "./handler";


export default function Left({ data, onChange }) {
  const [selected, setSelected] = useState(0);
  const [counts, setCounts] = useState({});

  const addHandler = (id) =>
    setCounts((counts) => ({
      ...counts,
      [id]: (counts[id] ?? 0) + 1
    }));

  return (
    <div className="forms">
      {console.table(counts)}
      <div className="form-type">
        <div className="general-btn" onClick={() => setSelected(0)}>
          general information
          {selected === 0 && <img src={rightIcon} alt="" />}
        </div>
        <div className="educational-btn" onClick={() => setSelected(1)}>
          educational experience
          {selected === 1 && <img src={rightIcon} alt="" />}
        </div>
        <div className="practical-btn" onClick={() => setSelected(2)}>
          practical experience
          {selected === 2 && <img src={rightIcon} alt="" />}
        </div>
      </div>
      <div className="form">
        {selected === 0 && <General data={data} onChange={onChange} />}
        {selected === 1 && (
          <Handler count={counts[1]} onAdd={() => addHandler(1)}>
            <Educational data={data} onChange={onChange} />
          </Handler>
        )}
        {selected === 2 && (
          <Handler count={counts[2]} onAdd={() => addHandler(2)}>
            <Professional data={data} onChange={onChange} />
          </Handler>
        )}
      </div>
    </div>
  );
}
