import Header from "./components/header";
import Body from "./components/body";
import cvContext from "./context/general-context";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [about, setAbout] = useState("");
  const [exprience, setExprience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

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
        projects,
        setProjects
      }}
    >
      <Header />
      <Body />
    </cvContext.Provider>
  );
}

export default App;
