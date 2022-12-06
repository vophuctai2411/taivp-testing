import "./info.css";
import infoBanner from "../../asssets/infoBanner.png";
import Button from "../../components/Button/Button";
import CustomizedCard from "../../components/Card";
import { Col, Row } from "antd";
import mockInfoData from "../../constants/mockdata";

function InfoSection({ infoSection }) {
  const renderData = /* mockInfoData */ infoSection?.cardArr?.map((item) => (
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
          <h1>{infoSection?.title}</h1>
          <img src={infoBanner} />

          <p className="welcome_sentence">
            {infoSection?.description}
            {/* Aplikasi Bantu warga merupakan aplikasi berbasis mobile dengan
            konsep kesehatan yang berkaitan dengan keadaan covid sekarang */}
          </p>
        </div>
      </div>

      <div className="site-card-wrapper">
        <Row /* gutter={16} */ className="cardList">{renderData}</Row>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button content=/* "Load more" */ {infoSection?.buttonContent} />
      </div>
    </>
  );
}

export default InfoSection;
