import "./header.css";
import Logo from "../../asssets/Logo.png";
import Button from "../../components/Button/Button";
import { Row, Col } from "antd";

function Header({ header }) {
  return (
    <div className="header-background">
      <Row className="header-left">
        <Col span={8}>
          <img src={Logo} />
        </Col>
        <Col span={16} style={{ alignSelf: "center" }}>
          <div className="listNavigation">
            {header?.navigateArr.map((i) => (
              <div>{i}</div>
            ))}
            {/*  <div>Home</div>
            <div>Pricing</div>
            <div>About</div>
            <div>Contact</div> */}
          </div>
        </Col>
      </Row>
      <Button content={header?.buttonContent} /* "See Demo" */ />
    </div>
  );
}

export default Header;
