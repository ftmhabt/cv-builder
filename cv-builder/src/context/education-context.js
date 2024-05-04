import { createContext } from "react";

const soloContext = createContext({
    eduName:'',
    setEduName:()=>{},
    eduDate:'',
    setEduDate:()=>{},
    eduNumbers:1,
    setEduNumbers:()=>{}
});

export default soloContext;