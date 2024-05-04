import { useContext,useState } from "react";
import cvContext from "../context/general-context";

export default function Professional() {
  const context =useContext(cvContext);
  const [name,setName]=useState('');
  const [year,setYear]=useState('');

  const sendData =()=>{
    context.setExprience([...context.exprience,{exname: name,exyear:year}])
  }
  return (
    <form>
      <label htmlFor="name">company Name</label>
      <input
        type="text"
        id="name"
        value={context.name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="year">year</label>
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
