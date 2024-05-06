import { createContext } from "react";

const cvContext = createContext({
    name: '',
    setName: () => { },
    email: '',
    setEmail: () => { },
    linkedin: '',
    setLinkedin: () => { },
    exprience: [],
    setExprience: () => { },
    education: [],
    setEducation: () => { },
    skills: [],
    setSkills: () => { },
    
});

export default cvContext;