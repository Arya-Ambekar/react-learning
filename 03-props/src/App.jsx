import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Arya"
        age={18}
        imageLink="https://images.unsplash.com/photo-1636412669967-1411f6487176?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdoaXRlJTIwbGlseXxlbnwwfHwwfHx8MA%3D%3D"
      />
      <Card
        user="Om"
        age={20}
        imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWuKgnIzUKYZtKTcJkYioDvzpPirZ30He8_g&s"
      />
    </div>
  );
};

export default App;
