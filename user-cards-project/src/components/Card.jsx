import Icon from "@mdi/react";
import { mdiDomain } from "@mdi/js";

const Card = (props) => {
  function handleClick(myLink) {
    window.location.href = myLink;
  }

  return (
    <div className="card">
      <div className="topPart">
        <div className="top">
          <h6 className="status">{props.status}</h6>
          <h5 className="pay">{props.pay}</h5>
        </div>
        <div className="center" style={{ gap: 7 }}>
          <img src={props.img} alt="User" />
          <br />
          <h3 className="name">{props.name}</h3>
          <p className="post">{props.post}</p>
          <div className="company">
            <Icon
              path={mdiDomain}
              title="User Profile"
              size={0.5}
              horizontal
              vertical
              rotate={180}
              color="#0dea92"
            />
            <h6>{props.organization}</h6>
          </div>
          <div className="skills" style={{ gap: 7 }}>
            <h6>{props.skill1}</h6>
            <h6>{props.skill2}</h6>
            <h6>{props.skill3}</h6>
            <h6 style={{ backgroundColor: "cornflowerblue", color: "white" }}>
              {props.skill4}
            </h6>
          </div>
          <p>{props.intro}</p>
        </div>
      </div>
      <div
        className="bottom"
        onClick={() => {
          handleClick("https://www.google.com/");
        }}
      >
        <div>View Profile</div>
      </div>
    </div>
  );
};

export default Card;
