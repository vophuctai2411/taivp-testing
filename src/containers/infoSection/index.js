import "./info.css";
import infoBanner from "../../asssets/infoBanner.png";
import Button from "../../components/Button/Button";
import CustomizedCard from "../../components/Card";
import { Col, Row } from "antd";
import mockInfoData from "../../constants/mockdata";

function InfoSection() {
  const renderData = mockInfoData.map((item) => (
    <div className="card-position">
      <Col span={8}>
        <CustomizedCard item={item} />
      </Col>
    </div>
  ));

  return (
    <>
      <div className="information">
        <div>
          <img src={infoBanner} />

          <p className="welcome_sentence">
            Aplikasi Bantu warga merupakan aplikasi berbasis mobile dengan
            konsep kesehatan yang berkaitan dengan keadaan covid sekarang
          </p>
        </div>
      </div>

      <div className="site-card-wrapper">
        <Row /* gutter={16} */ className="cardList">{renderData}</Row>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button content="Load more" />
      </div>
    </>
  );
}

export default InfoSection;
