import React from "react";
import Nav2 from "./Nav2";
import { useContext } from "react";
import { ThemeDataContext } from "../Context/ThemeContext";

const Navbar = () => {
  //   console.log(props.children[0]);
  //   const data = useContext(ThemeDataContext);
  //   console.log(data);
  const [theme, setTheme] = useContext(ThemeDataContext);
  return (
    <div className={theme}>
      <h2>Navbar</h2>
      {/* this shows us example of child as props. This can be used for context API for wrapping*/}
      {/* {props.children[0]}
      {props.children[1]} */}
      {/* <h3>{data[0]}</h3> */}
      <Nav2 />
    </div>
  );
};

export default Navbar;
