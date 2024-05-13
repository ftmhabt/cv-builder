import "./../styles/header.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { MyDocument } from "./pdf";

export default function Header() {
  return (
    <header>
      <div className="logo">cv builder</div>
      <PDFDownloadLink
        document={<MyDocument />}
        fileName={"cv.pdf"}
        className="downloadBtn"
      ></PDFDownloadLink>
      <button className="shareBtn">share</button>
    </header>
  );
}
