import { cloneElement, useState } from "react";
import { nanoid } from "nanoid";

export default function Handler({ children, count, onAdd }) {
  const [childrens, setChildrens] = useState(
    Array.from({ length: count }, () =>
      cloneElement(children, { key: nanoid() })
    )
  );

  const addChild = () => {
    onAdd();
    setChildrens((prevChildren) => [
      ...prevChildren,
      cloneElement(children, { key: nanoid() })
    ]);
  };

  return (
    <div>
      {childrens}
      <button onClick={addChild}>add</button>
    </div>
  );
}