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
      from: '2017',
      to: '2019',
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
      from: '2011',
      to: '2015',
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
