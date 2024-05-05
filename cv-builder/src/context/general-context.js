import { createContext } from "react";

const cvContext = createContext({
    name: '',
    setName: () => { },
    email: '',
    setEmail: () => { },
    address: '',
    setAddress: () => { },
    exprience: [],
    setExprience: () => { },
    education: [],
    setEducation: () => { },
    skills: [],
    setSkills: () => { },
    
});

export default cvContext;