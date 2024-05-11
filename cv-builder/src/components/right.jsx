import "./../styles/right.css";
import PreviewGeneral from "./preview/preview-general";
import PreviewExprience from "./preview/preview-exprience";
import PreviewProject from "./preview/preview-project";
import PreviewEducation from "./preview/preview-education";

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
