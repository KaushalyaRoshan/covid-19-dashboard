import { Row, Col } from "antd";
import TopCard from "./TopCard";
import "./TopContainer.css";

const TopContainer = (props) => {
  return (
    <div className="topContainer">
      <h1>Local Cases</h1>
      <Row align="middle" justify="center">
        <Col align="middle" xs={24} sm={12} md={4} lg={4} xl={4}>
          <TopCard title="Local Total Cases" value={props.localtotalcases} />
        </Col>
        <Col align="middle" xs={24} sm={12} md={4} lg={4} xl={4}>
          <TopCard title="Local Total Deaths" value={props.localtotaldeaths} />
        </Col>

        <Col align="middle" xs={24} sm={12} md={4} lg={4} xl={4}>
          <TopCard title="Local New Cases" value={props.localnewcases} />
        </Col>

        <Col align="middle" xs={24} sm={12} md={4} lg={4} xl={4}>
          <TopCard title="Local New Deaths" value={props.localnewdeaths} />
        </Col>
      </Row>
    </div>
  );
};

export default TopContainer;
