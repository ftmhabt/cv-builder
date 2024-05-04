import Header from "./components/header";
import Body from "./components/body";
import cvContext from "./context/general-context";
import soloContext from "./context/education-context";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [exprience, setExprience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);

  const [eduName,setEduName]=useState('');
  const [eduDate,setEduDate]=useState('');
  const [eduNumbers,setEduNumbers]=useState(1);
  return (
    <cvContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        address,
        setAddress,
        exprience,
        setExprience,
        education,
        setEducation,
        skills,
        setSkills
      }}
    >
      <soloContext.Provider value={{eduName,setEduName,eduDate,setEduDate,eduNumbers,setEduNumbers}}>
      <Header />
      <Body />
      </soloContext.Provider>
    </cvContext.Provider>
  );
}

export default App;
