const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <h6 className="status">available</h6>
          <h4 className="pay">$45/hr</h4>
        </div>
        <div className="center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqEedXColwz0-21guI-9ZRnPNdQGPl6DylRA&s"
            alt="User"
          />
          <h3 className="name">Lina</h3>
          <p className="post">UI/UX Designer</p>
          <h5 className="company">Freelancer</h5>
          <div className="skills">
            <h5>UI</h5>
            <h5>UX</h5>
            <h5>Photoshop</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem!
          </p>
        </div>
        <div className="bottom">
          <div>View Profile</div>
        </div>
      </div>
    </div>
  );
};

export default App;
