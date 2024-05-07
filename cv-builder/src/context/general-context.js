import { createContext } from "react";

const cvContext = createContext({
    name: '',
    setName: () => { },
    email: '',
    setEmail: () => { },
    linkedin: '',
    setLinkedin: () => { },
    about: '',
    setAbout: () => { },
    exprience: [],
    setExprience: () => { },
    education: [],
    setEducation: () => { },
    skills: [],
    setSkills: () => { },
    projects: [],
    setProjects: () => { }
});

export default cvContext;