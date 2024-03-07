import { useState } from "react";

export default function Professional({ data, onChange }) {
  const[toRender,setToRender]=useState(true);

  function removeSelf(e){
    e.preventDefault(); 
    setToRender(!toRender);
  }
  
  return (
    toRender?
    <form>
      <label htmlFor="companyName">Company Name</label>
      <input
        type="text"
        id="companyName"
        onChange={(e) => onChange("companyName", e.target.value)}
      />
      <label htmlFor="positionTitle">Position Title</label>
      <input
        type="text"
        id="positionTitle"
        onChange={(e) => onChange("positionTitle", e.target.value)}
      />
      <label htmlFor="mainResponsibilities">Main Responsibilities</label>
      <textarea
        name="mainResponsibilities"
        id="mainResponsibilities"
        onChange={(e) => onChange("mainResponsibilities", e.target.value)}
        cols="30"
        rows="10"
      >
      </textarea>
      <label htmlFor="from">From:</label>
      <input
        type="date"
        name="from"
        id="from"
        onChange={(e) => onChange("from", e.target.value)}
      />
      <label htmlFor="until">Until:</label>
      <input
        type="date"
        name="until"
        id="until"
        onChange={(e) => onChange("until", e.target.value)}
      />
      <button onClick={removeSelf}>remove</button>
    </form>:<></>
  );
}
