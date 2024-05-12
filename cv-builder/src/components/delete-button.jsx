import { useContext } from "react";
import cvContext from "../context/general-context";

export default function DeleteButton({ arrayName, id, type = "form" }) {
  const context = useContext(cvContext);

  const handleDelete = () => {
    switch (arrayName) {
      case "education":
        context.setEducation(
          context[arrayName].filter((item) => item.id !== id)
        );
        break;
      case "exprience":
        context.setExprience(
          context[arrayName].filter((item) => item.id !== id)
        );
        break;
      case "projects":
        context.setProjects(
          context[arrayName].filter((item) => item.id !== id)
        );
        break;
      case "skills":
        context.setSkills(
          context[arrayName].filter((item) => item.id !== id)
        );
        break;
      default:
        console.error("array name doesnt exist!");
        break;
    }
  };

  return (
    <button
      className="form-btn small"
      onClick={(e) => {
        handleDelete();
        e.preventDefault();
      }}
    >
      delete
      {type === "form" ? " form" : ""}
    </button>
  );
}
