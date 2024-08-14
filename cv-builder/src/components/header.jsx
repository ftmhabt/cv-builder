import "./../styles/header.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { MyDocument } from "./pdf";
import { useContext } from "react";
import { cvContext } from "../context/cv-context";

export default function Header() {
  const context = useContext(cvContext);


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
    </header>
  );
}
