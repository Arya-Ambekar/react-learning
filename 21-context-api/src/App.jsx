import React from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Button from "./components/Button";

const App = () => {
  // const [theme, setTheme] = useState("light");

  return (
    <div>
      <Navbar>
        {/* this shows us example of child as props */}
        <h2>This is a Navbar</h2>
        <h2>This is also a Navbar</h2>
      </Navbar>
      <Button />
    </div>
  );
};

export default App;
