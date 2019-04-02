import React from "react";

const Footer = () => {
  return (
    <footer className="App-footer">
      <p>
        Make by{" "}
        <a
          href="https://github.com/pbrickles"
          target="_blank"
          rel="noopener noreferrer"
          className="App-link"
        >
          PB
        </a>
      </p>
      <p>
        Inspired by{" "}
        <a
          href="https://jimseven.com/2017/12/06/coffee-brewing-dice/"
          target="_blank"
          rel="noopener noreferrer"
          className="App-link"
        >
          James Hoffman's awesome Aeropress brewing dice
        </a>
      </p>
    </footer>
  );
};

export default Footer;
