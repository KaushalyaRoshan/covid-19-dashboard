import { Table } from "antd";

const TableTemplate = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
      <Table columns={props.columns} dataSource={props.data} />
    </div>
  );
};

export default TableTemplate;
