import { Row, Col } from "antd";
import "./css/TableData.css";
import TableTemplate from "./TableTemplate";

const TableData = (props) => {
  const pcrTable = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "PCR Count",
      dataIndex: "pcr_count",
      key: "pcr_count",
    },
  ];
  const antigenTable = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Antigen Count",
      dataIndex: "antigen_count",
      key: "antigen_count",
    },
  ];

  const pcrData = props.pcrDataSource;
  const antigenData = props.antigenDataSource;

  return (
    <div className="dataTables">
      <Row align="middle" justify="center">
        <Col className="table" xs={24} sm={24} md={24} lg={10} xl={10}>
          <TableTemplate header="PCR Data" columns={pcrTable} data={pcrData} />
        </Col>
        <Col className="table" xs={24} sm={24} md={24} lg={10} xl={10}>
          <TableTemplate
            header="Antigen Data"
            columns={antigenTable}
            data={antigenData}
          />
        </Col>
      </Row>
    </div>
  );
};

export default TableData;
