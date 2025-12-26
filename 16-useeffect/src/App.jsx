import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100);

  // This is one use - mounting
  // useEffect(() => {
  //   console.log("useEffect is running.....");
  // }, [num]);

  const numChanging = () => {
    console.log("num is changing .....");
  };
  const num2Changing = () => {
    console.log("num2 is changing .....");
  };

  // In this case, I want to run the numChanging function whenever the state of num changes.
  useEffect(
    function () {
      numChanging();
    },
    [num]
  );

  // In this case, I want to run the num2Changing function whenever the state of num2 changes.
  useEffect(
    function () {
      num2Changing();
    },
    [num2]
  );

  return (
    <div>
      <div>Value of Num is {num}</div>
      <div>Value of Num2 is {num2}</div>
      <button
        style={{ color: "black" }}
        onClick={() => {
          setNum(num + 1);
        }}
      >
        increase Num
      </button>
      <br />
      <button
        style={{ color: "black" }}
        onClick={() => {
          setNum2(num2 + 10);
        }}
      >
        increase num2
      </button>
    </div>
  );
};

export default App;
