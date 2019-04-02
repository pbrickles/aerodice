import React from "react";
import classnames from "classnames";
import {diceOptions} from "../data/diceOptions";

import Die from "./Die";

const Dice = props => {
  const {results, animating, shrink} = props;
  return (
    <>
      {results.results && (
        <ul className={classnames(["App-dice", shrink ? "App-dice--shrink" : undefined])}>
          {results.results.map((result, i) => {
            const faces = diceOptions[i].results.filter(face => {
              return face !== result.result;
            });
            return (
              <li key={i}>
                {!animating && !shrink && (
                  <span className="App-dice__type">{diceOptions[i].type}</span>
                )}
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
