import React from "react";

const Navbar = (props) => {
  // setting / sending data from child to parent
  function changeTheme() {
    console.log(props.theme);
    props.setTheme("Dark");
  }

  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default Navbar;
