import Header from "./components/header";
import Body from "./components/body";
import cvContext from "./context/general-context";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [exprience, setExprience] = useState([
    {
      id: uuid(),
      role: "developer",
      company: "soluteo",
      from: new Date(2005, 11, 17),
      to: new Date(2010, 11, 17),
      location: "france",
      details: "",
      stack: ["react", "redux", "tailwind"],
    },
  ]);
  const [education, setEducation] = useState([
    {
      id: uuid(),
      field: "computer science",
      univercity: "strasbourg",
      from: new Date(2005, 11, 17),
      to: new Date(2010, 11, 17),
      location: "france",
    },
  ]);
  const [skills, setSkills] = useState([]);

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
        setSkills,
      }}
    >
      <Header />
      <Body />
    </cvContext.Provider>
  );
}

export default App;
