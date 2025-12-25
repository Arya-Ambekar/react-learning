import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div
      id="right"
      className="h-full w-2/3 p-6 flex flex-none gap-10 overflow-x-auto rounded-4xl"
    >
      {props.users.map((ele, idx) => {
        return (
          <RightCard
            key={idx}
            img={ele.img}
            intro={ele.intro}
            tag={ele.tag}
            id={idx}
            color={ele.color}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
