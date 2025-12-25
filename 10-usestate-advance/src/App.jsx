import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(2);
  // const [user, setUser] = useState({ name: "Arya", age: 20 });
  // const [numArr, setNumArr] = useState([10, 20, 30]);

  const btnClicked = () => {
    // ---------------------------
    // example of simple integer:
    // ---------------------------
    // setNum(num + 10); // This setNum function runs asynchronously
    // setNum(num); // if we set same value which is initialized then react will not re-render the UI
    // if we want to update the values batchwise (batch update) like below then we face issue
    // setNum(num + 1);
    // setNum(num + 1);
    // setNum(num + 1);
    // the problem will be that the num will increase by only 1. This is because react is not able to identify the value of num.
    // we can solve this problem by doing:
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    // ---------------------------
    // example of object:
    // ---------------------------
    // const newUser = { ...user };
    // newUser.name = "Om";
    // newUser.age = newUser.age + 10;
    // setUser(newUser);
    // other way:
    // setUser((prev) => ({ ...prev, age: 50 }));
    // ---------------------------
    // example of array:
    // ---------------------------
    // const newNumArr = [...numArr];
    // newNumArr.push(55);
    // setNumArr(newNumArr);
  };

  return (
    <div>
      <h1>{num}</h1>
      {/* <h1>
        {user.name}, {user.age}
      </h1> */}
      {/* <h1>{numArr}</h1> */}
      <button onClick={btnClicked}>click</button>
    </div>
  );
};

export default App;
