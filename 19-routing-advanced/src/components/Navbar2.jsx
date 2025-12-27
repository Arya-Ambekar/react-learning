import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();

  return (
    <div className=" px-5 bg-cyan-800">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-amber-700 px-5 py-2 rounded m-6 cursor-pointer active:scale-95 font-medium"
      >
        Return to Home page
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-amber-700 px-5 py-2 rounded m-6 cursor-pointer active:scale-95 font-medium"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-amber-700 px-5 py-2 rounded m-6 cursor-pointer active:scale-95 font-medium"
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
