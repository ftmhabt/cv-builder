import { useContext } from "react";
import { cvContext } from "../context/cv-context";

export default function MyComponent() {
    // ...
    const { cvData } = useContext(cvContext);
    // ...

    return(
        <div>hello {cvData.name}</div>
    )
  }