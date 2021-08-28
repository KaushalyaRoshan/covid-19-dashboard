import { Statistic } from "antd";
import { LineChartOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import "./TopCard.css";

const TopCard = ({ title, value }) => {
  return (
    <div className="topCard">
      <Row align="middle" justify="center">
        <Col>
          <LineChartOutlined
            style={{
              color: "red",
              fontSize: "40px",
              paddingRight: "30px",
            }}
          />
        </Col>
        <Col>
          <Statistic title={title} value={value} />
        </Col>
      </Row>
    </div>
  );
};

export default TopCard;
