import "./download.css";
import DownloadPeople from "../../asssets/DownloadPeople.png";
import Button from "../../components/Button/Button";
import CustomizedCard from "../../components/Card";
import { Col, Row } from "antd";

function DownloadSection() {
  return (
    <>
      <div className="download_section">
        <img src={DownloadPeople} />

        <div style={{ alignSelf: "center" }}>
          <p className="downloadText">Download now</p>
          <p>
            Aplikasi Bantu warga merupakan aplikasi berbasis mobile dengan
            konsep kesehatan yang berkaitan dengan keadaan covid sekarang
          </p>
        </div>
      </div>
    </>
  );
}

export default DownloadSection;
