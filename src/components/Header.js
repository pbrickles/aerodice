import React from "react";
import {ReactComponent as Logo} from "../aerodice-icon.svg";

const Header = ({meta}) => {
  const {title, subTitle} = meta;
  return (
    <header className="App-header">
      <h1>{title}</h1>
      <Logo className="App-logo" />
      <p>{subTitle}</p>
    </header>
  );
};

export default Header;
