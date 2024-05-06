import { useEffect, useState } from "react";
import "./App.css";
import { TableComponent } from "./components";
import { USER_COLUMN_DATA } from "./constant/user";

function App() {
  const [tableData, setTableData] = useState(['']);
  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        queryData: {
          STATE_CODE: "FL",
        },
        pageData: {
          page: 2,
          count: 10,
        },
      }),
    });

    const data = await response.json();
    setTableData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <TableComponent cols={USER_COLUMN_DATA} data={tableData}/>
    </>
  );
}

export default App;
