import "./../styles/header.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { MyDocument } from "./pdf";
import { useContext } from "react";
import { cvContext } from "../context/cv-context";

export default function Header() {
  const context = useContext(cvContext);

  const handleSave = () => {
    localStorage.setItem("cv-data", JSON.stringify(context.cvData));
    alert('saved');
  };
  return (
    <header>
      <div className="logo">cv builder</div>
      <PDFDownloadLink
        document={<MyDocument context={context.cvData} />}
        fileName={"cv.pdf"}
        className="downloadBtn"
      >
        download
      </PDFDownloadLink>
      <button className="downloadBtn" onClick={handleSave}>save</button>
    </header>
  );
}
