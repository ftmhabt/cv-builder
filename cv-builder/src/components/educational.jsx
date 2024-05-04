import { useContext,useState } from "react";
import cvContext from "../context/general-context";

export default function Educational() {
  const context =useContext(cvContext);
  const [name,setName]=useState('');
  const [year,setYear]=useState('');

  const sendData =()=>{
    context.setEducation([...context.education,{schoolname: name,schoolyear:year}]);
    console.log(context.education);
  }
  return (
    <form>
      <label htmlFor="name">School Name</label>
      <input
        type="text"
        id="name"
        value={context.name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="year">Name of School</label>
      <input
        type="text"
        id="year"
        value={context.year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={(e)=>{sendData(); e.preventDefault();}}>Apply</button>
    </form>
  );
}
