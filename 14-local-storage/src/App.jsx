import React from "react";

const App = () => {
  // All local storage methods:
  // -------------------------------------
  // localStorage.clear()
  // localStorage.setItem("age", 20);
  // localStorage.removeItem("age");
  // const user = localStorage.getItem("user");
  // -------------------------------------
  // Storing object or array of objects in local storage:
  // -------------------------------------
  // const user = {
  //   username: "Arya",
  //   age: 43,
  //   city: "Ratnagiti",
  // };

  // localStorage.setItem("user", JSON.stringify(user)); // in local storeage we need to send value as string for storing
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(typeof user);
  console.log(user);
  // -------------------------------------
  return <div>App</div>;
};

export default App;
