// Demo of useState hook:

// import React from "react";
// import { useState } from "react";

// const App = () => {
//   const [a, setA] = useState(20);
//   const [user, setUser] = useState("Arya");

//   return (
//     <div>
//       <h1 style={{ color: "#fff" }}>Value of a is: {a}</h1>
//       <h1 style={{ color: "#fff" }}>User is: {user}</h1>
//       <br />
//       <button
//         onClick={() => {
//           setA(30);
//           setUser("Om");
//         }}
//       >
//         Change value
//       </button>
//     </div>
//   );
// };

// export default App;

// ----------------------------------------------------------------------

// simple counter project using useState

import React from "react";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  function increaseNum() {
    setNum(num + 1);
  }

  function decreaseNum() {
    setNum(num - 1);
  }

  function squareNum() {
    setNum(num * num);
  }

  function jump5Num() {
    setNum(num + 5);
  }

  return (
    <div>
      <h1>Counter is: {num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={squareNum}>Square</button>
      <button onClick={jump5Num}>Jump by 5</button>
    </div>
  );
};

export default App;
