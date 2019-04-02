import React from "react";

const Logo = ({path, alt}) => {
  return (
    <div className="App-logo__container">
      <img src={path} alt="alt" />
    </div>
  );
};

export default Logo;
