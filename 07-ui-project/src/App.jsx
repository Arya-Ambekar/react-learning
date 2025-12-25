import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, hic. Suscipit, quae! Explicabo, cumque in! Laborum, veritatis",
      tag: "Satisfied",
      color: "royalblue",
    },
    {
      img: "https://images.pexels.com/photos/5586304/pexels-photo-5586304.jpeg",
      intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, hic. Suscipit, quae! Explicabo, cumque in! Laborum, veritatis",
      tag: "Underserved",
      color: "blueviolet",
    },
    {
      img: "https://images.pexels.com/photos/5292192/pexels-photo-5292192.jpeg",
      intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, hic. Suscipit, quae! Explicabo, cumque in! Laborum, veritatis",
      tag: "Underbanked",
      color: "teal",
    },
    {
      img: "https://images.pexels.com/photos/4339912/pexels-photo-4339912.jpeg",
      intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, hic. Suscipit, quae! Explicabo, cumque in! Laborum, veritatis",
      tag: "Undermined",
      color: "coral",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
