import React from "react";
import {diceOptions} from "../data/diceOptions";

import Die from "./Die";

const Dice = props => {
  const {results} = props;
  return (
    <>
      {results && (
        <ul className="App-dice">
          {results.map((result, i) => {
            const faces = diceOptions[i].results.filter(face => {
              return face !== result.result;
            });
            return (
              <li key={i}>
                <span className="App-dice__type">{diceOptions[i].type}</span>
                <Die result={result.result} faces={faces} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Dice;
