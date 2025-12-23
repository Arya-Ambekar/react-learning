import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <img src={props.imageLink} alt="" />
      <h1>
        {props.user}, {props.age}
      </h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et?</p>
      <button>View Profile</button>
    </div>
  );
};

export default Card;
