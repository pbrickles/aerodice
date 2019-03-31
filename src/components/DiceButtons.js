import React from "react";
import {useStateValue} from "../state/StateProvider";
import {rollDice} from "../data/diceOptions";

const DiceButtons = () => {
  const [{results, inBrew}, dispatch] = useStateValue();
  return (
    <div className="Dice-button-container">
      {!inBrew && results.length > 0 && (
        <button
          className="App-button"
          onClick={() =>
            dispatch({
              type: "setBrewStatus",
              inBrew: !inBrew,
            })
          }
        >
          Start Brew
        </button>
      )}
      {inBrew && results.length > 0 && (
        <button
          className="App-button"
          onClick={() =>
            dispatch({
              type: "setBrewStatus",
              inBrew: !inBrew,
            })
          }
        >
          Stop Brew
        </button>
      )}
      {!inBrew && (
        <button
          className="App-button"
          onClick={() => {
            dispatch({
              type: "rollDice",
              newResults: rollDice(),
            });
            setTimeout(() => {
              dispatch({
                type: "stopRollingDice",
                animationStatus: false,
              });
            }, 1400);
          }}
        >
          {results.length > 0 ? "Roll Again" : "Roll Dice"}
        </button>
      )}
    </div>
  );
};

export default DiceButtons;
