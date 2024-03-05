import { useState } from "react";

export default function Handler({children}){
    const [childrens, setChildrens] = useState([]);

  const addChild = () => {
    setChildrens(prevChildren => [...prevChildren, children]);
  };
  
    return(
        <div>
            {childrens}
            <button onClick={addChild}>add</button>
        </div>
    )
}