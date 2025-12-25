import React from "react";

const App = () => {
  const btnClicked = () => {
    console.log("button clicked!");
  };

  const inputChanging = (value) => {
    console.log("changed input: ", value);
  };

  function pageScrolling(ele) {
    if (ele > 0) {
      console.log("Seedha scrolling");
    } else {
      console.log("Ulta scrolling");
    }
  }

  return (
    // <div>
    //   <button onClick={btnClicked}>Change User</button>
    //   <button
    //     onClick={function () {
    //       console.log("2nd button clicked");
    //     }}
    //   >
    //     Click here
    //   </button>

    //   <input
    //     onChange={(ele) => {
    //       // this is giving us info about the event that just occured - onChange (in this case)
    //       // console.log(ele);
    //       // console.log("value: ", ele.target.value);
    //       inputChanging(ele.target.value);
    //     }}
    //     type="text"
    //     placeholder="Enter Name"
    //   />
    // </div>

    <div
      onWheel={(ele) => {
        pageScrolling(ele.deltaY);
      }}
    >
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  );
};

export default App;
