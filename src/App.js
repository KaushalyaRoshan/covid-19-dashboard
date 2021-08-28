import "./App.css";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import { Spin } from "antd";
import axios from "axios";

import TopContainer from "./components/TopContainer";
import TableData from "./components/TableData";
import Footer from "./components/Footer";

const apiUrl = "https://hpb.health.gov.lk/api/get-current-statistical";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => setData(response.data.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {Object.keys(data).length === 0 ? (
        <Spin size="large" />
      ) : (
        <div>
          <TopContainer
            localtotalcases={data.local_total_cases}
            localtotaldeaths={data.local_deaths}
            localnewdeaths={data.local_new_deaths}
            localnewcases={data.local_new_cases}
          />

          <TableData
            pcrDataSource={data.daily_pcr_testing_data}
            antigenDataSource={data.daily_antigen_testing_data}
          />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
