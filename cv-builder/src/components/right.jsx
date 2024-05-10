import "./../styles/right.css";
import PreviewGeneral from "./preview-general";
import PreviewExprience from "./preview-exprience";
import PreviewProject from "./preview-project";
import PreviewEducation from "./preview-education";

export default function Right() {
  return (
    <div className="cv">
      <div className="paper">
        <PreviewGeneral />
        <PreviewExprience />
        <PreviewProject />
        <PreviewEducation />
      </div>
    </div>
  );
}
