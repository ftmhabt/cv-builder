import Header from "./components/header";
import Body from "./components/body";
import cvContext from "./context/general-context";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [name, setName] = useState("fatemeh abtahi");
  const [email, setEmail] = useState("ftmh.a78@gmail.com");
  const [linkedin, setLinkedin] = useState("");
  const [about, setAbout] = useState("");
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
        linkedin,
        setLinkedin,
        about,
        setAbout,
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
