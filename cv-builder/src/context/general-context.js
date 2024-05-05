import { createContext } from "react";
import { v4 as uuid } from "uuid";

const cvContext = createContext({
    name: '',
    setName: () => { },
    email: '',
    setEmail: () => { },
    address: '',
    setAddress: () => { },
    exprience: [
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
      ],
    setExprience: () => { },
    education: [
        {
            id: uuid(),
            field: "computer science",
            univercity: "strasbourg",
            from: new Date(2005, 11, 17),
            to: new Date(2010, 11, 17),
            location: "france",
          },
      ],
    setEducation: () => { },
    skills: [],
    setSkills: () => { },
    
});

export default cvContext;