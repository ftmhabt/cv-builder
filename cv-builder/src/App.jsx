import Header from "./components/header";
import Body from "./components/body";
import cvContext from "./context/general-context";
import { useState } from "react";

function App() {
  const [name, setName] = useState("fatemeh abtahi");
  const [email, setEmail] = useState("ftmh.a78@gmail.com");
  const [linkedin, setLinkedin] = useState(
    "https://www.linkedin.com/in/fatemeh-abtahi/"
  );
  const [about, setAbout] = useState(
    "Et enim pariatur et incidunt consequuntur eos facilis atque aut perferendis consectetur sit voluptatem amet ut facere explicabo est totam perspiciatis. Est fuga nulla ut asperiores unde a accusamus magnam aut vitae nesciunt et blanditiis earum ea provident internos. Est esse provident sit eaque illum et dolores sunt At quisquam facere? Eos sunt laboriosam eum fuga officia id odio enim non minima vitae sed sunt ullam non internos laborum."
  );
  const [exprience, setExprience] = useState([
    {
      id: 1,
      role: "C# Programmer",
      company: "Safir Institute",
      from: "2021",
      to: "2022",
      location: "Iran/Qom",
      details:
        "Et enim pariatur et incidunt consequuntur eos facilis atque aut perferendis consectetur sit voluptatem amet ut facere explicabo est totam perspiciatis. Est fuga nulla ut asperiores unde a accusamus magnam aut vitae nesciunt et blanditiis earum ea provident internos. Est esse provident sit eaque illum et dolores sunt At quisquam facere? Eos sunt laboriosam eum fuga officia id odio enim non minima vitae sed sunt ullam non internos laborum.",
      stack: ["C#", "Unity"],
    },
  ]);
  const [education, setEducation] = useState([
    {
      id: 1,
      field: "Software Engineering",
      univercity: "Qom Technical University",
      from: "2017",
      to: "2021",
      location: "Iran/Qom",
    },
  ]);
  const [skills, setSkills] = useState([
    { id: 1, name: "React" },
    { id: 2, name: "Tailwind" },
    { id: 3, name: "ES6" },
  ]);
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "E-Commerce",
      demo: "https://the-unraveled-shop.vercel.app/",
      github: "https://github.com/ftmhabt/unraveled-shop",
      details:
        "Et enim pariatur et incidunt consequuntur eos facilis atque aut perferendis consectetur sit voluptatem amet ut facere explicabo est totam perspiciatis. Est fuga nulla ut asperiores unde a accusamus magnam aut vitae nesciunt et blanditiis earum ea provident internos. Est esse provident sit eaque illum et dolores sunt At quisquam facere? Eos sunt laboriosam eum fuga officia id odio enim non minima vitae sed sunt ullam non internos laborum.",
      stack: ["React", "Tailwind", "Context API", "React Router"],
    },
  ]);

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
        setProjects,
      }}
    >
      <Header />
      <Body />
    </cvContext.Provider>
  );
}

export default App;
