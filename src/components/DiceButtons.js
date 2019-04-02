import React, {useState, useEffect} from "react";
import {useStateValue} from "../state/StateProvider";
import {rollDice} from "../helpers/rollDice";

const DiceButtons = () => {
  const [{results, inBrew, diceAnimating}, dispatch] = useStateValue();
  const [showBrewButton, setShowBrewButton] = useState(false);
  const [showRollButton, setShowRollButton] = useState(false);

  useEffect(() => {
    if (!inBrew && results.results && !diceAnimating) {
      setShowBrewButton(true);
    } else {
      setShowBrewButton(false);
    }
    if (!diceAnimating) {
      setShowRollButton(true);
    } else {
      setShowRollButton(false);
    }
  }, [diceAnimating]);
  return (
    <div className="Dice-button-container">
      {showBrewButton && (
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
      {inBrew && (
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
      {!inBrew && showRollButton && (
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
            }, 1500);
          }}
        >
          {results.results ? "Roll Again" : "Roll Dice"}
        </button>
      )}
    </div>
  );
};

export default DiceButtons;
