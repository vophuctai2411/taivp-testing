import "./welcome.css";
import { Row, Col } from "antd";
import Phone from "../../asssets/Phone.png";
import Welcome from "../../asssets/Welcome.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Input } from "antd";
import Button from "../../components/Button/Button";

function WelcomeSection() {
  return (
    <Row className="welcome-background">
      <Col span={12} className="welcome_left">
        <div>
          <img src={Welcome} />
        </div>
        <p className="welcome_sentence">
          Aplikasi Bantu warga merupakan aplikasi berbasis mobile dengan konsep
          kesehatan yang berkaitan dengan keadaan covid sekarang
        </p>
        <Input
          placeholder="Enter your username"
          //prefix={<UserOutlined className="site-form-item-icon" />}
          suffix={
            <Button>
              <ArrowRightOutlined style={{ color: "white" }} />
            </Button>
          }
          // width={405}
          height={56}
          style={{ width: "50%" }}
        />
      </Col>
      <Col span={12} className="phoneImg">
        <img src={Phone} width="800" height="800" />
      </Col>
    </Row>
  );
}

export default WelcomeSection;
