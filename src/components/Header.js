import React from "react";

const Header = ({meta}) => {
  const {title, subTitle} = meta;
  return (
    <header className="App-header">
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </header>
  );
};

export default Header;
