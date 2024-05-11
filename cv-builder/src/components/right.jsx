import "./../styles/right.css";
import PreviewGeneral from "./preview/preview-general";
import PreviewExprience from "./preview/preview-exprience";
import PreviewProject from "./preview/preview-project";
import PreviewEducation from "./preview/preview-education";
import PreviewSkills from "./preview/preview-skills";

export default function Right() {
  return (
    <div className="cv">
      <div className="paper">
        <PreviewGeneral />
        <PreviewExprience />
        <PreviewProject />
        <PreviewEducation />
        <PreviewSkills />
      </div>
    </div>
  );
}
