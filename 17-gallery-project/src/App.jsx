import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  async function getData() {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=30`
    );
    setUserData(response.data);
    console.log(userData);
  }

  useEffect(
    function () {
      getData();
    },
    [index]
  );

  let printUserData = (
    <h3 className="text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
      Loading...
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map((ele, idx) => {
      return (
        <div key={idx}>
          <Card ele={ele} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      <div className="flex flex-wrap gap-5 p-2">{printUserData}</div>
      <div className="flex justify-center gap-6 items-center p-4">
        <button
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
        >
          Prev
        </button>
        <h4>Page {index}</h4>
        <button
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
