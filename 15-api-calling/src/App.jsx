import React from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    // API fetching using fetch:
    // --------------------------------------
    // const response = await fetch(
    //   "https://jsonplaceholder.typicode.com/todos/1"
    // );
    // const data = await response.json();
    // console.log(data);
    // --------------------------------------
    // API fetching using axios:
    // --------------------------------------

    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div style={{ color: "white" }}>
        {data.map(function (ele, idx) {
          console.log(ele);
          return (
            <h3>
              {ele.author}, {idx}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default App;
