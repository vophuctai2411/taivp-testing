import { Card } from "antd";
import "./customizedcard.css";

function CustomizedCard({ item }) {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <div className="cardbackground">
          <img alt="example" src={item.imgURL} className="imgCard" />
          <h3>{item?.title}</h3>
          <p>{item?.description}</p>
        </div>
      }
    ></Card>
  );
}
export default CustomizedCard;
